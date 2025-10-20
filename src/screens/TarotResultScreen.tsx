import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ResultContent } from '../types/tarotTypes';
import { generateResult } from '../services/tarotLogic';
import { getCardInfo } from '../data/tarotSetup';
import { foodData, FoodItem } from '../data/foodData';
import { fixedReadings } from '../data/fixedReadings';
import { contentfulClient } from '../services/contentfulClient';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Helmet } from 'react-helmet-async';

// [추가] Contentful 이미지 최적화 파라미터
const imageParams = '?w=800&fm=webp&q=75';

// [수정] Tailwind 클래스를 사용하도록 변경
const LoadingSpinner: React.FC = () => (
  <div className="w-12 h-12 border-4 border-white border-opacity-20 border-t-[#B889FF] rounded-full animate-spin"></div>
);

// [수정] Tailwind 클래스를 사용하도록 변경
const ResultPage: React.FC = () => {
  const { c1, c2, c3 } = useParams<{ c1: string; c2: string; c3: string }>();
  const navigate = useNavigate();
  const [content, setContent] = useState<ResultContent | null>(null);
  const [matchedFood, setMatchedFood] = useState<FoodItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [copySuccess, setCopySuccess] = useState('');
  const [sensoryMap, setSensoryMap] = useState<any>(null);
  const [activeNode, setActiveNode] = useState<any>(null);
  const [richFoodContent, setRichFoodContent] = useState<any>(null);

  const pageTitle = content ? `${content.headline} - The Dinner Decider` : 'Your Food Tarot Result - The Dinner Decider';
  const pageDescription = matchedFood ? `Your fated dish is ${matchedFood.name}. Discover what the food tarot says about your cravings.` : 'Find out your fated dish with The Dinner Decider.';

  // [수정] 배경색 처리를 위한 useEffect (Tailwind 클래스로 제어하는 것이 더 좋지만, 기존 로직 유지)
  useEffect(() => {
    document.body.style.backgroundColor = '#0c0a14';
    const mainElement = document.querySelector('main');
    if (mainElement) {
      mainElement.style.backgroundColor = 'transparent';
    }
    return () => {
      document.body.style.backgroundColor = ''; // 기본값으로 복원
      if (mainElement) {
        mainElement.style.backgroundColor = '';
      }
    };
  }, []);

  const selections = {
    energy: getCardInfo('energy', c1),
    method: getCardInfo('method', c2),
    flavor: getCardInfo('flavor', c3)
  };

  const handleSearchNearby = () => {
    if (matchedFood) {
      const query = `${matchedFood.name} near me`;
      const url = `http://googleusercontent.com/maps/google.com/1{encodeURIComponent(query)}`;
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  // [수정] CLS 해결: 모든 데이터 페치를 이 함수 하나로 통합합니다.
  const fetchResult = useCallback(async () => {
    if (!c1 || !c2 || !c3) {
      setError("Invalid reading. Please start again.");
      setLoading(false);
      return;
    }
    setLoading(true);
    setError(null);
    try {
      // 1. 타로 결과 생성
      const result = await generateResult(c1, c2, c3);
      
      // 2. 음식 매칭
      const readingKey = `${c1}-${c2}-${c3}`;
      const foodId = fixedReadings[readingKey];
      const match = foodData.find(food => food.id === foodId) || foodData[0];
      
      // 3. [추가] Contentful 데이터까지 한꺼번에 fetch
      const [sensoryMapResponse, foodContentResponse] = await Promise.all([
        contentfulClient.getEntries({
          content_type: 'sensoryMapPage',
          'fields.dishName': match.name,
          include: 2
        }),
        contentfulClient.getEntries({
          content_type: 'food',
          'fields.foodName': match.name
        })
      ]);

      // 4. 모든 State를 한 번에 설정
      setContent(result);
      setMatchedFood(match);
      if (sensoryMapResponse.items.length > 0) {
        setSensoryMap(sensoryMapResponse.items[0]);
      }
      if (foodContentResponse.items.length > 0) {
        setRichFoodContent(foodContentResponse.items[0]);
      }

    } catch (err: any) {
      setError(err.message || "An unknown error occurred.");
    } finally {
      // 5. 모든 데이터가 준비된 후 로딩 종료
      setLoading(false);
    }
  }, [c1, c2, c3]);

  // [수정] useEffect는 fetchResult를 호출만 하도록 단순화
  useEffect(() => {
    fetchResult();
  }, [fetchResult]);

  // [삭제] matchedFood에 의존하던 별도의 useEffect 제거 (fetchResult로 통합됨)
  // useEffect(() => {
  //   if (matchedFood) { ... }
  // }, [matchedFood]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopySuccess('Link Copied!');
      setTimeout(() => setCopySuccess(''), 2000);
    }, () => {
      setCopySuccess('Failed to copy');
      setTimeout(() => setCopySuccess(''), 2000);
    });
  };

  const handleShare = async () => {
    if (!matchedFood) return;
    const shareData = {
      title: "The Dinner Decider - My Fated Dish!",
      text: `The tarot cards have chosen '${matchedFood.name}' for me today! Find out your fated dish:`,
      url: window.location.href
    };
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.error("Share failed:", err);
      }
    } else {
      handleCopyLink();
    }
  };

  // [수정] LCP 해결: Rich Text 내부 이미지에도 최적화 파라미터 적용
  const options = {
    renderNode: {
      'embedded-asset-block': (node: any) => {
        const { file, title } = node.data.target.fields;
        const { width, height } = file.details.image;
        const optimizedUrl = `https:${file.url}${imageParams}`; // [수정] 최적화 URL
        return <img
          src={optimizedUrl} // [수정]
          alt={title}
          width={width}
          height={height}
          loading="lazy" // [추가] 지연 로딩
          className="max-w-full h-auto rounded-lg my-4" // [수정] Tailwind 스타일
        />;
      },
    },
  };
  
  // [수정] LCP 해결: 메인 이미지 URL을 동적으로 생성 (최적화 파라미터 포함)
  const imageUrlToRender = useMemo(() => {
    if (sensoryMap && sensoryMap.fields.heroImage) {
      return 'https:' + sensoryMap.fields.heroImage.fields.file.url + imageParams;
    }
    if (matchedFood) {
      return matchedFood.imageUrl; // 로컬 이미지는 그대로 사용
    }
    return ''; // fallback
  }, [sensoryMap, matchedFood]);


  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[80vh] p-4 animate-fadeIn box-border">
        <Helmet>
          <title>Interpreting your fate... - The Dinner Decider</title>
          <meta name="robots" content="noindex" />
        </Helmet>
        <LoadingSpinner />
        <p className="mt-4 text-lg text-[#b3aed1] font-cinzel">Interpreting your culinary fate...</p>
      </div>
    );
  }

  if (error || !matchedFood) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[80vh] p-4 animate-fadeIn box-border">
        <Helmet>
          <title>Error - Food Tarot Result - The Dinner Decider</title>
          <meta name="robots" content="noindex" />
        </Helmet>
        <p className="text-[#FF6B6B] text-lg max-w-md">{error || "Could not determine your fated meal."}</p>
        <button 
          className="w-[180px] h-[50px] flex items-center justify-center font-lato text-base p-3 px-6 bg-transparent text-[#FFC857] border-2 border-[#FFC857] rounded-full cursor-pointer transition-all duration-300 mt-8"
          onClick={fetchResult}>
            Retry
        </button>
        <button 
          className="w-[180px] h-[50px] flex items-center justify-center font-lato text-base p-3 px-6 bg-transparent text-[#b3aed1] border-2 border-[#332f44] rounded-full cursor-pointer transition-all duration-300 mt-4"
          onClick={() => navigate('/')}>
            Start Over
        </button>
      </div>
    );
  }

  // [수정] 모든 style={}을 Tailwind 클래스로 변환
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] p-4 animate-fadeIn box-border">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={`https://thedinnerdecider.au/food-tarot/result/${c1}/${c2}/${c3}`} />
        {/* [추가] LCP 이미지 preload */}
        <link rel="preload" fetchPriority="high" as="image" href={imageUrlToRender} />
      </Helmet>

      {/* ... (애니메이션 스타일은 <style> 태그로 유지) ... */}
      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes fadeInOut { 0%, 100% { opacity: 0; transform: translateY(20px); } 10%, 90% { opacity: 1; transform: translateY(0); } }
      `}</style>
      
      {content && (
        <div className="max-w-3xl w-full box-border">
          <div className="flex justify-center gap-4 mb-8 flex-wrap">
            {Object.values(selections).map((card, index) => card && (
              <div key={index} className="flex flex-col items-center gap-2 bg-[#171423] p-4 rounded-lg border border-[#332f44] w-24">
                <img src={card.imageUrl} alt={card.name} className="w-10 h-10 text-[#B889FF]" />
                <span className="text-xs text-[#b3aed1] text-center">{card.name}</span>
              </div>
            ))}
          </div>
          
          <h1 className="font-cinzel text-3xl sm:text-4xl md:text-5xl text-white text-shadow-purple mb-6 text-center">{content.headline}</h1>
          <p className="text-[#E0E0E0] leading-7 text-left whitespace-pre-wrap mb-8 bg-[#171423]/50 p-6 rounded-lg border border-[#332f44]">
            {content.body}
          </p>

          <div className="relative bg-white border border-gray-200 p-6 rounded-xl shadow-2xl box-border">
            {/* ================= SENSORY MAP AREA START ================= */}
            <div className="relative">
              {/* [수정] LCP 해결: 최적화된 이미지 URL 사용 및 fetchPriority 추가 */}
              <img 
                src={imageUrlToRender}
                alt={matchedFood.name} 
                className="w-full aspect-[4/3] object-cover rounded-md mb-6" 
                width={800} // 너비/높이 힌트 제공
                height={600}
                fetchPriority="high"
              />

              {sensoryMap && sensoryMap.fields.sensoryNodes?.map((node: any) => (
                <div
                  key={node.sys.id}
                  className="absolute w-5 h-5 bg-[#B889FF]/80 rounded-full border-2 border-white cursor-pointer transform -translate-x-1/2 -translate-y-1/2 z-10 hover:scale-125 transition-transform"
                  style={{ top: `${node.fields.yPosition}%`, left: `${node.fields.xPosition}%` }}
                  onClick={() => setActiveNode(node)}
                />
              ))}

              {activeNode && (
                <div className="absolute top-5 right-5 w-72 bg-[#171423]/90 backdrop-blur-md border border-gray-700 rounded-xl p-6 text-[#E0E0E0] shadow-2xl z-20 animate-fadeIn">
                  <button className="absolute top-2 right-3 text-gray-400 text-2xl" onClick={() => setActiveNode(null)}>×</button>
                  <h3 className="font-cinzel text-[#FFC857] text-lg mb-2">{activeNode.fields.nodeTitle}</h3>
                  <div className="text-sm leading-6 text-gray-300">
                    {documentToReactComponents(activeNode.fields.description)}
                  </div>
                  
                  <div className="mt-4">
                    <h4 className="text-base text-gray-400 border-t border-gray-700 pt-4">FLAVOR PROFILE</h4>
                    {[
                      { label: 'Umami', field: 'flavorProfileUmami' },
                      { label: 'Aromatic', field: 'flavorProfileAromatic' },
                      { label: 'Salty', field: 'flavorProfileSalty' },
                      { label: 'Richness', field: 'flavorProfileRichness' },
                      { label: 'Sweet', field: 'flavorProfileSweet' },
                      { label: 'Spicy', field: 'flavorProfileSpicy' },
                    ].map(profile => {
                      const value = activeNode.fields[profile.field] || 0;
                      if (value === 0 && !activeNode.fields.hasOwnProperty(profile.field)) return null;
                      
                      return (
                        <div key={profile.field} className="mb-3">
                          <div className="flex justify-between text-sm text-gray-300 mb-1">
                            <span>{profile.label}</span>
                            <span>{value} / 5</span>
                          </div>
                          <div className="h-2 w-full bg-gray-700 rounded-full">
                            <div className="h-full bg-[#B889FF] rounded-full" style={{ width: `${(value / 5) * 100}%` }}></div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
            {/* ================= SENSORY MAP AREA END ================= */}
            
            <span className="text-gray-500 text-base mb-2 block">Your Fated Dish is:</span>
            <h2 className="font-cinzel text-2xl sm:text-3xl text-gray-800 m-0">{matchedFood ? matchedFood.name : content.menu}</h2>
            {matchedFood && <p className="text-gray-400 text-sm italic mt-2">Oracle's Decree: "{content.menu}"</p>}
          </div>

          {/* [수정] CLS 해결: 이 섹션은 이제 상위 데이터와 함께 렌더링되므로 "pop-in"이 없습니다. */}
          {richFoodContent && (
            <div className="mt-8 w-full bg-white text-gray-800 rounded-xl p-6 shadow-2xl text-left">
              {/* prose 클래스로 내부 스타일링을 자동 적용 */}
              <div className="prose prose-slate max-w-none">
                {richFoodContent.fields.foodHistory &&
                  documentToReactComponents(richFoodContent.fields.foodHistory)
                }
                
                {richFoodContent.fields.recipeTitle &&
                  <h3 className="mt-8">{richFoodContent.fields.recipeTitle}</h3>
                }
                
                {richFoodContent.fields.recipeIngredients && (
                  <>
                    <h4>Ingredients</h4>
                    {documentToReactComponents(richFoodContent.fields.recipeIngredients, options)}
                  </>
                )}
                
                {richFoodContent.fields.recipeInstructions && (
                  <>
                    <h4>Instructions</h4>
                    {documentToReactComponents(richFoodContent.fields.recipeInstructions, options)}
                  </>
                )}

                {richFoodContent.fields.chefsTip && (
                  <>
                    <h4>Chef's Tip</h4>
                    <p>{richFoodContent.fields.chefsTip}</p>
                  </>
                )}
              </div>
            </div>
          )}

          {/* [수정] Tailwind로 변환 */}
          <div className="mt-8 w-full bg-white rounded-xl p-6 shadow-2xl box-border">
            <h3 className="text-xl font-bold text-gray-800 mb-4">What's next?</h3>
            <div className="grid gap-3">
              <button className="font-lato text-base p-3 px-6 bg-amber-500 text-white border-none rounded-full cursor-pointer transition-all duration-300 font-bold shadow-lg shadow-amber-500/40 hover:bg-amber-600" onClick={handleSearchNearby}>
                Search on Google Maps 📍
              </button>
              
              {matchedFood?.checklist && matchedFood.checklist.length > 0 && (
                <div className="mt-2 text-left p-4 border-t border-gray-100">
                  <h4 className="font-bold text-gray-700 mb-2">A great spot usually has...</h4>
                  <ul className="list-none p-0 m-0 grid gap-2">
                    {matchedFood.checklist.map((item, index) => (
                      <li key={index} className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        <span className="text-gray-500">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              <button className="font-lato text-base p-3 px-6 bg-green-500 text-white border-none rounded-full cursor-pointer transition-all duration-300 font-bold shadow-lg shadow-green-500/40 hover:bg-green-600" onClick={() => window.open(`https://www.ubereats.com/search?q=${matchedFood?.name}`)}>
                Order Delivery (Uber Eats)
              </button>
              <button className="font-lato text-base p-3 px-6 bg-red-500 text-white border-none rounded-full cursor-pointer transition-all duration-300 font-bold shadow-lg shadow-red-500/40 hover:bg-red-600" onClick={() => window.open(`https://www.doordash.com/search/store/${encodeURIComponent(matchedFood?.name ?? '')}`)}>
                Order Delivery (DoorDash)
              </button>

              {matchedFood?.pairings && matchedFood.pairings.length > 0 && (
                <div className="mt-2 text-left p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-gray-800 mb-3">Complete Your Meal</h4>
                  <div className="grid gap-3">
                    {matchedFood.pairings.map((item, index) => (
                      <div key={index} className="flex items-start">
                        <span className="text-2xl mr-3 mt-1">{item.icon}</span>
                        <div>
                          <p className="font-bold text-gray-700 m-0">{item.type}</p>
                          <p className="text-gray-500 m-0">{item.suggestion}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="border-t border-gray-200 my-4" />
              
              <div className="flex justify-center gap-4 flex-wrap">
                <button className="w-[160px] h-[50px] flex items-center justify-center font-lato text-base p-3 px-6 bg-transparent text-[#b3aed1] border-2 border-[#332f44] rounded-full cursor-pointer transition-all duration-300" onClick={handleShare}>
                  Share Result
                </button>
                <button className="w-[160px] h-[50px] flex items-center justify-center font-lato text-base p-3 px-6 bg-transparent text-[#b3aed1] border-2 border-[#332f44] rounded-full cursor-pointer transition-all duration-300" onClick={() => navigate('/')}>
                  Play Again
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {copySuccess && (
        <div className="fixed bottom-5 bg-[#5BE7A9] text-[#0E0B14] py-2 px-5 rounded shadow-lg animate-fadeInOut">
          {copySuccess}
        </div>
      )}
    </div>
  );
};

export default ResultPage;