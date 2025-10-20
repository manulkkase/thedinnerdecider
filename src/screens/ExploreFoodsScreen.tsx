// src/screens/ExploreFoodsScreen.tsx

import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ALL_FOODS, CUISINE_OPTIONS } from '../../constants/foods';
import { Helmet } from 'react-helmet-async';

const filterCategories = ['All', ...CUISINE_OPTIONS.map(opt => opt.value)];

const ExploreFoodsScreen: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredFoods = useMemo(() => {
    if (activeFilter === 'All') {
      return ALL_FOODS;
    }
    return ALL_FOODS.filter(food => food.tags && food.tags.includes(activeFilter));
  }, [activeFilter]);

  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>Explore All Dishes - The Dinner Decider</title>
        <meta name="description" content="Browse, filter, and discover all 100 delicious food options available in The Dinner Decider game." />
        <link rel="canonical" href="https://thedinnerdecider.au/explore-foods" />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight">Explore All Dishes</h1>
          <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
            Browse our full library of 100 delicious options. Use the filters to find exactly what you're craving.
          </p>
        </div>

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
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* 3. 푸드 카드 그리드 (수정됨) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {filteredFoods.map((food, index) => {
            
            // [수정] 첫 10개 이미지는 즉시 로드, 그 이후 이미지는 지연 로드합니다.
            const isLoadingLazy = index >= 10;
            // [수정] 가장 첫 번째 이미지(LCP 후보)에만 높은 우선순위를 부여합니다.
            const fetchPriority = index === 0 ? 'high' : 'auto';

            return (
              <Link 
                to={`/result/${encodeURIComponent(food.name)}`} 
                key={food.id}
                className="group block bg-white rounded-lg overflow-hidden border border-slate-200 hover:shadow-xl hover:border-amber-500 transition-all duration-300"
              >
                <div className="aspect-w-1 aspect-h-1">
                  <img 
                    src={food.imageUrl} 
                    alt={food.name} 
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    // [수정] 동적으로 속성 적용
                    loading={isLoadingLazy ? 'lazy' : 'eager'} // 10개 초과 시 'lazy', 그 외엔 'eager' (기본값)
                    fetchPriority={fetchPriority} // 첫 번째 이미지는 'high'
                    
                    // [추가] 브라우저에 이미지 크기 힌트를 줍니다. (CLS 방지용)
                    // 그리드 썸네일이 400x400 픽셀이라고 가정. 실제 크기에 맞게 조절하세요.
                    width={400}
                    height={400}
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-slate-800 group-hover:text-amber-600 transition-colors">{food.name}</h3>
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default ExploreFoodsScreen;