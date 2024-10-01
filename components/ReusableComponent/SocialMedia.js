'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub,  FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { IoLogoVercel } from "react-icons/io5";

export const socialLinks = [
    {
        href: 'https://github.com/vikash0p',
        ariaLabel: 'GitHub',
        icon: <FaGithub className="text-white" />,
    },
    {
        href: 'https://vercel.com/vikashs-projects-f1acf06b',
        ariaLabel: 'Vercel',
        icon: <IoLogoVercel className="text-white" />,
    },
    {
        href: 'https://www.linkedin.com/in/vikash0p/',
        ariaLabel: 'LinkedIn',
        icon: <FaLinkedinIn className="text-white" />,
    },
    {
        href: 'https://www.instagram.com/v_pandat000/',
        ariaLabel: 'Instagram',
        icon: <FaInstagram className="text-white" />,
    },
];



const SocialMedia = () => {
  return (
      <motion.div
          className="flex gap-x-3 md:gap-x-6 md:mb-0 "
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 120, damping: 12, delay: 0.2 }}
      >
          {socialLinks.map((link, index) => (
              <motion.a
                  key={index}
                  href={link.href}
                  aria-label={link.ariaLabel}
                  target="_blank"
                  className="p-2 transition-shadow duration-300 ease-in-out rounded-lg shadow-md back3 md:text-xl md:p-3 shadow-violet-600 hover:shadow-xl hover:bg-white/20"
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
