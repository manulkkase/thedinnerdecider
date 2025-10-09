import React from 'react';
import './src/global.css';
import { Routes, Route } from 'react-router-dom';

// --- 모든 스크린들을 올바른 이름으로 import 합니다 ---
import HomeScreen from './src/screens/HomeScreen';
import TournamentSetupScreen from './src/screens/TournamentSetupScreen'; // FIX 1: 올바른 이름으로 import
import TournamentScreen from './src/screens/TournamentScreen';
import ResultScreen from './src/screens/ResultScreen';
import Footer from './components/Footer'; 
import PrivacyPolicy from './src/screens/PrivacyPolicy';
import TermsOfService from './src/screens/TermsOfService';
import Contact from './src/screens/Contact';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"
import TarotHomeScreen from './src/screens/TarotHomeScreen';
import TarotGameScreen from './src/screens/TarotGameScreen';
import TarotResultScreen from './src/screens/TarotResultScreen';
import ExploreFoodsScreen from './src/screens/ExploreFoodsScreen';
import AboutUsScreen from './src/screens/AboutUsScreen';

const App: React.FC = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center font-sans">
     <div>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        
        {/* --- 아래 두 줄을 수정/추가합니다 --- */}
        <Route path="/tournament-setup" element={<TournamentSetupScreen />} /> {/* FIX 2: /tournament-setup 경로 추가 */}
        <Route path="/tournament" element={<TournamentScreen />} /> {/* FIX 3: /play를 /tournament로 변경 */}
        
        <Route path="/result/:foodName" element={<ResultScreen />} />
        <Route path="/food-tarot" element={<TarotHomeScreen />} />
        <Route path="/food-tarot/game" element={<TarotGameScreen />} />
        <Route path="/food-tarot/result/:c1/:c2/:c3" element={<TarotResultScreen />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/explore-foods" element={<ExploreFoodsScreen />} /> 
        <Route path="/about" element={<AboutUsScreen />} />
      </Routes>
     </div>
      <Footer />
      <Analytics />
      <SpeedInsights />
    </main>
  );
};

export default App;