import React, { useState } from 'react'
import doctorImg from '../../assets/images/doctorImg01.jpg'
import starIcon from '../../assets/images/star.jpg'
import DoctorAbout from './DoctorAbout'
import DoctorFeedback from './DoctorFeedback'

const DoctorDetails = () => {

  const [tab, setTab] =useState('about')  

  return (

  /*-----Doctor Details-----*/
    <section>
      <div className="mx=auto">
        <div className="grid md:grid-cols-3 gap-[50px]">
          {/*-----Desc-----*/}
          <div className="md:col-span-2">
            <div className="flex items-center gap-5 mx-10 ">
              <figure className="max-w-[300px] max-h-[500px]">
                <img src={doctorImg} alt="" className="w-full rounded-[10px]" />
              </figure>

              <div>
                <span className="bg-[#81ecec] text-irisBlueColor font-bold py-1 px-4 lg:py-2 leading-4 lg:text-[16px] lg:leading-7 rounded">
                  Cardiologist
                </span>
                <h3 className="text-headingColor text-[22px] leading-9 mt-3 font-bold">Dr. Emily Rodriguez</h3>
                <div className="flex items-center gap-[6px]">
                  <span className="flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-headingColor">
                  <img src={starIcon} alt="" className="w-[15px]"/> 4.8 
                  </span> 
                  <span className="flex text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-[400] text-textColor">
                    (300)
                  </span>
                </div>

                <p className="text_para text-[14px] leading-6 md:text-[15px] lg:max-w-[390px]">
                  Focus on the diagnosis and treatment of heart-related conditions and play a vital 
                  role in safeguarding heart health, offering expertise in prevention, diagnosis, and 
                  treatment to ensure optimal cardiovascular well-being.
                </p>
              </div>
            </div>

            
            <div className="mt-[50px] m-5 border-b border-solid border-[#2d3436]">
              {/*-----Doctor About-----*/}
              <button
                onClick={() => setTab('about')}
                className={`${tab === "about" && " border-b-2 border-solid border-primaryColor rounded-t-xl  bg-primaryColor  text-white"}
                py-2 px-5 mr-5 text-[20px] leading-7 text-headingColor font-bold`}>
                About
              </button>

              {/*-----Doctor Feedback-----*/}
              <button 
              onClick={() => setTab('feedback')}
                className={`${tab === "feedback" && "border-b-2 border-solid border-primaryColor rounded-t-xl bg-primaryColor  text-white"}
                py-2 px-5 mr-5 text-[20px] leading-7 text-headingColor font-bold`}>
                Feedback
              </button>
            </div>

            {/*-----Doctor About & Feedback Details-----*/}
            <div className="mt-[25px] mx-10">
              { tab === 'about' && <DoctorAbout /> }
              { tab === 'feedback' && <DoctorFeedback /> }
            </div>

          </div>
          
        </div>
      </div>
    </section>
  )
}

export default DoctorDetails