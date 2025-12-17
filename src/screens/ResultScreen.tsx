import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ALL_FOODS } from '../../constants/foods';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import AdSense from '../../components/AdSense';
import { contentfulClient } from '../services/contentfulClient';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Helmet } from 'react-helmet-async';

// CLS 해결을 위한 스켈레톤 컴포넌트
const SkeletonBlock: React.FC<{ height: string; className?: string }> = ({ height, className = '' }) => (
  <div
    className={`w-full max-w-md mt-8 bg-slate-200 rounded-xl animate-pulse ${className}`}
    style={{ height }}
  />
);

// 관련 음식 추천 함수 (같은 태그 기반)
const getRelatedFoods = (currentFood: typeof ALL_FOODS[0] | null, count: number = 3) => {
  if (!currentFood) return [];

  return ALL_FOODS
    .filter(food => food.id !== currentFood.id)
    .filter(food => food.tags?.some(tag => currentFood.tags?.includes(tag)))
    .sort(() => Math.random() - 0.5)
    .slice(0, count);
};

const ResultScreen: React.FC = () => {
  useEffect(() => {
    document.body.classList.remove('home-background');

    // 플레이 카운트 증가 (소셜 증거용)
    const currentCount = parseInt(localStorage.getItem('totalPlayCount') || '1247');
    localStorage.setItem('totalPlayCount', (currentCount + 1).toString());
  }, []);

  const { foodName } = useParams<{ foodName: string }>();
  const navigate = useNavigate();
  const [modalContent, setModalContent] = useState<{ title: string; body: string } | null>(null);
  const [foodDetails, setFoodDetails] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [sensoryMap, setSensoryMap] = useState<any>(null);
  const [activeNode, setActiveNode] = useState<any>(null);

  const winner = useMemo(() => {
    if (!foodName) return null;
    return ALL_FOODS.find(food => food.name === decodeURIComponent(foodName)) || null;
  }, [foodName]);

  // 관련 음식 추천
  const relatedFoods = useMemo(() => getRelatedFoods(winner), [winner]);

  const pageTitle = winner ? `${winner.name} - The Dinner Decider` : 'Result - The Dinner Decider';
  const pageDescription = winner ? `Tonight's winner is ${winner.name}! Discover the story, recipe, and more.` : 'Find out what you should eat tonight!';

  useEffect(() => {
    if (winner) {
      const fetchContentfulData = async () => {
        setIsLoading(true);
        setFoodDetails(null);
        setSensoryMap(null);
        setActiveNode(null);

        try {
          const [foodContentResponse, sensoryMapResponse] = await Promise.all([
            contentfulClient.getEntries({
              content_type: 'food',
              'fields.foodName': winner.name,
            }),
            contentfulClient.getEntries({
              content_type: 'sensoryMapPage',
              'fields.dishName': winner.name,
              include: 2
            })
          ]);

          if (foodContentResponse.items.length > 0) {
            setFoodDetails(foodContentResponse.items[0]);
          }
          if (sensoryMapResponse.items.length > 0) {
            setSensoryMap(sensoryMapResponse.items[0]);
          }
        } catch (error) {
          console.error("Error fetching Contentful data:", error);
        } finally {
          setIsLoading(false);
        }
      };
      fetchContentfulData();
    } else {
      setIsLoading(false);
    }
  }, [winner]);

  // [삭제] socialProofCount 관련 useEffect 삭제

  // [삭제] getOrdinalSuffix 함수 삭제

  // @ts-ignore
  const gtag = window.gtag;
  const trackLinkClick = (linkName: string) => {
    if (gtag && winner) {
      gtag('event', 'outbound_link_click', { 'link_name': linkName, 'food_name': winner.name });
    }
  };

  const handleSearchNearby = () => {
    if (winner) {
      trackLinkClick('Google Maps');
      const query = `${winner.name} near me`;
      const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  const handlePlayAgain = () => {
    navigate('/');
  };

  const handleShare = async () => {
    if (!winner) return;
    const shareData = {
      title: "The Dinner Decider",
      text: `Tonight's winner is ${winner.name}! Find out what you should eat:`,
      url: window.location.href
    };
    if (navigator.share) {
      try { await navigator.share(shareData); }
      catch (err) { console.error("Share failed:", err); }
    } else {
      navigator.clipboard.writeText(window.location.href);
      setModalContent({ title: "Result Copied!", body: "The result page URL has been copied to your clipboard." });
    }
  };

  if (!winner) {
    return (
      <div className="text-center p-4 md:p-8 flex flex-col items-center justify-center min-h-screen">
        <Helmet>
          <title>Result Not Found - The Dinner Decider</title>
          <meta name="robots" content="noindex" />
        </Helmet>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-600">Food not found</h2>
        <Button onClick={handlePlayAgain} variant="primary" className="mt-8">
          Back to Start
        </Button>
      </div>
    );
  }

  // === [LCP 해결 1: Contentful 이미지 최적화] ===
  // 이 imageParams 변수는 이제 'options' 객체에서도 재사용됩니다.
  const imageParams = '?w=800&fm=webp&q=75';
  let imageUrlToRender;

  if (sensoryMap && sensoryMap.fields.heroImage) {
    imageUrlToRender = 'https:' + sensoryMap.fields.heroImage.fields.file.url + imageParams;
  } else if (foodDetails && foodDetails.fields.recipeImage) {
    imageUrlToRender = 'https:' + foodDetails.fields.recipeImage.fields.file.url + imageParams;
  } else {
    imageUrlToRender = winner.imageUrl;
  }
  // === [LCP 해결 로직 끝] ===


  // [수정] Rich Text 내부의 이미지에도 최적화 파라미터를 적용합니다.
  const options = {
    renderNode: {
      'embedded-asset-block': (node: any) => {
        const { file, title } = node.data.target.fields;
        const { width, height } = file.details.image;

        // [수정] Contentful 이미지 최적화 파라미터를 추가합니다.
        const optimizedUrl = `https:${file.url}${imageParams}`;

        return <img
          src={optimizedUrl} // 최적화된 URL 사용
          width={width}
          height={height}
          alt={title}
          style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }}
          loading="lazy" // [추가] 뷰포트 바깥의 이미지는 지연 로드
        />;
      },
    },
  };


  return (
    <div className="text-center p-4 md:p-8 flex flex-col items-center pt-16 sm:pt-24 pb-16">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={`https://www.thedinnerdecider.au/result/${foodName}`} />
        {winner && <link rel="preload" fetchPriority="high" as="image" href={imageUrlToRender} />}
      </Helmet>

      <h2 className="text-2xl md:text-3xl font-bold text-slate-600">Tonight's winner is...</h2>
      <h1 className="text-4xl md:text-7xl font-extrabold text-amber-500 my-4">{winner.name}!</h1>
      <p className="text-lg text-slate-500">Good choice, mate!</p>

      {/* [삭제] socialProofCount 렌더링 div 블록 삭제 */}


      <div className="mt-8 w-full max-w-md bg-white rounded-xl shadow-lg">
        <div className="relative">

          <img
            src={imageUrlToRender}
            alt={winner.name}
            className="w-full aspect-[4/3] object-cover"
            width={400}
            height={300}
            fetchPriority="high"
          />

          {/* Sensory Map 점/팝업 코드 */}
          {sensoryMap && sensoryMap.fields.sensoryNodes?.map((node: any) => (
            <div
              key={node.sys.id}
              className="absolute w-5 h-5 bg-purple-500 bg-opacity-80 rounded-full border-2 border-white cursor-pointer transform -translate-x-1/2 -translate-y-1/2 z-10 hover:scale-125 transition-transform"
              style={{ top: `${node.fields.yPosition}%`, left: `${node.fields.xPosition}%` }}
              onClick={() => setActiveNode(node)}
            />
          ))}
          {activeNode && (
            <div className="absolute top-5 right-5 w-72 bg-gray-800 bg-opacity-90 backdrop-blur-sm border border-gray-600 rounded-xl p-6 text-white shadow-2xl z-20 animate-fade-in">
              {/* ... (Active node 내부 코드는 변경 없음) ... */}
              <button className="absolute top-2 right-3 text-gray-400 text-2xl" onClick={() => setActiveNode(null)}>×</button>
              <h3 className="font-bold text-lg text-yellow-400 mb-2">{activeNode.fields.nodeTitle}</h3>
              <div className="text-sm text-gray-300 prose prose-invert prose-sm max-w-none">
                {documentToReactComponents(activeNode.fields.description, options)}
              </div>
              <div className="mt-4 border-t border-gray-600 pt-4">
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Flavor Profile</h4>
                {[
                  { label: 'Umami', field: 'flavorProfileUmami' },
                  { label: 'Aromatic', field: 'flavorProfileAromatic' },
                  { label: 'Salty', field: 'flavorProfileSalty' },
                  { label: 'Richness', field: 'flavorProfileRichness' },
                  { label: 'Sweet', field: 'flavorProfileSweet' },
                  { label: 'Spicy', field: 'flavorProfileSpicy' },
                ].map(profile => {
                  const value = activeNode.fields[profile.field] || 0;
                  if (!activeNode.fields.hasOwnProperty(profile.field)) return null;

                  return (
                    <div key={profile.field} className="mb-2">
                      <div className="flex justify-between text-xs text-gray-300 mb-1">
                        <span>{profile.label}</span>
                        <span>{value} / 5</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-1.5">
                        <div className="bg-purple-500 h-1.5 rounded-full" style={{ width: `${(value / 5) * 100}%` }}></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* --- [CLS 해결: 'purposeTags' 스켈레톤 추가] --- */}
      {isLoading ? (
        // [수정] 태그 영역이 차지할 공간(높이)을 미리 확보합니다. (mt-8 대신 mt-4 사용)
        <SkeletonBlock height="50px" className="mt-4" />
      ) : (
        foodDetails && foodDetails.fields.purposeTags && (
          <div className="mt-4 w-full max-w-md flex justify-center flex-wrap gap-2">
            {foodDetails.fields.purposeTags.map((tag: string) => (
              <span key={tag} className="text-sm bg-amber-100 text-amber-800 font-semibold px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        )
      )}

      {/* ... (Fallback 로직은 변경 없음) ... */}
      {!isLoading && !foodDetails && winner.funFact && (
        <div className="mt-8 w-full max-w-md bg-sky-100 text-sky-800 p-4 rounded-xl shadow-lg text-left">
          <div className="flex items-start">
            <span className="text-2xl mr-3">💡</span>
            <div>
              <strong className="font-semibold">Did you know?</strong>
              <span className="block mt-1 text-sky-700">{winner.funFact}</span>
            </div>
          </div>
        </div>
      )}
      {!isLoading && !foodDetails && winner.eatLikeLocal && winner.eatLikeLocal.length > 0 && (
        <div className="mt-8 w-full max-w-md bg-white p-6 rounded-xl shadow-lg text-left">
          <h3 className="text-xl font-semibold text-slate-800 mb-4">Eat Like a Local</h3>
          <div className="space-y-4">
            {winner.eatLikeLocal.map((step, index) => (
              <div key={index} className="flex items-start">
                <span className="text-2xl mr-4">{step.icon}</span>
                <div>
                  <p className="font-bold text-slate-700">{step.title}</p>
                  <p className="text-slate-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* --- [CLS 해결: '음식 역사' 스켈레톤] --- */}
      {/* [수정] isLoading일 때 minHeight 대신 SkeletonBlock을 렌더링합니다. */}
      {isLoading ? (
        <SkeletonBlock height="300px" />
      ) : (
        foodDetails && foodDetails.fields.foodHistory && (
          <div className="mt-8 w-full max-w-md bg-white p-6 rounded-xl shadow-lg text-left">
            <div className="prose text-slate-600 max-w-none">
              {documentToReactComponents(foodDetails.fields.foodHistory)}
            </div>
          </div>
        )
      )}

      {/* --- [CLS 해결: '레시피' 스켈레톤] --- */}
      {/* [수정] isLoading일 때 minHeight 대신 SkeletonBlock을 렌더링합니다. */}
      {isLoading ? (
        <SkeletonBlock height="400px" />
      ) : (
        foodDetails && (
          <div className="mt-8 w-full max-w-md bg-white p-6 rounded-xl shadow-lg text-left">
            <h3 className="text-xl font-semibold text-slate-800 mb-4">
              {foodDetails.fields.recipeTitle}
            </h3>
            {foodDetails.fields.recipeIngredients && (
              <>
                <h4 className="font-semibold text-slate-700 mt-6 mb-2">Ingredients</h4>
                <div className="prose text-slate-600 max-w-none">
                  {documentToReactComponents(foodDetails.fields.recipeIngredients, options)}
                </div>
              </>
            )}
            {foodDetails.fields.recipeInstructions && (
              <>
                <h4 className="font-semibold text-slate-700 mt-6 mb-2">Instructions</h4>
                <div className="prose text-slate-600 max-w-none">
                  {documentToReactComponents(foodDetails.fields.recipeInstructions, options)}
                </div>
              </>
            )}
            {foodDetails.fields.chefsTip && (
              <>
                <h4 className="font-semibold text-slate-700 mt-6 mb-2">Chef's Tip</h4>
                <p className="text-slate-600">{foodDetails.fields.chefsTip}</p>
              </>
            )}
          </div>
        )
      )}

      {/* 'What's next?' 섹션 (변경 없음) */}
      <div className="mt-8 w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden">
        {/* ... (내부 코드 변경 없음) ... */}
        <div className="p-6">
          <h3 className="text-xl font-semibold text-slate-800 mb-6 text-left">What's next?</h3>

          {winner.checklist && winner.checklist.length > 0 ? (
            <div className="grid gap-4">
              <div className="text-left p-4 bg-slate-50 rounded-lg">
                <h4 className="font-semibold text-slate-700 mb-3">Find a Great Spot</h4>
                <ul className="space-y-2 mb-4">
                  {winner.checklist.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      <span className="text-slate-500">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button onClick={handleSearchNearby} variant="primary" className="w-full">
                  Search on Google Maps 📍
                </Button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Button onClick={() => { trackLinkClick('Uber Eats'); window.open(`https://www.ubereats.com/search?q=${winner.name}`) }} variant="primary" className="w-full bg-green-500 hover:bg-green-600">
                  Order Delivery (Uber Eats)
                </Button>
                <Button onClick={() => { trackLinkClick('DoorDash'); window.open(`https://www.doordash.com/search/store/${encodeURIComponent(winner.name)}`) }} variant="primary" className="w-full bg-red-600 hover:bg-red-700">
                  Order Delivery (DoorDash)
                </Button>
              </div>
              {winner.pairings && winner.pairings.length > 0 && (
                <div className="text-left p-4 bg-slate-50 rounded-lg">
                  <h4 className="font-semibold text-slate-700 mb-3">Complete Your Meal</h4>
                  <div className="space-y-3">
                    {winner.pairings.map((item, index) => (
                      <div key={index} className="flex items-start">
                        <span className="text-xl mr-3 mt-1">{item.icon}</span>
                        <div>
                          <p className="font-bold text-slate-600">{item.type}</p>
                          <p className="text-slate-500">{item.suggestion}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="space-y-3">
              <Button onClick={handleSearchNearby} variant="primary" className="w-full text-lg py-3">
                Search on Google Maps 📍
              </Button>
              <Button onClick={() => { trackLinkClick('Uber Eats'); window.open(`https://www.ubereats.com/search?q=${winner.name}`) }} variant="primary" className="w-full bg-green-500 hover:bg-green-600">
                Order Delivery (Uber Eats)
              </Button>
              <Button onClick={() => { trackLinkClick('DoorDash'); window.open(`https://www.doordash.com/search/store/${encodeURIComponent(winner.name)}`) }} variant="primary" className="w-full bg-red-600 hover:bg-red-700">
                Order Delivery (DoorDash)
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* AdSense 광고 */}
      <div className="mt-8 w-full max-w-md">
        <AdSense className="rounded-xl overflow-hidden" />
      </div>

      {/* 관련 음식 추천 섹션 */}
      {relatedFoods.length > 0 && (
        <div className="mt-8 w-full max-w-md bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-semibold text-slate-800 mb-4 text-left">
            🍽️ You might also like...
          </h3>
          <div className="grid grid-cols-3 gap-3">
            {relatedFoods.map((food) => (
              <Link
                key={food.id}
                to={`/result/${encodeURIComponent(food.name)}`}
                className="group flex flex-col items-center text-center p-2 bg-white/70 rounded-lg hover:bg-white hover:shadow-md transition-all duration-300"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden mb-2">
                  <img
                    src={food.imageUrl}
                    alt={food.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <span className="text-xs sm:text-sm font-medium text-slate-700 group-hover:text-amber-600 line-clamp-2">
                  {food.name}
                </span>
              </Link>
            ))}
          </div>
          <Link
            to="/explore-foods"
            className="mt-4 inline-block text-sm text-amber-600 hover:text-amber-700 font-medium"
          >
            Explore all 100 dishes →
          </Link>
        </div>
      )}

      <div className="flex gap-4 mt-8">
        <Button onClick={handleShare} variant="secondary">
          📤 Share Result
        </Button>
        <Button onClick={handlePlayAgain} variant="secondary">
          🔄 Play Again
        </Button>
      </div>

      {modalContent && (
        <Modal title={modalContent.title} onClose={() => setModalContent(null)}>
          <p>{modalContent.body}</p>
        </Modal>
      )}
    </div>
  );
};

export default ResultScreen;