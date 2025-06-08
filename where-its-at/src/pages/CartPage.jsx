import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { v4 as uuidv4 } from 'uuid';
import OrderItem from '../components/OrderItem';
import useStore from '../store/useStore';
import '../styling/CartPage.css';
import '../styling/basestyling.css';

function CartPage() {
  const cartItems = useStore(state => state.cartItems);
  const removeFromCart = useStore(state => state.removeFromCart);
  const updateQuantity = useStore(state => state.updateQuantity);
  const setOrderDetails = useStore(state => state.setOrderDetails);
  const navigate = useNavigate();

  const total = cartItems.reduce(
    (sum, item) => sum + item.event.price * item.quantity,
    0
  );

  const generateTicketId = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    return Array.from({ length: 5 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
  };

  const handleConfirm = () => {
    const orderId = uuidv4();
    let currentSeat = 101;
    const section = String.fromCharCode(65 + Math.floor(Math.random() * 3));
  
    const tickets = cartItems.flatMap(({ event, quantity }) =>
      Array.from({ length: quantity }, () => ({
        artist: event.name,
        venue: event.where,
        date: event.when.date,
        timeFrom: event.when.from,
        timeTo: event.when.to,
        section,
        seat: currentSeat++,
        ticketId: generateTicketId(),
        price: event.price,
      }))
    );
  
    setOrderDetails({ orderId, tickets });
    navigate('/confirmation');
  };
  

  return (
    <div className="order-summary-wrapper">
      <button className="navigation-icon back-button" onClick={() => navigate(-1)} aria-label="Go back">
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <h1>Cart</h1>
      {cartItems.length === 0 ? (
        <p>Cart is empty.</p>
      ) : (
        <>
          <ul className="order-summary-list">
            {cartItems.map(({ event, quantity }) => (
            <li key={event.id} className="order-summary-item">
              <OrderItem
                event={event}
                quantity={quantity}
                onQuantityChange={(newQuantity) => updateQuantity(event.id, newQuantity)}
                onRemove={() => removeFromCart(event.id)}
              />
            </li>
            ))}
          </ul>
          <h3>Totalt: {total} SEK</h3>
          <button onClick={handleConfirm} className="event-add-to-cart-btn">Grab your tickets</button>
        </>
      )}
    </div>
  );
}

export default CartPage;
