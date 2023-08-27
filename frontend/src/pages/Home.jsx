import React from 'react'
import desImg from '../assets/images/des.jpg';
import icon01 from '../assets/images/icon01.png';
import icon02 from '../assets/images/icon02.png';
import icon03 from '../assets/images/icon03.jpg';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import About from '../components/About/About';

const Home = () => {
  return <>
  {/*description*/}
  <section className="description pt=[60px] 2xl:h-[800px]">
    <div className="container">
      <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
        {/*content*/}
        <div>
          <div className="lg:w-[768px]">
            <h1 className="text-[35px] leading-[45px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
              Facilitate Easy and Efficient Appointment Booking For Patients.
            </h1>
            <p className="text_para">
            To simplify the process of booking medical appointments for patients by providing a user-friendly online platform.
            This aims to enhance patient convenience, reduce administrative burdens on healthcare providers, and ultimately improve
             the overall efficiency and accessibility of healthcare services.
            </p>

            <button className="btn">Request an Appointment</button>
          </div>
        {/*count*/}        
          <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">

            <div>
              <h2 className="text-[35px] leading-[55px] lg:text-[40px] lg:leading-[50px] font-[700] text-headingColor">
                30+
              </h2>
              <span className="w-[80px] h-2 bg-green-500 rounded-full block mt-[-16px]"></span>
              <p className="text_para">Years of Experience</p>
            </div>

            <div>
              <h2 className="text-[35px] leading-[55px] lg:text-[40px] lg:leading-[50px] font-[700] text-headingColor">
                15+
              </h2>
              <span className="w-[50px] h-2 bg-yellow-500 rounded-full block mt-[-16px]"></span>
              <p className="text_para">Clinic Location</p>
            </div>

            <div>
              <h2 className="text-[35px] leading-[55px] lg:text-[40px] lg:leading-[50px] font-[700] text-headingColor">
                95%
              </h2>
              <span className="w-[100px] h-2 bg-blue-500 rounded-full block mt-[-16px]"></span>
              <p className="text_para">Patient Satisfaction</p>
            </div>

          </div>
        </div>

        <div className="flex gap-[30px] justify-end">
          <div>
            <img className="w-full rounded-[40%]" src={desImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div className="container">
      <div className="lg:w-[800px] mx-auto">
        <h2 className="heading text-center">
          Follow evidence-based Solutions Now, Save Lives Today, Save Money Tomorrow.
        </h2>
        <p className="text_para text-center">
        Dr.OnCall allows you to connect with doctors, access medical guidance, and potentially receive a prescription, 
        all from the convenience of your own home. You can consult a general practitioner (GP) or a specialized doctor.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
        
        <div className="py-[30px] px-5">
          <div className="flex items-center justify-center">
            <img src={icon01} alt="Find a Doc."/>
          </div>
          <div className="mt-[30px]">
            <h2 className="text-center text-headingColor text-[25px] font-[700]">
              Find a Doctor
            </h2>
            <p className="leading-7 text-[15px] text-textColor text-center">
              Discover the right doctor for your healthcare needs with our user-friendly search tool.
            </p>
            <Link to='/doctors' className="w-[45px] h-[45px] rounded-full border border-solid border-[black]
            mt-[30px] mx-auto flex items-center justify-center group hover:text-white hover:bg-primaryColor hover:border-none">
              <BsArrowRight className="w-6 h-6"/>
            </Link>
          </div>
        </div>

        <div className="py-[30px] px-5">
          <div className="flex items-center justify-center">
            <img src={icon02} alt="Find a Doc."/>
          </div>
          <div className="mt-[30px]">
            <h2 className="text-center text-headingColor text-[25px] font-[700]">
              Find a Location
            </h2>
            <p className="leading-7 text-[15px] text-textColor text-center">
              Locate our nearest doctor effortlessly using our convenient location finder.
            </p>
            <Link to='/doctors' className="w-[45px] h-[45px] rounded-full border border-solid border-[black]
            mt-[30px] mx-auto flex items-center justify-center group hover:text-white hover:bg-primaryColor hover:border-none">
              <BsArrowRight className="w-6 h-6"/>
            </Link>
          </div>
        </div>

        <div className="py-[30px] px-5">
          <div className="flex items-center justify-center">
            <img src={icon03} alt="Find a Doc."/>
          </div>
          <div className="mt-[30px]">
            <h2 className="text-center text-headingColor text-[25px] font-[700]">
              Book an Appointment
            </h2>
            <p className="leading-7 text-[15px] text-textColor text-center">
              Ready to see the doctor? Schedule your appointment now for personalized care and expert medical attention.
            </p>
            <Link to='/doctors' className="w-[45px] h-[45px] rounded-full border border-solid border-[black]
            mt-[30px] mx-auto flex items-center justify-center group hover:text-white hover:bg-primaryColor hover:border-none">
              <BsArrowRight className="w-6 h-6"/>
            </Link>
          </div>
        </div>

      </div>

    </div>
  </section>

  <About/>

  {/*services*/}
  <section>
    <div className="container">
      <div className="mx-auto">
        <h2 className="heading text-center">
          Our Services
        </h2>
        <p className="text_para text-center">
          We offer a wide range of services to meet your healthcare needs.
        </p>
      </div>
    </div>
  </section>

  </>
}

export default Home