import { mysServiceData } from "@/components/serviceComponent/myServiceData";


export const generateServiceMetaData = (id) => {
  // Find the service item by id from the data
  const service = mysServiceData.find((item) => item.value === id);

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
        siteName: "Vikash Services",
      },
      twitter: {
        card: "summary_large_image",
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