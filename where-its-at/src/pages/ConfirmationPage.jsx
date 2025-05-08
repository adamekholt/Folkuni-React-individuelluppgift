import React from 'react';
import useStore from '../store/useStore';
import TicketData from '../components/TicketData';
import '../styling/ConfirmationPage.css';

const ConfirmationPage = () => {
  const orderDetails = useStore((state) => state.orderDetails);

  if (!orderDetails || !orderDetails.tickets || orderDetails.tickets.length === 0) {
    return <p>Inga biljetter hittades.</p>;
  }

  return (
    <div className="confirmation-wrapper">
      {orderDetails.tickets.map((ticket, index) => (
        <TicketData key={index} ticket={ticket} />
      ))}
    </div>
  );
};

export default ConfirmationPage;
