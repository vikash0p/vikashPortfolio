import Image from 'next/image'
import React from 'react'


const TopLeftImage = () => {
  return (
    <div className='absolute top-0 left-0 mix-blend-color-dodge z-10 w-[200px] xl:w-[400px] opacity-50'>
     <Image
      src={"/images/top-left-img.png"}
       alt='TopLeftImage'
       width={400}
       height={400}
       className='w-auto h-auto  '
       sizes='400px'
       priority={true}
         /> 
    </div>
  )
}

export default TopLeftImage
