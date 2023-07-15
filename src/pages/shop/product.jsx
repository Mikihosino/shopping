import React, { useContext } from 'react'
import './product.css';
import { ShopContext, cartItems } from '../../context/shop-context';

export const Product = (props) => {
  const {id, productName, price, productImage} = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemAmount = cartItems[id];
  return (
    <div className='product-container'>
      <img src={productImage} />
      <div className='description'>
        
          <b>{productName}</b>
        
        <p>${price}</p>
      </div>
      <button className='addToCartBttn' onClick={() => addToCart(id)}>
        Add To Cart {cartItemAmount > 0 && <> ({cartItemAmount})</>}
        </button>
    </div>
  )
}

