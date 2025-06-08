import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Cart from './components/Cart';
import LandingPage from './pages/LandingPage';
import EventPage from './pages/EventPage';
import SingleEventPage from './pages/SingleEventPage';
import OrderSummaryPage from './pages/OrderSummaryPage';
import ConfirmationPage from './pages/ConfirmationPage';

function App() {
  const [visitedPages, setVisitedPages] = useState([]);
  const location = useLocation();

  const showCart = location.pathname !== '/confirmation';

  return (
    <>
      {showCart && <Cart />}
      <Routes>
        <Route path="/" element={<LandingPage visitedPages={visitedPages} setVisitedPages={setVisitedPages} />}  />
        <Route path="/events" element={<EventPage visitedPages={visitedPages} setVisitedPages={setVisitedPages} />} />
        <Route path="/event/:id" element={<SingleEventPage visitedPages={visitedPages} setVisitedPages={setVisitedPages} />} />
        <Route path="/order" element={<OrderSummaryPage />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
      </Routes>
    </>
  );
}

export default App;
