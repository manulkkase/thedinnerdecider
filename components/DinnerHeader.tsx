import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../src/dinner-design.css';

export const PlateMark = () => (
  <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
    <circle cx="22" cy="20" r="11" stroke="currentColor" strokeWidth="2.5" />
    <circle cx="22" cy="20" r="6.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M4 7v9c0 3 5 3 5 0V7M6.5 7v26M36 7v26M36 7c-4 4-4 11 0 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const DinnerHeader: React.FC = () => (
  <header className="dinner-header">
    <Link to="/" className="dinner-brand" aria-label="The Dinner Decider home">
      <span className="dinner-brand-mark"><PlateMark /></span>
      <span>The Dinner<br />Decider<span className="brand-period">.</span></span>
    </Link>
    <nav className="dinner-nav" aria-label="Main navigation">
      <NavLink to="/tournament-setup">Play a tournament</NavLink>
      <NavLink to="/explore-foods">The menu</NavLink>
      <Link to="/about" className="dinner-nav-about">Our story</Link>
    </nav>
    <span className="dinner-edition">Made for hungry Aussies</span>
  </header>
);

export default DinnerHeader;
