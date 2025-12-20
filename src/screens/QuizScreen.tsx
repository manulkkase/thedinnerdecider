import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import {
    QUIZ_QUESTIONS,
    getInitialScores,
    addScores,
    calculateResult,
    ScoreMap
} from '../../constants/quizData';
import './QuizScreen.css';

// Animation variants
const questionVariants = {
    enter: { opacity: 0, x: 50 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 }
};

const optionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1 + 0.2, duration: 0.4 }
    })
};

const QuizScreen: React.FC = () => {
    const navigate = useNavigate();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [scores, setScores] = useState<ScoreMap>(getInitialScores());
    const [isTransitioning, setIsTransitioning] = useState(false);

    const question = QUIZ_QUESTIONS[currentQuestion];
    const progress = ((currentQuestion) / QUIZ_QUESTIONS.length) * 100;

    const handleSelect = useCallback((optionScores: Partial<ScoreMap>) => {
        if (isTransitioning) return;

        setIsTransitioning(true);
        const newScores = addScores(scores, optionScores);
        setScores(newScores);

        setTimeout(() => {
            if (currentQuestion < QUIZ_QUESTIONS.length - 1) {
                setCurrentQuestion(prev => prev + 1);
                setIsTransitioning(false);
            } else {
                // Quiz complete - calculate result and navigate
                const result = calculateResult(newScores);
                navigate(`/quiz/result/${result.id}`);
            }
        }, 400);
    }, [currentQuestion, scores, isTransitioning, navigate]);

    return (
        <div className="quiz-container">
            <Helmet>
                <title>Food Personality Quiz - The Dinner Decider</title>
                <meta
                    name="description"
                    content="Discover your food personality type! Are you a Comfort Creature, Bold Explorer, or Midnight Muncher? Take the quiz and find out what your food choices say about you."
                />
                <link rel="canonical" href="https://www.thedinnerdecider.au/quiz" />
                <meta property="og:title" content="What's Your Food Personality? Take the Quiz!" />
                <meta property="og:description" content="Discover your unique food personality type in 5 fun questions!" />
                <meta property="og:url" content="https://www.thedinnerdecider.au/quiz" />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>

            {/* Floating particles */}
            <div className="quiz-particles">
                {[...Array(6)].map((_, i) => (
                    <div key={i} className={`quiz-particle quiz-particle-${i + 1}`} />
                ))}
            </div>

            <motion.div
                className="quiz-content"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                {/* Progress Bar */}
                <div className="quiz-progress-wrapper">
                    <div className="quiz-progress-bar">
                        <motion.div
                            className="quiz-progress-fill"
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                            transition={{ duration: 0.4, ease: 'easeOut' }}
                        />
                    </div>
                    <span className="quiz-progress-text">
                        {currentQuestion + 1} of {QUIZ_QUESTIONS.length}
                    </span>
                </div>

                {/* Question Card */}
                <div className="quiz-question-area">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={question.id}
                            className="quiz-question-card"
                            variants={questionVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.3 }}
                        >
                            <h2 className="quiz-question-text">{question.question}</h2>
                            {question.subtext && (
                                <p className="quiz-question-subtext">{question.subtext}</p>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Answer Options */}
                <div className="quiz-options-grid">
                    {question.options.map((option, index) => (
                        <motion.button
                            key={`${question.id}-${option.id}`}
                            className="quiz-option-card"
                            onClick={() => handleSelect(option.scores)}
                            custom={index}
                            variants={optionVariants}
                            initial="hidden"
                            animate="visible"
                            whileHover={{ scale: 1.03, y: -4 }}
                            whileTap={{ scale: 0.97 }}
                            disabled={isTransitioning}
                        >
                            <span className="quiz-option-icon">{option.icon}</span>
                            <span className="quiz-option-text">{option.text}</span>
                        </motion.button>
                    ))}
                </div>

                {/* Back button (only if not first question) */}
                {currentQuestion > 0 && (
                    <motion.button
                        className="quiz-back-btn"
                        onClick={() => setCurrentQuestion(prev => prev - 1)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        ← Back
                    </motion.button>
                )}
            </motion.div>
        </div>
    );
};

export default QuizScreen;
