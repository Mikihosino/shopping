import React from 'react'
import './shop.css';
import { PRODUCTS } from '../../products';
import { Product } from './product'

import { useNavigate } from "react-router-dom";

export const Shop = () => {
  const navigate = useNavigate()
  return (
    <div className='shop'>
      <div className='shopTitle'>
        <h1> M Tech shop</h1>
      </div>
      <div className='products'>
        {PRODUCTS.map((product) => (
          <Product data={product}/>
          ))
        }
      </div>
      <button onClick={() => navigate("/")}> Go Back</button>
      shop
    </div>
  )
}

