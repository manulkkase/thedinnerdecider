import React, { useMemo } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { FoodItem, FilterOptions } from '../../types';
import { ALL_FOODS } from '../../constants/foods';
import useTournament from '../../hooks/useTournament';
import FoodCard from '../../components/FoodCard';
import ProgressBar from '../../components/ProgressBar';

const TournamentScreen: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const tournamentSize = parseInt(searchParams.get('size') || '16');
  const dietaryFilters = searchParams.get('dietary')?.split(',').filter(Boolean) || [];
  const cuisineFilters = searchParams.get('cuisine')?.split(',').filter(Boolean) || [];

  const filters: FilterOptions = {
    dietary: dietaryFilters,
    cuisine: cuisineFilters
  };

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

  const tournament = useTournament(filteredFoods, tournamentSize, true);

  const handleSelectWinner = (food: FoodItem) => {
    tournament.selectWinner(food);
    if (tournament.winner) {
      navigate(`/result/${encodeURIComponent(tournament.winner.name)}`);
    }
  };

  if (!tournament.currentMatchup) {
    return <div>Loading...</div>;
  }

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

export default TournamentScreen;