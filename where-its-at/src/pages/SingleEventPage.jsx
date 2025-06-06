import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchEvents } from '../api';
import EventCard from '../components/EventCard';
import NavigationDots from '../components/NavigationDots';
import '../styling/SingleEventPage.css';
import '../styling/basestyling.css';

function SingleEventPage({ visitedPages, setVisitedPages }) {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!visitedPages.includes('event')) {
      setVisitedPages([...visitedPages, 'event']);
    }
  }, [visitedPages, setVisitedPages]);

  useEffect(() => {
    fetchEvents()
      .then((events) => {
        const foundEvent = events.find((ev) => ev.id === id);
        setEvent(foundEvent);
      })
      .catch(() => setError('Could not load.'))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!event) return <p>Could not find event</p>;

  return (
    <div className="single-event-wrapper">
      <h1>Event</h1>
      <h3>You are about to score some tickets to</h3>
      <EventCard event={event} />
      <NavigationDots
        routes={['/', '/events', `/event/${event.id}`]}
        pageNames={['landing', 'events', 'event']}
        visitedPages={visitedPages}
        activeIndex={2}
      />
    </div>
  );
}

export default SingleEventPage;
