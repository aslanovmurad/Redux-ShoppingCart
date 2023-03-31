import React from "react";
import { useDispatch } from "react-redux";
import { auther } from "../store/auther-slid";
import "./Auth.css";

const Auth = () => {
  const Dispatch = useDispatch()

  const handSubmit = (e) => {
    e.preventDefault()
    Dispatch(auther.islogin())
  }

  return (
    <div className="container">
      <h1>Login</h1>{" "}
      <form onSubmit={handSubmit}>
        <label htmlFor="id">Id</label>
        <input type="text" name="id" id="id" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <button className="login-btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Auth;
