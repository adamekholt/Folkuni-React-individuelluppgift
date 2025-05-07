import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import EventPage from './pages/EventPage';
import SingleEventPage from './pages/SingleEventPage';
import OrderSummaryPage from './pages/OrderSummaryPage';
import ConfirmationPage from './pages/ConfirmationPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/events" element={<EventPage />} />
        <Route path="/event/:id" element={<SingleEventPage />} />
        <Route path="/order" element={<OrderSummaryPage />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
      </Routes>
    </Router>
  );
}

export default App;
