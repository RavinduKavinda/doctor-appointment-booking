import React from 'react'
import { services } from '../assets/data/services'
import ServicesCard from '../components/Services/ServicesCard'

const Services = () => {
  return (
    <section>
      <div className="container">
        <h2 className="heading text-center">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 ">
        {services.map((item, index) => <ServicesCard item={item} index={index} key={index}/>)}  
    </div>
      </div>
    </section>
  )
}

export default Services