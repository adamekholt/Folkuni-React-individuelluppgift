import React from 'react';
import QuantitySelector from './QuantitySelector';
import '../styling/SingleEventPage.css';

function EventCard({ event }) {
    if (!event) return null;
  
    const handleAddToCart = () => {
      console.log(`Added ${event.name} to cart`);
    };
  
    return (
      <div>
        <section className="event-info-detail">
          <h2 className="event-name-detail">{event.name}</h2>
          <p className="event-datetime-detail">
            {event.when.date}, {event.when.from} - {event.when.to}
          </p>
          <p className="event-venue-detail">{event.where}</p>
        </section>
  
        <div className="event-quantity-detail">
          <QuantitySelector price={event.price} />
        </div>
  
        <button onClick={handleAddToCart} className="event-add-to-cart-btn">
        Lägg i varukorgen
        </button>
      </div>
    );
  }  

export default EventCard;
