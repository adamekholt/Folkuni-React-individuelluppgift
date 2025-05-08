import React, { useState } from 'react';
import QuantityAddition from './QuantityAddition';
import '../styling/SingleEventPage.css';

function TicketQuantity({ price = 0 }) {
    const [quantity, setQuantity] = useState(1);

    console.log("setQuantity:", setQuantity);

    const totalPrice = quantity * price;

    return (
        <div className="quantity-box">
            <h3 className="quantity-ticket-info">{totalPrice} SEK</h3>
            <QuantityAddition quantity={quantity} setQuantity={setQuantity} />
        </div>
    );
}

export default TicketQuantity;
