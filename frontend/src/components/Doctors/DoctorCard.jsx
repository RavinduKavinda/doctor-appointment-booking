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
      
    </div>
  );
}

export default DoctorCard;
