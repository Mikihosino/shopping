import React, { useContext } from 'react'
import './cart-item.css'
import { ShopContext } from '../../context/shop-context'
import { Trash } from "phosphor-react";


export const CartItem = (props) => {
  const {id, productName, price, productImage} = props.data;
  const {cartItems, addToCart, removeFromCart, updateCartItemCount, deleteCartItem} = useContext(ShopContext);
  return (
    <div className='cartItem'>
      <img src={productImage} />
      <div className='description'> 
        <p><b>
          {productName}</b></p>
        <p> ${price}</p>
      </div>
      <div className='countHandler'>
        <button onClick={() => removeFromCart(id)}> - </button>
        <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)}/>
        <button onClick={() => addToCart(id)}> + </button>
      </div>

      <div className='deleteButton'>
        <button onClick={() => deleteCartItem(id)}><Trash size={28}/></button>
      </div>
    </div>
  )
}


