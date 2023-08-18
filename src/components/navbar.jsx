import React, { useState, useContext, useEffect}  from 'react'
import {Link} from "react-router-dom";
import {ShoppingCart} from "phosphor-react";
import { ShopContext } from '../context/shop-context';


import './navbar.css';

export const Navbar = () => {
  const {getTotalQuantity} = useContext(ShopContext);
  const [cartItemCount, setCartItemCount] = useState(getTotalQuantity());

  useEffect(() => {
    const totalQty = getTotalQuantity(); // カート内の合計数量を取得
    setCartItemCount(totalQty); // カートの数量を更新
  }, [getTotalQuantity]); // getTotalQuantity 関数が変更されたときに useEffect を実行


  return (
    <div className="navbar">
      <div className="links">
        <Link to="/">Goods Shop</Link>
        <Link to="/cart">
          <ShoppingCart size={33} />
        </Link>
        {
        <span className="cart-badge">{cartItemCount}</span>
        }
        
      </div> 
    </div>
  )
}

