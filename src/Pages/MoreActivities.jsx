import React from 'react'

import Card from '../Components/Card'
import activities from '../Data/data';

const MoreActivities = () => {
  return (
    <div className='bg-slate-50 p-4 mx-auto gap-4 grid grid-col-2 lg:grid-cols-3'>
   
     {activities.map((item)=>(
      <Card key={item.id}
      title={item.title}
      description={item.description}
      image={item.image}/>


     )) }
  
    </div>
  )
}

export default MoreActivities;
