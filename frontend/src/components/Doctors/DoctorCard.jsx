import React from 'react';
import star from '../../assets/images/star.jpg';
import { Link } from 'react-router-dom';
import {BsArrowRight} from 'react-icons/bs';

{/*best doctors*/}
const DoctorCard = ({doctor}) => {

    const {
        name, 
        specialty, 
        avgRating, 
        totalRating, 
        photo, 
        totalPatients, 
        hospital } = doctor
  return (
    <div className="p-3 lg:p-10">
        <div>
            <img src={photo} alt="" className="w-[350px] rounded-[5%] justify-center"/>
        </div>

        <h2 className='text-[18px] leading-[30px] lg:text-[25px] lg:leading-9 text-headingColor font-[700] mt-3 lg:mt-5'>
            {name}
        </h2>

        <div className="mt-2 lg:mt-3 flex items-center justify-between">
            <span className="bg-[#81ecec] text-irisBlueColor py-1 px-2 lg:py-0.5 lg:px-4 text-[13px] rounded leading-3 lg:leading-5 font-bold">
                {specialty}
            </span>
            <div className="flex items-center gap-1">
                <span className="flex items-center gap-1 text-[15px] leading-6 lg:leading-7 font-bold text-textColor">
                    <img src={star} alt="" className='w-[25px]' /> {avgRating}
                </span>
                <span className="flex items-center gap-1 text-[15px] leading-6 lg:leading-7 font-bold text-headingColor">
                    ({totalRating})
                </span>
            </div>   
        </div>
        
        {/*total patients*/}
        <div className='mt-[10px] lg:mt-2 flex items-center justify-between'>
            <div>
                <h3 className="flex items-center text-[15px] font-bold text-textColor">
                    - {totalPatients} Patients
                </h3>
                <p className="text-[13px] leading-6 font-[400] text-headingColor">
                    At {hospital}
                </p> 
            </div>
            <Link to='/doctors' className="w-[35px] h-[35px] rounded-full border border-solid border-[black]
             flex items-center justify-center group hover:text-white hover:bg-primaryColor hover:border-none">
              <BsArrowRight className="w-4 h-4"/>
            </Link>
        </div>
    </div>
  );
}

export default DoctorCard;
