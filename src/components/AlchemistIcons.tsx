import React from 'react';

// Common Gradients & Filters
export const AlchemistIconDefs = () => (
    <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
            <linearGradient id="fireGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FCD34D" />
                <stop offset="100%" stopColor="#EF4444" />
            </linearGradient>
            <linearGradient id="coinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FDE68A" />
                <stop offset="100%" stopColor="#D97706" />
            </linearGradient>
            <linearGradient id="moonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#C4B5FD" />
                <stop offset="100%" stopColor="#7C3AED" />
            </linearGradient>
            <linearGradient id="herbGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#86EFAC" />
                <stop offset="100%" stopColor="#15803D" />
            </linearGradient>
            <linearGradient id="energyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FDBA74" />
                <stop offset="100%" stopColor="#EA580C" />
            </linearGradient>
            <linearGradient id="magicGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F9A8D4" />
                <stop offset="100%" stopColor="#DB2777" />
            </linearGradient>
            <filter id="iconGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="2" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <filter id="iconDropShadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="rgba(0,0,0,0.2)" />
            </filter>
        </defs>
    </svg>
);

interface IconProps {
    className?: string;
    size?: number;
}

export const FireIcon: React.FC<IconProps> = ({ className, size = 40 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C16.4183 22 20 18.4183 20 14C20 9.58172 16.4183 6 12 2C7.58172 6 4 9.58172 4 14C4 18.4183 7.58172 22 12 22Z" fill="url(#fireGrad)" filter="url(#iconDropShadow)" opacity="0.3" />
        <path d="M12 18C14.2091 18 16 16.2091 16 14C16 11.7909 14.2091 10 12 8C9.79086 10 8 11.7909 8 14C8 16.2091 9.79086 18 12 18Z" fill="url(#fireGrad)" filter="url(#iconGlow)" />
    </svg>
);

export const CoinIcon: React.FC<IconProps> = ({ className, size = 40 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="9" fill="url(#coinGrad)" filter="url(#iconDropShadow)" />
        <path d="M12 6V18M15 9H10.5C9.67157 9 9 9.67157 9 10.5V10.5C9 11.3284 9.67157 12 10.5 12H13.5C14.3284 12 15 12.6716 15 13.5V13.5C15 14.3284 14.3284 15 13.5 15H9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const MoonIcon: React.FC<IconProps> = ({ className, size = 40 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" fill="url(#moonGrad)" filter="url(#iconDropShadow)" />
        <path d="M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z" fill="white" fillOpacity="0.2" />
    </svg>
);

export const HerbIcon: React.FC<IconProps> = ({ className, size = 40 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C12 22 4 18 4 10C4 6 7 2 12 2C17 2 20 6 20 10C20 18 12 22 12 22Z" fill="url(#herbGrad)" filter="url(#iconDropShadow)" />
        <path d="M12 6V18M12 12L16 10M12 12L8 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
    </svg>
);

export const EnergyIcon: React.FC<IconProps> = ({ className, size = 40 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="url(#energyGrad)" filter="url(#iconDropShadow)" stroke="white" strokeWidth="1" strokeLinejoin="round" />
    </svg>
);

export const MagicIcon: React.FC<IconProps> = ({ className, size = 40 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="url(#magicGrad)" filter="url(#iconDropShadow)" />
        <circle cx="12" cy="12" r="3" fill="white" fillOpacity="0.4" />
    </svg>
);
