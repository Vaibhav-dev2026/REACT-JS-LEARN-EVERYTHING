function ProductCard({name,price,category}){
    return(
        <div style={{border:"3px solid black",margin:"50px",padding:"50px"}}>
            <h2>{name}</h2>
            <p>Price:{price}</p>
            <p>Category:{category}</p>
        </div>
    )

}

export default ProductCard