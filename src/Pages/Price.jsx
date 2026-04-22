import React from 'react'
import { BiCalendar, BiWater } from 'react-icons/bi'
import { CgCalendar } from 'react-icons/cg'
import { FaWater } from 'react-icons/fa'
import { FaWaterLadder } from 'react-icons/fa6'
import { FiWatch } from 'react-icons/fi'
import { GiWaterMill } from 'react-icons/gi'
import { SiPond5, SiWebpack } from 'react-icons/si'
import Button from '../Components/Button'
const prices=[{
    icon:<FaWaterLadder size={50}/>,
    name:" Single Pass",
    price:"$20",
    duration:"per swim"
},
{
    icon: <CgCalendar size={50}/>,
    name: "Weekly Pass",
    price:"$70",
    duration:"per week"
},
{
    icon: <BiCalendar size={50}/>,
    name: "Monthly Pass",
    price:"$200",
    duration:"per month"
}
]
const Price = () => {
  return (
    <div className='bg-slate-50 justify-center items-center p-4'>
      <h3 className='text-3xl font-semibold text-blue-800'>Pricing</h3>
      <div className='grid md:grid-cols-3 gap-8 max-w-[1000px] mx-auto h-[400px]   p-4 '>
        {prices.map((price,index)=>(

             <div className='bg-gray-100 rounded-xl shadow-sm' key={index}>
                <p className='text-blue-500 py-8 flex  justify-center items-center'>{price.icon}</p>
                <p className='py-2 text-blue-500 text-2xl'>{price.name}</p>
                <p className='py-3 font-semibold text-4xl'>{price.price}</p>
                <p className='py-2 text-lg font-semibold'>{price.duration}</p>
                <Button>Buy Now</Button>
             </div>
             ))}
      </div>
    </div>
  )
}

export default Price
