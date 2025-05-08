import React from 'react';
import { useCart } from '../components/Cart';
import { useNavigate } from 'react-router-dom';
import OrderItem from '../components/OrderItem';
import useStore from '../store/useStore'; 
import '../styling/OrderSummaryPage.css';
import '../styling/basestyling.css';

function OrderSummaryPage() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const navigate = useNavigate();
  const setOrderDetails = useStore((state) => state.setOrderDetails);

  const total = cartItems.reduce(
    (sum, item) => sum + item.event.price * item.quantity,
    0
  );

  const generateTicketId = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    return Array.from({ length: 5 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
  };

  const handleConfirm = () => {
    let currentSeat = 101;
    const section = String.fromCharCode(65 + Math.floor(Math.random() * 3));

    const tickets = cartItems.flatMap(({ event, quantity }) => {
      return Array.from({ length: quantity }, () => {
        const ticket = {
          artist: event.name,
          venue: {
            name: event.where.name,
            address: event.where.address,
          },
          date: event.when.date,
          timeFrom: event.when.from,
          timeTo: event.when.to,
          section: section,
          seat: currentSeat++,
          ticketId: generateTicketId(),
        };
        return ticket;
      });
    });

    setOrderDetails({ tickets });
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
          <button onClick={handleConfirm} className="event-add-to-cart-btn">
            Bekräfta beställning
          </button>
        </>
      )}
    </div>
  );
}

export default OrderSummaryPage;
