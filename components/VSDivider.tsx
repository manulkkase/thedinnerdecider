import React from 'react';
import { motion } from 'framer-motion';

const VSDivider: React.FC = () => {
    return (
        <div className="vs-divider-container">
            {/* 배경 글로우 */}
            <motion.div
                className="vs-glow"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5]
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut'
                }}
            />

            {/* VS 텍스트 */}
            <motion.div
                className="vs-text"
                initial={{ scale: 0, rotate: -20 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                    type: 'spring',
                    stiffness: 400,
                    damping: 15,
                    delay: 0.2
                }}
            >
                <span className="vs-letter">V</span>
                <span className="vs-letter">S</span>
            </motion.div>

            {/* 파티클 효과 */}
            <div className="vs-particles">
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="vs-particle"
                        animate={{
                            y: [-20, -40, -20],
                            x: [(i % 2 === 0 ? -10 : 10), (i % 2 === 0 ? 10 : -10), (i % 2 === 0 ? -10 : 10)],
                            opacity: [0.3, 0.7, 0.3],
                            scale: [0.8, 1.2, 0.8]
                        }}
                        transition={{
                            duration: 2 + (i * 0.3),
                            repeat: Infinity,
                            delay: i * 0.2
                        }}
                        style={{
                            left: `${20 + (i * 12)}%`,
                            top: `${20 + ((i % 3) * 25)}%`
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default VSDivider;
