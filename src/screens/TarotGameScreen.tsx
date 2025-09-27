import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/TarotCard';
import { CARD_DATA, QUESTIONS } from '../data/tarotSetup';
import { Selections, CardCategory, CardData } from '../types/tarotTypes';

// Utility function to shuffle an array (Fisher-Yates shuffle)
const shuffleArray = <T,>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

const GamePage: React.FC = () => {
  const navigate = useNavigate();
  const categories: CardCategory[] = ['energy', 'method', 'flavor'];
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const [selections, setSelections] = useState<Selections>({
    energy: null,
    method: null,
    flavor: null,
  });
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const [shuffledCardData, setShuffledCardData] = useState<CardData | null>(null);

  const currentCategory = categories[currentCategoryIndex];

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

  // Shuffle cards once when the component mounts
  useEffect(() => {
    const shuffledData: CardData = {
      energy: shuffleArray(CARD_DATA.energy),
      method: shuffleArray(CARD_DATA.method),
      flavor: shuffleArray(CARD_DATA.flavor),
    };
    setShuffledCardData(shuffledData);
  }, []);

  useEffect(() => {
    if (currentCategoryIndex >= categories.length) {
      const { energy, method, flavor } = selections;
      if (energy && method && flavor) {
        navigate(`/food-tarot/result/${energy}/${method}/${flavor}`);
      }
    }
  }, [currentCategoryIndex, navigate, selections]);

  const handleSelectCard = (id: string) => {
    // Lock selection once one is made for the current category
    if (selections[currentCategory]) return;

    setSelections((prev) => ({ ...prev, [currentCategory]: id }));

    // Wait for the selection animation to play, then fade to the next screen
    setTimeout(() => {
      setIsAnimatingOut(true);
      setTimeout(() => {
        setCurrentCategoryIndex((prev) => prev + 1);
        setIsAnimatingOut(false);
      }, 500); // Match fadeOut animation duration
    }, 2200); // Time to view the revealed & centered card
  };

  const styles: { [key: string]: React.CSSProperties } = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      width: '100%',
      animation: isAnimatingOut ? 'fadeOut 0.5s ease-out forwards' : 'fadeIn 0.5s ease-in',
      padding: '1rem',
    },
    question: {
      fontFamily: "'Cinzel', serif",
      fontSize: 'clamp(1.5rem, 5vw, 2.5rem)',
      color: '#E0E0E0',
      marginBottom: '3rem',
      textShadow: '0 0 10px rgba(184, 137, 255, 0.5)',
      textAlign: 'center',
    },
    cardGrid: {
      display: 'flex',
      justifyContent: 'center',
      gap: '2rem',
      flexWrap: 'wrap',
      position: 'relative',
      minHeight: '250px', // Prevent collapsing when cards become absolute
      alignItems: 'center',
      width: '100%',
    },
    cardWrapper: {
        transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
    },
    loadingText: {
      fontFamily: "'Cinzel', serif",
      fontSize: '1.5rem',
      color: '#b3aed1',
    }
  };
  
  if (!currentCategory || !shuffledCardData) {
    return <div style={styles.loadingText}>Brewing your fate...</div>;
  }

  const cardOptions = shuffledCardData[currentCategory];
  const question = QUESTIONS[currentCategory];
  const selectedId = selections[currentCategory];

  return (
    <div style={styles.container}>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeOut {
          from { opacity: 1; transform: translateY(0); }
          to { opacity: 0; transform: translateY(-20px); }
        }
      `}</style>
      <h2 style={styles.question}>{question}</h2>
      <div style={styles.cardGrid}>
        {cardOptions.map((cardInfo) => {
          const isSelected = selectedId === cardInfo.id;
          const hasSelection = !!selectedId;

          const dynamicWrapperStyle: React.CSSProperties = {
            ...styles.cardWrapper,
            ...(hasSelection && {
              ...(isSelected ? {
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%) scale(1.3)',
                zIndex: 10,
              } : {
                opacity: 0,
                transform: 'scale(0.5)',
              })
            })
          };
          
          return (
            <div key={cardInfo.id} style={dynamicWrapperStyle}>
              <Card
                cardInfo={cardInfo}
                onSelect={handleSelectCard}
                isSelected={isSelected}
                isRevealed={hasSelection && isSelected}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GamePage;