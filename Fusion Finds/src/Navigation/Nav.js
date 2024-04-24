
import { HiPlus } from "react-icons/hi";
import { FiHome, FiMenu } from "react-icons/fi";

import React, { useState } from 'react';
import "./Nav.css";

const Nav = ({ handleInputChange, query }) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="nav-container">
        <input
          className="search-input"
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="Enter your search"
        />
      </div>

      { <div className="profile-container">
         <a href="#" onClick={toggleMenu}>
          <FiMenu className="nav-icons" />
        </a>



      
      </div> }
      {isOpen && (
        <div className="menu">
          <ul>
            <li className="nav-text"> <a href="#"><FiHome className="nav-icons"/></a>Home</li>
            <li className="nav-text"> <a href="#"><HiPlus className="nav-icons"/></a>About</li>
            <li className="nav-text"> <a href="#"><HiPlus className="nav-icons"/></a>Contact</li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;
