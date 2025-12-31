
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
  // GEO AI 최적화 필드
  description?: string;  // 3줄 요약 설명 (AI 크롤러용)
  qaTitle?: string;      // Q&A 형식 제목 (funFact용)
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
