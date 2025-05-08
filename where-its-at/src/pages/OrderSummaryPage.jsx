import React from 'react';
import { useCart } from '../components/Cart';
import { useNavigate } from 'react-router-dom';
import OrderItem from '../components/OrderItem';
import '../styling/OrderSummaryPage.css';
import '../styling/basestyling.css';

function OrderSummaryPage() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
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
                <OrderItem 
                  event={event}
                  quantity={quantity} // ✅ send tall, ikke funksjon
                  onQuantityChange={(newQuantity) => updateQuantity(event.id, newQuantity)} // ✅ riktig funksjon
                  onRemove={() => removeFromCart(event.id)} // ✅ riktig fjerning
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
