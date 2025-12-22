
export interface FoodItem {
  id: number;
  name: string;
  imageUrl: string;
  tags: string[];
  mood?: ('spicy' | 'comfort' | 'light' | 'late-night' | 'trendy')[];  // Mood-based category
  checklist?: string[];
  pairings?: {
    type: string;
    suggestion: string;
    icon: string;
  }[];
  funFact?: string;
  eatLikeLocal?: {
    icon: string;
    title: string;
    description: string;
  }[];
}

export enum GameState {
  START,
  PLAYING,
  FINISHED,
}

export interface FilterOptions {
  dietary: string[];
  cuisine: string[];
}
