import React, { useMemo, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FilterOptions, FoodItem } from '../../types';
import { ALL_FOODS, CUISINE_OPTIONS, DIETARY_OPTIONS, MOOD_OPTIONS } from '../../constants/foods';
import DinnerHeader, { PlateMark } from '../../components/DinnerHeader';
import AdSense from '../../components/AdSense';
import './TournamentSetupScreen.css';

const SIZES = [
  { size: 8, label: 'A quick bite', detail: '7 choices to dinner' },
  { size: 16, label: 'The full spread', detail: '15 choices to dinner' },
  { size: 32, label: 'A proper feast', detail: '31 choices to dinner' },
];

const TournamentSetupScreen: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [tournamentSize, setTournamentSize] = useState(16);
  const [filters, setFilters] = useState<FilterOptions>(() => ({
    dietary: [], cuisine: CUISINE_OPTIONS.some(item => item.value === searchParams.get('cuisine')) ? [searchParams.get('cuisine')!] : [],
  }));
  const [mood, setMood] = useState<NonNullable<FoodItem['mood']>[number] | null>(null);
  const filteredFoods = useMemo(() => ALL_FOODS.filter(food =>
    (!mood || food.mood?.includes(mood)) &&
    filters.dietary.every(tag => food.tags.includes(tag)) &&
    (!filters.cuisine.length || filters.cuisine.some(tag => food.tags.includes(tag)))
  ), [filters, mood]);
  const ready = filteredFoods.length >= tournamentSize;
  const hasFilters = Boolean(mood || filters.dietary.length || filters.cuisine.length);
  const resetFilters = () => { setFilters({ dietary: [], cuisine: [] }); setMood(null); };
  const toggle = (type: keyof FilterOptions, value: string) => setFilters(previous => ({
    ...previous, [type]: previous[type].includes(value) ? previous[type].filter(tag => tag !== value) : [...previous[type], value],
  }));
  const start = () => {
    if (!ready) return;
    const params = new URLSearchParams({ size: String(tournamentSize) });
    if (mood) params.set('mood', mood);
    if (filters.dietary.length) params.set('dietary', filters.dietary.join(','));
    if (filters.cuisine.length) params.set('cuisine', filters.cuisine.join(','));
    navigate(`/tournament?${params}`);
  };

  return (
    <div className="dinner-shell">
      <Helmet><title>Set the table - The Dinner Decider</title><meta name="description" content="Choose your dinner tournament size, cuisines and dietary preferences. Then let your cravings decide." /><link rel="canonical" href="https://www.thedinnerdecider.au/tournament-setup" /></Helmet>
      <DinnerHeader />
      <div className="dinner-setup">
        <div className="dinner-setup-heading"><Link to="/" className="dinner-back">‹ Back to the table</Link><h1>What’s on the menu?</h1><p>A few favourites or a whole feast. Set up tonight’s tournament.</p></div>
        <div className="dinner-setup-grid">
          <div className="dinner-preferences">
            <fieldset className="dinner-fieldset"><legend>How big is the appetite?</legend><p>Choose how many dishes enter the tournament.</p>
              <div className="dinner-size-options">{SIZES.map(option => (
                <label key={option.size} className={`dinner-size-option${tournamentSize === option.size ? ' selected' : ''}`}>
                  <input type="radio" name="tournament-size" value={option.size} checked={tournamentSize === option.size} onChange={() => setTournamentSize(option.size)} />
                  <strong>{option.size}<span> dishes</span></strong><span className="dinner-size-name">{option.label}</span><small>{option.detail}</small>
                </label>
              ))}</div>
            </fieldset>
            <fieldset className="dinner-fieldset"><legend>What are you craving?</legend><p>Pick a mood, or leave it open to anything.</p>
              <div className="dinner-filter-list">{MOOD_OPTIONS.map(option => (
                <button type="button" key={option.value} aria-pressed={mood === option.value} onClick={() => setMood(mood === option.value ? null : option.value as NonNullable<FoodItem['mood']>[number])} className="dinner-filter"><span aria-hidden="true">{option.icon}</span> {option.label}</button>
              ))}</div>
            </fieldset>
            <fieldset className="dinner-fieldset"><legend>Any dietary preferences?</legend><p>We’ll only include dishes matching all your selections.</p>
              <div className="dinner-filter-list">{DIETARY_OPTIONS.map(option => <button type="button" key={option.value} className="dinner-filter" aria-pressed={filters.dietary.includes(option.value)} onClick={() => toggle('dietary', option.value)}>{option.label}</button>)}</div>
            </fieldset>
            <fieldset className="dinner-fieldset"><legend>A world of good food</legend><p>Choose your cuisines. No selection means everything’s on the table.</p>
              <div className="dinner-filter-list">{CUISINE_OPTIONS.map(option => <button type="button" key={option.value} className="dinner-filter" aria-pressed={filters.cuisine.includes(option.value)} onClick={() => toggle('cuisine', option.value)}><span aria-hidden="true">{option.icon}</span> {option.label}</button>)}</div>
            </fieldset>
          </div>
          <aside className="dinner-ticket" aria-label="Tournament summary">
            <span className="dinner-ticket-mark"><PlateMark /></span><h2>Your dinner plans</h2><p>No more “you choose”.</p>
            <dl><div><dt>Dishes in the draw</dt><dd>{tournamentSize}</dd></div><div><dt>Choices to a winner</dt><dd>{tournamentSize - 1}</dd></div><div><dt>Dinner decisions</dt><dd>Sorted.</dd></div></dl>
            <div className="dinner-match-count" role="status"><strong>{filteredFoods.length}</strong> dishes match your appetite</div>
            {!ready && <p className="dinner-filter-warning">Not quite enough for {tournamentSize} dishes. {filteredFoods.length >= 8 ? 'Choose a smaller tournament or clear a filter.' : 'Clear a filter to add more dishes.'}</p>}
            <button type="button" onClick={start} disabled={!ready} className="dinner-button dinner-button-primary">Start a tournament</button>
            {hasFilters && <button type="button" className="dinner-clear-filters" onClick={resetFilters}>Clear all filters</button>}
            <details className="dinner-rules"><summary>How do I play?</summary><p>Choose the dish you’d rather eat in each pair. Your picks move into the next round until just one winner remains. There are no wrong answers.</p></details>
          </aside>
        </div>
        <AdSense className="dinner-setup-ad" />
      </div>
    </div>
  );
};
export default TournamentSetupScreen;
