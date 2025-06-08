import React from 'react';
import TicketData from '../components/TicketData';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';
import useConfetti from '../hooks/useConfetti';
import '../styling/ConfirmationPage.css';
import '../styling/basestyling.css';

const ConfirmationPage = () => {
  const isConfettiActive = useConfetti(5000);
  const { width, height } = useWindowSize();

  return (
    <div className="confirmation-wrapper">
      <h1 className="confirmation-h1">Where it’s @? Right here, with your tickets!</h1>
      <TicketData />
      {isConfettiActive && <Confetti width={width} height={height} />}
    </div>
  );
};

export default ConfirmationPage;
