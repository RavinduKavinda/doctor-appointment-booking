import React, { useState } from 'react'
import avator from './../../assets/images/avatarIcon.png'
import { formatDate } from '../../utils/formatDate'
import { AiFillStar } from 'react-icons/ai'
import FeedbackForm from './FeedbackForm'

const DoctorFeedback = () => {
    const [showFeedback, setshowFeedback] = useState(false)
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

                {/*-----rating-----*/}
                <div className="flex gap-1">
                    {[...Array(5).keys()].map((_, index) => (
                        <AiFillStar key={index} color="#0067FF" />
                    ))}
                </div>

            </div>
        </div>

        {/*-----give feedback-----*/}
        {!showFeedback && (
            <div className="text-center">
                <button className="btn" onClick={() => setshowFeedback(true)}>Give Your Rate</button>
            </div>
        )}

        {showFeedback && <FeedbackForm />}

    </div>
  )
}

export default DoctorFeedback