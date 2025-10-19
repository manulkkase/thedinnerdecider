import React, { useState, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FilterOptions } from '../../types';
import { ALL_FOODS, CUISINE_OPTIONS, DIETARY_OPTIONS } from '../../constants/foods';
import Button from '../../components/Button';
import HowToPlayModal from '../../components/HowToPlayModal';
import './HomeScreen.css';

const TournamentSetupScreen: React.FC = () => {
  useEffect(() => {
  // 👇 이 페이지가 보일 때, 'home-background' 클래스를 제거하기만 합니다.
  document.body.classList.remove('home-background');
}, []);
  const navigate = useNavigate();
  const [tournamentSize, setTournamentSize] = useState<number>(16);
  const [filters, setFilters] = useState<FilterOptions>({ dietary: [], cuisine: [] });
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const handleStartTournament = () => {
    if (filteredFoods.length >= tournamentSize) {
      const params = new URLSearchParams();
      params.append('size', tournamentSize.toString());
      if (filters.dietary.length > 0) {
        params.append('dietary', filters.dietary.join(','));
      }
      if (filters.cuisine.length > 0) {
        params.append('cuisine', filters.cuisine.join(','));
      }
      navigate(`/tournament?${params.toString()}`);
    } else {
      alert(`Not enough food options for a ${tournamentSize}-item tournament with the selected filters. Please select fewer items or change filters. Found ${filteredFoods.length} items.`);
    }
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

  return (
    <div className="text-center p-4 md:p-8">
      <Helmet>
        <title>Start a Food Battle Royale - The Dinner Decider</title>
        <meta name="description" content="Set up your dinner tournament. Choose your tournament size, filter by dietary needs or cuisine, and let the battle begin!" />
        <link rel="canonical" href="https://thedinnerdecider.au/tournament-setup" />
      </Helmet>
      
    {/* 타이틀과 버튼을 감싸는 div */}
    <div className="relative mb-8 md:mb-12"> {/* mb-8 md:mb-12로 아래쪽 여백 추가 */}
        <h1 className="text-4xl md:text-6xl font-bold text-slate-800">The Dinner Decider</h1>
        <p className="mt-4 text-lg text-slate-600">Can't decide what to eat? Let's turn it into a game!</p>
        
        {/* 'How to Play' 버튼 (수정된 부분) */}
        <button
            onClick={() => setIsModalOpen(true)}
            className="absolute bottom-0 right-4 mb-0 md:mb-0 px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full font-semibold hover:bg-blue-200 transition-colors duration-200 translate-y-7
            "
        >
            How to Play
        </button>
    </div>

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
            <div className="flex flex-wrap justify-center gap-4 mt-2">
                {CUISINE_OPTIONS.map(opt => (
                    <div key={opt.value} className="relative group flex flex-col items-center">
                        <Button 
                            onClick={() => toggleFilter('cuisine', opt.value)} 
                            variant={filters.cuisine.includes(opt.value) ? 'primary' : 'secondary'}
                            className="text-2xl w-16 h-16 flex items-center justify-center"
                            aria-label={opt.label}
                        >
                            {opt.icon}
                        </Button>
                        <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-max px-2 py-1 text-sm text-white bg-slate-700 rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                            {opt.label}
                        </div>
                    </div>
                ))}
            </div>
        </div>

        <div className="mt-8">
           <p className="text-slate-500 mb-4">Found {filteredFoods.length} delicious options!</p>
            <Button onClick={handleStartTournament} variant="primary" className="w-full text-xl py-4">
                Start Tournament
            </Button>
            {isModalOpen && <HowToPlayModal onClose={() => setIsModalOpen(false)} />}
        </div>
      </div>
      
      <div className="mt-8 max-w-2xl mx-auto">
  <a href="/blog/index.html" className="block relative rounded-xl shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 overflow-hidden h-48 group">
    {/* Background Image */}
    <img 
      src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=700&q=80" 
      alt="A delicious looking meal" 
      className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300" 
    />
    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
    
    {/* Text Content */}
    <div className="absolute inset-0 p-6 flex flex-col justify-end text-left">
        <h3 className="text-2xl font-bold text-white mb-2">Stuck in a Food Rut?</h3>
        <p className="text-white/90 mb-4">Discover fun facts, tips, and recipes about your favorite foods.</p>
        <span className="font-bold text-orange-400 group-hover:text-orange-300 transition-colors">
          Get Inspired →
        </span>
    </div>
  </a>
</div>

    </div>
  );
};

export default TournamentSetupScreen;