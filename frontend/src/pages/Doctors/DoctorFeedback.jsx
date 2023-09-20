import React from 'react'
import avator from './../../assets/images/avatarIcon.png'
import { formatDate } from '../../utils/formatDate'

const DoctorFeedback = () => {
  return (
    <div>
        <div className="mb-[50px]">
            <h3 className="text-[20px] leading-7 text-headingColor font-bold flex items-center gap-2">
                All Reviews(300)
            </h3>

            {/*-----review-----*/}
            <div className="flex justify-between gap-10 mb-7 mt-3">
                <div className="flex gap-3 ">
                    <figure className='w-10 h-10 rounded-full '>
                        <img src={avator} alt="" className='w-full'/>
                    </figure>

                    <div>
                        <h5 className="text-[17px] leading-5 text-purpleColor font-bold">
                            Ravindu Kavinda
                        </h5>
                        <p className="text-[14px] leading-5 text-textColor">
                            {formatDate('09-21-2023')}
                        </p>
                        <p className="text__para mt-3 font-normal">
                            Dr. Emily Rodriguez is an outstanding cardiologist who has 
                            greatly improved my heart health and quality of life.
                        </p>
                    </div>
                </div>

                
            </div>
        </div>
    </div>
  )
}

export default DoctorFeedback