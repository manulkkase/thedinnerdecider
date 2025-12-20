import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ResultContent } from '../types/tarotTypes';
import { generateResult } from '../services/tarotLogic';
import { getCardInfo } from '../data/tarotSetup';
import { foodData, FoodItem } from '../data/foodData';
import { fixedReadings } from '../data/fixedReadings';
import { ALL_FOODS } from '../../constants/foods';
import { Helmet } from 'react-helmet-async';

// Optimized Image Component
interface OptimizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  fetchPriority?: 'high' | 'low' | 'auto';
  loading?: 'lazy' | 'eager';
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  fetchPriority,
  loading = 'lazy'
}) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      style={{ aspectRatio: `${width} / ${height}`, width: '100%', height: 'auto' }}
      loading={loading}
      decoding="async"
      fetchPriority={fetchPriority}
    />
  );
};

// Get related foods for recommendations
const getRelatedFoods = (currentFood: FoodItem | null, count: number = 3) => {
  if (!currentFood) return [];

  // Find matching food in ALL_FOODS to get tags
  const allFoodsMatch = ALL_FOODS.find(f => f.name === currentFood.name);
  if (!allFoodsMatch) return ALL_FOODS.slice(0, count);

  return ALL_FOODS
    .filter(food => food.name !== currentFood.name)
    .filter(food => food.tags?.some(tag => allFoodsMatch.tags?.includes(tag)))
    .sort(() => Math.random() - 0.5)
    .slice(0, count);
};

const ResultPage: React.FC = () => {
  const { c1, c2, c3 } = useParams<{ c1: string; c2: string; c3: string }>();
  const navigate = useNavigate();
  const [content, setContent] = useState<ResultContent | null>(null);
  const [matchedFood, setMatchedFood] = useState<FoodItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [copySuccess, setCopySuccess] = useState('');

  const pageTitle = content ? `${content.headline} - The Dinner Decider` : 'Your Food Tarot Result - The Dinner Decider';
  const pageDescription = matchedFood ? `Your fated dish is ${matchedFood.name}. Discover what the food tarot says about your cravings.` : 'Find out your fated dish with The Dinner Decider.';

  // Get full food data from ALL_FOODS for additional info
  const fullFoodData = useMemo(() => {
    if (!matchedFood) return null;
    return ALL_FOODS.find(f => f.name === matchedFood.name) || null;
  }, [matchedFood]);

  // Related foods
  const relatedFoods = useMemo(() => getRelatedFoods(matchedFood), [matchedFood]);

  useEffect(() => {
    document.body.style.backgroundColor = '#0c0a14';
    const mainElement = document.querySelector('main');
    if (mainElement) {
      mainElement.style.backgroundColor = 'transparent';
    }
    return () => {
      document.body.style.backgroundColor = '';
      if (mainElement) {
        mainElement.style.backgroundColor = '';
      }
    };
  }, []);

  const selections = useMemo(() => ({
    energy: getCardInfo('energy', c1),
    method: getCardInfo('method', c2),
    flavor: getCardInfo('flavor', c3)
  }), [c1, c2, c3]);

  const handleSearchNearby = () => {
    if (matchedFood) {
      const query = `${matchedFood.name} near me`;
      const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  const fetchResult = useCallback(async () => {
    if (!c1 || !c2 || !c3) {
      setError("Invalid reading. Please start again.");
      setLoading(false);
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const result = await generateResult(c1, c2, c3);

      const readingKey = `${c1}-${c2}-${c3}`;
      const foodId = fixedReadings[readingKey];
      const match = foodData.find(food => food.id === foodId) || foodData[0];

      setContent(result);
      setMatchedFood(match);
    } catch (err: any) {
      setError(err.message || "An unknown error occurred.");
    } finally {
      setLoading(false);
    }
  }, [c1, c2, c3]);

  useEffect(() => {
    fetchResult();
  }, [fetchResult]);

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

  // Loading State - Simplified
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[80vh] p-4 animate-fadeIn">
        <Helmet>
          <title>Interpreting your fate... - The Dinner Decider</title>
          <meta name="robots" content="noindex" />
        </Helmet>
        <div className="text-center">
          <div className="text-6xl mb-6 animate-pulse">🔮</div>
          <h2 className="text-2xl font-cinzel text-[#FFC857] mb-2">Reading the Cards...</h2>
          <p className="text-[#b3aed1]">The spirits are revealing your fate</p>
        </div>
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

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] p-4 animate-fadeIn box-border">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={`https://www.thedinnerdecider.au/food-tarot/result/${c1}/${c2}/${c3}`} />
        <link rel="preload" as="image" href={matchedFood.imageUrl} fetchPriority="high" />
      </Helmet>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes fadeInOut { 0%, 100% { opacity: 0; transform: translateY(20px); } 10%, 90% { opacity: 1; transform: translateY(0); } }
      `}</style>

      {content && (
        <div className="max-w-3xl w-full box-border">
          {/* Selected Cards */}
          <div className="flex justify-center gap-4 mb-8 flex-wrap">
            {Object.values(selections).map((cardInfo, index) => cardInfo && (
              <div key={index} className="flex flex-col items-center gap-2 bg-[#171423] p-4 rounded-lg border border-[#332f44] w-24">
                <OptimizedImage
                  src={cardInfo.imageUrl}
                  alt={cardInfo.name}
                  width={40}
                  height={40}
                  className="w-10 h-10"
                  loading="eager"
                />
                <span className="text-xs text-[#b3aed1] text-center">{cardInfo.name}</span>
              </div>
            ))}
          </div>

          {/* Headline */}
          <h1 className="font-cinzel text-3xl sm:text-4xl md:text-5xl text-white text-shadow-purple mb-6 text-center">{content.headline}</h1>
          <p className="text-[#E0E0E0] leading-7 text-left whitespace-pre-wrap mb-8 bg-[#171423]/50 p-6 rounded-lg border border-[#332f44]">
            {content.body}
          </p>

          {/* Fated Dish Card */}
          <div className="relative bg-white border border-gray-200 p-6 rounded-xl shadow-2xl box-border">
            <div className="w-full aspect-[4/3] rounded-lg overflow-hidden mb-6">
              <OptimizedImage
                src={matchedFood.imageUrl}
                alt={matchedFood.name}
                className="w-full h-full object-cover"
                width={800}
                height={600}
                fetchPriority="high"
                loading="eager"
              />
            </div>

            <span className="text-gray-500 text-base mb-2 block">Your Fated Dish is:</span>
            <h2 className="font-cinzel text-2xl sm:text-3xl text-gray-800 m-0">{matchedFood.name}</h2>
            <p className="text-gray-400 text-sm italic mt-2">Oracle's Decree: "{content.menu}"</p>
          </div>

          {/* Fun Fact */}
          {fullFoodData?.funFact && (
            <div className="mt-8 w-full bg-[#171423] border border-[#332f44] p-6 rounded-xl text-left">
              <div className="flex items-start">
                <span className="text-2xl mr-3">💡</span>
                <div>
                  <strong className="font-semibold text-[#FFC857]">Did you know?</strong>
                  <span className="block mt-1 text-[#b3aed1]">{fullFoodData.funFact}</span>
                </div>
              </div>
            </div>
          )}

          {/* What's next? */}
          <div className="mt-8 w-full bg-white rounded-xl p-6 shadow-2xl box-border">
            <h3 className="text-xl font-bold text-gray-800 mb-4">🎯 What's next?</h3>
            <div className="grid gap-3">
              <button
                className="font-lato text-base p-3 px-6 bg-amber-500 text-white border-none rounded-full cursor-pointer transition-all duration-300 font-bold shadow-lg shadow-amber-500/40 hover:bg-amber-600"
                onClick={handleSearchNearby}
              >
                Search on Google Maps 📍
              </button>

              {/* Checklist */}
              {fullFoodData?.checklist && fullFoodData.checklist.length > 0 && (
                <div className="mt-2 text-left p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-gray-700 mb-2">A great spot usually has...</h4>
                  <ul className="list-none p-0 m-0 grid gap-2">
                    {fullFoodData.checklist.map((item, index) => (
                      <li key={index} className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <button
                className="font-lato text-base p-3 px-6 bg-green-500 text-white border-none rounded-full cursor-pointer transition-all duration-300 font-bold shadow-lg shadow-green-500/40 hover:bg-green-600"
                onClick={() => window.open(`https://www.ubereats.com/search?q=${matchedFood?.name}`)}
              >
                Order Delivery (Uber Eats) 🛵
              </button>
              <button
                className="font-lato text-base p-3 px-6 bg-red-500 text-white border-none rounded-full cursor-pointer transition-all duration-300 font-bold shadow-lg shadow-red-500/40 hover:bg-red-600"
                onClick={() => window.open(`https://www.doordash.com/search/store/${encodeURIComponent(matchedFood?.name ?? '')}`)}
              >
                Order Delivery (DoorDash) 🚗
              </button>

              {/* Pairings */}
              {fullFoodData?.pairings && fullFoodData.pairings.length > 0 && (
                <div className="mt-2 text-left p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-gray-800 mb-3">Complete Your Meal</h4>
                  <div className="grid gap-3">
                    {fullFoodData.pairings.map((item, index) => (
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
            </div>
          </div>

          {/* Related Foods */}
          {relatedFoods.length > 0 && (
            <div className="mt-8 w-full bg-[#171423] border border-[#332f44] rounded-xl p-6">
              <h3 className="text-lg font-semibold text-[#FFC857] mb-4 text-left">
                🍽️ Similar Dishes to Explore
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {relatedFoods.map((food) => (
                  <Link
                    key={food.id}
                    to={`/result/${encodeURIComponent(food.name)}`}
                    className="group flex flex-col items-center text-center p-2 bg-[#0c0a14] rounded-lg hover:bg-[#1f1b2e] transition-all duration-300"
                  >
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden mb-2">
                      <img
                        src={food.imageUrl}
                        alt={food.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-[#b3aed1] group-hover:text-[#FFC857] line-clamp-2">
                      {food.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Share & Play Again */}
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <button
              className="w-[160px] h-[50px] flex items-center justify-center font-lato text-base p-3 px-6 bg-[#FFC857] text-[#0c0a14] border-none rounded-full cursor-pointer transition-all duration-300 font-bold"
              onClick={handleShare}
            >
              📤 Share Result
            </button>
            <button
              className="w-[160px] h-[50px] flex items-center justify-center font-lato text-base p-3 px-6 bg-transparent text-[#b3aed1] border-2 border-[#332f44] rounded-full cursor-pointer transition-all duration-300"
              onClick={() => navigate('/')}
            >
              🔄 Play Again
            </button>
          </div>
        </div>
      )}

      {/* Copy Success Toast */}
      {copySuccess && (
        <div className="fixed bottom-5 bg-[#5BE7A9] text-[#0E0B14] py-2 px-5 rounded shadow-lg animate-fadeInOut">
          {copySuccess}
        </div>
      )}
    </div>
  );
};

export default ResultPage;