import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ResultContent } from '../types/tarotTypes';
import { generateResult } from '../services/tarotLogic';
import { getCardInfo } from '../data/tarotSetup';
import { foodData, FoodItem } from '../data/foodData';
import { fixedReadings } from '../data/fixedReadings';

const LoadingSpinner: React.FC = () => {
    const styles: { [key: string]: React.CSSProperties } = {
        spinner: {
            border: '4px solid rgba(255, 255, 255, 0.2)',
            borderTop: '4px solid #B889FF',
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            animation: 'spin 1s linear infinite',
        },
    };
    return (
        <div>
            <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
            <div style={styles.spinner}></div>
        </div>
    );
};

const ResultPage: React.FC = () => {
    const { c1, c2, c3 } = useParams<{ c1: string; c2: string; c3: string }>();
    const navigate = useNavigate();
    const [content, setContent] = useState<ResultContent | null>(null);
    const [matchedFood, setMatchedFood] = useState<FoodItem | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [copySuccess, setCopySuccess] = useState('');

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

    const selections = {
        energy: getCardInfo('energy', c1),
        method: getCardInfo('method', c2),
        flavor: getCardInfo('flavor', c3)
    };

    // handleShare 함수 아래에 추가
     const handleSearchNearby = () => {
       if (matchedFood) {
     const query = `${matchedFood.name} near me`;
     const url = `https://www.google.com/maps/search/${encodeURIComponent(query)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
      }
    };

    const fetchResult = useCallback(async () => {
        if (!c1 || !c2 || !c3) {
            setError("Invalid reading. Please start again.");
            setLoading(false);
            return;
        }
        setLoading(true);
        setError(null);
        try {
            const result = await generateResult(c1, c2, c3);
            setContent(result);
            
            const readingKey = `${c1}-${c2}-${c3}`;
            const foodId = fixedReadings[readingKey];
            const match = foodData.find(food => food.id === foodId) || foodData[0];
            
            setMatchedFood(match);
        } catch (err: any) {
            setError(err.message || "An unknown error occurred.");
        } finally {
            setLoading(false);
        }
    }, [c1, c2, c3]);

    useEffect(() => {
        fetchResult();
    }, [fetchResult]);

    const handleCopyLink = () => {
        navigator.clipboard.writeText(window.location.href).then(() => {
            setCopySuccess('Link Copied!');
            setTimeout(() => setCopySuccess(''), 2000);
        }, () => {
            setCopySuccess('Failed to copy');
            setTimeout(() => setCopySuccess(''), 2000);
        });
    };
    
    const handleShare = async () => {
  // 공유할 음식 정보가 없으면 함수를 종료합니다.
  if (!matchedFood) return;

  // 공유할 내용을 정의합니다.
  const shareData = {
    title: "The Dinner Decider - My Fated Dish!",
    text: `The tarot cards have chosen '${matchedFood.name}' for me today! Find out your fated dish:`,
    url: window.location.href
  };

  // 브라우저가 Web Share 기능을 지원하는지 확인합니다.
  if (navigator.share) {
    try {
      // 지원하면, 기기의 기본 공유 메뉴를 엽니다.
      await navigator.share(shareData);
    } catch (err) {
      console.error("Share failed:", err);
    }
  } else {
    // 지원하지 않으면, 기존의 링크 복사 기능을 실행합니다.
    handleCopyLink();
  }
};

    const styles: { [key: string]: React.CSSProperties } = {
        container: { display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '80vh', padding: '1rem', animation: 'fadeIn 1s ease-in-out' },
        loadingText: { marginTop: '1rem', fontSize: '1.2rem', color: '#b3aed1', fontFamily: "'Cinzel', serif" },
        error: { color: '#FF6B6B', fontSize: '1.2rem', maxWidth: '500px' },
        resultContent: { maxWidth: '800px', width: '100%' },
        selectedCards: { display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' },
        cardIconContainer: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', background: '#171423', padding: '1rem', borderRadius: '8px', border: '1px solid #332f44', width: '100px' },
        cardIcon: { width: '40px', height: '40px', color: '#B889FF' },
        cardName: { fontSize: '0.8rem', color: '#b3aed1' },
        headline: { fontFamily: "'Cinzel', serif", fontSize: 'clamp(2rem, 6vw, 3rem)', color: '#FFFFFF', textShadow: '0 0 15px #B889FF', margin: '0 0 1.5rem 0' },
        body: { color: '#E0E0E0', lineHeight: 1.7, textAlign: 'left', whiteSpace: 'pre-wrap', marginBottom: '2rem', background: 'rgba(23, 20, 35, 0.5)', padding: '1.5rem', borderRadius: '8px', border: '1px solid #332f44' },
        menu: { background: '#FFFFFF', border: '1px solid #E5E7EB', padding: '1.5rem', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)'},
        foodImage: { width: '100%', height: '300px', objectFit: 'cover', borderRadius: '4px', marginBottom: '1.5rem' },
        menuLabel: { color: '#6B7280', fontSize: '1rem', marginBottom: '0.5rem', display: 'block'},
        menuName: {fontFamily: "'Cinzel', serif",fontSize: 'clamp(1.5rem, 5vw, 2rem)', color: '#1F2937', margin: '0'},
        aiMenuName: { color: '#b3aed1', fontSize: '0.9rem', fontStyle: 'italic', marginTop: '0.5rem' },
        actions: { display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '3rem', flexWrap: 'wrap' },
        button: { width: '200px', height: '55px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Lato', sans-serif", fontSize: '1rem', padding: '0.8rem 1.5rem', backgroundColor: 'transparent', color: '#b3aed1', border: '2px solid #332f44', borderRadius: '50px', cursor: 'pointer', transition: 'all 0.3s ease', whiteSpace: 'nowrap' },
        buttonPrimary: { fontFamily: "'Lato', sans-serif", fontSize: '1rem', padding: '0.8rem 1.5rem', backgroundColor: '#f59e0b', color: 'white', border: 'none', borderRadius: '50px', cursor: 'pointer', transition: 'all 0.3s ease', fontWeight: 'bold', boxShadow: '0 4px 15px rgba(245, 158, 11, 0.4)'},
        buttonGreen: { fontFamily: "'Lato', sans-serif", fontSize: '1rem', padding: '0.8rem 1.5rem', backgroundColor: '#22c55e', color: 'white', border: 'none', borderRadius: '50px', cursor: 'pointer', transition: 'all 0.3s ease', fontWeight: 'bold', boxShadow: '0 4px 15px rgba(34, 197, 94, 0.4)' },
        buttonRed: { fontFamily: "'Lato', sans-serif", fontSize: '1rem', padding: '0.8rem 1.5rem', backgroundColor: '#ef4444', color: 'white', border: 'none', borderRadius: '50px', cursor: 'pointer', transition: 'all 0.3s ease', fontWeight: 'bold', boxShadow: '0 4px 15px rgba(239, 68, 68, 0.4)'},
        actionsContainer: { marginTop: '2rem', width: '100%', background: '#FFFFFF', borderRadius: '12px', padding: '1.5rem', boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)' },
        actionsTitle: { fontSize: '1.25rem', fontWeight: 'bold', color: '#1F2937', marginBottom: '1rem' },
        actionsGrid: { display: 'grid', gap: '0.75rem' },
        copySuccess: { position: 'fixed', bottom: '20px', background: '#5BE7A9', color: '#0E0B14', padding: '10px 20px', borderRadius: '5px', boxShadow: '0 2px 10px rgba(0,0,0,0.2)', animation: 'fadeInOut 2s ease-in-out' }
    };

    if (loading) {
        return (
            <div style={styles.container}>
                <LoadingSpinner />
                <p style={styles.loadingText}>Interpreting your culinary fate...</p>
            </div>
        );
    }
    
    if (error || !matchedFood) {
        return (
            <div style={styles.container}>
                <p style={styles.error}>{error || "Could not determine your fated meal."}</p>
                <button style={{...styles.button, color: '#FFC857', borderColor: '#FFC857', marginTop: '2rem'}} onClick={fetchResult}>Retry</button>
                <button style={styles.button} onClick={() => navigate('/')}>Start Over</button>
            </div>
        );
    }

  return (
    <div style={styles.container}>
         <style>{`
            @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
            @keyframes fadeInOut { 0%, 100% { opacity: 0; transform: translateY(20px); } 10%, 90% { opacity: 1; transform: translateY(0); } }
        `}</style>
        {content && (
            <div style={styles.resultContent}>
                <div style={styles.selectedCards}>
                    {Object.values(selections).map((card, index) => card && (
                        <div key={index} style={styles.cardIconContainer}>
                            <img src={card.imageUrl} alt={card.name} style={styles.cardIcon} />
                            <span style={styles.cardName}>{card.name}</span>
                        </div>
                    ))}
                </div>

                <h1 style={styles.headline}>{content.headline}</h1>
                <p style={styles.body}>{content.body}</p>
                
                {/* 음식 결과 카드 */}
                <div style={styles.menu}>
                     {matchedFood && (
                       <img src={matchedFood.imageUrl} alt={matchedFood.name} style={styles.foodImage} />
                    )}
                    <span style={styles.menuLabel}>Your Fated Dish is:</span>
                    <h2 style={styles.menuName}>{matchedFood ? matchedFood.name : content.menu}</h2>
                    {matchedFood && <p style={styles.aiMenuName}>Oracle's Decree: "{content.menu}"</p>}
                </div>

                {/* 'What's next?' 기능 카드 */}
                <div style={styles.actionsContainer}>
                    <h3 style={styles.actionsTitle}>What's next?</h3>
                    <div style={styles.actionsGrid}>
                        <button style={styles.buttonPrimary} onClick={handleSearchNearby}>
                            Find {matchedFood?.name} Near Me 📍
                        </button>

                        {/* 맛집 체크리스트 */}
                        {matchedFood?.checklist && matchedFood.checklist.length > 0 && (
                            <div style={{ marginTop: '0.5rem', textAlign: 'left', padding: '1rem', borderTop: '1px solid #f0f0f0' }}>
                                <h4 style={{ fontWeight: 'bold', color: '#374151', marginBottom: '0.5rem' }}>A great spot usually has...</h4>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '0.5rem' }}>
                                    {matchedFood.checklist.map((item, index) => (
                                        <li key={index} style={{ display: 'flex', alignItems: 'center' }}>
                                            <span style={{ color: '#22c55e', marginRight: '0.5rem' }}>✓</span>
                                            <span style={{ color: '#6B7280' }}>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        <button style={styles.buttonGreen} onClick={() => window.open(`https://www.ubereats.com/search?q=${matchedFood?.name}`)}>
                            Order Delivery (Uber Eats)
                        </button>
                        <button style={styles.buttonRed} onClick={() => window.open(`https://www.doordash.com/search/store/${encodeURIComponent(matchedFood?.name ?? '')}`)}>
                            Order Delivery (DoorDash)
                        </button>

                        {/* 완벽한 조합 추천 */}
                        {matchedFood?.pairings && matchedFood.pairings.length > 0 && (
                            <div style={{ marginTop: '0.5rem', textAlign: 'left', padding: '1rem', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
                                <h4 style={{ fontWeight: 'bold', color: '#1F2937', marginBottom: '0.75rem' }}>Complete Your Meal</h4>
                                <div style={{ display: 'grid', gap: '0.75rem' }}>
                                    {matchedFood.pairings.map((item, index) => (
                                        <div key={index} style={{ display: 'flex', alignItems: 'flex-start' }}>
                                            <span style={{ fontSize: '1.25rem', marginRight: '0.75rem', marginTop: '0.25rem' }}>{item.icon}</span>
                                            <div>
                                                <p style={{ fontWeight: 'bold', color: '#4B5563', margin: 0 }}>{item.type}</p>
                                                <p style={{ color: '#6B7280', margin: 0 }}>{item.suggestion}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* 구분선 */}
                        <div style={{ borderTop: '1px solid #e5e7eb', margin: '1rem 0' }} />

                        {/* 최종 동작 버튼 그룹 */}
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                            <button style={styles.button} onClick={handleShare}>
                                Share Result
                            </button>
                            <button style={styles.button} onClick={() => navigate('/')}>
                                Play Again
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )}
        {copySuccess && <div style={styles.copySuccess}>{copySuccess}</div>}
    </div>
);
};

export default ResultPage;
