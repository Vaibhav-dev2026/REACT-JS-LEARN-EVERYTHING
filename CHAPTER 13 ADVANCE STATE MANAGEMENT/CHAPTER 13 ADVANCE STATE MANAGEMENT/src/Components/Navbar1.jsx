// 📄 Navbar1.jsx

import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Navbar1() {
  const { cart } = useContext(CartContext);
  return <h2>Cart: {cart}</h2>;
}

export default Navbar1;

