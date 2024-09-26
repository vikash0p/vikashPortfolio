'use client'

import dynamic from 'next/dynamic';
import React from 'react'
import TopTitle from '@/components/ReusableComponent/TopTitle'


const Projects = dynamic(() => import('@/components/Projects'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
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