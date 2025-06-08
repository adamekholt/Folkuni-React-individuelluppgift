import React from 'react';
import QuantityAddition from './QuantityAddition';
import '../styling/SingleEventPage.css';

function TicketQuantity({ quantity, setQuantity, price = 0 }) {
    const totalPrice = quantity * price;

    return (
        <div className="quantity-box">
            <h3 className="quantity-ticket-info">{totalPrice} SEK</h3>
            <QuantityAddition quantity={quantity} setQuantity={setQuantity} />
        </div>
    );
}

export default TicketQuantity;
