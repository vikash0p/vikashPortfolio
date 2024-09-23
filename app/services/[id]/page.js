import TopTitle from '@/components/ReusableComponent/TopTitle';
import React from 'react'

const ServiceId = ({params}) => {
    const {id}=params;
  return (
    <div>
        <TopTitle title={`Services / ${id}`} />
            {/* <h1>{id} </h1> */}
    </div>
  )
}

export default ServiceId
