import React from "react";
import { useDispatch } from "react-redux";
import "./Cart.css";
import { cartauther } from "../store/auther-cart";
const CartItem = ({ name, quantity, total, price, id }) => {
  const dispatch = useDispatch();
  const removeHandler = () => {
    dispatch(cartauther.AddToCart({
      name,
      id,
      price
    }))
  };
  const addHandler = () => {
    dispatch(cartauther.RemoveToCart(id))
  };
  return (
    <div className="cartItem">
      <h2> {name}</h2>
      <p>${price} /-</p>
      <p>x{quantity}</p>
      <article>Total ${total}</article>
      <button className="cart-actions" onClick={addHandler}>
        -
      </button>
      <button className="cart-actions" onClick={removeHandler}>
        +
      </button>
    </div>
  );
};

export default CartItem;
