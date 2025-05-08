import React from 'react';
import { useCart } from '../components/Cart';
import { useNavigate } from 'react-router-dom';
import QuantitySelector from '../components/TicketQuantity';
import '../styling/OrderSummaryPage.css';
import '../styling/basestyling.css';

function OrderSummaryPage() {
  const { cartItems, removeFromCart } = useCart();
  const navigate = useNavigate();

  const total = cartItems.reduce(
    (sum, item) => sum + item.event.price * item.quantity,
    0
  );

  const handleConfirm = () => {
    navigate('/confirmation');
  };

  return (
    <div className="order-summary-wrapper">
      <h1>Orderöversikt</h1>
      {cartItems.length === 0 ? (
        <p>Din varukorg är tom.</p>
      ) : (
        <>
          <ul className="order-summary-list">
            {cartItems.map(({ event, quantity }) => (
              <li key={event.id} className="order-summary-item">
                <div className="order-summary-item-details">
                  <h2>{event.name}</h2>
                  <p className="event-datetime-detail">{event.datedetails}</p> {/* Event datetime details */}
                  <p>Antal: {quantity}</p> {/* Show the quantity of items */}
                </div>
                <QuantitySelector
                  event={event}
                  quantity={quantity}
                  onRemove={() => removeFromCart(event.id)}
                  isSummary={true}  // Use this prop to modify the UI for summary
                />
              </li>
            ))}
          </ul>
          <h3>Totalt: {total} SEK</h3>
          <button onClick={handleConfirm} className="event-add-to-cart-btn">
            Bekräfta beställning
          </button>
        </>
      )}
    </div>
  );
}

export default OrderSummaryPage;
