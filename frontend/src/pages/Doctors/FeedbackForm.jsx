import React, { useState } from 'react'
import { BsFillStarFill } from 'react-icons/bs'

const FeedbackForm = () => {

    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)
    const [text, setText] = useState("")

    const handleSubmitReview = async e => {
        e.preventDefault();
        // api
    };

  return (
    <form>
        <div className="mt-8">
            <h3 className="text-headingColor text-[16px] leading-6 font-bold mb-3">
                Share your experience
            </h3>

            <textarea rows="7" placeholder='Write your massage' 
                className='border border-solid border-textColor focus:outline outline-primaryColor px-4 py-3 rounded-xl w-full'
                onChange={ e => setText(e.target.value)}>
            </textarea>
        </div>

        <div>
            <h3 className="text-headingColor text-[16px] leading-6 font-bold mb-3">
                Rate the overall experience?
            </h3>

            <div>
                {[...Array(5).keys()].map((_, index) => {
                    index += 1;

                    return (
                        <button key={index} type='button' className={`${
                            index <= ((rating && hover) || hover) ? "text-yellowColor" : "text-gray-400"}
                            bg-transparent border-none outline-none text-[22px] cursor-pointer`}
                            
                            onClick={() => setRating(index)}
                            onMouseEnter={() => setHover(index)}
                            onMouseLeave={() => setHover(rating)}
                            onDoubleClick = {() => {
                                setHover(0);
                                setRating(0);
                            }}>
                            <span>
                                <BsFillStarFill />
                            </span>
                        </button>
                    )
                })}
            </div>
        </div>

        <button type='submit' onClick={handleSubmitReview} className='btn'>
            Submit Feedback
        </button>
    </form>
  )
}

export default FeedbackForm