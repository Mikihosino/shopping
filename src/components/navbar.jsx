import React, { useState, useContext, useEffect}  from 'react'
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart} from "phosphor-react";
import { ShopContext } from '../context/shop-context';
import shopLogo from '../assets/logo.png'; 

import './navbar.css';

export const Navbar = () => {
  const {getTotalQuantity} = useContext(ShopContext);
  const [cartItemCount, setCartItemCount] = useState(getTotalQuantity());
  const navbarStyle = {
    position: 'fixed', // Add the desired style here
    // Other style properties can be added here as well
  };
  const location = useLocation();
  useEffect(() => {
    const totalQty = getTotalQuantity(); // カート内の合計数量を取得
    setCartItemCount(totalQty); // カートの数量を更新
  }, [getTotalQuantity]); // getTotalQuantity 関数が変更されたときに useEffect を実行


  return (
    <div className='navbar' style={navbarStyle}>
      <div className="links">
        <Link to="/">
          <div><img className='shopLogo' src={shopLogo} alt='shop Logo'/></div>         
        </Link>
        <div className='cart'>
          <Link to="/cart">
            <ShoppingCart size={33} />
          </Link>
          {
          <span className="cart-badge">{cartItemCount}</span>
          }
        </div>
      </div> 
    </div>
  )
}

