import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import VisMis from './VisMis';
import ExpCat from './ExpCat';
import Social from './Social';
import Footer from '../aboutUs/Footer';


const Layout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <VisMis></VisMis>
      <ExpCat></ExpCat>
      <Social></Social>
      <Footer></Footer>
    </div>
  )
}

export default Layout
