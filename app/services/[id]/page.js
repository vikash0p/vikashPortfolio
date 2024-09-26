import React from 'react'
import ServiceSinglePage from '@/components/serviceComponent/ServiceSinglePage';
import { mysServiceData } from '@/components/serviceComponent/myServiceData';
import ServiceSingleLayout from '@/components/serviceComponent/ServiceSingleLayout';

export const revalidate = 60;
export async function generateStaticParams() {
  return mysServiceData.map((item) => ({
    id: item.value,
  }));
}

const ServiceId = ({params}) => {
    const {id}=params;
  return (
    <>
      {/* <ServiceSinglePage id={id} /> */}
      <ServiceSingleLayout id={id} />

    </>
  )
}

export default ServiceId
