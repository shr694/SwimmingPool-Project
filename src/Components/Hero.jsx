import React from 'react'

import water from '../assets/water.png'
import Nav from './Nav'
import BookCard from './BookCard'


const Hero = () => {
  return (
    <div className='w-screen'>
      
    <Nav/>
                <BookCard/>
                <img src={water} 
                alt="pool"
                className='w-screen max-h-screen min-h-[600px] object-cover'/>
               
    </div>
  )
}

export default Hero
