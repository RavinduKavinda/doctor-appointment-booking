import React from 'react'

const Contact = () => {
  return (
    <section>
      <div className="px-4 mx-auto max-w-screen-md">
        <h2 className=" heading text-center">
          Contact Us
        </h2>

        <p className="mb-8 lg:mb-16 font-light text-center text_para">
          Welcome to our Doctor Appointment website! We are here to assist you in 
          the best possible way. If you have questions or need assistance, Let us know.
        </p>

        <form action="#" className=' space-y-8'>
          <div>
            <label htmlFor="email" className='from_label'>
              Your Email
            </label>
            <input 
              type="email"
              id='email'
              placeholder='example@mail.com'
              className='form_label mt-1' />
              
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact              