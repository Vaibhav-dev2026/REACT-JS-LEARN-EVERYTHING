import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Product1() {
  const { setCart } = useContext(CartContext);

  return (
    <button onClick={() => setCart(prev => prev + 1)}>
      Add to Cart
    </button>
  );
}

export default Product1;
