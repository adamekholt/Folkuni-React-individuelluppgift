import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchEvents } from '../api';
import '../styling/EventPage.css';
import '../styling/basestyling.css';

function EventList() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchEvents()
      .then(data => setEvents(data.slice(0, 5)))
      .catch(() => setError('Failed to load events.'))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading events...</p>;
  if (error) return <p>{error}</p>;
  if (events.length === 0) return <p>No events available.</p>;

  return (
    <div className="event-list">
      {events.map(event => (
        <Link to={`/event/${event.id}`} key={event.id} className="event-link">
          <div className="event-card">
            <div className="event-date">
              <p className="day">{event.when.date.split(' ')[0]}</p>
              <p className="month">{event.when.date.split(' ')[1]}</p>
            </div>
            <div className="event-info">
              <h3 className='event-list-info'>{event.name}</h3>
              <p className="venue">{event.where}</p>
              <p className="time">{event.when.from} - {event.when.to}</p>
            </div>
            <div className="event-price">
              <p>{event.price} sek</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default EventList;