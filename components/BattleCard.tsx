import React from 'react';
import { motion } from 'framer-motion';
import { FoodItem } from '../types';

interface BattleCardProps {
    food: FoodItem;
    onSelect: () => void;
    position: 'left' | 'right';
    isSelected?: boolean;
    isLoser?: boolean;
}

const BattleCard: React.FC<BattleCardProps> = ({
    food,
    onSelect,
    position,
    isSelected = false,
    isLoser = false
}) => {
    // 카드 애니메이션 variants
    const cardVariants = {
        initial: {
            x: position === 'left' ? -100 : 100,
            opacity: 0,
            scale: 0.9
        },
        animate: {
            x: 0,
            opacity: 1,
            scale: 1,
            transition: {
                type: 'spring',
                stiffness: 300,
                damping: 25,
                delay: position === 'left' ? 0 : 0.1
            }
        },
        exit: {
            x: position === 'left' ? -100 : 100,
            opacity: 0,
            scale: 0.9,
            transition: { duration: 0.3 }
        },
        selected: {
            scale: 1.05,
            boxShadow: '0 0 60px rgba(255, 200, 87, 0.8)',
            transition: { duration: 0.3 }
        },
        loser: {
            scale: 0.9,
            opacity: 0.3,
            filter: 'grayscale(100%)',
            transition: { duration: 0.3 }
        }
    };

    const getAnimateState = () => {
        if (isSelected) return 'selected';
        if (isLoser) return 'loser';
        return 'animate';
    };

    return (
        <motion.div
            className="battle-card-wrapper"
            variants={cardVariants}
            initial="initial"
            animate={getAnimateState()}
            exit="exit"
            whileHover={!isSelected && !isLoser ? {
                scale: 1.02,
                boxShadow: position === 'left'
                    ? '0 0 40px rgba(245, 158, 11, 0.5)'
                    : '0 0 40px rgba(139, 92, 246, 0.5)'
            } : undefined}
            whileTap={!isSelected && !isLoser ? { scale: 0.98 } : undefined}
            onClick={!isSelected && !isLoser ? onSelect : undefined}
            style={{ cursor: isSelected || isLoser ? 'default' : 'pointer' }}
        >
            <div className={`battle-card ${position}`}>
                <img
                    src={food.imageUrl}
                    alt={food.name}
                    className="battle-card-image"
                    draggable={false}
                />
                <div className="battle-card-overlay" />
                <div className="battle-card-content">
                    <h2 className="battle-card-title">{food.name}</h2>
                    {!isSelected && !isLoser && (
                        <motion.p
                            className="battle-card-cta"
                            initial={{ opacity: 0, y: 10 }}
                            whileHover={{ opacity: 1, y: 0 }}
                        >
                            Choose Me! 🔥
                        </motion.p>
                    )}
                    {isSelected && (
                        <motion.div
                            className="winner-badge"
                            initial={{ scale: 0, rotate: -10 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ type: 'spring', stiffness: 500, damping: 15 }}
                        >
                            👑 WINNER!
                        </motion.div>
                    )}
                </div>

                {/* 글로우 효과 */}
                <div className={`battle-card-glow ${position}`} />
            </div>
        </motion.div>
    );
};

export default BattleCard;
