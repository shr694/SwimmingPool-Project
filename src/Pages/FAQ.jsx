import React from 'react'
import { BsQuestionOctagon } from 'react-icons/bs'
import { FaSwimmingPool } from 'react-icons/fa'
import { GiWaterfall } from 'react-icons/gi'

const FAQ = () => {
  return (
    <div className='bg-slate-50 '>

      <h3 className='font-bold   text-2xl text-blue-600 flex justify-center items-center gap-2'>FAQ <span><BsQuestionOctagon/></span></h3>
      <div className=' w-full  justify-items-center bg-slate-50 mt-5'>
       <p className='py-4  w-[500px]  bg-white rounded-md  shadow-sm'>What are your operating hours? </p><br/>
       <p className='py-4  w-[500px] bg-white rounded-md  shadow-sm'>Do I need to book in advance?</p><br/>
       <p className='py-4  w-[500px] bg-white rounded-md  shadow-sm'>Are lifeguard on duty</p><br/>
       <p className='py-4  w-[500px] bg-white rounded-md  shadow-sm'>Is there a dress code for swimming?</p><br/>
       <p className='py-4 bg-white  w-[500px] rounded-md  shadow-sm'>Do you offer swimming?</p>
      </div>
    </div>
  )
}

export default FAQ
