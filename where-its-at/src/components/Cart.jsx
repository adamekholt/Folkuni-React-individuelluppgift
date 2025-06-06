import React, { createContext, useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "../styling/basestyling.css";

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

function Cart({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  const addToCart = (event, quantity) => {
    setCartItems((items) => {
      const existingItem = items.find(item => item.event.id === event.id);

      if (existingItem) {
        return items.map(item =>
          item.event.id === event.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [...items, { event, quantity }];
    });
  };

  const removeFromCart = (eventId) => {
    setCartItems((items) => items.filter(item => item.event.id !== eventId));
  };

  const updateQuantity = (eventId, newQuantity) => {
    setCartItems((items) =>
      items.map(item =>
        item.event.id === eventId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const goToOrderSummary = () => {
    navigate("/order");
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity }}>
      {cartItems.length > 0 && (
        <div className="navigation-icon cart-item-count" onClick={goToOrderSummary}>
          <FontAwesomeIcon icon={faCartShopping} />
        </div>
      )}
      {children}
    </CartContext.Provider>
  );
}

export default Cart;
