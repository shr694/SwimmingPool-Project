import React from 'react'
import one from "../assets/water3.png"
import { useNavigate } from 'react-router-dom'
const Contact = () => {
  const navigate= useNavigate()
  return (
    <div className='bg-slate-50 max-w-8xl mx-auto grid md:grid-cols-2 gap-10 justify-items-center'>
      <div className='py-10 w-[50%] px-8'>Events
      <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-4">
            Plan Your Private <br /> Event at the Pool
          </h2>
            <div className="w-12  h-[2px]  bg-gray-400 mb-4"></div>
              <p className="text-gray-500 text-sm mb-6 max-w-md">
            Plan unforgettable private pool events with friends and family.
            Customize your experience and enjoy a refreshing atmosphere.
          </p>

         <button onClick={()=>navigate("/footer")} className="bg-blue-900 mt-10  text-white px-6 py-2 rounded-md hover:bg-blue-800 ">
            Contact Us
          </button>
             </div>
             <div className=''>
              <img src={one}/>
             </div>
    </div>
  )
}

export default Contact
