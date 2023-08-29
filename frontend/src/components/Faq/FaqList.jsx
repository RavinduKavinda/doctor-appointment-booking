import React from 'react';
import {faqs} from './../../assets/data/faqs';
import FaqCard from './FaqCard';

const FaqList = () => {
  return (
    <ul className="mt-[20px]">
        {faqs.map((item, index) => 
            <FaqCard item={item} key={index}/>
        )}
    </ul>
  );
 }

export default FaqList;
