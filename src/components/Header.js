import "./styles/Header.css";
import logo from "../images/logo.png";
import cart from "../images/cart.png";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Header() {
  const { cartItems } = useContext(CartContext);
  let navigate = useNavigate();
  return (
    <div className="header">
      <div className="logo-container">
        <img src={logo} alt="logo" onClick={() => navigate("/")} />
      </div>
      <div className="cart-container">
        <img src={cart} alt="cart" onClick={() => navigate("/cart")} />
        <div className="cart-count">{Object.keys(cartItems).length}</div>
      </div>
    </div>
  );
}
