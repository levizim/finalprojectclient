import React, { useContext } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <h2>Your Cart</h2>
      <ul>
        {cart.map(product => (
          <li key={product.ProductID}>
            {product.ProductName} - ${product.Price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;


