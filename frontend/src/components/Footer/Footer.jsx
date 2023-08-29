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


const Footer = () => {
  return (
    <div>
      Footer
    </div>
  )
}

export default Footer;
