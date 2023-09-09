import React from 'react'
import DoctorCard from './../../components/Doctors/DoctorCard'
import {doctors} from './../../assets/data/doctors'

const Doctors = () => {
  return (
<>
<section className="bg-[#f5f6fa] " >
    <div className="container text-center">
      <h2 className='heading'>Find a Doctor</h2>
      <div className="max-w-[570px] mt-[30px] mx-auto bg-[#596275] rounded-md flex items-center justify-between">
        <input type="search" 
               className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer text-white font-bold placeholder-white"
               placeholder= "Search Doctor"/>
      </div>
    </div>
</section>
</>)
}

export default Doctors