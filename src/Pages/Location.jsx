import React from 'react'
import { GoLocation } from 'react-icons/go'

const Location = () => {
  return (
    <div className='max-w-6xl h-full p-10 mt-6  mx-auto '>
      <div className='bg-slate-100 shadow shadow-sm shadow-gray-400 rounded-lg h-[700px] p-6'>
        <h3 className='justify-center flex items-center text-3xl font-semibold text-blue-800'><GoLocation/> Visit Us</h3>
        
        <div className=' h-[500px] bg-slate-200 shadow-sm rounded-md p-10 mt-20 '>
          <p className='text-lg font-semibold  items-center p-6 text-blue-900'>Come Swim With Us,Welland Pool</p>
       <div className='flex justify-between'>
           <div className='mt-20'>
            <p className='text-lg font-semibold text-blue-900'>Wellond Pool,<p>
              </p>Your City,1</p>
          <p className=' p-4 text-lg text-blue-600'>Call Us +977 9834254665</p>
          <p className='text-blue-900 '>Open Daily:8:00 AM -6:00PM</p>
           </div>
     <div>
          <iframe
          className="max-w-8xl  md:min-w-md object-cover mt-10 h-[300px]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7607.355040129139!2d87.99447641546107!3d26.642396861771218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e5bb004675c125%3A0x192aab328af3eaed!2sMuktiChowk!5e0!3m2!1sen!2snp!4v1776824871745!5m2!1sen!2snp"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Mukti Chowk Map"
        ></iframe>
     </div>
           </div>
        </div>
        </div>
    </div>
  )
}

export default Location
