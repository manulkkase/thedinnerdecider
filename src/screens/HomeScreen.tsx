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
  "description": "Interactive food decision games to help you decide what to eat.",
  "applicationCategory": "GameApplication",
  "operatingSystem": "Any",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "AUD"
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
        <meta property="og:description" content="Play Food Battle Royale or Food Tarot to decide what to eat tonight!" />
        <meta property="og:image" content="https://www.thedinnerdecider.au/images/og-image.jpg" />
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
              <div className="panel-icon"></div>
              <h3>Food Battle Royale!</h3>
              <p>Have a few candidates in mind? Let them battle it out to find the winner.</p>
              <div className="choice-button">
                Start Tournament
                <span className="btn-arrow">→</span>
              </div>
              <span className="panel-badge">🔥 Most Popular</span>
            </SpotlightCard>

            <SpotlightCard to="/food-tarot" className="tarot-panel">
              <div className="panel-icon"></div>
              <h3>Leave it to Destiny!</h3>
              <p>Need some inspiration? Let the mystical cards find the fated menu for you.</p>
              <div className="choice-button">
                Consult the Tarot
                <span className="btn-arrow">→</span>
              </div>
              <span className="panel-badge">✨ Fun & Quick</span>
            </SpotlightCard>
          </motion.div>
        </motion.div>

        {/* Quiz Promo - Enhanced */}
        <motion.div
          variants={itemVariants}
          style={{ marginTop: '1.5rem' }}
        >
          <Link to="/quiz" style={{ textDecoration: 'none' }}>
            <motion.div
              className="quiz-promo-enhanced"
              style={{
                position: 'relative',
                padding: '1.5rem',
                background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(236, 72, 153, 0.2) 50%, rgba(251, 146, 60, 0.15) 100%)',
                borderRadius: '20px',
                border: '2px solid transparent',
                backgroundClip: 'padding-box',
                overflow: 'hidden',
                cursor: 'pointer',
              }}
              whileHover={{
                scale: 1.02,
                boxShadow: '0 0 40px rgba(167, 139, 250, 0.4)',
              }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Animated gradient border */}
              <div style={{
                position: 'absolute',
                inset: 0,
                borderRadius: '20px',
                padding: '2px',
                background: 'linear-gradient(90deg, #a78bfa, #ec4899, #f97316, #a78bfa)',
                backgroundSize: '300% 100%',
                animation: 'gradientShift 3s ease infinite',
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude',
                pointerEvents: 'none',
              }} />

              {/* Floating personality emojis */}
              <div style={{ position: 'absolute', top: '10px', right: '15px', fontSize: '1.5rem', opacity: 0.6 }}>
                <motion.span
                  animate={{ y: [0, -5, 0], rotate: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  style={{ display: 'inline-block', marginRight: '8px' }}
                >🌶️</motion.span>
                <motion.span
                  animate={{ y: [0, -8, 0], rotate: [0, -10, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
                  style={{ display: 'inline-block', marginRight: '8px' }}
                >🍰</motion.span>
                <motion.span
                  animate={{ y: [0, -6, 0], rotate: [0, 15, 0] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
                  style={{ display: 'inline-block' }}
                >🌙</motion.span>
              </div>

              {/* Content */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                {/* Pulsing brain icon */}
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #a78bfa 0%, #ec4899 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2rem',
                    boxShadow: '0 0 20px rgba(167, 139, 250, 0.5)',
                  }}
                >
                  🧠
                </motion.div>

                <div style={{ flex: 1 }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    marginBottom: '0.25rem'
                  }}>
                    <h3 style={{
                      fontFamily: "'Cinzel', serif",
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      background: 'linear-gradient(90deg, #a78bfa, #ec4899)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      margin: 0,
                    }}>
                      What's Your Food Personality?
                    </h3>
                    <span style={{
                      background: 'linear-gradient(90deg, #ec4899, #f97316)',
                      padding: '2px 8px',
                      borderRadius: '100px',
                      fontSize: '0.65rem',
                      fontWeight: 700,
                      color: 'white',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                    }}>
                      New
                    </span>
                  </div>
                  <p style={{
                    color: '#d1d5db',
                    fontSize: '0.95rem',
                    margin: 0,
                  }}>
                    Discover your type in 5 quick questions — share your result! ✨
                  </p>
                </div>

                {/* Arrow */}
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                  style={{
                    fontSize: '1.5rem',
                    color: '#a78bfa',
                  }}
                >
                  →
                </motion.div>
              </div>
            </motion.div>
          </Link>
        </motion.div>

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
            Explore all 100 dishes →
          </Link>
        </motion.div>

      </motion.div>
    </div>
  );
};

export default HomeScreen;