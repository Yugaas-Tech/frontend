import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import VisMis from './VisMis';
import ExpCat from './ExpCat';


const Layout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <VisMis></VisMis>
      <ExpCat></ExpCat>
    </div>
  )
}

export default Layout
