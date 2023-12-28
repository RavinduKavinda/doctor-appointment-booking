import React, { useState } from 'react'
import avatar from './../assets/images/avatarIcon.png'
import { Link } from 'react-router-dom'

const Signup = () => {

  const [selectFile, setselectFile] = useState(null)
  const [previewURL, setpreviewURL] = useState("")

  const [formData, setformData] =useState({
    name:'',
    email:'',
    password:'',
    photo: selectFile,
    gender:'',
    role:'patient'
  });

  const handleInputChange = e => {
    setformData({ ... formData, [e.target.name]: e.target.value});
  };

  const handleFileInputChange = async event => {
    const file = event.target.files[0]
      //need to cloud uplod img
    console.log(file)
  }

  const submitHandler = async event => {

    console.log(formData);
    event.preventDefault()
  }

  return (
    <section className="px-5 lg:px-3">
      <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10 bg-slate-100">
        <h3 className="text-headingColor text-[22px] leading-7 font-bold mb-10">
          Hello! Welcome <span className="text-primaryColor">Dr.OnCall</span>👨‍⚕️<br />
          Create an <span className="text-primaryColor">Account</span>
        </h3>

        <form className="py-4 md:py-1" onSubmit={submitHandler}>

          <div className="mb-5">
            <input 
              type="text" 
              placeholder='Full Name' 
              name='name' 
              value={formData.name}
              onChange={handleInputChange}
              className='w-full p-3 border-b border-solid border-textColor focus:outline-none focus:border-b-primaryColor
                        text-[17px] leading-6 cursor-pointer rounded-xl'
              required />
          </div>

          <div className="mb-5">
            <input 
              type="email" 
              placeholder='Enter Your Email Address' 
              name='email' 
              value={formData.email}
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
              value={formData.password}
              onChange={handleInputChange}
              className='w-full p-3 border-b border-solid border-textColor focus:outline-none focus:border-b-primaryColor
                        text-[17px] leading-6 cursor-pointer rounded-xl tracking-widest'
              required />
          </div>

          {/*-----Option-----*/}
          <div className="mb-5 flex items-center justify-between">
            <label className="text-headingColor font-bold text-[17px] leading-8">
              Are you a: 
              <select 
                name='role' 
                value={formData.role}
                onChange={handleInputChange}
              className='text-textColor font-semibold text-[16px] leading-5 p-3 focus:outline-none'>
                  <option value="patient">Patient</option>
                  <option value="doctor">Doctor</option>
              </select>
            </label>

            <label className="text-headingColor font-bold text-[17px] leading-8">
              Gender: 
              <select 
                name='gender'
                value={formData.gender}
                onChange={handleInputChange}
              className='text-textColor font-semibold text-[16px] leading-5 p-3 focus:outline-none '>
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
              </select>
            </label>
          </div>

          {/*----Image-----*/}
          <div className="mb-5 flex items-center gap-5">
            <figure className="w-[50px] h-[50px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center ">
              <img src={avatar} alt="" className='w-full rounded-full' />
            </figure>

            <div className="relative w-[130px] h-[40px]">
              <input 
                type="file"
                name='photo'
                id='custom__file'
                onChange={handleFileInputChange}
                accept='.jpg .png, .JPEG'
                className=' absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer' 
                />

              <label htmlFor="custom__file" className='absolute top-0 left-0 w-full h-full flex items-center p-5 text-[15px] 
                leading-6 overflow-hidden bg-purpleColor text-headingColor font-bold rounded-lg truncate cursor-pointer'>
                  Upload Photo
              </label>
            </div>
          </div>

          <div className="mt-6">
            <button
              type='submit'
              className='w-full bg-primaryColor text-white text-[17px] font-bold leading-7 rounded-xl p-3'>
              Sign Up
            </button>
          </div>
        </form>
      </div>

      <p className="mt-3 text-textColor text-center">
        Already have an account? <Link to='/login' className='text-primaryColor'>Login</Link>
      </p>
    </section>
  )
}

export default Signup