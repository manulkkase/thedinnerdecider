import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import sitemap from 'vite-plugin-sitemap';
import { ALL_FOODS } from './constants/foods'; // 👈 경로가 여기로 수정되었습니다.

// foods.ts에 있는 100개의 음식 이름으로 /result/... 경로를 자동으로 생성합니다.
const tournamentResultRoutes = ALL_FOODS.map(food => `/result/${encodeURIComponent(food.name)}`);

// 27개의 고정된 타로 결과 페이지 경로 목록
const tarotResultRoutes = [
  '/food-tarot/result/sun/wok/spice', '/food-tarot/result/sun/wok/herb', '/food-tarot/result/sun/wok/sugar',
  '/food-tarot/result/sun/pot/spice', '/food-tarot/result/sun/pot/herb', '/food-tarot/result/sun/pot/sugar',
  '/food-tarot/result/sun/knife/spice', '/food-tarot/result/sun/knife/herb', '/food-tarot/result/sun/knife/sugar',
  '/food-tarot/result/moon/wok/spice', '/food-tarot/result/moon/wok/herb', '/food-tarot/result/moon/wok/sugar',
  '/food-tarot/result/moon/pot/spice', '/food-tarot/result/moon/pot/herb', '/food-tarot/result/moon/pot/sugar',
  '/food-tarot/result/moon/knife/spice', '/food-tarot/result/moon/knife/herb', '/food-tarot/result/moon/knife/sugar',
  '/food-tarot/result/star/wok/spice', '/food-tarot/result/star/wok/herb', '/food-tarot/result/star/wok/sugar',
  '/food-tarot/result/star/pot/spice', '/food-tarot/result/star/pot/herb', '/food-tarot/result/star/pot/sugar',
  '/food-tarot/result/star/knife/spice', '/food-tarot/result/star/knife/herb', '/food-tarot/result/star/knife/sugar'
];
const staticRoutes = [
  '/',
  '/tournament-setup',
  '/food-tarot',
  '/about',
  '/explore-foods',
  '/privacy',
  '/terms',
  '/contact'
];

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [
      react(),
      sitemap({
        hostname: 'https://thedinnerdecider.au',
        dynamicRoutes: [
          ...staticRoutes,
          ...tarotResultRoutes,
          ...tournamentResultRoutes
        ]
      })
    ],
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    }
  };
});