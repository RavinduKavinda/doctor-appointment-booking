import React, { useState } from 'react'

const Login = () => {

  const [formData, setformData] =useState({
    email:'',
    password:'',
  });

  const handleInputChange = e => {
    setformData({ ... formData, [e.target.name]: e.target.value});
  };

  return (
    <section className="px-5 lg:px-3">
      <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10 bg-slate-100">
        <h3 className="text-headingColor text-[22px] leading-7 font-bold mb-10">
          Hello! Welcome Back <span className="text-primaryColor">Dr.OnCall</span>👨‍⚕️
        </h3>

        <form className="py-4 md:py-1">
          <div className="mb-5">
            <input 
              type="email" 
              placeholder='Enter Your Email' 
              name='email' 
              value={FormData.email}
              onChange={handleInputChange}
              className='w-full p-3 border-b border-solid border-textColor focus:outline-none focus:border-b-primaryColor
                        text-[17px] leading-6 cursor-pointer rounded-xl'
              required />
          </div>

          <div className="mb-5">
            <input 
              type="password" 
              placeholder='Enter Password' 
              name='password' 
              value={FormData.password}
              onChange={handleInputChange}
              className='w-full p-3 border-b border-solid border-textColor focus:outline-none focus:border-b-primaryColor
                        text-[17px] leading-6 cursor-pointer rounded-xl'
              required />
          </div>

          <div className="mt-6">
            <button
              type='submit'
              className='w-full bg-primaryColor text-white text-[18px] font-bold leading-7 rounded-xl p-3'>
              Login
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Login