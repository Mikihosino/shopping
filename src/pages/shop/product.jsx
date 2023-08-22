import React, { useContext } from 'react'
import './product.css';
import { ShoppingCart } from "phosphor-react";

import { ShopContext, cartItems } from '../../context/shop-context';

import { useNavigate } from "react-router-dom";

export const Product = (props) => {
  const {id, productName, price, productImage} = props.data;
  const { addToCart, cartItems} = useContext(ShopContext);
  const cartItemAmount = cartItems[id];
  const navigate = useNavigate()

  return (
    <div className='product-container'>
      <img src={productImage} />
      <div className='description'>
        <b>{productName}</b>
      </div>
      <div className='product-container-bottom'>
        <p>${price}</p>
        <button className='addToCartBttn' onClick={() => addToCart(id)}>
        <ShoppingCart size={28} />
        </button>
      </div>      
    </div>
  )
}

