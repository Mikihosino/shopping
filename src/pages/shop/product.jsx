import React, { useState, useContext } from 'react'
import './product.css';
import { ShopContext, cartItems } from '../../context/shop-context';

import { useNavigate } from "react-router-dom";
import Modal from '../../context/Modal';

export const Product = (props) => {
  const {id, productName, price, productImage} = props.data;
  const { addCommas, addToCart, cartItems} = useContext(ShopContext);
  const [openModal, setOpenModal] = useState(false)
  const cartItemCount = cartItems[id];



  return (
    <div className='product-container'>
      <img src={productImage} />
      <div className='description'>
        <b>{productName}</b>
      </div>
      <div className='product-container-bottom'>
        <p>${addCommas(price)}</p>
        <button className='addToCartBttn' onClick={() => {addToCart(id); setOpenModal(true)}}>
        Add To Cart
        </button>
      </div> 
      <Modal open={openModal} onClose={() => setOpenModal(false)} />   
      {
      <span className="product-badge">{cartItemCount > 0 && <> {cartItemCount}</>}</span>
        }
    </div>
  )
}

