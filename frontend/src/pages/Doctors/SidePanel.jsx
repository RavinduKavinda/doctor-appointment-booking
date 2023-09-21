import React from 'react'

const SidePanel = () => {
  return (
    <div className='shadow-panelShadow p-3 lg:p-5 mx-4 rounded-lg'>
        <div className="flex items-center justify-between">
            <p className="text__para mt-0 font-semibold">
                Ticket Price
            </p>
            <span className="text-[17px] lg:text-[22px] text-headingColor font-bold">
                500 USD
            </span>
        </div>

        {/*-----Available Time-----*/}
        <div className="mt-[30px]">
            <p className="text__para mt-0 font-extrabold text-headingColor">
                Available Time Slots:
            </p>

            <ul className="mt-3">
                <li className="flex items-center justify-between mb-2">
                    <p className="text-[15px] leading-6 text-textColor font-semibold">
                        Saturday
                    </p>
                    <p className="text-[15px] leading-6 text-textColor font-semibold">
                        4:00 PM - 9:30 PM
                    </p>
                </li>

                <li className="flex items-center justify-between mb-2">
                    <p className="text-[15px] leading-6 text-textColor font-semibold">
                        Sunday
                    </p>
                    <p className="text-[15px] leading-6 text-textColor font-semibold">
                        4:00 PM - 9:30 PM
                    </p>
                </li>
            </ul>
        </div> 

        <button className='btn px-2 w-full rounded-lg'>
            Book Appointment
        </button>


    </div>

  )
}

export default SidePanel