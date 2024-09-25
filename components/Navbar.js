import Image from 'next/image'
import React from 'react'
import SocialMedia from './ReusableComponent/SocialMedia'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center text-2xl lg:text-3xl gap-2 pt-2 md:pt-5 text-red-600 px-2 lg:px-5  '>
      <div className='relative overflow-hidden w-32 md:w-40 lg:w-64 h-16'>
        <Image
          src="/logo.png"
          alt="Elegant Jewelry logo"
          fill
          className='object-contain object-center w-full h-full'
          sizes="(min-width: 1040px) 256px, (min-width: 780px) 160px, (min-width: 380px) 128px, calc(93.33vw - 208px)"
          priority={true}
          quality={75}
        />
      </div>
      <SocialMedia />
    </div>
  )
}

export default Navbar
