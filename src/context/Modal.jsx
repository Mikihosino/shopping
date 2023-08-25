import React from 'react'
import { useNavigate } from "react-router-dom";
import './modal.css';
import Lottie from "lottie-react";
import animationData from "../assets/animation_llppa7gp.json"
 
const Modal = ({open, onClose}) => {
  const navigate = useNavigate()
  if(!open) return null;
  return (
    <div className='overlay'>
      <div className='modalContainer'>
        <button className='close-btn' onClick={onClose}>X</button>
        <h1>Added To Cart</h1> 
        <div className='ani'>
          <Lottie animationData={animationData} />
        </div>
          <button className='continue-btn' onClick={onClose}>
            Continue Shopping
          </button>
          <button className='cart-btn' onClick={() => navigate("/cart")}>
            Go to Cart
          </button>
      </div>
    </div>
  )
}

export default Modal
