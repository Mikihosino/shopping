import React, { useContext } from 'react'
import { PRODUCTS } from '../../products'
import { ShopContext } from '../../context/shop-context'
import { CartItem } from './cart-item'
import './cart.css'

import { useNavigate } from "react-router-dom";


export const Cart = () => {
  const { cartItems, addCommas, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount()
  const navigate = useNavigate()

  

  return (
    <div className='CartContents'>
      <div className='CartTitle'>
        <p>Your Cart Items</p>
      </div>
      <div className='cartItems'>
        {PRODUCTS.map((product) => {
          if (cartItems [product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>

    {totalAmount > 0 ?
      <div className='checkout'>
        <p>Total: ${addCommas(totalAmount)}</p>
        <button onClick={() => navigate("/")}> Continue Shopping</button>
        <button onClick={() => navigate("/payment")}> <span>Checkout</span></button>
      </div>
      : <h1>Empty</h1>
      }
    </div>
  )
}

