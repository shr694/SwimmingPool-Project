import React from 'react'
import { useNavigate } from 'react-router-dom'
import Activity from '../Pages/Activity';
import Button from './Button';

const Nav = () => {
  const navigate=useNavigate();
  return (
    
    <div className=' w-full z-50 absolute  bg-blue-900 text-white'>
     
       <div className='max-w-8xl flex justify-between items-center px-6 py-3'>
        <p className='text-2xl font-semibold'>Wellond Pool</p>
        <Button onClick={()=>navigate("/booking")} className='bg-white text-blue-900  py-2 rounded-md font-medium hover:bg-gray-100'>Book Your Swim </Button>
      </div>
     <div className='max-w-8xl flex justify-between px-6 pb-4'>
         <div className='flex gap-6'>
        <p onClick={()=>navigate("/moreactivities")}  className="cursor-pointer hover:text-gray-300">Activities</p>
        <p onClick={()=>navigate("/pools")} className="cursor-pointer hover:text-gray-300">Our Pools</p>
        <p onClick={()=>navigate("/pricing")} className="cursor-pointer hover:text-gray-300">Pricing</p>
        <p onClick={()=>navigate("/location")} className="cursor-pointer  hover:text-gray-300">Visit Us</p>
      </div>
      <p onClick={()=>navigate("/login")} className="cursor-pointer hover:text-gray-300">Log in</p>
     </div>
     
     
    </div>
  )
}

export default Nav
