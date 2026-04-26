import React, { useState } from 'react'
import {FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const [firstName,setFirstName]=useState("");
  const[lastName,setLastName]=useState("");
  const[email,setEmail]=useState("");
   const[subject,setSubject]=useState("");
     const[message,setMessage]=useState("");
     
     const handleSubmit=async(e)=>{
      e.preventDefault();

  
     const formData={
      firstName,lastName,email,subject,message
     }
     try{
      const response =await fetch("http://localhost:5000/api/send",{
        method:"POST",headers:{"Content-Type":"application/json"},
        
            body:JSON.stringify(formData)
        

      });
      const data =await response.json()
      if(response.ok){
        alert("Message sent successfully")
        setFirstName("");
        setLastName("");
        setEmail("");
        setSubject("");
        setMessage("")
        
      }
      else{
        alert(data.message);
      }

     }catch(error){
      console.log("Error:",error)
      alert("server error")
     }}
    

  const navigate=useNavigate()
  return (
    
    <div className="bg-white">
      <div className="grid md:grid-cols-3 gap-10 px-6  py-12 bg-gray-50">
        
        <div>
          <h3 className="font-semibold mb-4">Welland Pool</h3>

          <p className="text-sm text-gray-600 mb-2">Tel: 123-456-7890</p>
          <p className="text-sm text-gray-600 mb-4">Email: info@mysite.com</p>

          <p className="text-sm text-gray-600">
            500 Terry Francois Street <br />
            San Francisco, CA 94158
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-4">
            Contact Us for More Information About Classes & Private Events
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4"> 
            <div className="grid grid-cols-2 gap-4">
              <input onChange={(e)=>setFirstName(e.target.value)}  type="text" placeholder="First Name"
                className="border-b outline-none py-1 text-sm"
              />
              <input onChange={(e)=>setLastName(e.target.value)} type="text" placeholder="Last Name"
                className="border-b outline-none py-1 text-sm"
              />
            </div>

            <div onChange={(e)=>setEmail(e.target.value)} className="grid grid-cols-2 gap-4">
              <input type="email"
                placeholder="Email"className="border-b outline-none py-1 text-sm"
              />
              <input onChange={(e)=>setSubject(e.target.value)} type="text" placeholder="Subject"
                className="border-b outline-none py-1 text-sm"
              />
            </div>

            <textarea  onChange={(e)=>setMessage(e.target.value)}  placeholder="Leave us a message..."
            className="w-full border-b outline-none py-1 text-sm"
              rows="3"
            ></textarea>

            <button type="submit" className="w-full cursor-pointer bg-blue-900 text-white py-2 rounded-md hover:bg-blue-800">
              Submit
            </button>
          </form>
        </div>


        <div>
          <ul className="space-y-3 text-gray-700 mb-6">
            <li onClick={()=>navigate("/moreactivities")} className="hover:text-blue-900 cursor-pointer">Activities</li>
            <li onClick={()=>navigate("/pools")} className="hover:text-blue-900 cursor-pointer">Our Pools</li>
            <li onClick={()=>navigate("/pricing")} className="hover:text-blue-900 cursor-pointer">Pricing</li>
            <li onClick={()=>navigate("/location")} className="hover:text-blue-900 cursor-pointer">Visit Us</li>
            <li onClick={()=>navigate("/faq")} className="hover:text-blue-900 cursor-pointer">FAQ</li>
          </ul>
          <div className="flex gap-4 ml-20 text-gray-600">
            <FaFacebook className="cursor-pointer text-blue-500"  size={20}/>
            <FaTwitter className="cursor-pointer text-blue-500" size={20}/>
            <FaInstagram className="cursor-pointer text-pink-500"size={20} />
          </div>
        </div>
      </div>
      <div className="text-center text-sm text-gray-500 py-4 border-t">
        © 2023 by Welland Pool. Proudly created with Wix.com
      </div>
    </div>
  )
}

export default Footer
