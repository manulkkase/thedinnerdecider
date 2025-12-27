import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { FoodItem } from '../../types';
import { ALL_FOODS } from '../../constants/foods';
import useTournament from '../../hooks/useTournament';
import BattleCard from '../../components/BattleCard';
import VSDivider from '../../components/VSDivider';
import './TournamentScreen.css';

// 라운드 스플래시 컴포넌트
const RoundSplash: React.FC<{ roundName: string; onComplete: () => void }> = ({ roundName, onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 1500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="round-splash-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="round-splash-content"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      >
        <h1 className="round-splash-title">{roundName}</h1>
        <p className="round-splash-subtitle">Who will win this round?</p>
      </motion.div>
    </motion.div>
  );
};

// 진행 바 컴포넌트
const BattleProgressBar: React.FC<{
  current: number;
  total: number;
  roundName: string;
  totalRounds: number;
  currentRound: number;
}> = ({ current, total, roundName, totalRounds, currentRound }) => {
  const progress = ((current) / total) * 100;

  return (
    <div className="progress-container">
      <div className="progress-header">
        <span className="progress-round-name">{roundName}</span>
        <span className="progress-count">{current} / {total} matches</span>
      </div>
      <div className="progress-bar-track">
        <motion.div
          className="progress-bar-fill"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>
      <div className="round-indicators">
        {[...Array(totalRounds)].map((_, i) => (
          <div
            key={i}
            className={`round-indicator ${i < currentRound ? 'completed' : ''} ${i === currentRound ? 'active' : ''}`}
          />
        ))}
      </div>
    </div>
  );
};

const TournamentScreen: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  // 선택 애니메이션 상태
  const [selectedFood, setSelectedFood] = useState<FoodItem | null>(null);
  const [showRoundSplash, setShowRoundSplash] = useState(true);
  const [lastRoundName, setLastRoundName] = useState('');
  const [matchupKey, setMatchupKey] = useState(0);

  useEffect(() => {
    document.body.classList.remove('home-background');

    // 🎮 게임 집중 모드: auto-ads 숨기기
    document.body.classList.add('no-ads');

    return () => {
      // 페이지 떠날 때 다시 광고 활성화
      document.body.classList.remove('no-ads');
    };
  }, []);

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

  // 현재 라운드에 맞는 총 라운드 수 계산
  const getTotalRounds = (size: number) => Math.log2(size);
  const getCurrentRoundIndex = (roundName: string, size: number) => {
    const totalRounds = getTotalRounds(size);
    if (roundName.includes('Final')) return totalRounds - 1;
    if (roundName.includes('Semi')) return totalRounds - 2;
    if (roundName.includes('Quarter')) return totalRounds - 3;
    const match = roundName.match(/Round of (\d+)/);
    if (match) {
      const roundSize = parseInt(match[1]);
      return getTotalRounds(size) - getTotalRounds(roundSize) - 1;
    }
    return 0;
  };

  // 라운드 변경 감지
  useEffect(() => {
    if (tournament.roundName && tournament.roundName !== lastRoundName && !lastRoundName.includes('Loading')) {
      setShowRoundSplash(true);
      setLastRoundName(tournament.roundName);
    }
  }, [tournament.roundName, lastRoundName]);

  // 🏆 우승자 감지 - winner 상태가 변경되면 결과 페이지로 이동
  useEffect(() => {
    if (tournament.winner) {
      navigate(`/result/${encodeURIComponent(tournament.winner.name)}`);
    }
  }, [tournament.winner, navigate]);

  const handleSelectWinner = useCallback((food: FoodItem) => {
    if (selectedFood) return; // 이미 선택 중이면 무시

    setSelectedFood(food);

    // 선택 애니메이션 후 다음 매치업으로
    setTimeout(() => {
      tournament.selectWinner(food);
      setSelectedFood(null);
      setMatchupKey(prev => prev + 1);
      // winner 체크는 위 useEffect에서 처리
    }, 800);
  }, [selectedFood, tournament]);

  const handleRoundSplashComplete = useCallback(() => {
    setShowRoundSplash(false);
  }, []);

  if (!tournament.currentMatchup) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Helmet>
          <title>Loading Tournament... - The Dinner Decider</title>
          <meta name="robots" content="noindex" />
        </Helmet>
        <motion.p
          className="text-lg text-slate-300"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          Loading your tournament...
        </motion.p>
      </div>
    );
  }

  const [item1, item2] = tournament.currentMatchup;

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-slate-900 to-slate-950">
      <Helmet>
        <title>{tournament.roundName}: {item1.name} vs {item2.name} - The Dinner Decider</title>
        <meta name="description" content={`Vote for your dinner! Which one will win this round: ${item1.name} or ${item2.name}?`} />
        <meta name="robots" content="noindex" />
      </Helmet>

      {/* 라운드 스플래시 */}
      <AnimatePresence>
        {showRoundSplash && (
          <RoundSplash
            roundName={tournament.roundName}
            onComplete={handleRoundSplashComplete}
          />
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto p-4">
        {/* 진행 바 */}
        <BattleProgressBar
          current={tournament.progress.current}
          total={tournament.progress.total}
          roundName={tournament.roundName}
          totalRounds={getTotalRounds(tournamentSize)}
          currentRound={getCurrentRoundIndex(tournament.roundName, tournamentSize)}
        />

        {/* 배틀 아레나 */}
        <AnimatePresence mode="wait">
          <motion.div
            key={matchupKey}
            className="battle-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* 왼쪽 카드 */}
            <BattleCard
              food={item1}
              onSelect={() => handleSelectWinner(item1)}
              position="left"
              isSelected={selectedFood?.id === item1.id}
              isLoser={selectedFood !== null && selectedFood?.id !== item1.id}
            />

            {/* VS 디바이더 */}
            <VSDivider />

            {/* 오른쪽 카드 */}
            <BattleCard
              food={item2}
              onSelect={() => handleSelectWinner(item2)}
              position="right"
              isSelected={selectedFood?.id === item2.id}
              isLoser={selectedFood !== null && selectedFood?.id !== item2.id}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TournamentScreen;