'use client'

import dynamic from 'next/dynamic';
import React from 'react'
import TopTitle from '@/components/ReusableComponent/TopTitle'


const Projects = dynamic(() => import('@/components/projectComponents/Projects'), {
  // ssr: false,
});

const ProjectLayout = () => {
  return (
    <>
      <TopTitle title="Project" />
      <Projects />
    </>
  )
}

export default ProjectLayout