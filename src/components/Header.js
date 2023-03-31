import React from "react";
import Cart from "./Cart";
import { useDispatch } from "react-redux";
import "./Header.css";
import { auther } from "../store/auther-slid";
const Header = () => {
  const dispatc = useDispatch()
  const hendLogout = ()=>{
   dispatc(auther.islogaut())
  }
  return (
    <header>
      <nav className="header-nav">
        <ul className="header-ul">
          <li>
            <h2
              className="header-h2"
              style={{ fontFamily: "monospace", fontSize: "30px" }}
            >
              Redux Shopping App
            </h2>
          </li>
          <li>
            <Cart />
          </li>
          <li>
            <button onClick={hendLogout} className="Logout-btn">Logout</button> 
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
