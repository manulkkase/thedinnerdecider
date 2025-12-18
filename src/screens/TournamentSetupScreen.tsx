import React, { useState, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { FilterOptions } from '../../types';
import { ALL_FOODS, CUISINE_OPTIONS, DIETARY_OPTIONS } from '../../constants/foods';
import HowToPlayModal from '../../components/HowToPlayModal';
import AdSense from '../../components/AdSense';
import './TournamentSetupScreen.css';

// 사이즈 옵션 정의
const SIZE_OPTIONS = [
  { size: 8, icon: '⚡', label: 'Quick Battle', matches: 7 },
  { size: 16, icon: '🏆', label: 'Classic', matches: 15 },
  { size: 32, icon: '👑', label: 'Epic Marathon', matches: 31 },
];

// 애니메이션 variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

const TournamentSetupScreen: React.FC = () => {
  const navigate = useNavigate();
  const [tournamentSize, setTournamentSize] = useState<number>(16);
  const [filters, setFilters] = useState<FilterOptions>({ dietary: [], cuisine: [] });
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    document.body.classList.remove('home-background');
  }, []);

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
      alert(`Not enough food options for a ${tournamentSize}-item tournament. Found ${filteredFoods.length} items.`);
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

  const isReady = filteredFoods.length >= tournamentSize;

  return (
    <div className="setup-container">
      <Helmet>
        <title>Start a Food Battle Royale - The Dinner Decider</title>
        <meta name="description" content="Set up your dinner tournament. Choose your tournament size, filter by dietary needs or cuisine!" />
        <link rel="canonical" href="https://thedinnerdecider.au/tournament-setup" />
      </Helmet>

      {/* 플로팅 파티클 */}
      <div className="setup-particles">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="setup-particle" />
        ))}
      </div>

      <motion.div
        className="setup-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* 헤더 */}
        <motion.div className="setup-header" variants={itemVariants}>
          <h1 className="setup-title">Food Battle Royale</h1>
          <p className="setup-subtitle">Set up your epic dinner tournament!</p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="how-to-play-btn"
          >
            ❓ How to Play
          </button>
        </motion.div>

        {/* 사이즈 선택 */}
        <motion.div className="setup-card" variants={itemVariants}>
          <h2 className="setup-card-title">
            <span>1️⃣</span> Tournament Size
          </h2>
          <div className="size-selector">
            {SIZE_OPTIONS.map(option => (
              <motion.div
                key={option.size}
                className={`size-card ${tournamentSize === option.size ? 'active' : ''}`}
                onClick={() => setTournamentSize(option.size)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="size-card-icon">{option.icon}</div>
                <div className="size-card-info">
                  <div className="size-card-number">{option.size} Items</div>
                  <div className="size-card-label">{option.label}</div>
                  <div className="size-card-matches">{option.matches} matches</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Dietary 필터 */}
        <motion.div className="setup-card" variants={itemVariants}>
          <h2 className="setup-card-title">
            <span>2️⃣</span> Dietary Preference
          </h2>
          <div className="filter-chips">
            {DIETARY_OPTIONS.map(opt => (
              <motion.button
                key={opt.value}
                className={`filter-chip ${filters.dietary.includes(opt.value) ? 'active' : ''}`}
                onClick={() => toggleFilter('dietary', opt.value)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {opt.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Cuisine 필터 */}
        <motion.div className="setup-card" variants={itemVariants}>
          <h2 className="setup-card-title">
            <span>3️⃣</span> Cuisine Type
          </h2>
          <div className="cuisine-grid">
            {CUISINE_OPTIONS.map(opt => (
              <motion.button
                key={opt.value}
                className={`cuisine-card ${filters.cuisine.includes(opt.value) ? 'active' : ''}`}
                onClick={() => toggleFilter('cuisine', opt.value)}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                title={opt.label}
              >
                <span className="cuisine-icon">{opt.icon}</span>
                <span className="cuisine-label">{opt.label}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* 시작 섹션 */}
        <motion.div className="setup-card" variants={itemVariants}>
          <div className="start-section">
            <motion.div
              className="food-counter"
              key={filteredFoods.length}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 500, damping: 20 }}
            >
              🍽️ Found <span className="food-counter-number">{filteredFoods.length}</span> delicious options!
            </motion.div>

            <motion.button
              className={`start-button ${isReady ? 'ready' : ''}`}
              onClick={handleStartTournament}
              disabled={!isReady}
              whileHover={isReady ? { scale: 1.02 } : undefined}
              whileTap={isReady ? { scale: 0.98 } : undefined}
            >
              {isReady ? '🔥 Start Tournament!' : `Need ${tournamentSize - filteredFoods.length} more options`}
            </motion.button>
          </div>
        </motion.div>

        {/* 프로모 카드 */}
        <motion.a
          href="/blog/index.html"
          className="promo-card"
          variants={itemVariants}
          whileHover={{ y: -4 }}
        >
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=700&q=80"
            alt="Delicious meal"
            className="promo-image"
            loading="lazy"
          />
          <div className="promo-content">
            <h3 className="promo-title">🍳 Stuck in a Food Rut?</h3>
            <p className="promo-text">Discover fun facts, tips, and recipes about your favorite foods.</p>
            <span className="promo-link">Get Inspired →</span>
          </div>
        </motion.a>

        {/* AdSense */}
        <motion.div variants={itemVariants} style={{ marginTop: '1.5rem' }}>
          <AdSense className="rounded-xl overflow-hidden" />
        </motion.div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && <HowToPlayModal onClose={() => setIsModalOpen(false)} />}
      </AnimatePresence>
    </div>
  );
};

export default TournamentSetupScreen;