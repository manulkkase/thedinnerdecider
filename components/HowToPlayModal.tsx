// src/components/HowToPlayModal.tsx

import React from 'react';
import { motion } from 'framer-motion';

interface HowToPlayModalProps {
  onClose: () => void;
}

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: 'spring' as const, stiffness: 300, damping: 25 }
  },
  exit: { opacity: 0, scale: 0.9, y: 20 }
};

const HowToPlayModal: React.FC<HowToPlayModalProps> = ({ onClose }) => {
  return (
    <motion.div
      className="fixed inset-0 flex justify-center items-center p-4"
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        backdropFilter: 'blur(8px)',
        zIndex: 9999
      }}
      variants={overlayVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      onClick={onClose}
    >
      <motion.div
        className="relative max-w-lg w-full"
        style={{
          background: 'linear-gradient(145deg, rgba(30, 30, 50, 0.95) 0%, rgba(20, 20, 35, 0.98) 100%)',
          border: '1px solid rgba(255, 200, 87, 0.2)',
          borderRadius: '24px',
          boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5), 0 0 30px rgba(255, 200, 87, 0.1)',
          padding: '2rem'
        }}
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            color: '#b3aed1',
            fontSize: '1.25rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
            e.currentTarget.style.color = '#fff';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
            e.currentTarget.style.color = '#b3aed1';
          }}
        >
          ✕
        </button>

        {/* Header */}
        <h2
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: '1.75rem',
            fontWeight: 700,
            background: 'linear-gradient(135deg, #FFC857 0%, #f59e0b 50%, #a78bfa 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '1.5rem',
            textAlign: 'center'
          }}
        >
          How to Play
        </h2>

        {/* Steps */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {/* Step 1 */}
          <div style={{
            display: 'flex',
            gap: '1rem',
            alignItems: 'flex-start'
          }}>
            <span style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              background: 'rgba(255, 200, 87, 0.2)',
              border: '1px solid rgba(255, 200, 87, 0.4)',
              color: '#FFC857',
              fontWeight: 700,
              fontSize: '0.9rem',
              flexShrink: 0
            }}>1</span>
            <div>
              <h3 style={{ color: '#FFC857', fontWeight: 600, marginBottom: '0.25rem' }}>
                Choose Tournament Size
              </h3>
              <p style={{ color: '#b3aed1', fontSize: '0.9rem', lineHeight: 1.5 }}>
                Select 8, 16, or 32 contenders. More items = more rounds of delicious decisions!
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div style={{
            display: 'flex',
            gap: '1rem',
            alignItems: 'flex-start'
          }}>
            <span style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              background: 'rgba(167, 139, 250, 0.2)',
              border: '1px solid rgba(167, 139, 250, 0.4)',
              color: '#a78bfa',
              fontWeight: 700,
              fontSize: '0.9rem',
              flexShrink: 0
            }}>2</span>
            <div>
              <h3 style={{ color: '#a78bfa', fontWeight: 600, marginBottom: '0.25rem' }}>
                Filter Options (Optional)
              </h3>
              <p style={{ color: '#b3aed1', fontSize: '0.9rem', lineHeight: 1.5 }}>
                Narrow choices by dietary needs or cuisine type. Skip if you're feeling adventurous!
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div style={{
            display: 'flex',
            gap: '1rem',
            alignItems: 'flex-start'
          }}>
            <span style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              background: 'rgba(91, 231, 169, 0.2)',
              border: '1px solid rgba(91, 231, 169, 0.4)',
              color: '#5BE7A9',
              fontWeight: 700,
              fontSize: '0.9rem',
              flexShrink: 0
            }}>3</span>
            <div>
              <h3 style={{ color: '#5BE7A9', fontWeight: 600, marginBottom: '0.25rem' }}>
                Start the Battle!
              </h3>
              <p style={{ color: '#b3aed1', fontSize: '0.9rem', lineHeight: 1.5 }}>
                Pick your favorite of the two dishes shown. The last dish standing is your winner!
              </p>
            </div>
          </div>
        </div>

        {/* Button */}
        <motion.button
          onClick={onClose}
          style={{
            width: '100%',
            marginTop: '1.5rem',
            padding: '0.875rem 1.5rem',
            fontFamily: "'Cinzel', serif",
            fontSize: '1rem',
            fontWeight: 700,
            color: '#1a1a2e',
            background: 'linear-gradient(135deg, #FFC857 0%, #f59e0b 100%)',
            border: 'none',
            borderRadius: '12px',
            cursor: 'pointer'
          }}
          whileHover={{ scale: 1.02, boxShadow: '0 5px 20px rgba(255, 200, 87, 0.4)' }}
          whileTap={{ scale: 0.98 }}
        >
          Got it! Let's Battle! 🔥
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default HowToPlayModal;