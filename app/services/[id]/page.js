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

export async function generateMetadata({ params }) {
  const { id } = params;

  // Find the service item by id from the data
  const service = mysServiceData.find(item => item.value === id);


  if (service) {
    return {
      title: `${service.title} | Vikash Services`,
      description: service.description,
      openGraph: {
        title: `${service.title} | Vikash Services`,
        description: service.description,
        url: `${process.env.NEXT_PUBLIC_APP_URL}/services/${id}`,
        images: [
          {
            url: `${process.env.NEXT_PUBLIC_APP_URL}${service.image}`,
            width: 1200,
            height: 630,
            alt: `${service.title} - Service`,
          },
        ],
        siteName: 'Vikash Services',
      },
      twitter: {
        card: 'summary_large_image',
        title: `${service.title} | Vikash Services`,
        description: service.description,
        images: `${process.env.NEXT_PUBLIC_APP_URL}${service.image}`,
      },
    };
  } else {
    return {
      title: `Service Not Found | Vikash Services`,
      description: `This service could not be found.`,
    };
  }
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
