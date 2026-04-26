import React from 'react'

import { FaCircleCheck } from 'react-icons/fa6'
import { useLocation, useNavigate } from 'react-router-dom'

const BookingConfirmed = () => {

    const location = useLocation()
    const navigate = useNavigate()
    const data = location.state

      if (!data) {
    return (
      <div className="text-center mt-10">
        <p>No booking data found</p>
        <button onClick={() => navigate("/")}>Go Back</button>
      </div>
    )
  }

  return (
    <div className='bg-slate-50 max-h-full max-w-[1800px] min-w-[500px]' >
        <div className='justify-items-center mt-2'>
            <FaCircleCheck className='text-green' size={50}/>
            <p className='text-3xl text-semibold'>Booking Confirmed!</p>
            <p>Thank you!Your swim session has been successfully booked</p>
        </div>
        <div className='p-4  '>
            <label className='flex'>Booking Summary</label>
           <div className=' mt-5'>
             <table className='w-[80%] bg-white h-fit border'>

                    <tr className='py-2 px-4 border'>
                        <td >Date</td>
                        <td>{data.date}</td> </tr>
                     <tr>
                        <td>Time</td>
                        <td>{data.time}</td>
                    </tr>
                     <tr>
                        <td>Slot</td>
                        <td>{data.slot}</td>
                        </tr>
                     <tr>
                        <td>Number of People</td>
                        <td>{data.people}</td>
                     </tr>
                     <tr>
                        <td>Total Paid</td>
                        <td>${data.total}</td>
                     </tr>
                    
           
            </table>
        </div>
          <button
        onClick={() => navigate("/booking")}
        className='mt-6 px-6 py-2 bg-blue-500 text-white rounded'
      >
        Book Again
      </button>
    </div>
    </div>
  )
}

export default BookingConfirmed;
