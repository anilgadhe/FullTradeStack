import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import "./index.css"
import HomePage from './landing_page/home/HomePage';
import AboutPage from './landing_page/about/AboutPage'
import ProductsPage from './landing_page/products/ProductsPage'
import Signup from './landing_page/signup/Signup'
import SupportPage from './landing_page/support/SupportPage'
import PricingPage from './landing_page/pricing/PricingPage';
import Footer from './landing_page/Footer';
import Navbar from './landing_page/Navbar';
import NotFound from './landing_page/NotFound'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <Navbar/>
  <Routes>
     
    <Route path='/' element={<HomePage/>}/>
    <Route path='/about' element={<AboutPage/>}/>
    <Route path='/pricing' element={<PricingPage/>}/>
    <Route path='/products' element={<ProductsPage/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/support' element={<SupportPage/>}/>
    <Route path='/*' element={<NotFound/>}/>

     
  </Routes>
  <Footer/>
  </BrowserRouter>
  </React.StrictMode>
);



