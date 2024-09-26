'use client'
import dynamic from 'next/dynamic'
import React from 'react'
import TopTitle from '../ReusableComponent/TopTitle'

const ServiceSinglePage = dynamic(() => import('./ServiceSinglePage'), { ssr: false });

const ServiceSingleLayout = ({id}) => {
  return (
    <>
          <TopTitle title={`Services / ${id}`} />
          <ServiceSinglePage id={id} />
    </>
  )
}

export default ServiceSingleLayout
