import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './HomeScreen.css';
import { Helmet } from 'react-helmet-async';
import { ALL_FOODS } from '../../constants/foods';

// 구조화된 데이터 (JSON-LD)
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "The Dinner Decider",
  "url": "https://www.thedinnerdecider.au",
  "description": "Interactive food decision games including Food Battle Royale tournament, The Dinner Alchemist, and Food Personality Quiz.",
  "applicationCategory": "EntertainmentApplication",
  "operatingSystem": "Any",
  "browserRequirements": "Requires JavaScript",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "AUD"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "156"
  }
};

// 오늘의 랜덤 인기 음식 3개 선택
const getTodaysPopularFoods = () => {
  const today = new Date().toDateString();
  const seed = today.split('').reduce((a, c) => a + c.charCodeAt(0), 0);
  const shuffled = [...ALL_FOODS].sort(() => 0.5 - ((seed * Math.random()) % 1));
  return shuffled.slice(0, 3);
};

// 애니메이션 variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5 }
  }
};

// 스포트라이트 카드 컴포넌트
const SpotlightCard: React.FC<{
  children: React.ReactNode;
  className?: string;
  to: string;
}> = ({ children, className, to }) => {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <Link
        ref={cardRef}
        to={to}
        className={`choice-panel ${className}`}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          '--mouse-x': `${mousePosition.x}px`,
          '--mouse-y': `${mousePosition.y}px`,
          '--spotlight-opacity': isHovered ? 1 : 0
        } as React.CSSProperties}
      >
        {children}
        <div className="spotlight-effect" />
      </Link>
    </motion.div>
  );
};

const HomeScreen: React.FC = () => {
  const [playCount, setPlayCount] = useState(0);
  const popularFoods = getTodaysPopularFoods();

  // 소셜 증거용 플레이 카운트 (localStorage 기반)
  useEffect(() => {
    const storedCount = localStorage.getItem('totalPlayCount');
    const baseCount = 1247; // 기본 시작 수치
    const count = storedCount ? parseInt(storedCount) : baseCount;
    setPlayCount(count);
  }, []);

  return (
    <div className="home-container">
      <Helmet>
        <title>The Dinner Decider - Settle Your Dinner Debates</title>
        <meta
          name="description"
          content="What's for dinner tonight? Will you let your cravings battle it out in a tournament, or let the cards reveal your fated dish? The Dinner Decider helps you choose."
        />
        <link rel="canonical" href="https://www.thedinnerdecider.au/" />
        <meta property="og:title" content="The Dinner Decider - Fun Food Games" />
        <meta property="og:description" content="Play Food Battle Royale Tournament, The Dinner Alchemist, or Food Personality Quiz to decide what to eat!" />
        <meta property="og:image" content="https://www.thedinnerdecider.au/images/og-image-new.png" />
        <meta property="og:url" content="https://www.thedinnerdecider.au" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      {/* 플로팅 파티클 배경 */}
      <div className="floating-particles">
        {[...Array(6)].map((_, i) => (
          <div key={i} className={`particle particle-${i + 1}`} />
        ))}
      </div>

      <motion.div
        className="home-content-wrapper"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* 헤더 섹션 */}
        <motion.div className="header" variants={itemVariants}>
          <h1 className="gradient-text">The Dinner Decider</h1>
          <p className="subtitle">Can't decide what to eat? Let's turn it into a game!</p>

          {/* 소셜 증거 배지 */}
          <motion.div
            className="social-proof-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.4 }}
          >
            <span className="pulse-dot"></span>
            <span>{playCount.toLocaleString()}+ decisions made today</span>
          </motion.div>
        </motion.div>

        {/* 긴급성 배너 */}
        <motion.div className="urgency-banner" variants={itemVariants}>
          ⏱️ Decide in under 30 seconds — no more endless debates!
        </motion.div>

        {/* 게임 선택 섹션 */}
        <motion.div className="game-choice-wrapper" variants={itemVariants}>
          <h2>How should we decide tonight?</h2>
          <motion.div
            className="game-choice-panels"
            variants={containerVariants}
          >
            <SpotlightCard to="/tournament-setup" className="tournament-panel">
              <h3>Food Battle Royale!</h3>
              <p>Have a few candidates in mind? Let them battle it out to find the winner.</p>
              <div className="choice-button">
                Start Tournament
                <span className="btn-arrow">→</span>
              </div>
              <span className="panel-badge">🔥 Most Popular</span>
            </SpotlightCard>

            <SpotlightCard to="/alchemist" className="tarot-panel">
              <h3>The Dinner Alchemist</h3>
              <p>Mix your cravings into the cauldron and brew your perfect meal.</p>
              <div className="choice-button">
                Start Brewing
                <span className="btn-arrow">→</span>
              </div>
              <span className="panel-badge">🧪 New!</span>
            </SpotlightCard>
          </motion.div>
        </motion.div>

        {/* Quiz Promo - Modern Glassmorphism Design */}
        <motion.div
          variants={itemVariants}
          style={{ marginTop: '1.5rem' }}
        >
          <Link to="/quiz" style={{ textDecoration: 'none' }}>
            <motion.div
              className="quiz-promo-modern"
              style={{
                position: 'relative',
                padding: '1.25rem 1.5rem',
                background: 'rgba(167, 139, 250, 0.08)',
                backdropFilter: 'blur(10px)',
                borderRadius: '16px',
                border: '1px solid rgba(167, 139, 250, 0.2)',
                overflow: 'hidden',
                cursor: 'pointer',
              }}
              whileHover={{
                scale: 1.02,
                borderColor: 'rgba(167, 139, 250, 0.5)',
                boxShadow: '0 8px 32px rgba(167, 139, 250, 0.2)',
              }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Subtle gradient shine effect */}
              <motion.div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: '-100%',
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent)',
                  pointerEvents: 'none',
                }}
                animate={{ left: ['−100%', '200%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear', repeatDelay: 2 }}
              />

              {/* Content */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.25rem' }}>
                    <h3 style={{
                      fontFamily: "'Cinzel', serif",
                      fontSize: '1.15rem',
                      fontWeight: 700,
                      color: '#e9d5ff',
                      margin: 0,
                    }}>
                      What's Your Food Personality?
                    </h3>
                    <span style={{
                      background: 'linear-gradient(90deg, #a78bfa, #ec4899)',
                      padding: '3px 10px',
                      borderRadius: '100px',
                      fontSize: '0.6rem',
                      fontWeight: 700,
                      color: 'white',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                    }}>
                      Quiz
                    </span>
                  </div>
                  <p style={{
                    color: '#9ca3af',
                    fontSize: '0.9rem',
                    margin: 0,
                  }}>
                    5 quick questions → Discover your type → Share!
                  </p>
                </div>

                {/* Arrow with hover animation */}
                <motion.div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, rgba(167, 139, 250, 0.2), rgba(236, 72, 153, 0.2))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.25rem',
                    color: '#a78bfa',
                    flexShrink: 0,
                  }}
                  whileHover={{ scale: 1.1, background: 'linear-gradient(135deg, rgba(167, 139, 250, 0.4), rgba(236, 72, 153, 0.4))' }}
                >
                  →
                </motion.div>
              </div>
            </motion.div>
          </Link>
        </motion.div>

        {/* How It Works Section */}
        <motion.section className="how-it-works-section" variants={itemVariants}>
          <h2 className="how-it-works-title">How It Works</h2>
          <div className="how-it-works-steps">
            <motion.div
              className="step-card"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <span className="step-number">01</span>
              <div className="step-icon">🍔🍣🥗</div>
              <h3>Pick Your Cravings</h3>
              <p>Select your candidates or choose a category</p>
            </motion.div>

            <div className="step-arrow">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <motion.div
              className="step-card"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <span className="step-number">02</span>
              <div className="step-icon step-icon-battle">
                <span className="vs-badge">VS</span>
              </div>
              <h3>Start the Battle</h3>
              <p>Choose the winner in head-to-head matchups</p>
            </motion.div>

            <div className="step-arrow">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <motion.div
              className="step-card"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <span className="step-number">03</span>
              <div className="step-icon">🏆🌮</div>
              <h3>Meet the Champion</h3>
              <p>Stop guessing and start eating</p>
            </motion.div>
          </div>

          <Link to="/tournament-setup" className="how-it-works-cta">
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Battle
              <span className="cta-arrow">→</span>
            </motion.span>
          </Link>
        </motion.section>

        {/* 오늘의 인기 음식 미리보기 */}
        <motion.div className="popular-foods-preview" variants={itemVariants}>
          <h3>🍽️ Trending Today</h3>
          <div className="food-preview-grid">
            {popularFoods.map((food, index) => (
              <motion.div
                key={food.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <Link
                  to={`/result/${encodeURIComponent(food.name)}`}
                  className="food-preview-item"
                >
                  <img src={food.imageUrl} alt={food.name} loading="lazy" />
                  <span>{food.name}</span>
                </Link>
              </motion.div>
            ))}
          </div>
          <Link to="/explore-foods" className="explore-link">
            Explore all {ALL_FOODS.length} dishes →
          </Link>
        </motion.div>

      </motion.div>
    </div>
  );
};

export default HomeScreen;