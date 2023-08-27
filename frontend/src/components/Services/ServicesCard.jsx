import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';

const ServicesCard = ({item, index}) => {

  const {name, desc, bgColor, textColor} = item;
  return (
    <div className="py-8 px-3 lg:px-5">
      <h2 className="text-[25px] leading-9 text-headingColor font-[650]">
        {name}
      </h2>
      <p className="text-[17px] leading-6 text-textColor font-[400] mt-3">
        {desc}
      </p>

      <div className="flex items-center justify-between mt-7">

        <span className="">
          {index + 1}
        </span>

        <Link to='/doctors' className="w-[45px] h-[45px] rounded-full border border-solid border-[black]
            mt-[30px] mx-auto flex items-center justify-center group hover:text-white hover:bg-primaryColor hover:border-none">
              <BsArrowRight className="w-6 h-6"/>
        </Link>

      </div>
    </div>
  );
};

export default ServicesCard;
