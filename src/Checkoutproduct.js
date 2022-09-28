import React from 'react'
import './checkoutproduct.css'

function Checkoutproduct({title,price,rating,image }) {
  return (
    <div className='main'>
        <img className='cp_img' src={image} />
        <div className='cp_info'>
          <div className='description'>
            <p className='cp_title'>{title}</p>
              <div className='cp_rating'>
                <p>{rating}</p>
              </div>
            <button>Remove from cart</button>
          </div>
            <div className='price_div'>
            <p className='cp_price'>
                <small>₹</small>
                <strong>{price}</strong>
            </p>
            </div>
        </div>
    </div>
  )
}

export default Checkoutproduct