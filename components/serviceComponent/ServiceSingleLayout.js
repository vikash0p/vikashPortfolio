'use client'
import dynamic from 'next/dynamic'
import React from 'react'


const TopTitle=dynamic(()=>import('../ReusableComponent/TopTitle'),{ssr:false});
const ServiceSinglePage = dynamic(() => import('./ServiceSinglePage'), {ssr: false,});


const ServiceSingleLayout = ({ id }) => {
  return (
    <>
      <TopTitle title={`${id}`} />
      <ServiceSinglePage id={id} />
    </>
  )
}

export default ServiceSingleLayout
