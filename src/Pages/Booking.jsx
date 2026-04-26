import React, { useState } from 'react'
import { BiDollarCircle, BiGlobe } from 'react-icons/bi'
import { BsClock, BsPeopleFill, BsWater } from 'react-icons/bs'
import { FaDollarSign } from 'react-icons/fa'
import { LuDollarSign } from 'react-icons/lu'

import { SlCalender } from 'react-icons/sl'
import { TiWeatherCloudy } from 'react-icons/ti'
import { useNavigate } from 'react-router-dom'


const Booking = () => {
  const navigate=useNavigate()

  const price=200;
  const[people,setPeople]=useState(1);
  const[totalPrice,setTotalPrice]= useState(price)
   const[selectedDate,setSelectedDate]= useState("");
 const[selectTime,setSelectedTime]= useState("");
const[selectSlot,setSelectedSlot]=useState("");
const [selectedWater,setSelectWater] =useState("Low");
  const [errors, setErrors] = useState({})


  const times=["8:00AM","10:00AM","12:00PM","2:00PM","4:00PM"];
  const slots=["Morning","AfterNoon","Evening"];
 const water=["Low","Medium","Deep"];
 const waterPrice={
  Low:0,
  Medium:50,
  Deep:100
 }

  
 const calculatePrice=(count,waterlevel)=>{
  if(!waterlevel)return price*count
  else
    return count*(price+waterPrice[waterlevel])
 }

 const increase=()=>{
  const newCount = people+1;
  setPeople(newCount);
  setTotalPrice(calculatePrice(newCount, selectedWater))
 };

 const decrease=()=>{
   if(people>1){
    const newCount=people-1;
    setPeople(newCount);
 setTotalPrice(calculatePrice(newCount, selectedWater))
   }
 };

    const validateForm=()=>{
      let error={}
      if(!selectedDate) error.selectedDate="Date is required"
      if(!selectTime)error.selectTime="Time is requires"
      if(!selectSlot) error.selectSlot= "Slot is required"
        if(!selectedWater) error.selectedWater="Water level is required"
        if (people < 1) error.people = "At least 1 person required"
       
         setErrors(error);
  return Object.keys(error).length === 0   
    }


    const handleConfirm =()=>{
      if(validateForm()){
        navigate("/bookingconfirmed",{
          state:{
            date:selectedDate,
            time:selectTime,
            slot:selectSlot,
            people:people,
            water:selectedWater,
            total:totalPrice
          }
        })
      }  
    }

  return (
   
    <div className='bg-slate-50 p-10 h-full max-w-7xl md:w-3xl mx-auto'>
    
      <div className='bg-slate-200  max-w-full   mx-auto p-4 '>                                                                              
           <p onClick={()=>navigate("/")} className='font-bold  text-end   py-2 px-4 cursor-pointer'>X</p>
            <h3 className='text-2xl text-center text-blue-800'>Book Your Swim</h3>
          <div className='w-full p-2'>
            <p className='flex font-lg pl-4 gap-2 p-2'><SlCalender size={20} className='mt-1'/> Select Date</p>
            <input type="date" value={selectedDate} onChange={(e)=>setSelectedDate(e.target.value)} value={selectedDate}
              
             className='w-full p-4 border bg-slate-50 shadow-sm rounded-md py-2'/>
                     <p className='text-red-500'>{errors ? errors.selectedDate : ""}</p>
          </div>
          <div>
            <p className='flex font-lg p-2 pl-4 gap-2'><BsClock size={20} className='mt-1'/>Select Time</p>
            <div className="p-2 grid grid-cols-3 gap-2  ">
            {times.map((item)=>(
              <button key={item}
              onClick={()=>setSelectedTime(item)} 
                className={`cursor-pointer  px-2 py-4 shadow-sm rounded-md font-semibold text-sm
                 ${selectTime === item ? "bg-blue-500 text-white" : "bg-white"}`}
             >{item}
                    
             </button>
             
            ))}
              <p className='text-red-500'>{errors ? errors.selectTime : ""}</p>

            </div>
          </div>
          
          <div >
            <p className='flex font-lg pl-4 gap-2 p-2'> <BiGlobe size={22} className='mt-0.5'/>  Select Slot</p>
            <div className='grid grid-cols-3 p-2 gap-2'>
       {slots.map((slot)=>(
        <button key={slot} onClick={()=>setSelectedSlot(slot)}
        className={`px-2 py-3 shadow-sm cursor-pointer rounded-md font-semibold text-sm
          ${selectSlot === slot ? "bg-blue-500 text-white":"bg-white"}`}
        >{slot}
               
          </button>
       ))} <p className='text-red-500'>{errors ? errors.selectSlot : ""}</p>
            </div>
          </div>
          <div>
            <p className='flex p-4 gap-2'><BsWater size={22} className='mt-0.5'/>   Water Level</p>
            <div className='grid grid-cols-3 gap-2 p-3'>
              {water.map((level)=>(
               <button key={level} onClick={()=>{
                setSelectWater(level)
               setTotalPrice(calculatePrice(people, level))
               }
               }
                className={`px-2 py-3 shadow-sm cursor-pointer rounded-md font-semibold text-sm
                ${selectedWater === level ? "bg-blue-500 text-white":"bg-white"}`}
        >{level}
                
               </button> 
              ))}
            </div>
            <div>
              <label className='flex p-4 gap-2'> <BsPeopleFill size={20}/>Number of People</label>
              <div >
                <button className='p-2 text-4xl px-3 bg-blue-500 text-white  shadow-sm cursor-pointer rounded-md font-semibold ' onClick={decrease}>-</button>
                <span className='px-5 text-4xl '>{people}</span>
                <button className='px-2 text-4xl p-2 text-white bg-blue-500  shadow-sm cursor-pointer rounded-md font-semibold ' onClick={increase}>+</button>
                       
              </div>
              
            </div>
            <div>
              <p className='flex p-4 gap-2'> <LuDollarSign size={20}/> Price</p>
              <p>$ {totalPrice}/session</p>
            </div>
          </div>


        <button onClick={handleConfirm} className='w-80 cursor-pointer py-3 mt-4 rounded-lg text-white bg-blue-500 '>Confirm Booking</button>
      
      
    </div> 
    </div>
  )
}

export default Booking
