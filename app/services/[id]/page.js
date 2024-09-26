import React from 'react'

import dynamic from 'next/dynamic';

const ServiceSinglePage = dynamic(() => import('@/components/serviceComponent/ServiceSinglePage'));
const ServiceId = ({params}) => {
    const {id}=params;
  return (
    <>
      <ServiceSinglePage id={id} />

    </>
  )
}

export default ServiceId
