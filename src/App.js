import './App.css';
import React from 'react';
import ImageSlider from './ImageSlider'; 
import { SLIDERDATA } from './sliderData';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Cart } from "./pages/cart/cart";
import { Shop } from "./pages/shop/shop";
import { Payment } from './pages/cart/payment.jsx';
import { ShopContextProvider } from './context/shop-context';



function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={
              <>
              <ImageSlider slides={SLIDERDATA} /> 
              <Shop />
              </>
            }/>
            <Route path="/cart" element={<Cart />}/>
            <Route path="/payment" element={<Payment />}/>
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
