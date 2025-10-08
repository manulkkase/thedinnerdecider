
export interface FoodItem {
  id: number;
  name: string;
  imageUrl: string;
  tags: string[];
  checklist?: string[]; // 👈 이 줄 추가
  pairings?: {         // 👈 이 블록 추가
    type: string;
    suggestion: string;
    icon: string;
  }[];
  funFact?: string;
  eatLikeLocal?: { // 👈 이 블록을 추가하세요.
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
