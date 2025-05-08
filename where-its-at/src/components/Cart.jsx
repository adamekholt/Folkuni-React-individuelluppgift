import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

function Cart({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (event, quantity) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.event.id === event.id);
      if (existing) {
        return prev.map(item =>
          item.event.id === event.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { event, quantity }];
    });
  };

  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.event.id !== id));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default Cart;
