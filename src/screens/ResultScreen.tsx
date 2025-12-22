import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Confetti from 'react-confetti';
import { ALL_FOODS } from '../../constants/foods';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import AdSense from '../../components/AdSense';
import { Helmet } from 'react-helmet-async';

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
  const [showConfetti, setShowConfetti] = useState(true);
  const [windowDimensions, setWindowDimensions] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    height: typeof window !== 'undefined' ? window.innerHeight : 800
  });

  useEffect(() => {
    document.body.classList.remove('home-background');

    // 플레이 카운트 증가 (소셜 증거용)
    const currentCount = parseInt(localStorage.getItem('totalPlayCount') || '1247');
    localStorage.setItem('totalPlayCount', (currentCount + 1).toString());

    // 윈도우 리사이즈 핸들러
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    window.addEventListener('resize', handleResize);

    // 5초 후 컨페티 중지
    const confettiTimer = setTimeout(() => setShowConfetti(false), 5000);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(confettiTimer);
    };
  }, []);

  const { foodName } = useParams<{ foodName: string }>();
  const navigate = useNavigate();
  const [modalContent, setModalContent] = useState<{ title: string; body: string } | null>(null);

  const winner = useMemo(() => {
    if (!foodName) return null;
    return ALL_FOODS.find(food => food.name === decodeURIComponent(foodName)) || null;
  }, [foodName]);

  // 관련 음식 추천
  const relatedFoods = useMemo(() => getRelatedFoods(winner), [winner]);

  const pageTitle = winner ? `${winner.name} - The Dinner Decider` : 'Result - The Dinner Decider';
  const pageDescription = winner ? `Tonight's winner is ${winner.name}! Discover the story, recipe, and more.` : 'Find out what you should eat tonight!';

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

  return (
    <div className="text-center p-4 md:p-8 flex flex-col items-center pt-16 sm:pt-24 pb-16 min-h-screen relative overflow-hidden">
      {/* 🎉 Confetti Celebration */}
      {showConfetti && (
        <Confetti
          width={windowDimensions.width}
          height={windowDimensions.height}
          recycle={false}
          numberOfPieces={300}
          gravity={0.3}
          colors={['#f59e0b', '#FFC857', '#a78bfa', '#5BE7A9', '#ff6b6b']}
        />
      )}

      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={`https://www.thedinnerdecider.au/result/${foodName}`} />
        <link rel="preload" fetchPriority="high" as="image" href={winner.imageUrl} />

        {/* Open Graph tags for social sharing */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={`https://www.thedinnerdecider.au${winner.imageUrl}`} />
        <meta property="og:url" content={`https://www.thedinnerdecider.au/result/${foodName}`} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="The Dinner Decider" />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={`https://www.thedinnerdecider.au${winner.imageUrl}`} />

        {/* Recipe JSON-LD structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Recipe",
            "name": winner.name,
            "description": winner.funFact || pageDescription,
            "image": `https://www.thedinnerdecider.au${winner.imageUrl}`,
            "author": {
              "@type": "Organization",
              "name": "The Dinner Decider"
            },
            "recipeCategory": winner.tags?.[0] || "Main Course",
            "recipeCuisine": winner.tags?.find(t => ['italian', 'mexican', 'japanese', 'indian', 'chinese', 'thai', 'korean', 'vietnamese', 'french', 'greek', 'american', 'australian', 'mediterranean'].includes(t)) || "International",
            "keywords": winner.tags?.join(", ") || winner.name
          })}
        </script>
      </Helmet>

      {/* 🏆 Animated Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-slate-600">Tonight's winner is...</h2>
      </motion.div>

      <motion.h1
        className="text-4xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600 my-4"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 15,
          delay: 0.3
        }}
      >
        👑 {winner.name}! 🎉
      </motion.h1>

      <motion.p
        className="text-lg text-slate-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        Good choice, mate!
      </motion.p>

      {/* Winner Image */}
      <div className="mt-8 w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden">
        <img
          src={winner.imageUrl}
          alt={winner.name}
          className="w-full aspect-[4/3] object-cover"
          width={400}
          height={300}
          fetchPriority="high"
        />
      </div>

      {/* Fun Fact */}
      {winner.funFact && (
        <motion.div
          className="mt-8 w-full max-w-md bg-sky-100 text-sky-800 p-4 rounded-xl shadow-lg text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <div className="flex items-start">
            <span className="text-2xl mr-3">💡</span>
            <div>
              <strong className="font-semibold">Did you know?</strong>
              <span className="block mt-1 text-sky-700">{winner.funFact}</span>
            </div>
          </div>
        </motion.div>
      )}

      {/* Eat Like a Local */}
      {winner.eatLikeLocal && winner.eatLikeLocal.length > 0 && (
        <motion.div
          className="mt-8 w-full max-w-md bg-white p-6 rounded-xl shadow-lg text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <h3 className="text-xl font-semibold text-slate-800 mb-4">🍴 Eat Like a Local</h3>
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
        </motion.div>
      )}

      {/* What's next? */}
      <motion.div
        className="mt-8 w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0 }}
      >
        <div className="p-6">
          <h3 className="text-xl font-semibold text-slate-800 mb-6 text-left">🎯 What's next?</h3>

          <div className="grid gap-4">
            {/* Checklist */}
            {winner.checklist && winner.checklist.length > 0 && (
              <div className="text-left p-4 bg-slate-50 rounded-lg">
                <h4 className="font-semibold text-slate-700 mb-3">Find a Great Spot</h4>
                <ul className="space-y-2 mb-4">
                  {winner.checklist.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      <span className="text-slate-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Action Buttons */}
            <Button onClick={handleSearchNearby} variant="primary" className="w-full">
              Search on Google Maps 📍
            </Button>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Button onClick={() => { trackLinkClick('Uber Eats'); window.open(`https://www.ubereats.com/search?q=${winner.name}`) }} variant="primary" className="w-full bg-green-500 hover:bg-green-600">
                Uber Eats 🛵
              </Button>
              <Button onClick={() => { trackLinkClick('DoorDash'); window.open(`https://www.doordash.com/search/store/${encodeURIComponent(winner.name)}`) }} variant="primary" className="w-full bg-red-600 hover:bg-red-700">
                DoorDash 🚗
              </Button>
            </div>

            {/* Pairings */}
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
        </div>
      </motion.div>

      {/* AdSense 광고 */}
      <div className="mt-8 w-full max-w-md">
        <AdSense className="rounded-xl overflow-hidden" />
      </div>

      {/* 관련 음식 추천 섹션 */}
      {relatedFoods.length > 0 && (
        <motion.div
          className="mt-8 w-full max-w-md bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl shadow-lg p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
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
            Explore all {ALL_FOODS.length} dishes →
          </Link>
        </motion.div>
      )}

      {/* Share & Play Again */}
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