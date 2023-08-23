import React from 'react';
import logo from '../../assets/images/logo.png';
import userImg from '../../assets/images/avatarIcon.png';
import { NavLink, Link} from 'react-router-dom';

const navLinks = [
  {
    path:'/home',
    display: 'Home'
  },
  {
    path:'/doctors',
    display: 'Doctors'
  },
  {
    path:'/services',
    display: 'Services'
  },
  {
    path:'/contact',
    display: 'Contact Us'
  },
]

const Header = () => {
  return (
    <header className="header flex items-center">
      <div className="container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div>
              <img src={logo} alt="logo" className="max-h-10 mt-2"/>
          </div>  

          {/*menu*/}
          <div className="navigation">
            <ul className="menu flex items-center gap-10">
              {navLinks.map((link,index) =>
               <li key={index}>
                    <NavLink to={link.path} className={navClass=> navClass.isActive ? 
                      'text-primaryColor test-[16px] leading-7 font[600] mt-2' : 
                      'text-textColor test-[16px] leading-7 font[500] hover:text-primaryColor mt-2'}>
                      {link.display}
                    </NavLink>
                </li>)
              }
            </ul>
          </div>
          
          {/*user proffile*/}
          <div className="flex items-center gap-5">

              <div>
                <Link to="/">
                <figure className="w-[35px] h-[35px] rounded-full cursor-pointer">
                  <img src={userImg} className='w-full rounded-full mt-2' alt="avatarIcon" />
                </figure>                
                </Link>
              </div>

              <Link to="/login">
                <button className="bg-primaryColor text-white px-6 py-2 mt-2 font-[600] h-[44px] flex items-center justify-center rounded-[50px]">
                  Login
                </button>
            </Link>

            
          </div>

        </div>
      </div>
    </header>  
  )
}

export default Header;