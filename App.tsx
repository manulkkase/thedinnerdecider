import React, { Suspense } from 'react'; // 1. Suspense를 import 합니다.
import './src/global.css';
import { Routes, Route } from 'react-router-dom';

// --- 즉시 로드해야 하는 컴포넌트들 ---
import HomeScreen from './src/screens/HomeScreen'; // 홈 스크린은 즉시 로드 (첫 페이지이므로)
import Footer from './components/Footer'; 
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"

// --- 2. 'React.lazy'를 사용해 모든 스크린을 '지연 로딩'으로 변경합니다 ---
// (HomeScreen은 위에서 즉시 로드했으므로 제외합니다)
const TournamentSetupScreen = React.lazy(() => import('./src/screens/TournamentSetupScreen'));
const TournamentScreen = React.lazy(() => import('./src/screens/TournamentScreen'));
const ResultScreen = React.lazy(() => import('./src/screens/ResultScreen'));
const PrivacyPolicy = React.lazy(() => import('./src/screens/PrivacyPolicy'));
const TermsOfService = React.lazy(() => import('./src/screens/TermsOfService'));
const Contact = React.lazy(() => import('./src/screens/Contact'));
const TarotHomeScreen = React.lazy(() => import('./src/screens/TarotHomeScreen'));
const TarotGameScreen = React.lazy(() => import('./src/screens/TarotGameScreen'));
const TarotResultScreen = React.lazy(() => import('./src/screens/TarotResultScreen'));
const ExploreFoodsScreen = React.lazy(() => import('./src/screens/ExploreFoodsScreen'));
const AboutUsScreen = React.lazy(() => import('./src/screens/AboutUsScreen'));

const App: React.FC = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center font-sans">
     <div>
      {/* 3. <Routes> 전체를 <Suspense>로 감싸줍니다. */}
      {/* fallback은 다음 페이지 코드를 로딩하는 동안 사용자에게 보여줄 화면입니다. (예: 로딩 스피너) */}
      <Suspense fallback={<div>Loading page...</div>}>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          
          {/* --- 아래 경로는 이제 모두 '지연 로딩'됩니다 --- */}
          <Route path="/tournament-setup" element={<TournamentSetupScreen />} />
          <Route path="/tournament" element={<TournamentScreen />} />
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
      </Suspense> {/* --- Suspense 종료 --- */}
     </div>
      <Footer />
      <Analytics />
      <SpeedInsights />
    </main>
  );
};

export default App;