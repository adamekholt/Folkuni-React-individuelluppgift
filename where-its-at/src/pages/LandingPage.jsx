import React, { useEffect } from 'react';
import NavigationDots from '../components/NavigationDots';
import '../styling/LandingPage.css';
import '../styling/basestyling.css';
import logo from '../assets/logo.png';

export default function LandingPage({ visitedPages, setVisitedPages }) {
  useEffect(() => {
    if (!visitedPages.includes('landing')) {
      setVisitedPages([...visitedPages, 'landing']);
    }
  }, [visitedPages, setVisitedPages]);

  return (
    <div className="landingpage-wrapper">
      <img className="logo" src={logo} alt="Logotype" />
      <h1>Where It's @</h1>
      <h2>Ticketing made easy</h2>
      <NavigationDots
        routes={['/', '/events']}
        pageNames={['landing', 'events']}
        visitedPages={visitedPages}
        activeIndex={0}
      />
    </div>
  );
}

