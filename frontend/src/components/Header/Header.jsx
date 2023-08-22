import React from 'react';
import logo from '../../assets/images/logo.png';

const Header = () => {
  return (
    <header className="header flex items-center">
      <div className="container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div>
              <img src={logo} alt="logo" className="max-h-12 mt-2"/>
          </div>   
        </div>
      </div>
    </header>  
  )
}

export default Header;