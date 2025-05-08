import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Cart from './components/Cart';
import '../src/styling/basestyling.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Cart>
      <App />
    </Cart>
  </React.StrictMode>
);
