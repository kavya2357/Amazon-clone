import React from 'react'
import "./Checkout.css"
import Subtotal from "./Components/Subtotal.js"
import Checkoutproduct from "./Components/Checkoutproduct.js"
import { getBasketTotal } from './Components/reducer'
import { useStateValue } from './Components/StateProvider'

function Checkout() {
  const [{basket},dispatch]=useStateValue();
  return (
    <div className='checkout'>
        <div className='left'>
          <div className='title'>
            <h1>Shopping cart</h1>
            <p>Deselect all items</p>
          </div>
          <div className='price_title'>
            <p>Price</p>  
          </div> 

          <div>
            {basket.map(item=>(
              <Checkoutproduct 
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
          {/* <div className='price'>
            <p>Price</p>
          </div> */}
        </div>

        

        <div className='right'>
            <div className='top'>
              <Subtotal />
              
            </div>

            <div className='bottom'>

            </div>
        </div>
    </div>
  )
}

export default Checkout