import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { FilterOptions } from '../../types';
import { ALL_FOODS, CUISINE_OPTIONS, DIETARY_OPTIONS } from '../../constants/foods';
import Button from '../../components/Button';

const StartScreen: React.FC = () => {
  const navigate = useNavigate();
  const [tournamentSize, setTournamentSize] = useState<number>(16);
  const [filters, setFilters] = useState<FilterOptions>({ dietary: [], cuisine: [] });

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
      navigate(`/play?${params.toString()}`);
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
                        <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-max px-2 py-1 text-sm text-white bg-slate-700 rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
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
        </div>
      </div>
    </div>
  );
};

export default StartScreen;