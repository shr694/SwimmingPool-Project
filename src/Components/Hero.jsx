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
                className='w-screen  object-cover'/>
               
    </div>
  )
}

export default Hero
