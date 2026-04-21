
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'


import MainLayout from './Layout/MainLayout'
import Contact from './Components/Contact'
import Activity from './Pages/Activity'
import Booking from './Pages/Booking'
import FAQ from './Pages/FAQ'
import Login from './Pages/Login'
import Footer from './Components/Footer'
import Ourpool from './Pages/Ourpool'
import Price from './Pages/Price'






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
         <Route path="/ourpool" element={<Ourpool/>}/>
         <Route path="/activity" element={<Activity/>}/>
         <Route path="/pricing" element={<Price/>}/>
       </Routes>
   
   
      </BrowserRouter>
       </div>
  )
}

export default App
