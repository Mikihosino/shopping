import './App.css';
import React from 'react';


import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Cart } from "./pages/cart/cart";
import { Home } from "./pages/home/home";
import { Shop } from "./pages/shop/shop";
import { OneMonthVPN } from './pages/vpn-pages/vpn-1m';
import { SixMonthVPN } from './pages/vpn-pages/vpn-6m';
import { YearVPN } from './pages/vpn-pages/vpn-12m';
import { ShopContextProvider } from './context/shop-context';


function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/shop" element={<Shop />}/>
            <Route path="/cart" element={<Cart />}/>
            <Route path="/vpn_1" element={<OneMonthVPN />}/>
            <Route path="/vpn_6" element={<SixMonthVPN />}/>
            <Route path="/vpn_year" element={<YearVPN />}/>

          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
