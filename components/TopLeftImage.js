'use client'
import Image from 'next/image'
import React from 'react'


const TopLeftImage = () => {
  return (
    <div className='absolute top-0 left-0 mix-blend-color-dodge z-10 w-48 xl:w-96 opacity-50'>
      <Image
        src={"/images/top-left-img.png"}
        alt='TopLeftImage'
        width={400}
        height={400}
        className='w-full h-full object-cover '
        sizes="(min-width: 1280px) 257px, 200px"
        priority={true}
      />
    </div>
  )
}

export default TopLeftImage
