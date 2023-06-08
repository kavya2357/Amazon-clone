import React from 'react'
import "./Product.css"
import {useStateValue} from "./StateProvider"

function Product({title,image,price,rating,desc,delivery}) {
  const [{basket},dispatch]=useStateValue();

  const addToCart=()=>{
    dispatch({
      type:'ADD_TO_CART',
      item:{
        title: title,
        image: image,
        price: price,
        rating: rating,
        desc: desc,
      },
    });
  };
  return (
    <div className='product'>
      <div className='pro_info'>
        <p className='desc'>{title}</p>
        <div className='rating'>
            <p>{rating}</p>
        </div>
        <p className='price_details'>
          <small>₹</small>
          <strong>{price}</strong>
          <small>{desc}</small>
        </p>  
        <p><small>Get it by <b>{delivery}</b></small></p>      
      </div>     
      <img src={image} alt=""/>      
      <button onClick={addToCart}>Add to cart</button>
    </div>
  )
}

export default Product

{/* <img src="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" alt="product_image"/> */}