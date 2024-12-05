
import React from 'react'
import ServiceLayout from '@/components/serviceComponent/ServiceLayout'

export const metadata = {
    title: "Vikash Services | Full-Stack Development & Consulting",
    description:
        "Explore the wide range of development services offered by Vikash. From full-stack web development to consulting, Vikash specializes in React, Node.js, and building modern, scalable applications.",
    openGraph: {
        title: {
            default: "Vikash Services | Full-Stack Developer & Consultant",
            template: "%s | Services",
        },
        description:
            "Vikash offers a variety of web development and consulting services, including frontend and backend development, full-stack solutions, and technical consultations for React, Node.js, and modern web technologies.",
        images: [
            {
                url: `${process.env.NEXT_PUBLIC_APP_URL}/opengraph-image.png`,
                width: 1200,
                height: 630,
                alt: "Vikash Services openGraph",
            },
        ],
        url: `${process.env.NEXT_PUBLIC_APP_URL}/services`,
        siteName: "Vikash Services",
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Vikash Services | Full-Stack Development & Consulting",
        description:
            "Discover Vikash's web development and consulting services. Specializing in full-stack development with React, Node.js, and modern JavaScript frameworks.",
        images: [`${process.env.NEXT_PUBLIC_APP_URL}/opengraph-image.png`],
        creator: "@VikashPortfolio",
    },
    applicationName: "Vikash Services",
    keywords: [
        "Full-Stack Development Services",
        "Web Development Consulting",
        "React Developer Services",
        "NodeJS Developer Services",
        "Frontend Development",
        "Backend Development",
        "Technical Consulting",
        "Web App Development",
        "Hire Full-Stack Developer",
        "Custom Web Solutions",
        "Scalable Web Applications",
        "JavaScript Developer",
        "Modern Web Development",
        "Vikash Services",
        "Software Engineer",
    ],
};

const Services = () => {
    return (
        <>
            <ServiceLayout />
        </>
    )
}

export default Services
