import { AboutLeft, AboutRight, } from '@/components'
import React from 'react'




const About = () => {
  return (
    <div className='w-full min-h-screen gap-2 mt-4 lg:px-32 lg:mt-10 lg:flex lg:gap-7 '>
      <div className='flex flex-col flex-1 gap-3 lg:gap-5 lg:text-lg '>
        <AboutLeft />
      </div>
      <div className='flex justify-center flex-1'>
        <AboutRight />
      </div>
    </div>
  )
}

export default About
