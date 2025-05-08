import React, { useState } from 'react';
import QuantitySelector from './TicketQuantity';
import '../styling/SingleEventPage.css';
import { useCart } from './Cart';
import { useNavigate } from 'react-router-dom';

function EventCard({ event }) {
  if (!event) return null;

  const [quantity, setQuantity] = useState(1);
  const [showPopup, setShowPopup] = useState(false);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const addEventToCart = () => {
    addToCart(event, quantity);
    setShowPopup(true);
  };

  const continueShopping = () => navigate('/events');
  const goToCart = () => navigate('/order');

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
        <QuantitySelector quantity={quantity} setQuantity={setQuantity} price={event.price} />
      </div>

      <button onClick={addEventToCart} className="event-add-to-cart-btn">
        Lägg till i varukorg
      </button>

      {showPopup && (
        <div className="cart-popup">
          <div className="cart-popup-content">
            <p>{event.name} har lagts till i varukorgen.</p>
            <div className="cart-popup-buttons">
              <button onClick={continueShopping}>Fortsätt handla</button>
              <button onClick={goToCart}>Gå till varukorg</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default EventCard;
