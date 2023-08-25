import React from 'react'
import Contactpage from '../../components/Contactpage'


export const metadata = {
  title: 'About',
  description: 'Get in Touch: 📧 Have a project in mind or want to collaborate? I\'m all ears! Feel free to reach out via the contact form or drop an email at Vikash752200@gmail.com and phone no:9990127407 .Let\'s bring ideas to life and build exceptional web solutions together. Looking forward to hearing from you!'
}

const Contact = () => {
  return (
    <div className='w-full h-[80vh] flex items-center justify-center  '>
      <Contactpage />
    </div>
  )
}

export default Contact
