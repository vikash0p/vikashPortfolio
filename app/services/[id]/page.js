import TopTitle from '@/components/ReusableComponent/TopTitle';
import ServiceSinglePage from '@/components/serviceComponent/ServiceSinglePage';
import React from 'react'

const ServiceId = ({params}) => {
    const {id}=params;
  return (
    <div>
        <TopTitle title={`Services / ${id}`} />
        <ServiceSinglePage id={id} />
    </div>
  )
}

export default ServiceId
