import React from 'react'
import TopTitle from '@/components/ReusableComponent/TopTitle'
import ContactAddress from '@/components/contactComponent/ContactAddress'
import { ContactMetaData } from "@/meta/ContactMetaData"
import ContactForm from "../../components/ContactForm"

export const metadata = ContactMetaData;


const Contact = () => {
  return (
  <div>
    <TopTitle title='Contact' />
      <div className='grid w-full grid-cols-1 mt-12 lg:grid-cols-2 '>
        <ContactAddress />
        <ContactForm />

      </div>
      <div className='mt-12'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.3289000422546!2d77.31708487923932!3d28.469640028963816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce71251ecdf8b%3A0x30f6efd026049f62!2sAggarwal%20Store!5e0!3m2!1sen!2sin!4v1727174880772!5m2!1sen!2sin" width="100%"  className='p-2 border-2 border-white rounded-md back h-96'  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
  </div>

  )
}

export default Contact
