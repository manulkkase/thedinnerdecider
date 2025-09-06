
import React from 'react';
import { FoodItem } from '../types';

interface FoodCardProps {
  food: FoodItem;
  onSelect: () => void;
}

const FoodCard: React.FC<FoodCardProps> = ({ food, onSelect }) => {
  return (
    <div 
      className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl cursor-pointer group transform transition-all duration-300 hover:scale-105"
      onClick={onSelect}
    >
      <img src={food.imageUrl} alt={food.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 p-6">
        <h2 className="text-white text-3xl md:text-5xl font-bold drop-shadow-lg">{food.name}</h2>
        <p className="mt-2 text-yellow-300 text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">Choose Me!</p>
      </div>
       <div className="absolute inset-0 bg-sky-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
    </div>
  );
};

export default FoodCard;
