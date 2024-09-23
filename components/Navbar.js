import Image from 'next/image'
import React from 'react'
import SocialMedia from './ReusableComponent/SocialMedia'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center text-2xl lg:text-3xl gap-2 pt-5 text-red-600 px-2 lg:px-5'>
      <div className='relative overflow-hidden md:w-40 lg:w-64 h-16'>
        <Image
          src="/logo.png"
          alt="Elegant Jewelry logo"
          fill
          className='object-contain object-center w-full h-full'
          sizes='(min-width: 1024px) 256px, (min-width: 768px) 180px, 150px'
          priority={true}
        />
      </div>
      <SocialMedia />
    </div>
  )
}

export default Navbar
