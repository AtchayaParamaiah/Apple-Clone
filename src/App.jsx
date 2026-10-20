import React from 'react';
import Navbar from './component/navbar';
import Hero from './component/hero';
import Product from './component/product';
import Stream from './component/stream';
import Footer from './component/Footer'

const App = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Product/>
    <Stream/>
    <Footer/>
    </>
  )
}

export default App