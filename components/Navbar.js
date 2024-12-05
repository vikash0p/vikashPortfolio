'use client'
import Image from 'next/image';
import React from 'react';
import SocialMedia from './ReusableComponent/SocialMedia';
import Link from 'next/link';
import { successToast } from '../utils/React-Toastify';


const Navbar = () => {
  return (
    <div className="flex items-center justify-between w-full gap-2 px-2 pt-2 text-2xl text-red-600 lg:text-3xl md:pt-5 lg:px-5">
      {/* Aspect Ratio Wrapper for Image */}
      <div className="relative w-28 md:w-40 h-14 " >
        <Image
          src="/logo.png"
          alt="Elegant Jewelry logo"
          fill
          className="object-contain"
          priority={true}
        />
      </div>
      <div>
        <Link
          href="/VIKASH.pdf"
          target='_blank'
          download="Vikash_Pandat_Resume.pdf"
          className="px-4 py-1 text-xl text-white rounded-sm back2 md:text-2xl "
          aria-label="Download Resume"
          onClick={() => successToast('Resume downloaded Successfully')}

        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
