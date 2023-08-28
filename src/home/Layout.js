import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import VisMis from './VisMis';
import ExpCat from './ExpCat';
import Social from './Social';


const Layout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <VisMis></VisMis>
      <ExpCat></ExpCat>
      <Social></Social>
    </div>
  )
}

export default Layout
