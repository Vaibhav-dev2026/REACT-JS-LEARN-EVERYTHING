function Product({ setCount }) {
  return (
    <button onClick={() => setCount(prev => prev + 1)}>
      Add to Cart
    </button>
  );
}

export default Product;

// 🧠 Real World Use

// Small apps

// Limited components

// ❌ But large apps me fail ho jata hai
