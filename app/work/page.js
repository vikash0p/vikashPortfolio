import Projects from '@/components/Projects'
import { project } from '@/data'
import Image from 'next/image'
import React from 'react'


export const metadata = {
  title: 'About',
  description: ' I had the privilege of creating an immersive e- commerce website that seamlessly blends aesthetics with functionality.Leveraging HTML, CSS, and JavaScript, I meticulously designed product pages, integrated smooth navigation, and ensured responsive performance across devices.The result ? An engaging online shopping experience that maximizes user satisfaction and conversions.'
}
const Work = () => {
  return (
    <>
    <Projects />
    </>
   
  )
}

export default Work
