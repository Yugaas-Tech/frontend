import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import VisMis from './VisMis';


const Layout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <VisMis></VisMis>
    </div>
  )
}

export default Layout
