import React from 'react'
function ProductCard({name,price}){



  return ( 
    <div className='border rounded-lg shadowhover:shadow-lg transition'>
        <h2 className='font-semibold text-lg'>{name}</h2>
        <p className='text-gray-500'>
            ₹{price}
        </p>
        <button className='mt-3 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700'>
            Buy Now
        </button>
    </div>
   )
}

export default ProductCard
