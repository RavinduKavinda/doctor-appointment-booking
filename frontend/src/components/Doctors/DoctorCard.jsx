import React from 'react';


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
        </div>
        
    </div>
  );
}

export default DoctorCard;
