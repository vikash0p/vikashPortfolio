import Image from 'next/image';
import React from 'react';
import SocialMedia from './ReusableComponent/SocialMedia';

const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center text-2xl lg:text-3xl gap-2 pt-2 md:pt-5 text-red-600 px-2 lg:px-5">
      {/* Aspect Ratio Wrapper for Image */}
      <div className="relative w-28 md:w-40 lg:w-60" style={{ aspectRatio: '3/1' }}>
        <Image
          src="/logo.png"
          alt="Elegant Jewelry logo"
          fill
          className="object-cover"
          priority={true}
        />
      </div>
      <SocialMedia />
    </div>
  );
};

export default Navbar;
