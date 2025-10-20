import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ALL_FOODS } from '../../constants/foods';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import { contentfulClient } from '../services/contentfulClient';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Helmet } from 'react-helmet-async';

const ResultScreen: React.FC = () => {
  useEffect(() => {
    document.body.classList.remove('home-background');
  }, []);

  const { foodName } = useParams<{ foodName: string }>();
  const navigate = useNavigate();
  const [modalContent, setModalContent] = useState<{ title: string; body: string } | null>(null);
  const [socialProofCount, setSocialProofCount] = useState<number>(0);
  const [foodDetails, setFoodDetails] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false); // CLS 수정을 위해 isLoading 로직은 유지합니다.
  const [sensoryMap, setSensoryMap] = useState<any>(null);
  const [activeNode, setActiveNode] = useState<any>(null);

  const winner = useMemo(() => {
    if (!foodName) return null;
    return ALL_FOODS.find(food => food.name === decodeURIComponent(foodName)) || null;
  }, [foodName]);

  const pageTitle = winner ? `${winner.name} - The Dinner Decider` : 'Result - The Dinner Decider';
  const pageDescription = winner ? `Tonight's winner is ${winner.name}! Discover the story, recipe, and more.` : 'Find out what you should eat tonight!';
  
  useEffect(() => {
  if (winner) {
    const fetchContentfulData = async () => {
      // CLS 수정을 위해 isLoading(true)를 다시 사용합니다.
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
        // CLS 수정을 위해 isLoading(false)를 다시 사용합니다.
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

  // if (isLoading) { ... } -> CLS 수정으로 인해 이 블록은 필요 없습니다.

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

  const options = {
  renderNode: {
    'embedded-asset-block': (node: any) => {
      const { file, title } = node.data.target.fields;
      const { width, height } = file.details.image;
      return <img src={`https:${file.url}`} width={width} height={height} alt={title} style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }} />;
    },
  },
};

  // === [LCP 해결 로직] ===
  // Contentful 이미지 최적화 파라미터
  const imageParams = '?w=800&fm=webp&q=75';
  let imageUrlToRender;
  let isContentfulImage = false;

  // LCP로 사용될 이미지 URL을 결정합니다.
  if (sensoryMap && sensoryMap.fields.heroImage) {
      imageUrlToRender = 'https:' + sensoryMap.fields.heroImage.fields.file.url + imageParams;
      isContentfulImage = true;
  } else if (foodDetails && foodDetails.fields.recipeImage) {
      imageUrlToRender = 'https:' + foodDetails.fields.recipeImage.fields.file.url + imageParams;
      isContentfulImage = true;
  } else {
      // Contentful 데이터가 없을 때의 fallback 이미지
      // 🚨 중요: 이 이미지는 3.5MB짜리 원본입니다.
      // 이 이미지는 수동으로 압축해서 덮어쓰셔야 합니다.
      imageUrlToRender = winner.imageUrl;
  }
  // === [LCP 해결 로직 끝] ===


  return (
    <div className="text-center p-4 md:p-8 flex flex-col items-center pt-16 sm:pt-24 pb-16">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={`https://thedinnerdecider.au/result/${foodName}`} />
        {/* 최적화된(또는 fallback) URL을 preload 합니다. */}
        {winner && <link rel="preload" fetchPriority="high" as="image" href={imageUrlToRender} />}
      </Helmet>

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
    
    {/* <img> 태그에 최적화된 URL을 src로 사용합니다. */}
    <img 
      src={imageUrlToRender}
      alt={winner.name} 
      className="w-full aspect-[4/3] object-cover" 
      width={400}  /* CLS 방지를 위한 정적 너비/높이 */
      height={300} 
      fetchPriority="high"
    />

    {/* ... (Sensory Map 점/팝업 코드) ... */}
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
        {/* ... (팝업 내부 코드 생략) ... */}
        <button className="absolute top-2 right-3 text-gray-400 text-2xl" onClick={() => setActiveNode(null)}>×</button>
        <h3 className="font-bold text-lg text-yellow-400 mb-2">{activeNode.fields.nodeTitle}</h3>
        <div className="text-sm text-gray-300 prose prose-invert prose-sm max-w-none">
          {documentToReactComponents(activeNode.fields.description, options)}
        </div>
        <div className="mt-4 border-t border-gray-600 pt-4">
          <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Flavor Profile</h4>
          {/* ... (Flavor Profile 맵핑 코드 생략) ... */}
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

      {/* fallback funFact (isLoading이 false일 때만 보이도록) */}
      {!isLoading && !foodDetails && winner.funFact && (
        <div className="mt-8 w-full max-w-md bg-sky-100 text-sky-800 p-4 rounded-xl shadow-lg text-left">
          {/* ... (funFact 내용 생략) ... */}
        </div>
      )}

      {/* fallback eatLikeLocal (isLoading이 false일 때만 보이도록) */}
      {!isLoading && !foodDetails && winner.eatLikeLocal && winner.eatLikeLocal.length > 0 && (
        <div className="mt-8 w-full max-w-md bg-white p-6 rounded-xl shadow-lg text-left">
          {/* ... (eatLikeLocal 내용 생략) ... */}
        </div>
      )}

      {/* --- [CLS 해결 1: '음식 역사' 공간 확보] --- */}
      <div style={{ minHeight: isLoading ? '300px' : 'auto' }}> 
        {foodDetails && foodDetails.fields.foodHistory && (
          <div className="mt-8 w-full max-w-md bg-white p-6 rounded-xl shadow-lg text-left">
            <div className="prose text-slate-600 max-w-none">
              {documentToReactComponents(foodDetails.fields.foodHistory)}
              </div>
              </div>
            )}
      </div>

      {/* --- [CLS 해결 2: '레시피' 공간 확보] --- */}
      <div style={{ minHeight: isLoading ? '400px' : 'auto' }}>
         {foodDetails && (
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
        )}
      </div>
   
      {/* 'What's next?' 섹션 */}
      <div className="mt-8 w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden">
        {/* ... (내용 생략) ... */}
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