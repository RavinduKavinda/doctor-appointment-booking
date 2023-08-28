import React from 'react';
import {doctors} from '../../assets/data/doctors';
import DoctorCard from './DoctorCard';

const DoctorList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1 lg:gap-[20px] mt-[10px] lg:mt[20px]">
      {doctors.map((doctor)=> 
        <DoctorCard key={doctor.id} doctor={doctor}/>      
      )}
    
    </div>
  );
}

export default DoctorList;
 