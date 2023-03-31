import React from "react";
import "./App.css";
import { useSelector } from "react-redux";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
function App() {
  const isauthers = useSelector((state)=>state.auther.isauther)
  const select = useSelector((state) => state.cart.cardList)
  console.log(select);
  return (
    <div className="App">
      {!isauthers && <Auth/>}
      {isauthers && <Layout/>}
    </div>
  );
}

export default App;
