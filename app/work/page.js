import Projects from '@/components/Projects'
import TopTitle from '@/components/ReusableComponent/TopTitle'
import { project } from '@/data'
import Image from 'next/image'
import React from 'react'



const Work = () => {
  return (
    <>
    <TopTitle title="Project" />
    <Projects />
    </>

  )
}

export default Work
