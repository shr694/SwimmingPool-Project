import React from 'react'

const Card = ({image,title,description}) => {
  return (
    <div className='bg-gray-50 rounded-2xl max-w-[500px] md:w-[500px] shadow-sm overflow-hidden'>
       
        <img src={image} className='w-full h-56 object-cover'/>
        
         <div className='p-4 text-center'>
          <p className='font-medium text-xl'>{title}</p>
          <p className='text-blue-900'>{description}</p>
         </div>
        </div>
      
  
  )
}

export default Card
