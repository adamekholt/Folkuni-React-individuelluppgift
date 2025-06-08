import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useStore from '../store/useStore';
import barcode from "../assets/barcode.png";

function TicketData() {
  const navigate = useNavigate();
  const orderDetails = useStore((state) => state.orderDetails);
  const clearCart = useStore((state) => state.clearCart);

  useEffect(() => {
    if (!orderDetails || !orderDetails.tickets || orderDetails.tickets.length === 0) {
      navigate('/order');
    } else {
      clearCart();
    }
  }, [orderDetails, navigate, clearCart]);

  if (!orderDetails || !orderDetails.tickets || orderDetails.tickets.length === 0) {
    return <p>Ingen billetter funnet. Vennligst fullfør bestillingen.</p>;
  }

  return (
    <div className="confirmation-page">
      <div className="confirmation-details">
        <ul className="ticket-list">
          {orderDetails.tickets.map((ticket) => (
            <li key={ticket.ticketId} className="ticket-item">
              <div className="ticket-card">
                <p><strong>Artist:</strong> {ticket.artist}</p>
                <p><strong>Sted:</strong> {ticket.venue}</p>
                <p><strong>Dato:</strong> {ticket.date}</p>
                <p><strong>Tid:</strong> {ticket.timeFrom} - {ticket.timeTo}</p>
                <p><strong>Seksjon:</strong> {ticket.section}</p>
                <p><strong>Plass:</strong> {ticket.seat}</p>
                <p><strong>Billett-ID:</strong> {ticket.ticketId}</p>
                <p><strong>Pris:</strong> {ticket.price} SEK</p>

                <div className="ticket-barcode">
                  <img src={barcode} alt="Barcode" className="barcode" />
                  <p>Order ID: #{orderDetails.orderId}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TicketData;
