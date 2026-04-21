import React from 'react'
import { BiWater } from 'react-icons/bi'
const prices=[{
    icon:<BiWater size={40}/>,
    name:" Single Pass",
    price:"$20",
    duration:"per swim"
},
{
    icon: <BiWater size={40}/>,
    name: "Single Pass",
    price:"$20",
    duration:"per swim"
},
]
const Price = () => {
  return (
    <div className='bg-slate-50 justify-center items-center'>
      <h3 className='text-3xl font-semibold text-blue-500'>Pricing</h3>
      <div className='grid md:grid-cols-3'>
        {prices.map((price,index)=>(

             <div className='bg-gray-100' key={index}>
                <p className=' flex justify-center items-center'>{price.icon}</p>
                <p className='p'>{price.name}</p>
                <p className='py-5 font-bold'>{price.price}</p>
                <p className='py-1'>{price.duration}</p>
             </div>
             ))}
      </div>
    </div>
  )
}

export default Price
