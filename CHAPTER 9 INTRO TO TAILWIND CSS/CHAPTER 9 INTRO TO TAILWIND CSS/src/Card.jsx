// 🧩 FIRST REACT COMPONENT (Tailwind)
// Card.jsx


function Card(){
    return(
        <div className="bg-white shadow-lg rounded-xl p-6 w-64">
            <h1 className="text-xl font-bold">Prodcut Name</h1>
            <p className="text-gray-600">999</p>
             <button className="mt-4 bg-black text-white px-4 py-2 rounded">Add to Cart
      </button>
        </div>
    )
};
export default Card