import { CardData, CardInfo, CardCategory } from '../types/tarotTypes';

// --- 데이터와 함수 export ---

export const CARD_DATA: CardData = {
  energy: [
    { id: 'sun', name: 'Sun', imageUrl: '/images/sun.webp' },
    { id: 'moon', name: 'Moon', imageUrl: '/images/moon.webp' },
    { id: 'star', name: 'Star', imageUrl: '/images/star.webp' },
  ],
  method: [
    { id: 'wok', name: 'Wok', imageUrl: '/images/wok.webp' },
    { id: 'pot', name: 'Pot', imageUrl: '/images/pot.webp' },
    { id: 'knife', name: 'Knife', imageUrl: '/images/knife.webp' },
  ],
  flavor: [
    { id: 'spice', name: 'Spice', imageUrl: '/images/spice.webp' },
    { id: 'herb', name: 'Herb', imageUrl: '/images/herb.webp' },
    { id: 'sugar', name: 'Sugar', imageUrl: '/images/sugar.webp' },
  ],
};

export const QUESTIONS: Record<CardCategory, string> = {
    energy: "What is your energy today?",
    method: "How shall it be prepared?",
    flavor: "What flavor do you crave?"
};

export const getCardInfo = (category: CardCategory, id: string | null): CardInfo | null => {
    if (!id) return null;
    return CARD_DATA[category].find(card => card.id === id) || null;
}