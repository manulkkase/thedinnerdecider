import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useReducedMotion } from 'framer-motion';
import { ALL_FOODS } from '../../constants/foods';
import { FoodItem } from '../../types';
import useTournament from '../../hooks/useTournament';
import DinnerHeader from '../../components/DinnerHeader';
import BattleCard from '../../components/BattleCard';
import './TournamentScreen.css';

const TournamentScreen: React.FC = () => {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const reduceMotion = useReducedMotion();
  const size = Number(params.get('size') || 16);
  const [selected, setSelected] = useState<FoodItem | null>(null);
  const [completed, setCompleted] = useState(0);
  const selectionLock = useRef(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const recordedWinner = useRef<number | null>(null);
  const arena = useRef<HTMLDivElement>(null);
  const foods = useMemo(() => {
    const dietary = params.get('dietary')?.split(',').filter(Boolean) || [];
    const cuisine = params.get('cuisine')?.split(',').filter(Boolean) || [];
    const mood = params.get('mood');
    return ALL_FOODS.filter(food => dietary.every(tag => food.tags.includes(tag)) &&
      (!cuisine.length || cuisine.some(tag => food.tags.includes(tag))) &&
      (!mood || food.mood?.some(tag => tag === mood)));
  }, [params]);
  const valid = [8, 16, 32].includes(size) && foods.length >= size;
  const tournament = useTournament(foods, size, valid);
  useEffect(() => {
    if (completed > 0) arena.current?.querySelector<HTMLButtonElement>('button')?.focus({ preventScroll: true });
  }, [completed]);

  useEffect(() => {
    document.body.classList.add('no-ads');
    return () => {
      document.body.classList.remove('no-ads');
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);
  useEffect(() => {
    setCompleted(0);
    setSelected(null);
    selectionLock.current = false;
    recordedWinner.current = null;
    if (timer.current) clearTimeout(timer.current);
  }, [params]);
  useEffect(() => {
    if (!tournament.winner || recordedWinner.current === tournament.winner.id) return;
    recordedWinner.current = tournament.winner.id;
    try {
      const previous = Number(localStorage.getItem('dd_decisions'));
      localStorage.setItem('dd_decisions', String((Number.isSafeInteger(previous) && previous >= 0 ? previous : 0) + 1));
    } catch { /* Storage restrictions must not prevent showing the winner. */ }
    navigate(`/result/${encodeURIComponent(tournament.winner.name)}`, { replace: true });
  }, [tournament.winner, navigate]);

  const select = (food: FoodItem) => {
    if (selectionLock.current) return;
    selectionLock.current = true;
    setSelected(food);
    timer.current = setTimeout(() => {
      tournament.selectWinner(food);
      setCompleted(count => count + 1);
      setSelected(null);
      selectionLock.current = false;
    }, reduceMotion ? 0 : 350);
  };

  return (
    <div className="dinner-shell">
      <Helmet><title>{valid ? `${tournament.roundName} - The Dinner Decider` : 'Adjust your tournament - The Dinner Decider'}</title><meta name="robots" content="noindex" /></Helmet>
      <DinnerHeader />
      {!valid ? <div className="dinner-battle-empty"><h1>Let’s reset the table.</h1><p>Choose 8, 16 or 32 dishes and enough matching food options to start.</p><Link to="/tournament-setup" className="dinner-button dinner-button-primary">Adjust your tournament</Link></div> : !tournament.currentMatchup ? <p className="dinner-battle-loading" role="status">Setting the table…</p> : (
        <section className="dinner-battle" aria-labelledby="battle-heading">
          <div className="dinner-battle-topline"><Link to="/tournament-setup" className="dinner-back">‹ Start over</Link><span>{size - 1 - completed} {size - 1 - completed === 1 ? 'choice' : 'choices'} to dinner</span></div>
          <div className="dinner-battle-heading"><p>{tournament.roundName}</p><h1 id="battle-heading">What would you rather eat?</h1><p>Go with your gut. Pick one to keep it in the running.</p></div>
          <div className="dinner-battle-progress"><span>Match {Math.min(completed + 1, size - 1)} of {size - 1}</span><progress value={completed} max={size - 1} aria-label="Completed tournament matches" /></div>
          <div className="dinner-battle-arena" ref={arena}>
            {tournament.currentMatchup.map((food, index) => <BattleCard key={`${completed}-${food.id}`} food={food} position={index === 0 ? 'left' : 'right'} onSelect={() => select(food)} isSelected={selected?.id === food.id} isLoser={selected !== null && selected.id !== food.id} />)}
            <span className="dinner-battle-vs" aria-hidden="true">vs</span>
          </div>
          <p className="dinner-battle-status" role="status">{selected ? `${selected.name} is your pick.` : `${tournament.roundName}: ${tournament.currentMatchup[0].name} or ${tournament.currentMatchup[1].name}.`}</p>
        </section>
      )}
    </div>
  );
};
export default TournamentScreen;
