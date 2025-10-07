import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ALL_FOODS } from '../../constants/foods';
import Button from '../../components/Button';
import Modal from '../../components/Modal';

const ResultScreen: React.FC = () => {
  // 👇 배경 관리를 위한 useEffect 추가 (기존 밝은 테마 유지를 위해 home-background 제거)
  useEffect(() => {
    document.body.classList.remove('home-background');
  }, []);

  const { foodName } = useParams<{ foodName: string }>();
  const navigate = useNavigate();
  const [modalContent, setModalContent] = useState<{ title: string; body: string } | null>(null);
  const [socialProofCount, setSocialProofCount] = useState<number>(0);

  const winner = useMemo(() => {
    if (!foodName) return null;
    return ALL_FOODS.find(food => food.name === decodeURIComponent(foodName)) || null;
  }, [foodName]);

  useEffect(() => {
    const randomCount = Math.floor(Math.random() * 36) + 15;
    setSocialProofCount(randomCount);
  }, []);

  const getOrdinalSuffix = (num: number) => {
    const s = ['th', 'st', 'nd', 'rd'];
    const v = num % 100;
    return s[(v - 20) % 10] || s[v] || s[0];
  };

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
      setModalContent({ title: "Result Copied!", body: "The result page URL has been copied to your clipboard." });
    }
  };

  if (!winner) {
    return (
      <div className="text-center p-4 md:p-8 flex flex-col items-center justify-center min-h-screen">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-600">Food not found</h2>
        <Button onClick={handlePlayAgain} variant="primary" className="mt-8">
          Back to Start
        </Button>
      </div>
    );
  }

  return (
    <div className="text-center p-4 md:p-8 flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-600">Tonight's winner is...</h2>
      <h1 className="text-4xl md:text-7xl font-extrabold text-amber-500 my-4">{winner.name}!</h1>
      <p className="text-lg text-slate-500">Good choice, mate!</p>
      
      <div className="mt-3 inline-block bg-amber-100 text-amber-800 text-sm font-semibold px-4 py-1.5 rounded-full shadow-sm"> 
        <p className="text-orange-800 text-center font-semibold">
          Excellent pick! You're the <strong>{socialProofCount}{getOrdinalSuffix(socialProofCount)}</strong> person to land on {winner.name} today. 🏆
        </p>
      </div>
      
      
{/* 👇 1. 사진 섹션 (가장 위로 이동) */}
      <div className="mt-8 w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden">
        <img src={winner.imageUrl} alt={winner.name} className="w-full h-64 object-cover" />
      </div>

      {/* 👇 2. Fun Fact 섹션 */}
      {winner.funFact && (
        <div className="mt-8 w-full max-w-md bg-sky-100 text-sky-800 p-4 rounded-xl shadow-lg text-left">
          <div className="flex items-start">
            <span className="text-2xl mr-3">💡</span>
            <div>
              <strong className="font-semibold">Did you know?</strong>
              <span className="block mt-1 text-sky-700">{winner.funFact}</span>
            </div>
          </div>
        </div>
      )}

      {/* 👇 3. Eat Like a Local 섹션 */}
      {winner.eatLikeLocal && winner.eatLikeLocal.length > 0 && (
        <div className="mt-8 w-full max-w-md bg-white p-6 rounded-xl shadow-lg text-left">
          <h3 className="text-xl font-semibold text-slate-800 mb-4">Eat Like a Local</h3>
          <div className="space-y-4">
            {winner.eatLikeLocal.map((step, index) => (
              <div key={index} className="flex items-start">
                <span className="text-2xl mr-4">{step.icon}</span>
                <div>
                  <p className="font-bold text-slate-700">{step.title}</p>
                  <p className="text-slate-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 👇 4. Checklist & Pairings 섹션 (기존 'What's next?' 카드) */}
      <div className="mt-8 w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-6">
          <h3 className="text-xl font-semibold text-slate-800 mb-6 text-left">What's next?</h3>
          
          {/* checklist 데이터 유무에 따라 다른 UI를 보여줌 */}
          {winner.checklist && winner.checklist.length > 0 ? (
            // 데이터가 있을 경우: 새로운 리치 레이아웃
            <div className="grid gap-4">
              <div className="text-left p-4 bg-slate-50 rounded-lg">
                <h4 className="font-semibold text-slate-700 mb-3">Find a Great Spot</h4>
                <ul className="space-y-2 mb-4">
                  {winner.checklist.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      <span className="text-slate-500">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button onClick={handleSearchNearby} variant="primary" className="w-full">
                  Search on Google Maps 📍
                </Button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Button onClick={() => { trackLinkClick('Uber Eats'); window.open(`https://www.ubereats.com/search?q=${winner.name}`)}} variant="primary" className="w-full bg-green-500 hover:bg-green-600">
                  Order Delivery (Uber Eats)
                </Button>
                <Button onClick={() => {trackLinkClick('DoorDash'); window.open(`https://www.doordash.com/search/store/${encodeURIComponent(winner.name)}`)}} variant="primary" className="w-full bg-red-600 hover:bg-red-700">
                  Order Delivery (DoorDash)
                </Button>
              </div>

              {winner.pairings && winner.pairings.length > 0 && (
                <div className="text-left p-4 bg-slate-50 rounded-lg">
                  <h4 className="font-semibold text-slate-700 mb-3">Complete Your Meal</h4>
                  <div className="space-y-3">
                    {winner.pairings.map((item, index) => (
                      <div key={index} className="flex items-start">
                        <span className="text-xl mr-3 mt-1">{item.icon}</span>
                        <div>
                          <p className="font-bold text-slate-600">{item.type}</p>
                          <p className="text-slate-500">{item.suggestion}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            // 데이터가 없을 경우: 기존의 단순한 버튼 레이아웃
            <div className="space-y-3">
              <Button onClick={handleSearchNearby} variant="primary" className="w-full text-lg py-3">
                Search on Google Maps 📍
              </Button>
              <Button onClick={() => { trackLinkClick('Uber Eats'); window.open(`https://www.ubereats.com/search?q=${winner.name}`)}} variant="primary" className="w-full bg-green-500 hover:bg-green-600">
                Order Delivery (Uber Eats)
              </Button>
              <Button onClick={() => {trackLinkClick('DoorDash'); window.open(`https://www.doordash.com/search/store/${encodeURIComponent(winner.name)}`)}} variant="primary" className="w-full bg-red-600 hover:bg-red-700">
                Order Delivery (DoorDash)
              </Button>
            </div>
          )}
        </div>
      </div>

      <div className="flex gap-4 mt-8">
        <Button onClick={handleShare} variant="secondary">Share Result</Button>
        <Button onClick={handlePlayAgain} variant="secondary">Play Again</Button>
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