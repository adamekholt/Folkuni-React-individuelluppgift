import React, { useState } from 'react';
import '../styling/SingleEventPage.css';

function QuantitySelector({ price = 0 }) {
  const [quantity, setQuantity] = useState(1);

  const increase = () => setQuantity(prev => prev + 1);
  const decrease = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  const totalPrice = quantity * price;

  return (
    <div className="quantity-box">
      <h3 className="quantity-ticket-price">{totalPrice} SEK</h3>

      <div className="quantity-controls">
        <button className="quantity-btn" onClick={decrease}>−</button>
        <span className="quantity-number">{quantity}</span>
        <button className="quantity-btn" onClick={increase}>+</button>
      </div>

    </div>
  );
}

export default QuantitySelector;
