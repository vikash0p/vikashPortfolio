import React from 'react'
import Contactpage from '../../components/Contactpage'
import TopTitle from '@/components/ReusableComponent/TopTitle'
import ContactAddress from '@/components/contactComponent/ContactAddress'

export const metadata = {
  title: "Contact Vikash | Get in Touch with a Full-Stack Developer",
  description:
    "Get in touch with Vikash for web development inquiries, project collaborations, or any technical support. Specializing in React, Node.js, and modern web technologies.",
  openGraph: {
    title: {
      default: "Contact Vikash | Full-Stack Developer & Software Engineer",
      template: "%s | Contact Vikash",
    },
    description:
      "Contact Vikash to discuss web development projects, technical collaborations, or consulting opportunities. Specializing in building scalable web applications with modern technologies.",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_APP_URL}/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: "Vikash Contact Page openGraph",
      },
    ],
    url: `${process.env.NEXT_PUBLIC_APP_URL}/contact`,
    siteName: "Vikash Contact",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Vikash | Full-Stack Developer & Software Engineer",
    description:
      "Reach out to Vikash for web development services or collaboration opportunities. Specializing in React, Node.js, and modern JavaScript frameworks.",
    images: [`${process.env.NEXT_PUBLIC_APP_URL}/opengraph-image.png`],
    creator: "@VikashPortfolio",
  },
  applicationName: "Vikash Contact",
  keywords: [
    "Contact Vikash",
    "Full-Stack Developer Contact",
    "Web Development Services",
    "React Developer Contact",
    "NodeJS Developer",
    "Web Developer Consultation",
    "Software Engineer Contact",
    "Hire Full-Stack Developer",
    "Frontend Developer Contact",
    "Backend Developer",
    "Project Collaboration",
    "Vikash Portfolio Contact",
    "Get in Touch",
    "Web Development Support",
    "Technical Inquiries",
  ],
};



const Contact = () => {
  return (
  <div>
    <TopTitle title='Contact' />
      <div className='grid w-full grid-cols-1 mt-12 lg:grid-cols-2 '>
        <ContactAddress />
        <Contactpage />

      </div>
      <div className='mt-12'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.3289000422546!2d77.31708487923932!3d28.469640028963816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce71251ecdf8b%3A0x30f6efd026049f62!2sAggarwal%20Store!5e0!3m2!1sen!2sin!4v1727174880772!5m2!1sen!2sin" width="100%"  className='p-2 border-2 border-white rounded-md back h-96'  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
  </div>

  )
}

export default Contact
