// src/screens/ExploreFoodsScreen.tsx

import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ALL_FOODS, CUISINE_OPTIONS } from '../../constants/foods';
import { generateSlug } from '../utils/foodUtils';
import AdSense from '../../components/AdSense';
import { Helmet } from 'react-helmet-async';
import './ExploreFoodsScreen.css';

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
    <div className="explore-container">
      <Helmet>
        <title>Explore All Dishes - The Dinner Decider</title>
        <meta name="description" content={`Browse, filter, and discover all ${ALL_FOODS.length} delicious food options available in The Dinner Decider game.`} />
        <link rel="canonical" href="https://www.thedinnerdecider.au/explore-foods" />
      </Helmet>
      <div className="explore-content">

        <div className="text-center mb-12">
          <h1 className="explore-title">Explore All Dishes</h1>
          <p className="explore-subtitle">
            Browse our full library of {ALL_FOODS.length} delicious options. Use the filters to find exactly what you're craving.
          </p>
        </div>

        <div className="filter-container">
          {filterCategories.map(category => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* AdSense 광고 */}
        <div className="mb-8 max-w-4xl mx-auto">
          <AdSense className="rounded-xl overflow-hidden" />
        </div>

        {/* 푸드 카드 그리드 */}
        <div className="food-grid">
          {filteredFoods.map((food, index) => {

            // [수정] 첫 10개 이미지는 즉시 로드, 그 이후 이미지는 지연 로드합니다.
            const isLoadingLazy = index >= 10;
            // [수정] 가장 첫 번째 이미지(LCP 후보)에만 높은 우선순위를 부여합니다.
            const fetchPriority = index === 0 ? 'high' : 'auto';

            return (
              <Link
                to={`/food/${generateSlug(food.name)}`}
                key={food.id}
                className="explore-food-card group"
              >
                <div className="explore-image-wrapper">
                  <img
                    src={food.imageUrl}
                    alt={food.name}
                    className="explore-food-image"
                    // [수정] 동적으로 속성 적용
                    loading={isLoadingLazy ? 'lazy' : 'eager'} // 10개 초과 시 'lazy', 그 외엔 'eager' (기본값)
                    fetchPriority={fetchPriority} // 첫 번째 이미지는 'high'
                    // [추가] 브라우저에 이미지 크기 힌트를 줍니다. (CLS 방지용)
                    width={400}
                    height={400}
                  />
                  <div className="explore-image-overlay" />
                </div>
                <div className="explore-card-content">
                  <h3 className="explore-food-name">{food.name}</h3>
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