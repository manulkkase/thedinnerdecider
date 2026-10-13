// src/components/Footer.tsx

import React from 'react';
// 페이지 이동을 위해 react-router-dom의 Link를 사용합니다.
import { Link } from 'react-router-dom';
import '../src/dinner-design.css';

const Footer: React.FC = () => {
  return (
    <footer className="dinner-footer">
      <nav aria-label="Footer navigation">
        <Link to="/explore-foods" className="text-sm font-semibold text-slate-600 hover:text-blue-600">Explore All Dishes</Link>
        <Link to="/about" className="text-sm font-semibold text-slate-600 hover:text-blue-600">About Us</Link>
        <Link to="/privacy" className="text-sm hover:text-blue-600">Privacy Policy</Link>
        <Link to="/terms" className="text-sm hover:text-blue-600">Terms of Service</Link>
        <Link to="/contact" className="text-sm hover:text-blue-600">Contact Us</Link>
      </nav>
      <p>© {new Date().getFullYear()} The Dinner Decider. Made for a good feed.</p>
    </footer>
  );
};

export default Footer;
