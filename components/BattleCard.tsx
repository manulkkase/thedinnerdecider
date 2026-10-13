import React from 'react';
import { FoodItem } from '../types';

interface BattleCardProps {
  food: FoodItem;
  onSelect: () => void;
  position: 'left' | 'right';
  isSelected?: boolean;
  isLoser?: boolean;
}

const BattleCard: React.FC<BattleCardProps> = ({ food, onSelect, position, isSelected, isLoser }) => (
  <button type="button" className={`dinner-battle-card ${position}${isSelected ? ' picked' : ''}${isLoser ? ' passed' : ''}`}
    onClick={onSelect} disabled={isSelected || isLoser} aria-label={`Choose ${food.name}`}>
    <img src={food.imageUrl} alt={food.name} draggable={false} />
    <span className="dinner-battle-caption"><strong>{food.name}</strong><span className="dinner-battle-pick">{isSelected ? 'Through to the next round ✓' : 'I’m craving this'}</span></span>
  </button>
);
export default BattleCard;
