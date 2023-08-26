import React from 'react'
import desImg from '../assets/images/des.jpg';

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

      

    </div>
  </section>


  </>
}

export default Home