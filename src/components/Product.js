import React from "react";
import "./Product.css";
import { useDispatch, useSelector } from "react-redux";
import { cartauther } from "../store/auther-cart";

const Product = ({ name, id, imgURL, price }) => {

  const Dispatch = useDispatch()
  const addTocart = () => {
    Dispatch(cartauther.AddToCart({
      name,
      id,
      price
    }))
  }
  return (
    <div className="card">
      <img src={imgURL} alt={name} />
      <h2>{name}</h2>
      <p>$ {price}</p>
      <button onClick={addTocart}>Add to cart</button>
    </div>
  );
};

export default Product;
