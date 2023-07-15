import React from 'react'
import './home.css'
import { useNavigate } from "react-router-dom";



export const Home = () => {
  const navigate = useNavigate()
  return (
    <main>
      <div className='vpn-container'>
      <h1 className='grandient_text'>Download<br/> Risk-Free VPN </h1>
        <div className='pricing-table'>
          <div className='pricing-section'>
            <p className='gradient-text'>1 Month</p>
            <p>$14.9</p>
            <button onClick={() => navigate("/vpn_1")}>Get plan</button>
          </div>

          <div className='pricing-section'>
            <p>12 Month</p>
            <p>$8.9</p>
            <button onClick={() => navigate("/vpn_year")}>Get plan</button>
          </div>

          <div className='pricing-section'>
            <p>6 Month</p>
            <p>$11.9</p>
            <button onClick={() => navigate("/vpn_6")}>Get plan</button>
          </div>
        </div>
        <div className='optional-item'>
          <div><p>Include a Dedicated IP to your VPN</p></div>
        </div>
      </div>
      
      <div>
        <button onClick={() => navigate("/shop")}> Go Shopping</button>
      </div>
    </main>
  )
}

