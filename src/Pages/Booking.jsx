import React from 'react'
import { BiGlobe } from 'react-icons/bi'
import { BsClock, BsWater } from 'react-icons/bs'

import { SlCalender } from 'react-icons/sl'
import { TiWeatherCloudy } from 'react-icons/ti'

const Booking = () => {
  return (
    
    <div className='pg-slate-50 p-10 h-full max-w-7xl md:w-3xl mx-auto'>
      <div className='bg-slate-200  max-w-full   mx-auto p-4 '>                                                                              
        
            <h3 className='text-2xl text-center text-blue-800'>Book Your Swim</h3>
          <div className='w-full p-2'>
            <label className='flex font-lg pl-4 gap-2 p-2'><SlCalender size={20} className='mt-1'/> Select Date</label>
            <input type="date"  className='w-full p-4 border bg-slate-50 shadow-sm rounded-md py-2'/>
          </div>
          <div>
            <label className='flex font-lg p-2 pl-6 gap-2'><BsClock size={20} className='mt-1'/>Select Time</label>
            <div className="p-2 grid grid-cols-3 gap-2  ">
            <button className='bg-slate-50 px-2 py-2 shadow-sm rounded-md font-semibold text-sm'>8:00 AM</button>
            <button className='bg-slate-50 px-2 py-2 shadow-sm rounded-md font-semibold text-sm'>10:00 AM</button>
            <button className='bg-slate-50 px-2 py-2 shadow-sm rounded-md font-semibold text-sm'>12:00 PM</button>
            <button className='bg-slate-50 px-2 py-2 shadow-sm rounded-md font-semibold text-sm'>2:00 PM</button> 
            <buttton className='bg-slate-50 px-2 py-2 font-semibold shadow-sm rounded-md text-sm'>4:00 PM</buttton>
            </div>
          </div>
          
          <div >
            <label className='flex font-lg pl-4 gap-2 p-2'> <BiGlobe size={22} className='mt-0.5'/>  Select Slot</label>
            <div className='grid grid-cols-3 p-2 gap-2'>
              <button className='bg-slate-50 px-2 py-3 shadow-sm rounded-md font-semibold text-sm'>Morning</button>
              <button className='bg-slate-50 px-2 py-3 shadow-sm rounded-md font-semibold text-sm'>Afternoon</button>
              <button className='bg-slate-50 px-2 py-3 shadow-sm rounded-md font-semibold text-sm'>Evening</button>
            </div>
          </div>
          <div>
            <label className='flex p-4 gap-2'><BsWater size={22} className='mt-0.5'/>   Water Level</label>
            <div className='grid grid-cols-3 gap-2 p-3'>
              <button className='bg-slate-50 px-2 py-2 shadow-sm rounded-md font-semibold text-sm'>Low</button>
            <button className='bg-slate-50 px-2 py-2 shadow-sm rounded-md font-semibold text-sm'>Medium</button>
            <button className='bg-slate-50 px-2 py-2 shadow-sm rounded-md font-semibold text-sm'>Deep</button>
            </div>
          </div>


        <button className='w-80 py-3 mt-4 rounded-lg text-white bg-blue-500 '>Confirm Booking</button>
      
      
    </div> 
    </div>
  )
}

export default Booking
