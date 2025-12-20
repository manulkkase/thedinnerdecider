import { ALL_FOODS } from '../../constants/foods';

// Essence definitions
export interface Essence {
    id: string;
    name: string;
    emoji: string;
    description: string;
    color: string;
    tags: string[];
}

export const ESSENCES: Essence[] = [
    {
        id: 'fire',
        name: 'Fire',
        emoji: '🔥',
        description: 'Spicy & Bold',
        color: '#ef4444',
        tags: ['spicy', 'korean', 'thai', 'indian', 'mexican']
    },
    {
        id: 'coin',
        name: 'Coin',
        emoji: '💰',
        description: 'Budget Friendly',
        color: '#eab308',
        tags: ['budget', 'street-food', 'quick', 'aussie']
    },
    {
        id: 'moon',
        name: 'Moon',
        emoji: '🌙',
        description: 'Late Night Cravings',
        color: '#8b5cf6',
        tags: ['comfort', 'quick', 'hearty']
    },
    {
        id: 'herb',
        name: 'Herb',
        emoji: '🌿',
        description: 'Fresh & Healthy',
        color: '#22c55e',
        tags: ['healthy', 'vegetarian', 'vegan', 'salad']
    },
    {
        id: 'energy',
        name: 'Energy',
        emoji: '⚡',
        description: 'Hearty & Filling',
        color: '#f97316',
        tags: ['hearty', 'meat', 'aussie', 'protein']
    },
    {
        id: 'magic',
        name: 'Magic',
        emoji: '✨',
        description: 'Something Special',
        color: '#ec4899',
        tags: ['fusion', 'dessert', 'unique', 'japanese']
    }
];

// Get foods that match the selected essence tags
export function getMatchingFoods(selectedEssences: Essence[]): typeof ALL_FOODS {
    if (selectedEssences.length === 0) return [];

    // Combine all tags from selected essences
    const allTags = selectedEssences.flatMap(e => e.tags);

    // Filter foods that have at least one matching tag
    const matchingFoods = ALL_FOODS.filter(food =>
        food.tags?.some(tag =>
            allTags.some(essenceTag =>
                tag.toLowerCase().includes(essenceTag.toLowerCase()) ||
                essenceTag.toLowerCase().includes(tag.toLowerCase())
            )
        )
    );

    // If no matches, return random foods
    if (matchingFoods.length === 0) {
        return ALL_FOODS.slice().sort(() => Math.random() - 0.5).slice(0, 5);
    }

    return matchingFoods;
}

// Get a random food from matching foods
export function brewRandomFood(selectedEssences: Essence[]): typeof ALL_FOODS[0] | null {
    const matches = getMatchingFoods(selectedEssences);
    if (matches.length === 0) return null;

    const randomIndex = Math.floor(Math.random() * matches.length);
    return matches[randomIndex];
}

// Generate mystical brewing message based on essences
export function generateBrewingMessage(essences: Essence[]): string {
    const names = essences.map(e => e.name).join(' & ');
    const messages = [
        `The ${names} essences swirl together...`,
        `Ancient forces of ${names} combine...`,
        `The cauldron bubbles with ${names} energy...`,
        `${names} energies merge into one...`,
    ];
    return messages[Math.floor(Math.random() * messages.length)];
}
