import React from 'react'
import doctorImg from '../../assets/images/doctorImg01.jpg'
import starIcon from '../../assets/images/star.jpg'

const DoctorDetails = () => {
  return (

  /*-----Doctor Details-----*/
    <section>
      <div className="max-w-[1170px] px-5 mx=auto">
        <div className="grid md:grid-cols-3 gap-[50px]">
          {/*-----Desc-----*/}
          <div className="md:col-span-2">
            <div className="flex items-center gap-5">
              <figure className="max-w-[200px] max-h-[400px]">
                <img src={doctorImg} alt="" className="w-full" />
              </figure>

              <div>
                <span className="bg-[#81ecec] text-irisBlueColor font-bold py-1 px-4 lg:py-2 leading-4 lg:text-[16px] lg:leading-7 rounded">
                  Cardiologist
                </span>
                <h3 className="text-headingColor text-[22px] leading-9 mt-3 font-bold">Dr. Emily Rodriguez</h3>
                <div className="flex items-center gap-[6px]">
                  <span className="flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-headingColor">
                  <img src={starIcon} alt="" className="w-[20px]"/> 4.8 
                  </span> 
                  <span className="text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-[400] text-textColor">
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
          </div>

          <div className="">

          </div>

        </div>
      </div>
    </section>
  )
}

export default DoctorDetails