import React from 'react'
import {FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
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

        <div className="md:col-span-1">
          <h3 className="font-semibold mb-4">
            Contact Us for More Information About Classes & Private Events
          </h3>

          <form className="space-y-4"> 
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="First Name"
                className="border-b outline-none py-1 text-sm"
              />
              <input type="text" placeholder="Last Name"
                className="border-b outline-none py-1 text-sm"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <input type="email"
                placeholder="Email"className="border-b outline-none py-1 text-sm"
              />
              <input type="text" placeholder="Subject"
                className="border-b outline-none py-1 text-sm"
              />
            </div>

            <textarea   placeholder="Leave us a message..."
            className="w-full border-b outline-none py-1 text-sm"
              rows="3"
            ></textarea>

            <button className="w-full bg-blue-900 text-white py-2 rounded-md hover:bg-blue-800">
              Submit
            </button>
          </form>
        </div>


        <div>
          <ul className="space-y-3 text-gray-700 mb-6">
            <li className="hover:text-blue-900 cursor-pointer">Activities</li>
            <li className="hover:text-blue-900 cursor-pointer">Our Pools</li>
            <li className="hover:text-blue-900 cursor-pointer">Pricing</li>
            <li className="hover:text-blue-900 cursor-pointer">Visit Us</li>
            <li onClick={()=>navigate("/footer")} className="hover:text-blue-900 cursor-pointer">FAQ</li>
          </ul>
          <div className="flex gap-4 ml-20 text-gray-600">
            <FaFacebook className="cursor-pointer hover:text-blue-500"  />
            <FaTwitter className="cursor-pointer hover:text-blue-500" />
            <FaInstagram className="cursor-pointer hover:text-pink-500" />
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
