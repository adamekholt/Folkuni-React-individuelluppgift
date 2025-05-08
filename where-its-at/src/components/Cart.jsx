import React, { createContext, useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "../styling/basestyling.css";

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

function Cart({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (event, quantity) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.event.id === event.id);
      if (existing) {
        return prev.map((item) =>
          item.event.id === event.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { event, quantity }];
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.event.id !== id));
  };

  // Legger til updateQuantity funksjonen
  const updateQuantity = (eventId, newQuantity) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.event.id === eventId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity }}>
      {cartItems.length > 0 && (
        <div className="cart-icon-container">
          <FontAwesomeIcon icon={faCartShopping} size="xl" />
        </div>
      )}
      {children}
    </CartContext.Provider>
  );
}

export default Cart;
