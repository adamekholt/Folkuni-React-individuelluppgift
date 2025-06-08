import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styling/basestyling.css';

export default function NavigationDots({ routes, pageNames, visitedPages, activeIndex = 0 }) {
  const navigate = useNavigate();

  const onDotClick = (idx) => {
    if (idx >= 0 && idx < routes.length) {
      navigate(routes[idx]);
    }
  };

  return (
    <div className="navigation-dots">
      {routes.map((_, idx) => {
        const isActive = idx === activeIndex;
        const isVisited = visitedPages.includes(pageNames[idx]);
        return (
          <span
            key={idx}
            className={`dot${isActive ? ' active' : ''}${isVisited ? ' visited' : ''}`}
            onClick={() => onDotClick(idx)}
          />
        );
      })}
    </div>
  );
}
