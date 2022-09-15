import React from 'react'
import "./Product.css"


function Product({title,image,price,rating,desc,delivery}) {
  return (
    <div className='product'>
      <div className='pro_info'>
        <p className='desc'>{title}</p>
        <div className='rating'>
            <p>{rating}</p>
        </div>
        <p className='price'>
          <small>$</small>
          <strong>{price}</strong>
          <small>{desc}</small>
          <p><small>Get it by <b>{delivery}</b></small></p>
        </p>        
      </div>     
      <img src={image} alt=""/>      
      <button>Add to cart</button>
    </div>
  )
}

export default Product

{/* <img src="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" alt="product_image"/> */}