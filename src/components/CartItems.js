import React from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import { useSelector } from "react-redux";
const CartItems = () => {
  const item = useSelector((item) => item.cart.cardList)
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
        {item.map((item) => (
          <li key={item.id}>
            <CartItem id={item.id} price={item.price} total={item.TotalPrice} name={item.name} quantity={item.quentitiy}/>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartItems;
