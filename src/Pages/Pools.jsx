import React from 'react'
import { BiDroplet } from 'react-icons/bi';
import Button from '../Components/Button';
import { useNavigate } from 'react-router-dom';
const pools = [
    {
      name: "Infinity Pool",
      image: "src/assets/pool1.jpg",
      depth: "4ft - 6ft",
      price: "₹300 / session",
    },
    {
      name: "Kids Pool",
      image: "src/assets/pool2.jpg",
      depth: "2ft - 3ft",
      price: "₹150 / session",
    },
    {
      name: "Olympic Pool",
      image: "src/assets/pool3.jpg",
      depth: "5ft - 8ft",
      price: "₹500 / session",
    },
  ];
const Pools = () => {
  const navigate= useNavigate()
  return (
    <div className="min-h-screen bg-blue-100 py-10 px-4">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">
        Our Pools
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {pools.map((pool, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl h-[550px] shadow-lg overflow-hidden "
          >
            <div
              className="h-[45%] object-cover">
                <img src ={pool.image}/></div>
            <div className="h-full py-6 mt-15">
              <h3 className="text-xl font-semibold mb-2">
                {pool.name}
              </h3>

              <div className="space-y-1  text-sm text-gray-600 mb-3">
                <p className="flex justify-center items-center gap-2">
                  <BiDroplet size={16} /> Depth: {pool.depth}
                </p>
              </div>

              <p className="text-lg font-bold text-blue-600 mb-3">
                {pool.price}
              </p>
                <p className='pt-4'>
                 <Button onClick={()=>navigate("/booking")} className="">Book Now</Button>
                </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Pools;
