import React from 'react';
import { Link } from 'react-router-dom';
import './HomeScreen.css';
import { Helmet } from 'react-helmet-async';

// 1. 여기에 '웹 애플리케이션' 구조화된 데이터(JSON-LD)를 정의합니다.
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication", // 이 페이지가 '웹 앱/게임'임을 명시
  "name": "The Dinner Decider",
  "url": "https://www.thedinnerdecider.au", // www가 붙은 표준 주소로 통일
  "description": "Interactive food decision games to help you decide what to eat.",
  "applicationCategory": "GameApplication",
  "operatingSystem": "Any",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "AUD"
  }
};

const HomeScreen: React.FC = () => {
  
  return (
    // .home-container가 이제 전체 배경을 담당합니다.
    <div className="home-container"> 
      
      {/* 2. <Helmet> 태그를 아래와 같이 확장합니다. */}
      <Helmet>
        {/* --- 기본 SEO (아주 좋습니다) --- */}
        <title>The Dinner Decider - Settle Your Dinner Debates</title>
        <meta 
          name="description" 
          content="What's for dinner tonight? Will you let your cravings battle it out in a tournament, or let the cards reveal your fated dish? The Dinner Decider helps you choose." 
        />
        <link rel="canonical" href="https://www.thedinnerdecider.au/" />

        {/* --- 1번 제안 (OG 태그) 덮어쓰기 --- */}
        {/* 이 태그들은 index.html의 기본값과 동일하지만, 
            홈페이지용으로 명확하게 다시 정의해주는 것이 좋습니다. */}
        <meta property="og:title" content="The Dinner Decider - Fun Food Games" />
        <meta property="og:description" content="Play Food Battle Royale or Food Tarot to decide what to eat tonight!" />
        <meta property="og:image" content="https://www.thedinnerdecider.au/images/og-image.jpg" />
        <meta property="og:url" content="https://www.thedinnerdecider.au" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* --- 3번 제안 (구조화된 데이터) 삽입 --- */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      {/* 2. 콘텐츠를 감싸는 내부 wrapper div를 추가합니다. */}
      <div className="home-content-wrapper">

        <div className="header">
          <h1>The Dinner Decider</h1>
          <p>Can't decide what to eat? Let's turn it into a game!</p>
        </div>

        <div className="game-choice-wrapper">
          <h2>How should we decide tonight?</h2>
          <div className="game-choice-panels">
            
            <Link to="/tournament-setup" className="choice-panel tournament-panel">
              <div className="panel-icon"></div>
              <h3>Food Battle Royale!</h3>
              <p>Have a few candidates in mind? Let them battle it out to find the winner.</p>
              <div className="choice-button">Start Tournament</div>
            </Link>

            <Link to="/food-tarot" className="choice-panel tarot-panel">
              <div className="panel-icon"></div>
              <h3>Leave it to Destiny!</h3>
              <p>Need some inspiration? Let the mystical cards find the fated menu for you.</p>
              <div className="choice-button">Consult the Tarot</div>
            </Link>
            
          </div>
        </div>
        
      </div> {/* 2. 내부 wrapper div를 닫습니다. */}
    </div>
  );
};

export default HomeScreen;