export interface CardInfo {
  id: string;
  name: string;
  imageUrl: string;
}

export type CardCategory = 'energy' | 'method' | 'flavor';

export interface CardData {
  energy: CardInfo[];
  method: CardInfo[];
  flavor: CardInfo[];
}

export interface Selections {
  energy: string | null;
  method: string | null;
  flavor: string | null;
}

export interface ResultContent {
  headline: string;
  body: string;
  menu: string;
  tags: string[];
}