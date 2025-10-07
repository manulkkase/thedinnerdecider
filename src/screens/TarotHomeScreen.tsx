
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
      document.body.style.backgroundColor = '#0c0a14';
      return () => {
        document.body.style.backgroundColor = '#f0f8ff'; // 원래 배경색으로 복원
      };
    }, []);
  
    useEffect(() => {
    // 1. body 배경색을 어둡게 변경합니다.
    document.body.style.backgroundColor = '#0c0a14';
    
    // 2. App.tsx의 main 태그를 찾아서 배경색을 투명하게 만듭니다.
    const mainElement = document.querySelector('main');
    if (mainElement) {
      mainElement.style.backgroundColor = 'transparent';
    }
  
    // 3. 페이지를 떠날 때 모든 배경색을 원래대로 복원합니다.
    return () => {
      document.body.style.backgroundColor = '#f0f8ff'; // body 원래 배경색
      if (mainElement) {
        mainElement.style.backgroundColor = ''; // main 원래 배경색 (CSS 클래스 값으로 돌아감)
      }
    };
  }, []); // 처음 한 번만 실행되도록 함

  const styles: { [key: string]: React.CSSProperties } = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '80vh',
      animation: 'fadeIn 1s ease-in-out',
      padding: '0 1.5rem', 
      boxSizing: 'border-box'
    },
    title: {
      fontFamily: "'Cinzel', serif",
      fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
      fontWeight: 700,
      color: '#FFFFFF',
      textShadow: '0 0 15px #B889FF, 0 0 5px #FFFFFF',
      margin: '0',
    },
    subtitle: {
  fontSize: 'clamp(1rem, 3vw, 1.25rem)',
  color: '#b3aed1',
  marginTop: '1rem',
  maxWidth: '600px',
  lineHeight: 1.7,
  textAlign: 'center',
    },
    subtitleLine: {
  display: 'block', // 각 줄을 별도의 블록으로 만듦
  opacity: 0, // 기본적으로 투명하게
  animation: 'fadeInUp 0.8s ease-out forwards', // 애니메이션 적용
    },
    
    button: {
      fontFamily: "'Cinzel', serif",
      fontSize: '1.2rem',
      padding: '1rem 2.5rem',
      marginTop: '3rem',
      backgroundColor: 'transparent',
      color: '#FFC857',
      border: '2px solid #FFC857',
      borderRadius: '50px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: isHovered ? '0 0 20px #FFC857' : '0 0 10px #FFC857',
      transform: isHovered ? 'scale(1.05)' : 'scale(1)',
    },
  };

  return (
    <div style={styles.container}>
       <style>{`
       @keyframes fadeIn { ... }
       @keyframes fadeInUp {
       from { opacity: 0; transform: translateY(20px); }
       to { opacity: 1; transform: translateY(0); }
       }
     `}</style>

      <h1 style={styles.title}>Food Tarot</h1>
      <p style={styles.subtitle}>
        <span style={{...styles.subtitleLine, animationDelay: '0.2s'}}>
          Your culinary destiny is written in the cards.
          </span>
          <span style={{...styles.subtitleLine, animationDelay: '0.7s'}}>
            Answer the call of the cosmos.
            </span>
            <span style={{...styles.subtitleLine, animationDelay: '1.2s'}}>
              Draw three cards and reveal the feast that awaits.
              </span>
        </p>

      <button
        style={styles.button}
        onClick={() => navigate('/food-tarot/game')}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Consult the Oracle
      </button>
    </div>
  );
};

export default HomePage;
