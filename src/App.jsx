
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'


import MainLayout from './Layout/MainLayout'
import Contact from './Components/Contact'
import Activity from './Pages/Activity'
import Booking from './Pages/Booking'
import FAQ from './Pages/FAQ'
import Login from './Pages/Login'
import Footer from './Components/Footer'

import Price from './Pages/Price'

import Location from './Location'
import OurPool from './Pages/Pools'
import Pools from './Pages/Pools'
import MoreActivities from './Pages/MoreActivities'









function App() {

  return (
    
    <div className='h-screen w-screen'>
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="footer" element={<Footer/>}/>
         <Route path="/booking" element={<Booking/>}/>
         <Route path ="/faq" element={<FAQ/>}/>
         <Route path="login" element={<Login/>}/>
        <Route path="pools" element={<Pools/>}/>
         <Route path="/activity" element={<Activity/>}/>
         <Route path="/pricing" element={<Price/>}/>
         <Route path='/location' element={<Location/>}/>
         <Route path="moreactivities" element={<MoreActivities/>}/>
      
       </Routes>
   
   
      </BrowserRouter>
       </div>
  )
}

export default App
