import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { cartauther } from "../store/auther-cart";
import "./Cart.css";
const Cart = () => {
  const quantity = useSelector((state)=>state.cart.TotalPrice)
  const disp = useDispatch()
  const show = ()=>{
   disp(cartauther.setShowCart())
  }
  return (
    <div className="cartIcon">
      <h3 onClick={show}>Cart: {quantity} Items</h3>
    </div>
  );
};

export default Cart;
