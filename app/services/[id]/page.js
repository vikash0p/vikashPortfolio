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
  // console.log("🚀 ~ file: page.js:18 ~ service:", `https://myportfolio-navy-three.vercel.app${service.image}`);
  // console.log("🚀 ~ file: page.js:18 ~ service:", `${service.image}`);

  if (service) {
    return {
      title: `${service.title} | Vikash Services`,
      description: service.description,
      openGraph: {
        title: `${service.title} | Vikash Services`,
        description: service.description,
        url: `https://myportfolio-navy-three.vercel.app/services/${id}`,
        images: [
          {
            url: `https://myportfolio-navy-three.vercel.app${service.image}`,
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
        images: `https://myportfolio-navy-three.vercel.app${service.image}`, // Replace with correct URL
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
