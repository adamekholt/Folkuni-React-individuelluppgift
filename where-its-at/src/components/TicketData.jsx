import React from 'react';
import '../styling/ConfirmationPage.css';

const TicketData = ({ ticket }) => {
  return (
    <div className="ticket-card">
      <div className="ticket-header">
        <span className="label">WHAT</span>
        <h2 className="artist">{ticket.artist}</h2>
      </div>

      <div className="ticket-section">
        <span className="label">WHERE</span>
        <h3>{ticket.venue.name}</h3>
        <p>{ticket.venue.address}</p>
      </div>

      <div className="ticket-time-grid">
        <div>
          <span className="label">WHEN</span>
          <p>{ticket.date}</p>
        </div>
        <div>
          <span className="label">FROM</span>
          <p>{ticket.timeFrom}</p>
        </div>
        <div>
          <span className="label">TO</span>
          <p>{ticket.timeTo}</p>
        </div>
      </div>

      <div className="ticket-info">
        <span className="label">INFO</span>
        <p>Section {ticket.section} Seat {ticket.seat}</p>
      </div>

      <div className="ticket-barcode">
        <div className="barcode"></div>
        <p>#{ticket.ticketId}</p>
      </div>
    </div>
  );
};

export default TicketData;
