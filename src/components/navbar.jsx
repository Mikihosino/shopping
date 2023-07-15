import React from 'react'
import {Link} from "react-router-dom";
import {ShoppingCart} from "phosphor-react";

import './navbar.css';

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/vpn_1">nn</Link>
        <Link to="/">Home</Link>
        <Link to="/shop">Goods Shop</Link>
        <Link to="/cart">
          <ShoppingCart size={33} />
        </Link>
      </div> 
    </div>
  )
}

