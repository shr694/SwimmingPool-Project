import React from 'react'
import Button from './Button'

const BookCard = () => {
  return (
    <div className='absolute h-65 ml-10 max-w-sm mb-4 top-1/8 bg-white pr-4 pl-4'>
      <div className='text-3xl p-6 font-medium text-blue-900'>
        <p>Swimming</p>
        <p className='pl-8 pb-4' >Season Is On</p>
        <p className='border '></p> 
      </div>
      <p className='pb-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod, aspernatur!</p>
     
      <Button>Book Now</Button>

    </div>
  )
}

export default BookCard
