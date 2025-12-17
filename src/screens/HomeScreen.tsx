import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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

      <div className="home-content-wrapper">
        {/* 헤더 섹션 */}
        <div className="header">
          <h1>The Dinner Decider</h1>
          <p>Can't decide what to eat? Let's turn it into a game!</p>

          {/* 소셜 증거 배지 */}
          <div className="social-proof-badge">
            <span className="pulse-dot"></span>
            <span>{playCount.toLocaleString()}+ decisions made today</span>
          </div>
        </div>

        {/* 긴급성 배너 */}
        <div className="urgency-banner">
          ⏱️ Decide in under 30 seconds — no more endless debates!
        </div>

        {/* 게임 선택 섹션 */}
        <div className="game-choice-wrapper">
          <h2>How should we decide tonight?</h2>
          <div className="game-choice-panels">

            <Link to="/tournament-setup" className="choice-panel tournament-panel">
              <div className="panel-icon"></div>
              <h3>Food Battle Royale!</h3>
              <p>Have a few candidates in mind? Let them battle it out to find the winner.</p>
              <div className="choice-button">
                Start Tournament
                <span className="btn-arrow">→</span>
              </div>
              <span className="panel-badge">🔥 Most Popular</span>
            </Link>

            <Link to="/food-tarot" className="choice-panel tarot-panel">
              <div className="panel-icon"></div>
              <h3>Leave it to Destiny!</h3>
              <p>Need some inspiration? Let the mystical cards find the fated menu for you.</p>
              <div className="choice-button">
                Consult the Tarot
                <span className="btn-arrow">→</span>
              </div>
              <span className="panel-badge">✨ Fun & Quick</span>
            </Link>

          </div>
        </div>

        {/* 오늘의 인기 음식 미리보기 */}
        <div className="popular-foods-preview">
          <h3>🍽️ Trending Today</h3>
          <div className="food-preview-grid">
            {popularFoods.map((food) => (
              <Link
                key={food.id}
                to={`/result/${encodeURIComponent(food.name)}`}
                className="food-preview-item"
              >
                <img src={food.imageUrl} alt={food.name} loading="lazy" />
                <span>{food.name}</span>
              </Link>
            ))}
          </div>
          <Link to="/explore-foods" className="explore-link">
            Explore all 100 dishes →
          </Link>
        </div>

      </div>
    </div>
  );
};

export default HomeScreen;