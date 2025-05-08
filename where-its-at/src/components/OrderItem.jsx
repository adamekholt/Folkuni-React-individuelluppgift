import React from 'react';
import QuantityAddition from './QuantityAddition';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function OrderItem({ event, quantity, onQuantityChange, onRemove }) {

  console.log("OrderItem - quantity:", quantity);
  console.log("OrderItem - onQuantityChange:", onQuantityChange);

  return (
    <div className="order-item-card">
      <div className="order-item-details">
        <div className="event-header">
          <h3>{event.name}</h3>
          <button onClick={onRemove} className="remove-btn">
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
        <div className="event-datetime">
          <p className="event-datetime-detail">
            {event.when.date}, {event.when.from} - {event.when.to}
          </p>
        </div>
      </div>

      <div className="order-item-actions">
        <QuantityAddition
          quantity={quantity}
          setQuantity={onQuantityChange}
        />
      </div>
    </div>
  );
}

export default OrderItem;
