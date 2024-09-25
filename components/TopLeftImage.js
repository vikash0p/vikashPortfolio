'use client'
import Image from 'next/image'
import React from 'react'


const TopLeftImage = () => {
  return (
    <div className='absolute top-0 left-0 mix-blend-color-dodge z-10 w-48 xl:w-96 opacity-50 hidden lg:block'>
      <Image
        src={"/images/top-left-img.png"}
        alt='TopLeftImage'
        width={400}
        height={400}
        className='w-full h-full object-cover '
        sizes="(min-width: 1280px) 384px, 192px"
        priority={true}
        quality={75}
        
      />
    </div>
  )
}

export default TopLeftImage
