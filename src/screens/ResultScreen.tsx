import React, { useState, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ALL_FOODS } from '../../constants/foods';
import Button from '../../components/Button';
import Modal from '../../components/Modal';


const ResultScreen: React.FC = () => {
  const { foodName } = useParams<{ foodName: string }>();
  const navigate = useNavigate();
  const [modalContent, setModalContent] = useState<{ title: string; body: string } | null>(null);

  const handleSearchNearby = () => {
    if (foodName) {
      trackLinkClick('Google Maps');
      const query = `${foodName} near me`;
      const url = `https://www.google.com/maps/search/?q${encodeURIComponent(query)}`;
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  const winner = useMemo(() => {
    if (!foodName) return null;
    return ALL_FOODS.find(food => food.name === decodeURIComponent(foodName)) || null;
  }, [foodName]);

  // @ts-ignore - window.gtag may not be defined on the window object
  const gtag = window.gtag;

  const trackLinkClick = (linkName: string) => {
    if (gtag && winner) {
      gtag('event', 'outbound_link_click', {
        'link_name': linkName,
        'food_name': winner.name,
      });
    }
  };

  const handlePlayAgain = () => {
    navigate('/');
  };

const handleShare = async () => {
    const shareData = {
      title: "The Dinner Decider",
      text: `Tonight's winner is ${winner?.name}! Find out what you should eat:`,
      url: window.location.href
    };

    // Check if the Web Share API is available
    if (navigator.share) {
      try {
        await navigator.share(shareData);
        // You could show a success message here if you want
      } catch (err) {
        // This can happen if the user cancels the share action
        console.error("Share failed:", err);
      }
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href);
      setModalContent({ 
        title: "Result Copied!", 
        body: "The result page URL has been copied to your clipboard." 
      });
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
      
      <div className="mt-8 w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden">
        <img src={winner.imageUrl} alt={winner.name} className="w-full h-64 object-cover" />
         <div className="p-6">
            <h3 className="text-xl font-semibold text-slate-800">What's next?</h3>
             <div className="mt-4 space-y-3">
              <Button onClick={handleSearchNearby} variant="primary" className="w-full text-lg py-3 font-semibold tracking-wide shadow-lg hover:shadow-xl transition-shadow duration-200"> Find {foodName} Near Me 📍
                </Button>
                 <Button onClick={() => { trackLinkClick('Uber Eats'); window.open(`https://www.ubereats.com/search?q=${winner.name}`)}} variant="primary" className="w-full bg-green-500 hover:bg-green-600">
                    Order Delivery (Uber Eats)
                </Button>
                <Button onClick={() => {trackLinkClick('DoorDash'); window.open(`https://www.doordash.com/search/store/${encodeURIComponent(winner.name)}`)}} variant="primary" className="w-full bg-red-600 hover:bg-red-700">
                    Order Delivery (DoorDash)
                </Button>
                  <Button onClick={handleShare} variant="secondary" className="w-full">
                    Share Result
                </Button>
            </div>
        </div>
      </div>

       <Button onClick={handlePlayAgain} variant="secondary" className="mt-8">
        Play Again
      </Button>

      {modalContent && (
        <Modal title={modalContent.title} onClose={() => setModalContent(null)}>
          <p>{modalContent.body}</p>
        </Modal>
      )}
    </div>
  );
};

export default ResultScreen;