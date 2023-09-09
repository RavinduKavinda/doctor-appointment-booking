import React from 'react'
import DoctorCard from './../../components/Doctors/DoctorCard'
import {doctors} from './../../assets/data/doctors'

const Doctors = () => {
  return (
<>

{/*-----Search Bar-----*/}
<section className="bg-[#f5f6fa] " >
    <div className="container text-center">
      <h2 className='heading'>Find a Doctor</h2>
      <div className="max-w-[570px] mt-[30px] mx-auto bg-[#596275] rounded-md flex items-center justify-between">
        
        <input type="search" 
               className="py-2 pl-4 pr-10 bg-transparent w-full focus:outline-none cursor-pointer text-white font-bold placeholder-white"
               placeholder= "Search Doctor"/>
        
        <button className="btn mt-0 rounded-[0px] rounded-r-md">
          Search
        </button>

      </div>
    </div>
</section>

{/*-----Doctors List-----*/}
<section>
  <div className="cotainer">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1">
        {doctors.map((doctor)=> 
          <DoctorCard key={doctor.id} doctor={doctor}/>      
        )}
      </div>
  </div>
</section>
</>)
}

export default Doctors