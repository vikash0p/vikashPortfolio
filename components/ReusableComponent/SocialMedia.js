'use client';

import { motion } from "framer-motion";
import { FaGithub,  FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { IoLogoVercel } from "react-icons/io5";

export const socialLinks = [
    {
        href: 'https://github.com',
        ariaLabel: 'GitHub',
        icon: <FaGithub size={20} className="text-red-600" />,
    },
    {
        href: 'https://vercel.com',
        ariaLabel: 'Vercel',
        icon: <IoLogoVercel size={20} className="text-red-600" />,
    },
    {
        href: 'https://linkedin.com',
        ariaLabel: 'LinkedIn',
        icon: <FaLinkedinIn size={20} className="text-red-600" />,
    },
    {
        href: 'https://instagram.com',
        ariaLabel: 'Instagram',
        icon: <FaInstagram size={20} className="text-red-600" />,
    },
];



const SocialMedia = () => {
  return (
      <motion.div
          className="flex space-x-6 mb-4 md:mb-0"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 120, damping: 12, delay: 0.2 }}
      >
          {socialLinks.map((link, index) => (
              <motion.a
                  key={index}
                  href={link.href}
                  aria-label={link.ariaLabel}
                  className="back1 p-3 rounded-lg shadow-md shadow-violet-600 hover:shadow-xl hover:bg-white/20 transition-shadow duration-300 ease-in-out"
                  whileHover={{
                      scale: 1.2,
                      rotate: 10,
                      transition: { type: 'spring', stiffness: 300 },
                  }}
                  whileTap={{ scale: 0.95 }}
              >
                  {link.icon}
              </motion.a>
          ))}
      </motion.div>
  )
}

export default SocialMedia
