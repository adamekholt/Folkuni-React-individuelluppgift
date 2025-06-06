import React, { useEffect, useState } from 'react';
import NavigationDots from '../components/NavigationDots';
import SearchLogic from '../components/SearchLogic';
import EventList from '../components/EventList';
import { fetchEvents } from '../api';
import '../styling/EventPage.css';
import '../styling/basestyling.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function EventPage({ visitedPages, setVisitedPages }) {
  const [userInput, setUserInput] = useState('');
  const [allEvents, setAllEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);

  useEffect(() => {
    if (!visitedPages.includes('events')) {
      setVisitedPages([...visitedPages, 'events']);
    }
  }, [visitedPages, setVisitedPages]);

  useEffect(() => {
    async function loadEvents() {
      const data = await fetchEvents();
      setAllEvents(data);
      setFilteredEvents(data);
    }
    loadEvents();
  }, []);

  return (
    <div className="eventspage-wrapper">
      <h1>Events</h1>
      <div className="search-wrapper">
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
        <input
          type="text"
          className="search-input"
          placeholder="Search.."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
      </div>

      <SearchLogic
        allEvents={allEvents}
        userInput={userInput}
        setSearchResult={setFilteredEvents}
      />

      <EventList events={filteredEvents} />

      <NavigationDots
        routes={['/', '/events']}
        pageNames={['landing', 'events']}
        visitedPages={visitedPages}
        activeIndex={1}
      />
    </div>
  );
}
