
export interface FoodItem {
  id: number;
  name: string;
  imageUrl: string;
  tags: string[];
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
