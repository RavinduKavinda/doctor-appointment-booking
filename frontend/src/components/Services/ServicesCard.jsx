import React from 'react';

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
    </div>
  );
};

export default ServicesCard;
