import React from 'react';
import TicketData from '../components/TicketData';
import '../styling/ConfirmationPage.css';
import '../styling/basestyling.css';

const ConfirmationPage = () => {
  return (
    <div className="confirmation-wrapper">
      <h1>Where it’s @? Right here, with your tickets!</h1>
      <TicketData />     
    </div>
  );
};

export default ConfirmationPage;
