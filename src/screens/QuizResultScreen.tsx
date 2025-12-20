import React, { useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { PERSONALITY_TYPES, PersonalityType } from '../../constants/quizData';
import { ALL_FOODS } from '../../constants/foods';
import './QuizScreen.css'; // Reuse quiz styles

const QuizResultScreen: React.FC = () => {
    const { type } = useParams<{ type: string }>();
    const navigate = useNavigate();

    // Get personality data
    const personality: PersonalityType | undefined = type ? PERSONALITY_TYPES[type] : undefined;

    // Get matching foods based on personality tags
    const matchingFoods = useMemo(() => {
        if (!personality) return [];

        const foods = ALL_FOODS.filter(food =>
            personality.matchingTags.some(tag =>
                food.tags.some(foodTag =>
                    foodTag.toLowerCase() === tag.toLowerCase()
                )
            )
        );

        // Shuffle and take first 5
        const shuffled = [...foods].sort(() => Math.random() - 0.5);
        return shuffled.slice(0, 5);
    }, [personality]);

    // If no valid personality, redirect to quiz
    if (!personality) {
        return (
            <div className="quiz-container">
                <div className="quiz-content" style={{ textAlign: 'center' }}>
                    <h2 style={{ color: 'white' }}>Personality not found</h2>
                    <Link to="/quiz" style={{ color: '#a78bfa' }}>Take the quiz →</Link>
                </div>
            </div>
        );
    }

    const handleShare = async () => {
        const shareData = {
            title: `I'm ${personality.name}!`,
            text: `I just discovered my food personality: ${personality.name} ${personality.emoji}. ${personality.tagline}`,
            url: `https://www.thedinnerdecider.au/quiz/result/${personality.id}`
        };

        try {
            if (navigator.share) {
                await navigator.share(shareData);
            } else {
                // Fallback: copy to clipboard
                await navigator.clipboard.writeText(`${shareData.text}\n\nTake the quiz: ${shareData.url}`);
                alert('Link copied to clipboard!');
            }
        } catch (err) {
            console.error('Share failed:', err);
        }
    };

    const handlePlayAgain = () => {
        navigate('/quiz');
    };

    return (
        <div className="quiz-container">
            <Helmet>
                <title>{`You're ${personality.name}! - Food Personality Quiz | The Dinner Decider`}</title>
                <meta
                    name="description"
                    content={`${personality.tagline}. ${personality.description.substring(0, 120)}...`}
                />
                <link rel="canonical" href={`https://www.thedinnerdecider.au/quiz/result/${personality.id}`} />
                <meta property="og:title" content={`I'm ${personality.name}! ${personality.emoji}`} />
                <meta property="og:description" content={personality.tagline} />
                <meta property="og:url" content={`https://www.thedinnerdecider.au/quiz/result/${personality.id}`} />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>

            {/* Particles */}
            <div className="quiz-particles">
                {[...Array(8)].map((_, i) => (
                    <div
                        key={i}
                        className={`quiz-particle quiz-particle-${(i % 6) + 1}`}
                        style={{
                            background: `radial-gradient(circle, ${personality.color.secondary}66 0%, transparent 70%)`
                        }}
                    />
                ))}
            </div>

            <motion.div
                className="quiz-content"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                style={{ maxWidth: '500px' }}
            >
                {/* Result Card */}
                <motion.div
                    className="result-card"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5, type: 'spring' as const }}
                    style={{
                        background: `linear-gradient(145deg, rgba(30, 30, 50, 0.95) 0%, rgba(20, 20, 35, 0.98) 100%)`,
                        border: `2px solid ${personality.color.primary}40`,
                        borderRadius: '24px',
                        padding: '2rem',
                        textAlign: 'center',
                        boxShadow: `0 25px 50px rgba(0, 0, 0, 0.5), 0 0 40px ${personality.color.primary}20`
                    }}
                >
                    {/* Badge */}
                    <div style={{
                        fontSize: '0.75rem',
                        color: personality.color.primary,
                        fontWeight: 600,
                        letterSpacing: '2px',
                        textTransform: 'uppercase',
                        marginBottom: '1rem'
                    }}>
                        Your Food Personality
                    </div>

                    {/* Emoji */}
                    <motion.div
                        style={{ fontSize: '5rem', lineHeight: 1, marginBottom: '1rem' }}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.4, type: 'spring' as const, stiffness: 200 }}
                    >
                        {personality.emoji}
                    </motion.div>

                    {/* Name */}
                    <h1 style={{
                        fontFamily: "'Cinzel', serif",
                        fontSize: '1.75rem',
                        fontWeight: 700,
                        background: personality.color.gradient,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        marginBottom: '0.5rem'
                    }}>
                        {personality.name}
                    </h1>

                    {/* Tagline */}
                    <p style={{
                        fontSize: '1.1rem',
                        color: personality.color.secondary,
                        fontStyle: 'italic',
                        marginBottom: '1.5rem'
                    }}>
                        "{personality.tagline}"
                    </p>

                    {/* Description */}
                    <p style={{
                        fontSize: '0.95rem',
                        color: '#b3aed1',
                        lineHeight: 1.6,
                        marginBottom: '1.5rem'
                    }}>
                        {personality.description}
                    </p>

                    {/* Fun Fact */}
                    <div style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        borderRadius: '12px',
                        padding: '1rem',
                        marginBottom: '1.5rem'
                    }}>
                        <span style={{ fontSize: '0.8rem', color: '#9ca3af' }}>Fun Fact: </span>
                        <span style={{ fontSize: '0.9rem', color: '#e5e7eb' }}>{personality.funFact}</span>
                    </div>

                    {/* Matching Foods */}
                    <div style={{ marginBottom: '1.5rem' }}>
                        <h3 style={{
                            fontSize: '0.9rem',
                            color: '#FFC857',
                            fontWeight: 600,
                            marginBottom: '1rem',
                            textTransform: 'uppercase',
                            letterSpacing: '1px'
                        }}>
                            Your Perfect Dishes
                        </h3>
                        <div style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '0.5rem',
                            justifyContent: 'center'
                        }}>
                            {matchingFoods.map((food, i) => (
                                <motion.div
                                    key={food.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 + i * 0.1 }}
                                >
                                    <Link
                                        to={`/result/${encodeURIComponent(food.name)}`}
                                        style={{
                                            display: 'inline-block',
                                            padding: '0.5rem 1rem',
                                            background: 'rgba(255, 255, 255, 0.08)',
                                            border: '1px solid rgba(255, 255, 255, 0.15)',
                                            borderRadius: '100px',
                                            color: '#e5e7eb',
                                            fontSize: '0.85rem',
                                            textDecoration: 'none',
                                            transition: 'all 0.2s ease'
                                        }}
                                    >
                                        {food.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Branding */}
                    <div style={{
                        fontSize: '0.75rem',
                        color: '#6b7280',
                        marginTop: '1rem'
                    }}>
                        thedinnerdecider.au/quiz
                    </div>
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.75rem',
                        marginTop: '1.5rem',
                        width: '100%'
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                >
                    <motion.button
                        onClick={handleShare}
                        style={{
                            width: '100%',
                            padding: '1rem',
                            fontFamily: "'Cinzel', serif",
                            fontSize: '1rem',
                            fontWeight: 700,
                            color: '#1a1a2e',
                            background: personality.color.gradient,
                            border: 'none',
                            borderRadius: '12px',
                            cursor: 'pointer'
                        }}
                        whileHover={{ scale: 1.02, boxShadow: `0 5px 20px ${personality.color.primary}50` }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Share My Result 📤
                    </motion.button>

                    <div style={{ display: 'flex', gap: '0.75rem' }}>
                        <motion.button
                            onClick={handlePlayAgain}
                            style={{
                                flex: 1,
                                padding: '0.875rem',
                                background: 'rgba(255, 255, 255, 0.08)',
                                border: '1px solid rgba(255, 255, 255, 0.2)',
                                borderRadius: '12px',
                                color: '#b3aed1',
                                fontSize: '0.9rem',
                                fontWeight: 600,
                                cursor: 'pointer'
                            }}
                            whileHover={{ background: 'rgba(255, 255, 255, 0.12)' }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Play Again
                        </motion.button>

                        <Link
                            to="/tournament-setup"
                            style={{ flex: 1, textDecoration: 'none' }}
                        >
                            <motion.button
                                style={{
                                    width: '100%',
                                    padding: '0.875rem',
                                    background: 'rgba(255, 200, 87, 0.15)',
                                    border: '1px solid rgba(255, 200, 87, 0.3)',
                                    borderRadius: '12px',
                                    color: '#FFC857',
                                    fontSize: '0.9rem',
                                    fontWeight: 600,
                                    cursor: 'pointer'
                                }}
                                whileHover={{ background: 'rgba(255, 200, 87, 0.25)' }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Try Tournament 🔥
                            </motion.button>
                        </Link>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default QuizResultScreen;
