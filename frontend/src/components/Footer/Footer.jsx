import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import {AiFillFacebook, AiFillInstagram, AiFillTwitterCircle, AiFillYoutube} from 'react-icons/ai';

const socialMedia = [
  {
    path: "https://www.facebook.com/",
    icon: <AiFillFacebook className="group-hover:text-white w-4 h-5"/>,
  },
  {
    path: "https://www.instagram.com/",
    icon: <AiFillInstagram className="group-hover:text-white w-4 h-5"/>,
  },
  {
    path: "https://www.twitter.com/",
    icon: <AiFillTwitterCircle className="group-hover:text-white w-4 h-5"/>,
  },
  {
    path: "https://www.youtube.com/",
    icon: <AiFillYoutube className="group-hover:text-white w-4 h-5"/>,
  },
];

const quickLinks01 = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/",
    name: "About",
  },
  {
    path: "/",
    name: "Services",
  },
  {
    path: "/",
    name: "Blog",
  },
];

const quickLinks02 = [
  {
    path: "/",
    display: "Find a Doctor",
  },
  {
    path: "/",
    display: "Request an Appointment",
  },
  {
    path: "/",
    display: "Find a Location",
  },
  {
    path: "/",
    display: "Get a Opinion",
  },
];

const quickLinks03 = [
  {
    path:"/",
    display: "Contact Us",
  },
  {
    path:"/",
    display: "Donate",
  },
];


const Footer = () => {

  const year = new Date().getFullYear();

  return (
    <footer className="pb-6 pt-5">
      <div className="container">
        <div className="flex justify-between flex-col md:flex-row flex-wrap gap-5">
          
          {/* Quick Links */}
          <div>
            <h2 className="text-[20px] font-[700] mb-5 text-headingColor">
              Quick Links
            </h2>
            <ul>
              {quickLinks01.map((item, index) => (
                <li key={index}>
                  <Link to={item.path} className=" font-[500] leading-7 text-[#7D7D7D] hover:text-blue-700 transition duration-300">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Needs */}
          <div>
            <h2 className="text-[20px] font-[700] mb-5 text-headingColor">
              I want to:
            </h2>
            <ul>
              {quickLinks02.map((item, index) => (
                <li key={index}>
                  <Link to={item.path} className=" font-[500] leading-7 text-[#7D7D7D] hover:text-blue-700 transition duration-300">
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h2 className="text-[20px] font-[700] mb-5 text-headingColor">
              Support
            </h2>
            <ul>
              {quickLinks03.map((item, index) => (
                <li key={index}>
                  <Link to={item.path} className=" font-[500] leading-7 text-[#7D7D7D] hover:text-blue-700 transition duration-300">
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer;
