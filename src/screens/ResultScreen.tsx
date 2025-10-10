import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ALL_FOODS } from '../../constants/foods';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import { contentfulClient } from '../services/contentfulClient';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';

const ResultScreen: React.FC = () => {
  // 👇 배경 관리를 위한 useEffect 추가 (기존 밝은 테마 유지를 위해 home-background 제거)
  useEffect(() => {
    document.body.classList.remove('home-background');
  }, []);

  const { foodName } = useParams<{ foodName: string }>();
  const navigate = useNavigate();
  const [modalContent, setModalContent] = useState<{ title: string; body: string } | null>(null);
  const [socialProofCount, setSocialProofCount] = useState<number>(0);
  const [foodDetails, setFoodDetails] = useState<any>(null); // Contentful 데이터를 저장할 state
  const [isLoading, setIsLoading] = useState(true); // 로딩 상태를 관리할 state
  const [sensoryMap, setSensoryMap] = useState<any>(null); // 👈 이 줄을 추가하세요
  const [activeNode, setActiveNode] = useState<any>(null); // 👈 이 줄을 추가하세요

  const winner = useMemo(() => {
    if (!foodName) return null;
    return ALL_FOODS.find(food => food.name === decodeURIComponent(foodName)) || null;
  }, [foodName]);

  const pageTitle = winner ? `${winner.name} - The Dinner Decider` : 'Result - The Dinner Decider';
  const pageDescription = winner ? `Tonight's winner is ${winner.name}! Discover the story, recipe, and more.` : 'Find out what you should eat tonight!';
  useDocumentTitle(pageTitle, pageDescription);

  useEffect(() => {
  if (winner) {
    const fetchContentfulData = async () => {
      setIsLoading(true);
      // 데이터 초기화
      setFoodDetails(null);
      setSensoryMap(null);
      setActiveNode(null);

      try {
        // Food 상세 콘텐츠 가져오기
        const foodContentResponse = await contentfulClient.getEntries({
          content_type: 'food',
          'fields.foodName': winner.name,
        });
        if (foodContentResponse.items.length > 0) {
          setFoodDetails(foodContentResponse.items[0]);
        }

        // Sensory Map 데이터 가져오기
        const sensoryMapResponse = await contentfulClient.getEntries({
          content_type: 'sensoryMapPage',
          'fields.dishName': winner.name,
          include: 2
        });
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

  useEffect(() => {
    const randomCount = Math.floor(Math.random() * 36) + 15;
    setSocialProofCount(randomCount);
  }, []);

  const getOrdinalSuffix = (num: number) => {
    const s = ['th', 'st', 'nd', 'rd'];
    const v = num % 100;
    return s[(v - 20) % 10] || s[v] || s[0];
  };

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

  if (isLoading) {
  return <div className="text-center p-8 flex flex-col items-center justify-center min-h-screen text-slate-500">Loading delicious details...</div>;
}

  if (!winner) {
    return (
      <div className="text-center p-4 md:p-8 flex flex-col items-center justify-center min-h-screen">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-600">Food not found</h2>
        <Button onClick={handlePlayAgain} variant="primary" className="mt-8">
          Back to Start
        </Button>
      </div>
    );
  }

  const options = {
  renderNode: {
    'embedded-asset-block': (node: any) => {
      const { file, title } = node.data.target.fields;
      const { width, height } = file.details.image;
      // next/image가 아닌 일반 img 태그 사용
      return <img src={`https:${file.url}`} width={width} height={height} alt={title} style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }} />;
    },
  },
};

  return (
    <div className="text-center p-4 md:p-8 flex flex-col items-center pt-16 sm:pt-24 pb-16">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-600">Tonight's winner is...</h2>
      <h1 className="text-4xl md:text-7xl font-extrabold text-amber-500 my-4">{winner.name}!</h1>
      <p className="text-lg text-slate-500">Good choice, mate!</p>
      
      <div className="mt-3 inline-block bg-amber-100 text-amber-800 text-sm font-semibold px-4 py-1.5 rounded-full shadow-sm"> 
        <p className="text-orange-800 text-center font-semibold">
          Excellent pick! You're the <strong>{socialProofCount}{getOrdinalSuffix(socialProofCount)}</strong> person to land on {winner.name} today. 🏆
        </p>
      </div>
      
      <div className="mt-8 w-full max-w-md bg-white rounded-xl shadow-lg">
        <div className="relative">
    {/* 1. 이미지 표시 (Sensory Map 이미지가 있으면 그것을, 없으면 기존 이미지를 사용) */}
    <img 
      src={sensoryMap ? 'https:' + sensoryMap.fields.heroImage.fields.file.url : (foodDetails && foodDetails.fields.recipeImage ? 'https:' + foodDetails.fields.recipeImage.fields.file.url : winner.imageUrl)}
      alt={winner.name} 
      className="w-full aspect-[4/3] object-cover" 
    />

    {/* 2. 점(dot)들 렌더링 */}
    {sensoryMap && sensoryMap.fields.sensoryNodes?.map((node: any) => (
      <div 
        key={node.sys.id}
        className="absolute w-5 h-5 bg-purple-500 bg-opacity-80 rounded-full border-2 border-white cursor-pointer transform -translate-x-1/2 -translate-y-1/2 z-10 hover:scale-125 transition-transform"
        style={{ top: `${node.fields.yPosition}%`, left: `${node.fields.xPosition}%` }}
        onClick={() => setActiveNode(node)}
      />
    ))}

    {/* 3. 팝업창 렌더링 */}
    {activeNode && (
      <div className="absolute top-5 right-5 w-72 bg-gray-800 bg-opacity-90 backdrop-blur-sm border border-gray-600 rounded-xl p-6 text-white shadow-2xl z-20 animate-fade-in">
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
    // Contentful에 해당 필드 값이 없으면 렌더링하지 않음
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

      {foodDetails && foodDetails.fields.purposeTags && (
        <div className="mt-4 w-full max-w-md flex justify-center flex-wrap gap-2">
          {foodDetails.fields.purposeTags.map((tag: string) => (
            <span key={tag} className="text-sm bg-amber-100 text-amber-800 font-semibold px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* 👇 Contentful 데이터가 없을 때만 보임 */}
      {!foodDetails && winner.funFact && (
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

      {/* 👇 Contentful 데이터가 없을 때만 보임 */}
      {!foodDetails && winner.eatLikeLocal && winner.eatLikeLocal.length > 0 && (
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

      {/* 👇 Contentful 데이터가 있을 때만 보임 */}
      {foodDetails && foodDetails.fields.foodHistory && (
        <div className="mt-8 w-full max-w-md bg-white p-6 rounded-xl shadow-lg text-left">
          <div className="prose text-slate-600 max-w-none">
            {documentToReactComponents(foodDetails.fields.foodHistory)}
            </div>
            </div>
          )}

       {foodDetails && (
        <div className="mt-8 w-full max-w-md bg-white p-6 rounded-xl shadow-lg text-left">
    
       {/* Recipe Title */}
    <h3 className="text-xl font-semibold text-slate-800 mb-4">
      {foodDetails.fields.recipeTitle}
    </h3>
    
    {/* Recipe Ingredients */}
    {foodDetails.fields.recipeIngredients && (
      <>
        <h4 className="font-semibold text-slate-700 mt-6 mb-2">Ingredients</h4>
        <div className="prose text-slate-600 max-w-none">
          {documentToReactComponents(foodDetails.fields.recipeIngredients, options)}
        </div>
      </>
    )}

    {/* Recipe Instructions */}
    {foodDetails.fields.recipeInstructions && (
      <>
        <h4 className="font-semibold text-slate-700 mt-6 mb-2">Instructions</h4>
        <div className="prose text-slate-600 max-w-none">
          {documentToReactComponents(foodDetails.fields.recipeInstructions, options)}
        </div>
      </>
    )}

    {/* Chef's Tip */}
    {foodDetails.fields.chefsTip && (
      <>
        <h4 className="font-semibold text-slate-700 mt-6 mb-2">Chef's Tip</h4>
        <p className="text-slate-600">{foodDetails.fields.chefsTip}</p>
      </>
    )}
  </div>
)}   

      {/* 👇 'What's next?' 섹션은 항상 보임 */}
      <div className="mt-8 w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden">
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
                <Button onClick={() => { trackLinkClick('Uber Eats'); window.open(`https://www.ubereats.com/search?q=${winner.name}`)}} variant="primary" className="w-full bg-green-500 hover:bg-green-600">
                  Order Delivery (Uber Eats)
                </Button>
                <Button onClick={() => {trackLinkClick('DoorDash'); window.open(`https://www.doordash.com/search/store/${encodeURIComponent(winner.name)}`)}} variant="primary" className="w-full bg-red-600 hover:bg-red-700">
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
            // 데이터가 없을 경우: 기존의 단순한 버튼 레이아웃
            <div className="space-y-3">
              <Button onClick={handleSearchNearby} variant="primary" className="w-full text-lg py-3">
                Search on Google Maps 📍
              </Button>
              <Button onClick={() => { trackLinkClick('Uber Eats'); window.open(`https://www.ubereats.com/search?q=${winner.name}`)}} variant="primary" className="w-full bg-green-500 hover:bg-green-600">
                Order Delivery (Uber Eats)
              </Button>
              <Button onClick={() => {trackLinkClick('DoorDash'); window.open(`https://www.doordash.com/search/store/${encodeURIComponent(winner.name)}`)}} variant="primary" className="w-full bg-red-600 hover:bg-red-700">
                Order Delivery (DoorDash)
              </Button>
            </div>
          )}
        </div>
      </div>

      <div className="flex gap-4 mt-8">
        <Button onClick={handleShare} variant="secondary">Share Result</Button>
        <Button onClick={handlePlayAgain} variant="secondary">Play Again</Button>
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