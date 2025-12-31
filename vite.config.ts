import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import sitemap from 'vite-plugin-sitemap';
import { ALL_FOODS } from './constants/foods'; // 👈 경로가 여기로 수정되었습니다.
import { ALL_PERSONALITY_IDS } from './constants/quizData';

// Generate URL-friendly slugs
function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/['']/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

// foods.ts에 있는 100개의 음식 이름으로 /result/... 경로를 자동으로 생성합니다.
const tournamentResultRoutes = ALL_FOODS.map(food => `/result/${encodeURIComponent(food.name)}`);

// Food detail SEO pages (/food/korean-bbq format)
const foodDetailRoutes = ALL_FOODS.map(food => `/food/${generateSlug(food.name)}`);

// Quiz personality result routes (8 types)
const quizResultRoutes = ALL_PERSONALITY_IDS.map(id => `/quiz/result/${id}`);

const staticRoutes = [
  '/',
  '/tournament-setup',
  '/alchemist',  // Replaced food-tarot
  '/about',
  '/explore-foods',
  '/privacy',
  '/terms',
  '/contact',
  '/quiz'
];

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [
      react(),
      sitemap({
        hostname: 'https://www.thedinnerdecider.au',
        dynamicRoutes: [
          ...staticRoutes,
          ...tournamentResultRoutes,
          ...foodDetailRoutes,
          ...quizResultRoutes
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
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            // Separate vendor chunks for better caching
            'vendor-react': ['react', 'react-dom', 'react-router-dom'],
            'vendor-motion': ['framer-motion'],
            'vendor-helmet': ['react-helmet-async'],
          }
        }
      },
      // Increase chunk size warning limit
      chunkSizeWarningLimit: 500
    }
  };
});