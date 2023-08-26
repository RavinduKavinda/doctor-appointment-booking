import React from 'react'
import aboutImg from '../../assets/images/doctorAbout.png';
import AboutCardImg from '../../assets/images/docCard.png';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className="bg-blue-100">
        <div className="container ">
            <div className="flex justify-between flex-col gap-[50px] xl:gap-0 lg:gap-[130px] lg:flex-row">

                <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-1">
                    <h2 className="text-[35px] leading-[55px] lg:text-[40px] lg:leading-[50px] font-[700] text-headingColor">
                        About Us
                    </h2>
                    <p className="text_para">
                    To simplify the process of booking medical appointments for patients by providing a user-friendly online platform.
                    This aims to enhance patient convenience, reduce administrative burdens on healthcare providers, and ultimately improve
                    the overall efficiency and accessibility of healthcare services.
                    </p>
                    
                    <h2 className="text-[35px] leading-[55px] lg:text-[40px] lg:leading-[50px] font-[700] lg:mt-[50px] mt-[20px] text-headingColor">
                        Our Goal
                    </h2>
                    <p className="text_para">
                    To inform patients about the doctor's qualifications and services, facilitate appointment booking, provide health information, 
                    and establish trust and credibility, ultimately improving accessibility and patient engagement with the healthcare practice.
                    </p>

                    <Link to='/'>
                        <button className="btn">
                            Learn More
                        </button>
                    </Link>

                </div>
                <div className="relative z-10 order-2 lg:order-2">
                    <img src={aboutImg} alt="" />
                    <div className="absolute z-10 bottom-[50px] w-[150px] md:w-[250px] left-[-3%] md:left-[-10%] md:bottom-[100px]">
                      <img src={AboutCardImg} alt="" />  
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}

export default About
