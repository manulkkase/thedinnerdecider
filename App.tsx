import React from 'react';
import { Routes, Route } from 'react-router-dom';
import StartScreen from './src/screens/StartScreen';
import TournamentScreen from './src/screens/TournamentScreen';
import ResultScreen from './src/screens/ResultScreen';

const App: React.FC = () => {
  return (
    <main className="bg-sky-50 min-h-screen flex flex-col items-center justify-center font-sans">
      <Routes>
        <Route path="/" element={<StartScreen />} />
        <Route path="/play" element={<TournamentScreen />} />
        <Route path="/result/:foodName" element={<ResultScreen />} />
      </Routes>
    </main>
  );
};

export default App;