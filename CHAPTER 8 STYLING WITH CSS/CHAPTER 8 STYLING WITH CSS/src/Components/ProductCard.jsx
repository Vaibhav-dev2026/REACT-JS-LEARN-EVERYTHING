// 🟢 MINI REAL-WORLD PROJECT
// 🎯 Project: Product Card (Styled)

import React from "react";
import "./ProductCard.css";

function ProductCard({ name, price, category }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <h3>{price}</h3>
      <h3>{category}</h3>
      <button>Add to Cart</button>
    </div>
  );
}

export default ProductCard;

