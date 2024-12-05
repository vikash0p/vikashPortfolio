import React from 'react'
import ServiceSinglePage from '@/components/serviceComponent/ServiceSinglePage';
import { mysServiceData } from '@/components/serviceComponent/myServiceData';
import ServiceSingleLayout from '@/components/serviceComponent/ServiceSingleLayout';
import { generateServiceMetaData } from "@/meta/service/generateServiceMetaData";
export const revalidate = 60;
// export async function generateStaticParams() {
//   return mysServiceData.map((item) => ({
//     id: item.value,
//   }));
// }

export async function generateMetadata({ params }) {
  const { id } = params;
  return generateServiceMetaData(id)
}

const ServiceId = ({params}) => {
    const {id}=params;
  return (
      <ServiceSingleLayout id={id} />

  )
}

export default ServiceId
