import { useContext, useState } from 'react'
import userImg from '../../assets/images/UserImg.jpg';
import { authContext } from './../../context/AuthContext';
import MyBookings from './MyBookings';
import ProfileSettings from './ProfileSettings';

const MyAccount = () => {

  const {dispatch} = useContext(authContext);
  const [tab, setTab] = useState('bookings'); //tabs
  const handleLogout = () => {
    dispatch({type: 'LOGOUT'});
  };

  return (
    <div className='max-w-[1170px] px-5 mx-auto'>
      <div className="grid md:grid-cols-3 gap-10 pt-[50px]">

        <div className="pb-[50px] px-[30px] rounded-md">

          {/* profile image */}
          <div className="flex items-center justify-center">
            <figure className='w-[200px] h-[200px] rounded-full border-2 border-solid border-primaryColor'>
              <img 
                src={userImg} 
                alt=""
                className='w-full h-full rounded-full' />
            </figure>
          </div>

          {/* User Details */}
          <div className="text-center mt-4">
            <h3 className='text-[18px] leading-7 text-headingColor font-bold'>
              adasdasd asdas
            </h3>

            <h1 className=' text-[15px] text-textColor leading-6 font-medium'>
              awerawads@gmail.com
            </h1>

            <p className=' text-textColor leading-6 font-medium'>
              Blood Type: 
              <span className='ml-2 text-headingColor text-[22px] leading-7'>
                O+
              </span>
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-[50px] md:mt-[100px]">
            <button
              onClick={handleLogout} 
              className='w-full bg-primaryColor p-3 text-[16px] leading-6 rounded-md text-white'>
                Logout
            </button>
            <button className='w-full bg-red-600 p-3 text-[16px] leading-6 rounded-md mt-3 text-white'>
              Delete Account
            </button>
          </div>
        </div>

        {/* User All Details */}
        <div className="md:col-span-2 md:px-[30px]">
          <div>
              <button
                onClick={() => setTab("bookings")} 
                className={`${tab==='bookings' && 'bg-primaryColor text-white'} p-2 mr-5 rounded-lg text-headingColor font-bold text-[17px] leading-7 border-2 border-solid border-primaryColor`}>
                  My Bookings
              </button>

              <button 
                onClick={() => setTab("settings")} 
                className={`${tab==='settings' && 'bg-primaryColor text-white'} py-2 px-5 rounded-lg text-headingColor font-bold text-[17px] leading-7 border-2 border-solid border-primaryColor`}>
                  Profile Settings
              </button>
            </div>

            {tab === "bookings" && <MyBookings />}
            {tab === "settings" && <ProfileSettings />}

          </div>
      </div>
    </div>
  )
}

export default MyAccount