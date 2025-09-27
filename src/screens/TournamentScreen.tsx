import React, { useMemo, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { FoodItem } from '../../types';
import { ALL_FOODS } from '../../constants/foods';
import useTournament from '../../hooks/useTournament';
import FoodCard from '../../components/FoodCard';
import ProgressBar from '../../components/ProgressBar';
import './HomeScreen.css';

const TournamentScreen: React.FC = () => {
  useEffect(() => {
  // 👇 이 페이지가 보일 때, 'home-background' 클래스를 제거하기만 합니다.
  document.body.classList.remove('home-background');
}, []);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const tournamentSize = parseInt(searchParams.get('size') || '16');

  const dietaryFilters = useMemo(() => 
    searchParams.get('dietary')?.split(',').filter(Boolean) || []
  , [searchParams]);

  const cuisineFilters = useMemo(() => 
    searchParams.get('cuisine')?.split(',').filter(Boolean) || []
  , [searchParams]);

  const filteredFoods = useMemo(() => {
    let foods = ALL_FOODS;
    if (dietaryFilters.length > 0) {
      foods = foods.filter(food => dietaryFilters.every(tag => food.tags.includes(tag)));
    }
    if (cuisineFilters.length > 0) {
      foods = foods.filter(food => cuisineFilters.some(tag => food.tags.includes(tag)));
    }
    return foods;
  }, [dietaryFilters, cuisineFilters]);

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