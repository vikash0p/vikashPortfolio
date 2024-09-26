'use client'
import dynamic from 'next/dynamic'
import React from 'react'
// import TopTitle from '../ReusableComponent/TopTitle'
// import ServiceSinglePage from './ServiceSinglePage'

const TopTitle=dynamic(()=>import('../ReusableComponent/TopTitle'),{ssr:false});
const ServiceSinglePage = dynamic(() => import('./ServiceSinglePage'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});


const ServiceSingleLayout = ({ id }) => {
  return (
    <>
      <TopTitle title={`Services / ${id}`} />
      <ServiceSinglePage id={id} />
    </>
  )
}

export default ServiceSingleLayout
