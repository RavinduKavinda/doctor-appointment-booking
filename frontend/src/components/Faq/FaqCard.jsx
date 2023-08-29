import { useState } from 'react';

const FaqCard = ({ item }) => {
  return (
    <div className="p-2 lg:p-4 rounded-[12px] border-[3px] border-solid border-blue-400 ml-[20px] lg:ml-[40px] mr-[20px] lg:mr-[40px] mb-3 cursor-pointer">
      <div className="flex items-center justify-between gap-6">
        <h4 className="text-[16px] lg:text-[22px] leading-7 lg:leading-8 text-headingColor">
            {item.question}
        </h4>
      </div>
    </div>
  );
}

export default FaqCard;
