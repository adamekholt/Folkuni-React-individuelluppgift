import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import useStore from "../store/useStore";
import "../styling/basestyling.css";

const Cart = ({ children }) => {
  const cartItems = useStore(state => state.cartItems);
  const navigate = useNavigate();

  const handleNavigateToOrder = () => navigate("/order");

  return (
    <nav>
      {cartItems.length > 0 && (
        <div className="navigation-icon cart-item-count" onClick={handleNavigateToOrder}>
          <FontAwesomeIcon icon={faCartShopping} />
        </div>
      )}
      {children}
    </nav>
  );
};

export default Cart;
