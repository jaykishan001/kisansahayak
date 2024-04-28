import React from 'react'
import WeatherComp from '../Weathercomp'

function About() {
  return (
    <div className='h-[91vh] bg-[#FEF7E1] w-full text-center'>
     <p className='text-xl w-[70%] text-center mx-[15%] pt-24 leading-10'>
      Kisan Sahayak desires a comprehensive smart inventory system to optimize farming activities. 
      The system must include an intelligent inventory management solution for seeds and tools required for farming. 
      Additionally, it should keep track of the resources needed for crafting tools and other farm-related items.
      </p> 
    <WeatherComp />
    </div>
  )
}

export default About