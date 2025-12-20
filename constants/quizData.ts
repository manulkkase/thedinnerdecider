/**
 * Food Personality Quiz - Data & Logic
 * 
 * 8 Personality Types with scoring system
 * 5 Visual Questions with weighted answers
 */

// =====================
// PERSONALITY TYPES
// =====================

export interface PersonalityType {
    id: string;
    name: string;
    emoji: string;
    tagline: string;
    description: string;
    color: {
        primary: string;
        secondary: string;
        gradient: string;
    };
    matchingTags: string[];  // Tags to match from ALL_FOODS
    funFact: string;
}

export const PERSONALITY_TYPES: Record<string, PersonalityType> = {
    comfort: {
        id: 'comfort',
        name: 'The Comfort Creature',
        emoji: '🛋️',
        tagline: 'Warm, cozy, and perfectly predictable',
        description: "You believe the best meals are the ones that feel like a hug. When life gets hectic, you reach for familiar flavours that remind you of home. There's nothing wrong with knowing what you love!",
        color: {
            primary: '#F97316',
            secondary: '#FDBA74',
            gradient: 'linear-gradient(135deg, #F97316 0%, #EA580C 100%)'
        },
        matchingTags: ['Comfort Food', 'Australian', 'British'],
        funFact: "You've probably had the same 'usual' at your local for years."
    },
    explorer: {
        id: 'explorer',
        name: 'The Bold Explorer',
        emoji: '🌶️',
        tagline: 'Life is too short for boring food',
        description: "You chase heat, funk, and flavours most people can't pronounce. Your motto? 'I'll try anything once.' Every meal is an adventure, and you're always hunting for the next culinary thrill.",
        color: {
            primary: '#DC2626',
            secondary: '#FCA5A5',
            gradient: 'linear-gradient(135deg, #DC2626 0%, #B91C1C 100%)'
        },
        matchingTags: ['Thai', 'Indian', 'Korean', 'Vietnamese', 'Mexican'],
        funFact: "You judge a restaurant by how spicy their 'spicy' actually is."
    },
    midnight: {
        id: 'midnight',
        name: 'The Midnight Muncher',
        emoji: '🌙',
        tagline: 'The best snacks happen after 10pm',
        description: "Your hunger doesn't follow a schedule. When the cravings hit at midnight, you answer the call. Fast, greasy, and satisfying - that's your love language.",
        color: {
            primary: '#7C3AED',
            secondary: '#C4B5FD',
            gradient: 'linear-gradient(135deg, #7C3AED 0%, #5B21B6 100%)'
        },
        matchingTags: ['Fast Food', 'Middle Eastern', 'American'],
        funFact: "You know every late-night kebab shop within a 10km radius."
    },
    health: {
        id: 'health',
        name: 'The Health Ninja',
        emoji: '🥗',
        tagline: 'Clean eating, clear mind',
        description: "You see food as fuel and you want premium unleaded. Fresh, nutritious, and packed with goodness - you prove that healthy eating doesn't have to be boring.",
        color: {
            primary: '#16A34A',
            secondary: '#86EFAC',
            gradient: 'linear-gradient(135deg, #16A34A 0%, #15803D 100%)'
        },
        matchingTags: ['Vegetarian', 'Vegan', 'Healthy', 'Mediterranean'],
        funFact: "You've definitely asked 'Is this gluten-free?' at least once."
    },
    social: {
        id: 'social',
        name: 'The Social Butterfly',
        emoji: '🍻',
        tagline: 'Food tastes better with friends',
        description: "For you, meals are about connection. The bigger the table, the better. Share plates, group orders, and splitting the bill equally - that's your style.",
        color: {
            primary: '#EC4899',
            secondary: '#F9A8D4',
            gradient: 'linear-gradient(135deg, #EC4899 0%, #DB2777 100%)'
        },
        matchingTags: ['Spanish', 'Greek', 'Japanese', 'Chinese'],
        funFact: "You're the one who always organises the group dinner."
    },
    sweet: {
        id: 'sweet',
        name: 'The Sweet Escape',
        emoji: '🍰',
        tagline: 'Life is uncertain. Eat dessert first.',
        description: "Why wait until the end of the meal for the best part? You have a legendary sweet tooth and you're not ashamed. Chocolate, pastries, ice cream - you speak fluent dessert.",
        color: {
            primary: '#F472B6',
            secondary: '#FBCFE8',
            gradient: 'linear-gradient(135deg, #F472B6 0%, #EC4899 100%)'
        },
        matchingTags: ['Dessert', 'French', 'Italian'],
        funFact: "You've ordered 'just dessert' for dinner more than once."
    },
    classic: {
        id: 'classic',
        name: 'The Classic Aussie',
        emoji: '🇦🇺',
        tagline: "Meat pies, snags, and no fancy business",
        description: "You're a true blue legend who knows what works. Why fix what isn't broken? A proper feed doesn't need to be complicated - it just needs to hit the spot.",
        color: {
            primary: '#CA8A04',
            secondary: '#FDE047',
            gradient: 'linear-gradient(135deg, #CA8A04 0%, #A16207 100%)'
        },
        matchingTags: ['Australian', 'British', 'American'],
        funFact: "Bunnings sausage sizzle is a legitimate meal option."
    },
    fusion: {
        id: 'fusion',
        name: 'The Fusion Wizard',
        emoji: '✨',
        tagline: 'Rules are made to be mixed',
        description: "You don't believe in food borders. Korean tacos? Sushi burritos? Bring it on. You love creative combinations that shouldn't work but absolutely do.",
        color: {
            primary: '#6366F1',
            secondary: '#A5B4FC',
            gradient: 'linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)'
        },
        matchingTags: ['Japanese', 'Korean', 'Mexican', 'Vietnamese'],
        funFact: "You've definitely said 'This is weird but trust me' before ordering."
    }
};

// =====================
// QUIZ QUESTIONS
// =====================

export interface QuizOption {
    id: string;
    text: string;
    icon: string;
    scores: Partial<Record<string, number>>;
}

export interface QuizQuestion {
    id: number;
    question: string;
    subtext?: string;
    options: QuizOption[];
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
    {
        id: 1,
        question: "It's Friday night. What's your vibe?",
        subtext: "Pick the one that feels most 'you'",
        options: [
            {
                id: 'a',
                text: 'Cosy night in with comfort food',
                icon: '🏠',
                scores: { comfort: 2, classic: 1 }
            },
            {
                id: 'b',
                text: 'Trying that new hyped restaurant',
                icon: '🍽️',
                scores: { explorer: 2, fusion: 1 }
            },
            {
                id: 'c',
                text: 'Late-night adventure, wherever it takes me',
                icon: '🌙',
                scores: { midnight: 2, explorer: 1 }
            },
            {
                id: 'd',
                text: 'Catching up with mates over drinks',
                icon: '🍻',
                scores: { social: 2, classic: 1 }
            }
        ]
    },
    {
        id: 2,
        question: 'Pick a weekend activity:',
        subtext: 'Your ideal Saturday morning',
        options: [
            {
                id: 'a',
                text: 'Farmers market for fresh ingredients',
                icon: '🥬',
                scores: { health: 2, comfort: 1 }
            },
            {
                id: 'b',
                text: 'Food festival — must try EVERYTHING',
                icon: '🎪',
                scores: { explorer: 2, fusion: 1 }
            },
            {
                id: 'c',
                text: 'Sleep in, brunch at 2pm',
                icon: '😴',
                scores: { midnight: 2, sweet: 1 }
            },
            {
                id: 'd',
                text: "BBQ at a mate's place",
                icon: '🔥',
                scores: { classic: 2, social: 1 }
            }
        ]
    },
    {
        id: 3,
        question: 'Your dream dinner table looks like...',
        subtext: 'Close your eyes and picture it',
        options: [
            {
                id: 'a',
                text: 'Simple, wholesome, home-cooked',
                icon: '🍲',
                scores: { comfort: 2, health: 1 }
            },
            {
                id: 'b',
                text: '10 small plates from different cuisines',
                icon: '🍱',
                scores: { fusion: 2, social: 1 }
            },
            {
                id: 'c',
                text: 'A giant dessert spread',
                icon: '🧁',
                scores: { sweet: 3 }
            },
            {
                id: 'd',
                text: 'Classic pub meal with all the trimmings',
                icon: '🍺',
                scores: { classic: 2, comfort: 1 }
            }
        ]
    },
    {
        id: 4,
        question: 'If your stomach could talk, it would say...',
        subtext: "What's it craving right now?",
        options: [
            {
                id: 'a',
                text: '"Feed me something warm and familiar"',
                icon: '🥰',
                scores: { comfort: 2, classic: 1 }
            },
            {
                id: 'b',
                text: '"Surprise me! I\'m feeling brave"',
                icon: '🎲',
                scores: { explorer: 2, fusion: 1 }
            },
            {
                id: 'c',
                text: '"Where\'s the midnight snack?"',
                icon: '🌜',
                scores: { midnight: 2, sweet: 1 }
            },
            {
                id: 'd',
                text: '"Let\'s share with friends!"',
                icon: '👯',
                scores: { social: 2 }
            }
        ]
    },
    {
        id: 5,
        question: 'Pick a flavour mood:',
        subtext: 'Go with your gut',
        options: [
            {
                id: 'a',
                text: 'Savoury & Comforting',
                icon: '🧈',
                scores: { comfort: 2, classic: 1 }
            },
            {
                id: 'b',
                text: 'Spicy & Bold',
                icon: '🌶️',
                scores: { explorer: 2, midnight: 1 }
            },
            {
                id: 'c',
                text: 'Sweet & Indulgent',
                icon: '🍫',
                scores: { sweet: 2, midnight: 1 }
            },
            {
                id: 'd',
                text: 'Fresh & Light',
                icon: '🥗',
                scores: { health: 2, fusion: 1 }
            }
        ]
    }
];

// =====================
// SCORING LOGIC
// =====================

export type ScoreMap = Record<string, number>;

export function calculateResult(scores: ScoreMap): PersonalityType {
    // Find the personality type with the highest score
    let maxScore = 0;
    let winningType = 'comfort'; // Default fallback

    Object.entries(scores).forEach(([typeId, score]) => {
        if (score > maxScore) {
            maxScore = score;
            winningType = typeId;
        }
    });

    return PERSONALITY_TYPES[winningType];
}

// Initialize empty scores
export function getInitialScores(): ScoreMap {
    return Object.keys(PERSONALITY_TYPES).reduce((acc, key) => {
        acc[key] = 0;
        return acc;
    }, {} as ScoreMap);
}

// Add option scores to current scores
export function addScores(current: ScoreMap, optionScores: Partial<ScoreMap>): ScoreMap {
    const newScores = { ...current };
    Object.entries(optionScores).forEach(([key, value]) => {
        if (value) {
            newScores[key] = (newScores[key] || 0) + value;
        }
    });
    return newScores;
}

// Get all personality type IDs for sitemap
export const ALL_PERSONALITY_IDS = Object.keys(PERSONALITY_TYPES);
