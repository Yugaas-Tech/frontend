import React, { useState } from 'react';
import './CSS/Navbar.css'; 
import logo from './CSS/logo.png';
import { FaAngleDown } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCube  } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [products, setProducts] = useState([
    { name: 'Food Products', description: 'Lorem ipsum dolor sit amet consectetur elit' },
    { name: 'Religious Store', description: 'Lorem ipsum dolor sit amet consectetur elit' },
    { name: 'Books', description: 'Lorem ipsum dolor sit amet consectetur elit' },
    { name: 'Subsidized Food', description: 'Lorem ipsum dolor sit amet consectetur elit' }
  ]);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="quote">
        <p>Nourishing Lives, Enriching Souls</p>
      </div>
      <div className="menu">
      <ul className="list">
        <li><a href="#">Home</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Contact Us</a></li>
        <li className={`dropdown-item ${isDropdownOpen ? 'open' : ''}`}>
          <a href="#" onClick={toggleDropdown}>
            Products   <FaAngleDown />
          </a>
        
          
            {isDropdownOpen && (
            <div className="dropdown-content">
              <h4 className='product'>Products</h4>
              {/* Map over the products array to display the list of products */}
              {products.map((product, index) => (
                <div  className="prod-details"key={index}>
                 
                  
                    <div className='icon'><FontAwesomeIcon icon={faCube} size="12x" /></div>
                    <div className='desc-home'>
                    <h4>{product.name}</h4>
                  
                  
                  </div>
                </div>
              ))}
            </div>
          )}
        
        </li>
        
        <button className='login'>Login</button>
      </ul>
      </div>
    </nav>
  );
}

export default Navbar;
