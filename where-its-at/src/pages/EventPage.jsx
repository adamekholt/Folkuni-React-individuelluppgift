import React from 'react';
import EventList from '../components/EventList';
import '../styling/EventPage.css';
import '../styling/basestyling.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function EventPage() {
  return (
    <div className="eventspage-wrapper">
      <h1>Events</h1>
      <div className="search-wrapper">
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
        <input type="text" className="search-input" />
      </div>
      <EventList /> 
    </div>
  );
}

