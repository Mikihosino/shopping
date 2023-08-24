import React, { createContext, useState } from 'react'
import { PRODUCTS } from '../products';

export const ShopContext = createContext(null);
const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
}

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for(const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price
      }
    }
    return totalAmount;
  }

  const getTotalQuantity = () => {
    let totalQty = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalQty += cartItems[item]; 
      }
    }
    return totalQty;  
  }

  const addToCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
  }

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
  }

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: newAmount}))
  }

  const deleteCartItem = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] = 0}))
  }

  const contextValue = { cartItems, addCommas, addToCart, removeFromCart, updateCartItemCount, deleteCartItem, getTotalCartAmount, getTotalQuantity};

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
}

