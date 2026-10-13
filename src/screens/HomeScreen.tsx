import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ALL_FOODS } from '../../constants/foods';
import DinnerHeader from '../../components/DinnerHeader';
import { generateSlug } from '../utils/foodUtils';
import './HomeScreen.css';

const getTodaysFoods = () => {
  let seed = new Date().toDateString().split('').reduce((hash, char) => (hash * 31 + char.charCodeAt(0)) >>> 0, 0);
  const foods = [...ALL_FOODS];
  for (let i = foods.length - 1; i > 0; i--) {
    seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
    const j = Math.floor((seed / 4294967296) * (i + 1));
    [foods[i], foods[j]] = [foods[j], foods[i]];
  }
  return foods.slice(0, 3);
};

const contenders = [
  { name: 'Margherita Pizza', note: 'The cheesy classic', image: '/images/Margherita Pizza.webp' },
  { name: 'Korean Fried Chicken', note: 'The crispy contender', image: '/images/Korean Fried Chicken.webp' },
];

const HomeScreen: React.FC = () => {
  const [exampleWinner, setExampleWinner] = useState<string | null>(null);
  const [playCount, setPlayCount] = useState(0);
  const dailyFoods = useMemo(getTodaysFoods, []);
  useEffect(() => {
    try {
      const count = Number(localStorage.getItem('dd_decisions'));
      setPlayCount(Number.isSafeInteger(count) && count > 0 ? count : 0);
    } catch { /* The game also works when local storage is unavailable. */ }
  }, []);

  return (
    <div className="dinner-shell dinner-home">
      <Helmet>
        <title>The Dinner Decider - What’s for dinner? Let’s play.</title>
        <meta name="description" content="Turn what’s for dinner into a food tournament. Pick your favourite in each matchup until one delicious winner remains. Free, no sign-up needed." />
        <link rel="canonical" href="https://www.thedinnerdecider.au/" />
        <meta property="og:title" content="The Dinner Decider - What’s for dinner? Let’s play." />
        <meta property="og:description" content="Two dishes. One choice. Play a food tournament and find tonight’s dinner." />
        <meta property="og:image" content="https://www.thedinnerdecider.au/images/og-image-new.png" />
        <meta property="og:url" content="https://www.thedinnerdecider.au/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org', '@type': 'WebApplication', name: 'The Dinner Decider',
          url: 'https://www.thedinnerdecider.au', description: 'Choose dinner with a head-to-head food tournament.',
          applicationCategory: 'EntertainmentApplication', operatingSystem: 'Any',
          offers: { '@type': 'Offer', price: '0', priceCurrency: 'AUD' },
        })}</script>
      </Helmet>
      <DinnerHeader />
      <section className="dinner-hero" aria-labelledby="dinner-heading">
        <div className="dinner-hero-copy">
          <p className="dinner-open-note"><span aria-hidden="true" /> The nightly dinner debate, settled.</p>
          <h1 id="dinner-heading">Big cravings.<br />Tough choices.<br />Let’s play.</h1>
          <p className="dinner-hero-description">Pizza or fried chicken? Curry or tacos? Put your cravings head to head. Pick your favourites until dinner decides itself.</p>
          <div className="dinner-hero-actions">
            <Link to="/tournament-setup" className="dinner-button dinner-button-primary">Start a tournament <span aria-hidden="true">↗</span></Link>
            <a href="#how-it-works" className="dinner-text-link">How it works</a>
          </div>
          <p className="dinner-hero-footnote">Free to play. No sign-up. Just a good feed.</p>
          {playCount > 0 && <p className="dinner-returning">Welcome back. You’ve settled {playCount} dinner {playCount === 1 ? 'debate' : 'debates'}.</p>}
        </div>
        <div className="dinner-demo" aria-label="Try a sample food matchup">
          <div className="dinner-demo-heading"><span>Tonight’s tough choice</span><span className="dinner-demo-sample">Try a taste</span></div>
          <div className="dinner-contenders">
            {contenders.map((food, index) => (
              <button key={food.name} type="button"
                className={`dinner-contender contender-${index}${exampleWinner === food.name ? ' is-picked' : ''}${exampleWinner && exampleWinner !== food.name ? ' is-passed' : ''}`}
                onClick={() => setExampleWinner(food.name)} aria-pressed={exampleWinner === food.name}
                aria-label={`Choose ${food.name} in the sample matchup`}>
                <img src={food.image} alt={food.name} fetchPriority="high" width="360" height="400" />
                <span className="contender-caption"><small>{food.note}</small><strong>{food.name}</strong><span className="contender-pick">{exampleWinner === food.name ? 'Your pick ✓' : 'Pick this dish'}</span></span>
              </button>
            ))}
            <span className="dinner-versus" aria-hidden="true">vs</span>
          </div>
          <div className="dinner-demo-caption" aria-live="polite">
            {exampleWinner ? <><span>{exampleWinner} goes through!</span><button type="button" onClick={() => setExampleWinner(null)}>Try again</button></> : <><span className="dinner-hand-drawn" aria-hidden="true">↖</span><span>Go with your gut. Tap your favourite.</span></>}
          </div>
        </div>
      </section>
      <div className="dinner-menu-strip" aria-label="Tournament features">
        <span>Two dishes at a time</span><span aria-hidden="true">✳</span><span>Your taste makes the rules</span><span aria-hidden="true">✳</span><span>One delicious winner</span>
      </div>
      <section className="dinner-how" id="how-it-works" aria-labelledby="how-heading">
        <div className="dinner-section-heading"><h2 id="how-heading">Less debating.<br />More eating.</h2><p>Your next meal is a few good choices away.</p></div>
        <ol className="dinner-steps">
          <li><span className="dinner-step-number">1</span><div><h3>Set the table</h3><p>Choose 8, 16 or 32 dishes. Narrow it down by cuisine, mood or dietary preference.</p></div></li>
          <li><span className="dinner-step-number">2</span><div><h3>Follow your cravings</h3><p>Two dishes go head to head. Tap the one you’d rather eat. The winner moves on.</p></div></li>
          <li><span className="dinner-step-number">3</span><div><h3>Dinner, decided</h3><p>Meet your last dish standing. Find it nearby, share it, or make it yourself.</p></div></li>
        </ol>
      </section>
      <section className="dinner-daily" aria-labelledby="daily-heading">
        <div className="dinner-section-heading"><div><p className="dinner-daily-note">A little food for thought</p><h2 id="daily-heading">In the mood for…</h2></div><Link className="dinner-text-link" to="/explore-foods">Browse all {ALL_FOODS.length} dishes</Link></div>
        <div className="dinner-daily-grid">{dailyFoods.map(food => (
          <Link key={food.id} to={`/food/${generateSlug(food.name)}`} className="dinner-daily-dish">
            <img src={food.imageUrl} alt={food.name} width="400" height="280" loading="lazy" />
            <div><h3>{food.name}</h3><span>Get to know this dish <span aria-hidden="true">↗</span></span></div>
          </Link>
        ))}</div>
      </section>
      <aside className="dinner-other-ways" aria-label="Other food games">
        <p>Still feeling adventurous?</p>
        <Link to="/alchemist">Mix your cravings with the Dinner Alchemist <span aria-hidden="true">↗</span></Link>
        <Link to="/quiz">Find your food personality <span aria-hidden="true">↗</span></Link>
      </aside>
    </div>
  );
};
export default HomeScreen;
