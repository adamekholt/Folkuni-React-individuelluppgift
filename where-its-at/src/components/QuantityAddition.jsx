import React from 'react';

function QuantityAddition({ quantity, setQuantity }) {
    const increase = () => setQuantity(quantity + 1);
    const decrease = () => {if (quantity > 1) {setQuantity(quantity - 1);}};
    
    return (
        <div className="quantity-controls">
          <button className="quantity-btn" onClick={decrease}>−</button>
          <span className="quantity-number">{quantity}</span>
          <button className="quantity-btn" onClick={increase}>+</button>
        </div>
      );
    }
    
    export default QuantityAddition;
