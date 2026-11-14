// 🔴 CHALLENGE (REAL WORLD)
// 📁 components/Cart.jsx
// 🎯 Goal

// import { useState } from "react";
// import { use } from "react";

// Add item

// Remove item

// Total count

// 🧠 CONCEPTS USED

// Array state

// Spread operator

// map()

// filter()

// Arrow functions

// Real ecommerce logic


import { useState } from "react";

function Cart() {
  const [items, setItems] = useState([]);

  function addItem() {
    setItems([...items, "Item"]);
  }

  function removeItem(index) {
    setItems(items.filter((_, i) => i !== index));
  }

  return (
    <div>
      <h2>Cart Items: {items.length}</h2>   

      <button onClick={addItem}>Add Item</button>

      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => removeItem(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;

