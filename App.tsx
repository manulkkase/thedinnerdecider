import React from 'react';
import { Routes, Route } from 'react-router-dom';
import StartScreen from './src/screens/StartScreen';
import TournamentScreen from './src/screens/TournamentScreen';
import ResultScreen from './src/screens/ResultScreen';
import Footer from './components/Footer'; 
import PrivacyPolicy from './src/screens/PrivacyPolicy';
import TermsOfService from './src/screens/TermsOfService';
import Contact from './src/screens/Contact';

const App: React.FC = () => {
  return (
    <main className="bg-sky-50 min-h-screen flex flex-col items-center justify-center font-sans">
     <div>
      <Routes>
        <Route path="/" element={<StartScreen />} />
        <Route path="/play" element={<TournamentScreen />} />
        <Route path="/result/:foodName" element={<ResultScreen />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
     </div>
      <Footer />
    </main>
  );
};

export default App;