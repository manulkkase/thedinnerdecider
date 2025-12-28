import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Confetti from 'react-confetti';
import { ALL_FOODS } from '../../constants/foods';
import Modal from '../../components/Modal';
import { Helmet } from 'react-helmet-async';
import './ResultScreen.css';

// 관련 음식 추천 함수 (같은 태그 기반)
const getRelatedFoods = (currentFood: typeof ALL_FOODS[0] | null, count: number = 6) => {
  if (!currentFood) return [];

  return ALL_FOODS
    .filter(food => food.id !== currentFood.id)
    .filter(food => food.tags?.some(tag => currentFood.tags?.includes(tag)))
    .sort(() => Math.random() - 0.5)
    .slice(0, count);
};

type TabType = 'story' | 'order' | 'similar';

const ResultScreen: React.FC = () => {
  const [showConfetti, setShowConfetti] = useState(true);
  const [activeTab, setActiveTab] = useState<TabType>('story');
  const [windowDimensions, setWindowDimensions] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    height: typeof window !== 'undefined' ? window.innerHeight : 800
  });

  useEffect(() => {
    document.body.classList.remove('home-background');

    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    window.addEventListener('resize', handleResize);

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
      setModalContent({ title: "Link Copied!", body: "Share this result with your friends!" });
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
        <button onClick={handlePlayAgain} className="result-cta-primary mt-8">
          Back to Start
        </button>
      </div>
    );
  }

  return (
    <div className="result-page">
      {/* 🎉 Confetti */}
      {showConfetti && (
        <div className="confetti-container">
          <Confetti
            width={windowDimensions.width}
            height={windowDimensions.height}
            recycle={false}
            numberOfPieces={300}
            gravity={0.3}
            colors={['#E07B3C', '#D4915A', '#4DB6AC', '#3D9A91', '#F4A574']}
          />
        </div>
      )}

      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={`https://www.thedinnerdecider.au/result/${foodName}`} />
        <link rel="preload" fetchPriority="high" as="image" href={winner.imageUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={`https://www.thedinnerdecider.au${winner.imageUrl}`} />
        <meta property="og:url" content={`https://www.thedinnerdecider.au/result/${foodName}`} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Recipe",
            "name": winner.name,
            "description": winner.funFact || pageDescription,
            "image": `https://www.thedinnerdecider.au${winner.imageUrl}`,
            "author": { "@type": "Organization", "name": "The Dinner Decider" },
            "recipeCategory": winner.tags?.[0] || "Main Course",
            "keywords": winner.tags?.join(", ") || winner.name
          })}
        </script>
      </Helmet>

      {/* 🏆 Hero Section */}
      <div className="result-hero">
        <img
          src={winner.imageUrl}
          alt={winner.name}
          className="result-hero-image"
          fetchPriority="high"
        />
        <div className="result-hero-overlay" />

        {/* Winner Badge */}
        <motion.div
          className="winner-badge"
          initial={{ scale: 0, rotate: -20 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 15, delay: 0.3 }}
        >
          <span className="winner-badge-icon">🏆</span>
          WINNER
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="result-content">
        {/* Glass Card */}
        <motion.div
          className="result-glass-card"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.h1
            className="result-title"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 15, delay: 0.4 }}
          >
            {winner.name}
          </motion.h1>

          <p className="result-subtitle">Tonight's dinner is decided! 🎉</p>

          {/* Tags */}
          {winner.tags && winner.tags.length > 0 && (
            <div className="result-tags">
              {winner.tags.slice(0, 4).map((tag, index) => (
                <span key={index} className="result-tag">{tag}</span>
              ))}
            </div>
          )}

          {/* CTA Buttons */}
          <div className="result-cta-group">
            <button onClick={handleShare} className="result-cta-primary">
              <span>📱</span> Share My Pick
            </button>
            <button onClick={handlePlayAgain} className="result-cta-secondary">
              <span>🔄</span> Play Again
            </button>
          </div>
        </motion.div>

        {/* Tabbed Section */}
        <motion.div
          className="result-tabs-container"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {/* Tab Buttons */}
          <div className="result-tabs">
            <button
              className={`result-tab ${activeTab === 'story' ? 'active' : ''}`}
              onClick={() => setActiveTab('story')}
            >
              📖 Story
            </button>
            <button
              className={`result-tab ${activeTab === 'order' ? 'active' : ''}`}
              onClick={() => setActiveTab('order')}
            >
              🛵 Order
            </button>
            <button
              className={`result-tab ${activeTab === 'similar' ? 'active' : ''}`}
              onClick={() => setActiveTab('similar')}
            >
              🍽️ Similar
            </button>
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              className="result-tab-content"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
            >
              {/* STORY TAB */}
              {activeTab === 'story' && (
                <div className="story-section">
                  {winner.funFact && (
                    <div className="fun-fact-card">
                      <h4><span>💡</span> Did you know?</h4>
                      <p>{winner.funFact}</p>
                    </div>
                  )}

                  {winner.eatLikeLocal && winner.eatLikeLocal.length > 0 && (
                    <div className="local-tip-card">
                      <h4><span>🍴</span> Eat Like a Local</h4>
                      {winner.eatLikeLocal.map((step, index) => (
                        <div key={index} className="local-tip-item">
                          <span className="local-tip-icon">{step.icon}</span>
                          <div>
                            <p className="local-tip-title">{step.title}</p>
                            <p className="local-tip-desc">{step.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {!winner.funFact && (!winner.eatLikeLocal || winner.eatLikeLocal.length === 0) && (
                    <p className="text-center text-slate-500 py-4">
                      No story available for this dish yet.
                    </p>
                  )}
                </div>
              )}

              {/* ORDER TAB */}
              {activeTab === 'order' && (
                <div className="order-section">
                  {winner.checklist && winner.checklist.length > 0 && (
                    <div className="order-checklist">
                      <h4>🎯 Find a Great Spot</h4>
                      {winner.checklist.map((item, index) => (
                        <div key={index} className="order-checklist-item">
                          <svg className="order-checklist-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="order-buttons">
                    <button onClick={handleSearchNearby} className="order-button maps">
                      <span>📍</span> Find on Google Maps
                    </button>
                    <button
                      onClick={() => { trackLinkClick('Uber Eats'); window.open(`https://www.ubereats.com/search?q=${winner.name}`) }}
                      className="order-button uber"
                    >
                      <span>🥡</span> Order on Uber Eats
                    </button>
                    <button
                      onClick={() => { trackLinkClick('DoorDash'); window.open(`https://www.doordash.com/search/store/${encodeURIComponent(winner.name)}`) }}
                      className="order-button doordash"
                    >
                      <span>🚗</span> Order on DoorDash
                    </button>
                  </div>

                  {winner.pairings && winner.pairings.length > 0 && (
                    <div className="pairings-card">
                      <h4>🍷 Complete Your Meal</h4>
                      {winner.pairings.map((item, index) => (
                        <div key={index} className="pairing-item">
                          <span className="pairing-icon">{item.icon}</span>
                          <div>
                            <p className="pairing-type">{item.type}</p>
                            <p className="pairing-suggestion">{item.suggestion}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* SIMILAR TAB */}
              {activeTab === 'similar' && (
                <div className="similar-section">
                  {relatedFoods.length > 0 ? (
                    <>
                      <div className="similar-grid">
                        {relatedFoods.map((food) => (
                          <Link
                            key={food.id}
                            to={`/result/${encodeURIComponent(food.name)}`}
                            className="similar-item"
                          >
                            <img
                              src={food.imageUrl}
                              alt={food.name}
                              className="similar-image"
                              loading="lazy"
                            />
                            <span className="similar-name">{food.name}</span>
                          </Link>
                        ))}
                      </div>
                      <Link to="/explore-foods" className="explore-link">
                        Explore all {ALL_FOODS.length} dishes →
                      </Link>
                    </>
                  ) : (
                    <p className="text-center text-slate-500 py-4">
                      No similar dishes found.
                    </p>
                  )}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>
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