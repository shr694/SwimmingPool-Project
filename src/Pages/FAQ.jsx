import React from 'react'
import { BsQuestionOctagon } from 'react-icons/bs'
import { FaSwimmingPool } from 'react-icons/fa'
import { GiWaterfall } from 'react-icons/gi'
import { SlArrowRight } from 'react-icons/sl'

const FAQ = () => {
  return (
    <div className='bg-slate-50 '>

      <h3 className='font-bold   text-2xl text-blue-600 flex justify-center items-center gap-2'>FAQ <span><BsQuestionOctagon/></span></h3>
      <div className=' w-full justify-items-center bg-slate-100 mt-5'>
       <p className='py-4  w-[500px]  bg-white rounded-md  shadow-sm flex  justify-center'>What are your operating hours? <SlArrowRight size={10} className='mt-2'/> </p><br/>
       <p className='py-4  w-[500px] bg-white flex rounded-md fles justify-center shadow-sm'>Do I need to book in advance?<SlArrowRight size={10} className='mt-2' />   </p><br/>
       <p className='py-4  w-[500px] bg-white flex rounded-md  shadow-sm justify-center'>Are lifeguard on duty <SlArrowRight size={10} className='mt-2'/></p><br/>
       <p className='py-4  w-[500px] bg-white rounded-md flex shadow-sm justify-center'>Is there a dress code for swimming? <SlArrowRight size={10} className='mt-2'/></p> <br/>
       <p className='py-4 bg-white  w-[500px] rounded-md flex shadow-sm justify-center'>Do you offer swimming? <SlArrowRight size={10} className='mt-2'/></p>
      </div>
    </div>
  )
}

export default FAQ
