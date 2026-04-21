import React from 'react'
import Card from '../Components/Card';
import activities from '../Data/data';
import Button from '../Components/Button';

const Activity = () => {
  return (
     <div className='py-12 px-15 bg-slate-50'>
      <p className='text-sm text-blue-900'>Aquatic Activities</p>
      <p className='text-3xl font-bold mt-2 text-blue-900'>Book Your Slot Today</p>
      <div className='mt-10 mx-auto grid gap-8 sm:grid-cols-1 lg:grid-cols-2 justify-items-center'>
       {activities.slice(0,2).map((item)=>(
         <Card key={item.id}
         title={item.title}
         description={item.description}
         image={item.image}/>
       ))}
      </div>
    <div className=' py-20 flex justify-center items-center'>
       <Button>Book Now</Button>
    </div>
    </div>
  )
}

export default Activity;

