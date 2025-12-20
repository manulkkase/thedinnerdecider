import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ESSENCES, Essence, brewRandomFood, generateBrewingMessage } from '../data/alchemistData';
import './AlchemistScreen.css';

const AlchemistScreen: React.FC = () => {
    const navigate = useNavigate();
    const [selectedEssences, setSelectedEssences] = useState<Essence[]>([]);
    const [isBrewing, setIsBrewing] = useState(false);
    const [brewedFood, setBrewedFood] = useState<ReturnType<typeof brewRandomFood>>(null);
    const [brewingMessage, setBrewingMessage] = useState('');

    const toggleEssence = (essence: Essence) => {
        if (isBrewing || brewedFood) return;

        if (selectedEssences.find(e => e.id === essence.id)) {
            // Remove if already selected
            setSelectedEssences(prev => prev.filter(e => e.id !== essence.id));
        } else if (selectedEssences.length < 3) {
            // Add if under limit
            setSelectedEssences(prev => [...prev, essence]);
        }
    };

    const handleBrew = async () => {
        if (selectedEssences.length < 2 || isBrewing) return;

        setIsBrewing(true);
        setBrewingMessage(generateBrewingMessage(selectedEssences));

        // Simulate brewing animation
        await new Promise(resolve => setTimeout(resolve, 2500));

        const result = brewRandomFood(selectedEssences);
        setBrewedFood(result);
        setIsBrewing(false);
    };

    const handleReset = () => {
        setSelectedEssences([]);
        setBrewedFood(null);
        setBrewingMessage('');
    };

    const isSelected = (essence: Essence) =>
        selectedEssences.some(e => e.id === essence.id);

    return (
        <div className="alchemist-container">
            <Helmet>
                <title>The Dinner Alchemist - Mix Your Cravings | The Dinner Decider</title>
                <meta name="description" content="Mix magical essences to discover your perfect meal. Combine Fire, Coin, Moon, Herb, Energy, and Magic to brew your dinner destiny!" />
                <link rel="canonical" href="https://www.thedinnerdecider.au/alchemist" />
                <meta property="og:title" content="The Dinner Alchemist - Mix Your Cravings" />
                <meta property="og:description" content="Select 2-3 magical essences and brew your perfect dinner. A fun, interactive way to decide what to eat!" />
                <meta property="og:url" content="https://www.thedinnerdecider.au/alchemist" />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary" />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        "name": "The Dinner Alchemist",
                        "description": "An interactive food discovery tool that helps you find your perfect meal by mixing magical essences.",
                        "url": "https://www.thedinnerdecider.au/alchemist",
                        "isPartOf": {
                            "@type": "WebSite",
                            "name": "The Dinner Decider",
                            "url": "https://www.thedinnerdecider.au"
                        }
                    })}
                </script>
            </Helmet>

            {/* Floating Particles */}
            <div className="alchemist-particles">
                {[...Array(8)].map((_, i) => (
                    <div key={i} className={`alchemist-particle alchemist-particle-${(i % 4) + 1}`} />
                ))}
            </div>

            <motion.div
                className="alchemist-content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
                {/* Header */}
                <motion.div
                    className="alchemist-header"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <h1 className="alchemist-title">The Dinner Alchemist</h1>
                    <p className="alchemist-subtitle">
                        Mix your cravings into the cauldron and reveal your fated meal
                    </p>
                </motion.div>

                {/* Result Display */}
                <AnimatePresence mode="wait">
                    {brewedFood ? (
                        <motion.div
                            className="alchemist-result"
                            key="result"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: 'spring', damping: 15 }}
                        >
                            <div className="result-reveal">
                                <span className="result-label">The cauldron reveals...</span>
                                <h2 className="result-food-name">{brewedFood.name}</h2>
                                <div className="result-image-container">
                                    <img
                                        src={brewedFood.imageUrl}
                                        alt={brewedFood.name}
                                        className="result-food-image"
                                    />
                                </div>
                                <div className="result-essences">
                                    {selectedEssences.map(e => (
                                        <span key={e.id} className="result-essence-tag">
                                            {e.emoji} {e.name}
                                        </span>
                                    ))}
                                </div>
                                <div className="result-actions">
                                    <Link
                                        to={`/result/${encodeURIComponent(brewedFood.name)}`}
                                        className="result-action-btn primary"
                                    >
                                        View Details →
                                    </Link>
                                    <button
                                        onClick={handleReset}
                                        className="result-action-btn secondary"
                                    >
                                        🧪 Brew Again
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            className="alchemist-brewing-area"
                            key="brewing"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            {/* Essence Grid */}
                            <div className="essence-grid">
                                {ESSENCES.map((essence, index) => (
                                    <motion.button
                                        key={essence.id}
                                        className={`essence-card ${isSelected(essence) ? 'selected' : ''}`}
                                        onClick={() => toggleEssence(essence)}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 * index }}
                                        whileHover={{ scale: 1.05, y: -5 }}
                                        whileTap={{ scale: 0.95 }}
                                        style={{
                                            '--essence-color': essence.color,
                                            borderColor: isSelected(essence) ? essence.color : 'rgba(255,255,255,0.1)'
                                        } as React.CSSProperties}
                                        disabled={isBrewing}
                                    >
                                        <span className="essence-emoji">{essence.emoji}</span>
                                        <span className="essence-name">{essence.name}</span>
                                        <span className="essence-desc">{essence.description}</span>
                                        {isSelected(essence) && (
                                            <motion.div
                                                className="essence-check"
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                            >
                                                ✓
                                            </motion.div>
                                        )}
                                    </motion.button>
                                ))}
                            </div>

                            {/* Cauldron */}
                            <motion.div
                                className={`cauldron ${isBrewing ? 'brewing' : ''} ${selectedEssences.length > 0 ? 'has-items' : ''}`}
                                animate={isBrewing ? { scale: [1, 1.02, 1] } : {}}
                                transition={{ repeat: isBrewing ? Infinity : 0, duration: 1 }}
                            >
                                {/* Vortex Effect */}
                                {isBrewing && (
                                    <div className="vortex-container">
                                        <div className="vortex-ring vortex-ring-1"></div>
                                        <div className="vortex-ring vortex-ring-2"></div>
                                        <div className="vortex-ring vortex-ring-3"></div>
                                        {/* Swirling Essences */}
                                        {selectedEssences.map((essence, index) => (
                                            <div
                                                key={essence.id}
                                                className={`vortex-essence vortex-essence-${index + 1}`}
                                                style={{ '--essence-color': essence.color } as React.CSSProperties}
                                            >
                                                {essence.emoji}
                                            </div>
                                        ))}
                                        {/* Center Glow */}
                                        <div className="vortex-center"></div>
                                    </div>
                                )}

                                <div className="cauldron-inner">
                                    {isBrewing ? (
                                        <div className="cauldron-brewing">
                                            <span className="brewing-text">{brewingMessage}</span>
                                        </div>
                                    ) : (
                                        <>
                                            <div className="cauldron-essences">
                                                <AnimatePresence>
                                                    {selectedEssences.map((essence) => (
                                                        <motion.span
                                                            key={essence.id}
                                                            className="cauldron-essence"
                                                            initial={{ scale: 0, y: -30 }}
                                                            animate={{ scale: 1, y: 0 }}
                                                            exit={{ scale: 0, y: 30 }}
                                                            style={{ color: essence.color }}
                                                        >
                                                            {essence.emoji}
                                                        </motion.span>
                                                    ))}
                                                </AnimatePresence>
                                            </div>
                                            <span className="cauldron-count">
                                                {selectedEssences.length}/3 essences
                                            </span>
                                        </>
                                    )}
                                </div>
                            </motion.div>

                            {/* Instruction */}
                            <p className="alchemist-instruction">
                                {selectedEssences.length === 0
                                    ? 'Select 2-3 essences above'
                                    : selectedEssences.length === 1
                                        ? 'Add at least one more essence'
                                        : 'Ready to brew!'}
                            </p>

                            {/* Brew Button */}
                            <motion.button
                                className="brew-button"
                                onClick={handleBrew}
                                disabled={selectedEssences.length < 2 || isBrewing}
                                whileHover={selectedEssences.length >= 2 ? { scale: 1.05 } : {}}
                                whileTap={selectedEssences.length >= 2 ? { scale: 0.95 } : {}}
                            >
                                {isBrewing ? '✨ Brewing...' : '🔥 Brew My Dinner!'}
                            </motion.button>

                            {/* Reset */}
                            {selectedEssences.length > 0 && !isBrewing && (
                                <button className="reset-button" onClick={handleReset}>
                                    Clear Selection
                                </button>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Back Link */}
                <motion.div
                    className="alchemist-back"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <Link to="/" className="back-link">← Back to Home</Link>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default AlchemistScreen;
