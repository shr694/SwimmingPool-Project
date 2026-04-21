import React from 'react'
import Nav from '../Components/Nav'
import Hero from '../Components/Hero'
import Discovermore from '../Pages/Discovermore'
import Activity from '../Pages/Activity'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'

const MainLayout = () => {
  return (
    <div>
      
     
           <Nav/>
           <Hero/>
          <Discovermore/>
        <Activity/>
        <Contact/>
        <Footer/>
           
      
    </div>
  )
}

export default MainLayout
