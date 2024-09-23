'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';
import SocialMedia from './ReusableComponent/SocialMedia';


const Footer = () => {
  return (
    <motion.footer
      className="my-20 lg:mt-20 py-10 px-5 md:px-10 shadow-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Footer container */}
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <div className='w-full flex flex-col items-center gap-10 md:gap-10 lg:5'>
          <div className='relative w-24 h-24 rounded-full back1 '>
            <Image
              src={'/images/illustration.png'}
              alt='avatar'
              fill
              sizes="(min-width: 380px) 320px, calc(60vw + 104px)"
              className='w-full h-full mb-14 mt-3 m-auto bg-transparent object-cover object-center rounded-full '
              priority={true}
              quality={100}
            />
          </div>
          <SocialMedia />
        </div>
        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {['About', 'Portfolio', 'Services', 'Blog', 'Contact'].map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`} className="hover:underline focus:outline-none focus:underline">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Resources</h3>
          <ul className="space-y-2">
            {['Authentication', 'System Status', 'Terms of Service', 'Pricing', 'Developers'].map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase().replace(/ /g, '-')}`} className="hover:underline focus:outline-none focus:underline">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Developers & Support */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Developers & Support</h3>
          <ul className="space-y-2">
            {['Documentation', 'Authentication', 'API Reference', 'Support', 'Open Source'].map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase().replace(/ /g, '-')}`} className="hover:underline focus:outline-none focus:underline">{link}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="max-w-screen-xl mx-auto mt-10 border-t border-gray-700 pt-5 flex flex-col md:flex-row items-center justify-between">

        {/* Social Icons */}


        {/* Footer Text */}
        <motion.p
          className="text-sm text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          © 2024. All rights reserved by <span className='text-red-600'>Vikash Pandat</span>
        </motion.p>
      </div>
    </motion.footer>
  );
};

export default Footer;
