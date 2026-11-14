// ✅ 6️⃣ Shopping Cart with Total
// 🧠 Concept Used

// Array state

// map / filter

// Derived state

// 📁 components/Cart.jsx

import { useState } from "react";

function Cart() {
  const [items, setItems] = useState([]);

  function addItem() {
    setItems([...items, 1]);
  }

  function removeItem(index) {
    setItems(items.filter((_, i) => i !== index));
  }

  return (
    <div>
      <h2>Cart Items: {items.length}</h2>

      <button onClick={addItem}>Add Item</button>

      <ul>
        {items.map((_, i) => (
          <li key={i}>
            Item {i + 1}
            <button onClick={() => removeItem(i)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;



// 🧠 Core Logic
// setItems([...items, 1])


// ➡️ Immutable update

// filter((_, i) => i !== index)


// ➡️ Remove item safely

// 🌍 Real World Use

// Amazon cart

// Food apps

// Billing system
