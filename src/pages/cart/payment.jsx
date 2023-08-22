import React, { useContext } from 'react'
import { PaymentScreen } from '../../context/paymentScreen'
import { ShopContext } from '../../context/shop-context'
import './payment.css'
import { useNavigate } from "react-router-dom";
import { Storefront, ShoppingCart} from "phosphor-react";


export const Payment = () => {
  const { getTotalCartAmount } = useContext(ShopContext);

  const totalAmount = getTotalCartAmount();
  const product = {
    price: totalAmount
  };
  const navigate = useNavigate()
  return (
    <div>
      <div className='navibttn'>
        <button className='store-front' onClick={() => navigate("/")}><Storefront size={18} /> <span>Shopping</span></button>
        <button onClick={() => navigate("/cart")}> <span><ShoppingCart size={18} /> Cart</span></button>
      </div>
      <div className='payment-screen'>
        <PaymentScreen product={product} />
      </div>
    </div>
  )
}

