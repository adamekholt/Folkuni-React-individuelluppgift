import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavigationDots from '../components/NavigationDots';
import EventList from '../components/EventList';
import '../styling/EventPage.css';
import '../styling/basestyling.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function EventPage({ visitedPages, setVisitedPages }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!visitedPages.includes('events')) {
      setVisitedPages([...visitedPages, 'events']);
    }
  }, [visitedPages, setVisitedPages]);

  return (
    <div className="eventspage-wrapper">
      <h1>Events</h1>
      <div className="search-wrapper">
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
        <input type="text" className="search-input" />
      </div>
      <EventList />
      <NavigationDots
        routes={['/', '/events']}
        pageNames={['landing', 'events',]}
        visitedPages={visitedPages}
        activeIndex={1}
  />
    </div>
  );
}
