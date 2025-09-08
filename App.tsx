import React, { useState, useMemo } from 'react';
import { GameState, FoodItem, FilterOptions } from './types';
import { ALL_FOODS, CUISINE_OPTIONS, DIETARY_OPTIONS } from './constants/foods';
import useTournament from './hooks/useTournament';
import FoodCard from './components/FoodCard';
import ProgressBar from './components/ProgressBar';
import Button from './components/Button';
import Modal from './components/Modal';

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>(GameState.START);
  const [tournamentSize, setTournamentSize] = useState<number>(16);
  const [filters, setFilters] = useState<FilterOptions>({ dietary: [], cuisine: [] });
  const [modalContent, setModalContent] = useState<{ title: string; body: string } | null>(null);

  const filteredFoods = useMemo(() => {
    let foods = ALL_FOODS;
    if (filters.dietary.length > 0) {
      foods = foods.filter(food => filters.dietary.every(tag => food.tags.includes(tag)));
    }
    if (filters.cuisine.length > 0) {
      foods = foods.filter(food => filters.cuisine.some(tag => food.tags.includes(tag)));
    }
    return foods;
  }, [filters]);

  const tournament = useTournament(filteredFoods, tournamentSize, gameState === GameState.PLAYING);

  const handleStartTournament = () => {
    if (filteredFoods.length >= tournamentSize) {
      setGameState(GameState.PLAYING);
    } else {
      alert(`Not enough food options for a ${tournamentSize}-item tournament with the selected filters. Please select fewer items or change filters. Found ${filteredFoods.length} items.`);
    }
  };

  const handleSelectWinner = (food: FoodItem) => {
    tournament.selectWinner(food);
    if (tournament.winner) {
      setGameState(GameState.FINISHED);
    }
  };

  const handlePlayAgain = () => {
    setGameState(GameState.START);
  };
  
  const toggleFilter = (type: 'dietary' | 'cuisine', value: string) => {
    setFilters(prev => {
        const current = prev[type];
        const newFilters = current.includes(value)
            ? current.filter(item => item !== value)
            : [...current, value];
        return { ...prev, [type]: newFilters };
    });
  };

  const renderStartScreen = () => (
    <div className="text-center p-4 md:p-8">
      <h1 className="text-4xl md:text-6xl font-bold text-slate-800">The Dinner Decider</h1>
      <p className="mt-4 text-lg text-slate-600">Can't decide what to eat? Let's turn it into a game!</p>
      
      <div className="mt-8 max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold text-slate-700 mb-4">1. Choose Tournament Size</h2>
        <div className="flex justify-center gap-4">
          {[8, 16, 32].map(size => (
            <Button key={size} onClick={() => setTournamentSize(size)} variant={tournamentSize === size ? 'primary' : 'secondary'}>
              {size} Items
            </Button>
          ))}
        </div>

        <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">2. Filter Your Options</h2>
        <div>
            <h3 className="text-lg font-medium text-slate-600">Dietary Needs</h3>
            <div className="flex flex-wrap justify-center gap-2 mt-2">
                {DIETARY_OPTIONS.map(opt => (
                     <Button key={opt.value} onClick={() => toggleFilter('dietary', opt.value)} variant={filters.dietary.includes(opt.value) ? 'primary' : 'secondary'}>
                        {opt.label}
                    </Button>
                ))}
            </div>
        </div>
         <div className="mt-4">
            <h3 className="text-lg font-medium text-slate-600">Cuisine Type</h3>
            <div className="flex flex-wrap justify-center gap-2 mt-2">
                {CUISINE_OPTIONS.map(opt => (
                     <Button key={opt.value} onClick={() => toggleFilter('cuisine', opt.value)} variant={filters.cuisine.includes(opt.value) ? 'primary' : 'secondary'}>
                        {opt.icon}
                    </Button>
                ))}
            </div>
        </div>

        <div className="mt-8">
           <p className="text-slate-500 mb-4">Found {filteredFoods.length} delicious options!</p>
            <Button onClick={handleStartTournament} variant="primary" className="w-full text-xl py-4">
                Start Tournament
            </Button>
        </div>
      </div>
    </div>
  );

  const renderTournamentScreen = () => {
    if (!tournament.currentMatchup) return <div>Loading...</div>;
    const [item1, item2] = tournament.currentMatchup;
    return (
      <div className="w-full max-w-7xl mx-auto p-4">
        <ProgressBar current={tournament.progress.current} total={tournament.progress.total} roundName={tournament.roundName} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 h-[calc(100vh-150px)]">
          <FoodCard food={item1} onSelect={() => handleSelectWinner(item1)} />
          <FoodCard food={item2} onSelect={() => handleSelectWinner(item2)} />
        </div>
      </div>
    );
  };

  const renderResultsScreen = () => (
    <div className="text-center p-4 md:p-8 flex flex-col items-center justify-center min-h-screen">
       <h2 className="text-2xl md:text-3xl font-bold text-slate-600">Tonight's winner is...</h2>
      <h1 className="text-4xl md:text-7xl font-extrabold text-amber-500 my-4">{tournament.winner?.name}!</h1>
      <p className="text-lg text-slate-500">Good choice, mate!</p>
      
      <div className="mt-8 w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden">
        <img src={tournament.winner?.imageUrl} alt={tournament.winner?.name} className="w-full h-64 object-cover" />
         <div className="p-6">
            <h3 className="text-xl font-semibold text-slate-800">What's next?</h3>
             <div className="mt-4 space-y-3">
                 <Button onClick={() => window.open(`https://www.ubereats.com/search?q=${tournament.winner?.name}`)} variant="primary" className="w-full">
                    Order Delivery (Uber Eats)
                </Button>
                 <Button onClick={() => {
                    navigator.clipboard.writeText(window.location.href);
                    setModalContent({ title: "Result Copied!", body: "The result page URL has been copied to your clipboard." });
                }} variant="secondary" className="w-full">
                    Share Result
                </Button>
            </div>
        </div>
      </div>

       <Button onClick={handlePlayAgain} variant="secondary" className="mt-8">
        Play Again
      </Button>
    </div>
  );
  
  const renderContent = () => {
    switch (gameState) {
      case GameState.PLAYING:
        return renderTournamentScreen();
      case GameState.FINISHED:
        return renderResultsScreen();
      case GameState.START:
      default:
        return renderStartScreen();
    }
  };

  return (
    <main className="bg-sky-50 min-h-screen flex flex-col items-center justify-center font-sans">
      {renderContent()}
      {modalContent && (
        <Modal title={modalContent.title} onClose={() => setModalContent(null)}>
          <p>{modalContent.body}</p>
        </Modal>
      )}
    </main>
  );
};

export default App;