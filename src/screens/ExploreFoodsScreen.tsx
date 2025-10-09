// src/screens/ExploreFoodsScreen.tsx

import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ALL_FOODS, CUISINE_OPTIONS } from '../../constants/foods'; // foods.ts에서 데이터 가져오기
import { useDocumentTitle } from '../../hooks/useDocumentTitle'; // SEO를 위한 훅

// 필터 버튼에 'All'을 추가하고, CUISINE_OPTIONS의 value만 추출하여 배열 생성
const filterCategories = ['All', ...CUISINE_OPTIONS.map(opt => opt.value)];

const ExploreFoodsScreen: React.FC = () => {
  // SEO를 위한 페이지 제목 및 설명 설정
  useDocumentTitle('Explore All Dishes - The Dinner Decider', 'Browse, filter, and discover all 100 delicious food options available in The Dinner Decider game.');
  
  // 현재 활성화된 필터를 관리하는 state
  const [activeFilter, setActiveFilter] = useState('All');

  // 활성화된 필터에 따라 보여줄 음식 목록을 계산
  const filteredFoods = useMemo(() => {
    if (activeFilter === 'All') {
      return ALL_FOODS;
    }
    return ALL_FOODS.filter(food => food.tags && food.tags.includes(activeFilter));
  }, [activeFilter]);

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* 1. 페이지 헤더 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight">Explore All Dishes</h1>
          <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
            Browse our full library of 100 delicious options. Use the filters to find exactly what you're craving.
          </p>
        </div>

        {/* 2. 필터 버튼 바 */}
        <div className="flex justify-center flex-wrap gap-2 mb-12">
          {filterCategories.map(category => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-200 ease-in-out transform hover:scale-105 ${
                activeFilter === category
                  ? 'bg-amber-500 text-white shadow-md'
                  : 'bg-slate-200 text-slate-600 hover:bg-slate-300'
              }`}
            >
              {/* 카테고리 이름의 첫 글자를 대문자로 변경해서 표시 */}
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* 3. 푸드 카드 그리드 */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {filteredFoods.map(food => (
            <Link 
              to={`/result/${encodeURIComponent(food.name)}`} 
              key={food.id}
              className="group block bg-white rounded-lg overflow-hidden border border-slate-200 hover:shadow-xl hover:border-amber-500 transition-all duration-300"
            >
              <div className="aspect-w-1 aspect-h-1">
                <img src={food.imageUrl} alt={food.name} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-slate-800 group-hover:text-amber-600 transition-colors">{food.name}</h3>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ExploreFoodsScreen;