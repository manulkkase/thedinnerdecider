import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HomeScreen.css';
import { Helmet } from 'react-helmet-async';

const HomeScreen: React.FC = () => {

  useEffect(() => {
    document.body.classList.add('home-background');
    return () => {
      document.body.classList.remove('home-background');
    };
  }, []);
  
  return (
    <div className="home-container">
      <Helmet>
        <title>The Dinner Decider - Settle Your Dinner Debates</title>
        <meta 
          name="description" 
          content="What's for dinner tonight? Will you let your cravings battle it out in a tournament, or let the cards reveal your fated dish? The Dinner Decider helps you choose." 
        />
        <link rel="canonical" href="https://thedinnerdecider.au/" />
      </Helmet>

      <div className="header">
        <h1>The Dinner Decider</h1>
        <p>Can't decide what to eat? Let's turn it into a game!</p>
      </div>

      <div className="game-choice-wrapper">
        <h2>How should we decide tonight?</h2>
        <div className="game-choice-panels">
          
          {/* 패널 1: 디너 토너먼트 (아이콘 div 추가됨) */}
          <Link to="/tournament-setup" className="choice-panel tournament-panel">
            <div className="panel-icon"></div>
            <h3>Food Battle Royale!</h3>
            <p>Have a few candidates in mind? Let them battle it out to find the winner.</p>
            {/* 버튼을 div로 변경하여 스타일 일관성 유지 */}
            <div className="choice-button">Start Tournament</div>
          </Link>

          {/* 패널 2: 푸드 타로 (아이콘 div 추가됨) */}
          <Link to="/food-tarot" className="choice-panel tarot-panel">
            <div className="panel-icon"></div>
            <h3>Leave it to Destiny!</h3>
            <p>Need some inspiration? Let the mystical cards find the fated menu for you.</p>
            {/* 버튼을 div로 변경하여 스타일 일관성 유지 */}
            <div className="choice-button">Consult the Tarot</div>
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;