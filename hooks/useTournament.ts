
import { useState, useEffect, useMemo } from 'react';
import { FoodItem } from '../types';

const shuffleArray = <T,>(array: T[]): T[] => {
  return [...array].sort(() => Math.random() - 0.5);
};

const useTournament = (foods: FoodItem[], tournamentSize: number, isPlaying: boolean) => {
  const [round, setRound] = useState<FoodItem[]>([]);
  const [nextRound, setNextRound] = useState<FoodItem[]>([]);
  const [matchupIndex, setMatchupIndex] = useState(0);
  const [winner, setWinner] = useState<FoodItem | null>(null);

  useEffect(() => {
    if (isPlaying && foods.length >= tournamentSize) {
      const initialRound = shuffleArray(foods).slice(0, tournamentSize);
      setRound(initialRound);
      setNextRound([]);
      setMatchupIndex(0);
      setWinner(null);
    }
  }, [isPlaying, foods, tournamentSize]);

  const currentMatchup = useMemo(() => {
    if (round.length > 1 && matchupIndex * 2 < round.length) {
      return [round[matchupIndex * 2], round[matchupIndex * 2 + 1]];
    }
    return null;
  }, [round, matchupIndex]);

  const selectWinner = (selectedFood: FoodItem) => {
    const newNextRound = [...nextRound, selectedFood];
    setNextRound(newNextRound);

    const isRoundFinished = matchupIndex * 2 + 2 >= round.length;

    if (isRoundFinished) {
      if (newNextRound.length === 1) {
        setWinner(newNextRound[0]);
      } else {
        setRound(shuffleArray(newNextRound));
        setNextRound([]);
        setMatchupIndex(0);
      }
    } else {
      setMatchupIndex(prev => prev + 1);
    }
  };
  
  const getRoundName = (itemCount: number) => {
    if (itemCount <= 1) return "Final Winner!";
    if (itemCount === 2) return "Grand Final";
    if (itemCount <= 4) return "Semi-Finals";
    if (itemCount <= 8) return "Quarter-Finals";
    return `Round of ${itemCount}`;
  };

  const roundName = getRoundName(round.length);
  const totalMatchesInRound = Math.floor(round.length / 2);
  const progress = {
      current: matchupIndex + 1,
      total: totalMatchesInRound,
  };


  return {
    currentMatchup,
    winner,
    selectWinner,
    progress,
    roundName
  };
};

export default useTournament;
