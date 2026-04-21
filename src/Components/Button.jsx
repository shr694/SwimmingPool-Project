import React from 'react'
import { useNavigate } from 'react-router-dom'

const Button = ({children,onClick}) => {
  const navigate = useNavigate()
  return (
    
    <button className=' py-3 w-30  ml-4 cursor-pointer hover:bg-blue-700  shadow-sm w-25 rounded-sm text-white bg-blue-900 ' onClick={()=>navigate("/booking")}> {children}{onClick}</button> 
   
  )
}

export default Button
