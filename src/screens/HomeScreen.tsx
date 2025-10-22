import React from 'react';
import { Link } from 'react-router-dom';
import './HomeScreen.css';
import { Helmet } from 'react-helmet-async';

const HomeScreen: React.FC = () => {
  
  // 1. useEffect 훅을 여기서 완전히 삭제합니다.

  return (
    // .home-container가 이제 전체 배경을 담당합니다.
    <div className="home-container"> 
      <Helmet>
        <title>The Dinner Decider - Settle Your Dinner Debates</title>
        <meta 
          name="description" 
          content="What's for dinner tonight? Will you let your cravings battle it out in a tournament, or let the cards reveal your fated dish? The Dinner Decider helps you choose." 
        />
        <link rel="canonical" href="https://www.thedinnerdecider.au/" />
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