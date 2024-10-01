'use client'
import Image from 'next/image';
import { motion } from 'framer-motion';
import React from 'react';
import SocialMedia from './SocialMedia';
import Link from 'next/link';

const ProfileCardComponent = () => {
    return (
        <motion.div
            className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md md:max-w-lg lg:max-w-sm lg:sticky top-2 "
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <motion.div className="flex items-center ">
                <motion.div
                    className="relative w-full overflow-hidden border-2 border-gray-300 h-96 lg:h-72"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <Image
                        src="/images/vikash.webp"
                        alt="Profile Picture"
                        layout="fill"
                        objectFit="cover"
                        className='object-cover w-full h-full'
                        sizes="(min-width: 1380px) 312px, (min-width: 1040px) calc(17.19vw + 78px), (min-width: 780px) 509px, (min-width: 420px) 381px, 92vw"                    />
                </motion.div>

            </motion.div>
            <motion.div
                className="px-5 pt-5 pb-10 text-lg back1 "
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
            >
                <div className="space-y-1">
                    <p><strong className=''>Name:</strong> Vikash Pandat</p>

                    <p>
                        <strong>Whatsapp: </strong>
                        <a href="https://wa.me/919990127407" className=" hover:underline">
                            +91-9990127407
                        </a>
                    </p>

                    <p>
                        <strong>Phone: </strong>
                        <a href="tel:+918448925560" className=" hover:underline">
                            +91-8448925560
                        </a>
                    </p>

                    <p>
                        <strong>Email: </strong>
                        <a href="mailto:vikash752200@gmail.com" className=" hover:underline">
                            Vikash752200@gmail.com
                        </a>
                    </p>

                    <p><strong>Experience:</strong> 2+ years</p>

                    <p>
                        <strong>Available:</strong>
                        <span> Yes</span>
                    </p>

                    <p><strong>Nationality:</strong> India</p>
                    <div className='flex flex-col items-center w-full gap-y-6' >
                        <SocialMedia />
                        <div className="">
                            <Link
                                href="/VIKASH1.pdf"
                                target='_blank'
                                download="Vikash_Pandat_Resume.pdf"
                                className="px-6 py-3 rounded-sm back2"
                            >
                                Download Resume
                            </Link>
                        </div>
                    </div>
                </div>
            </motion.div>

        </motion.div>
    );
};

export default ProfileCardComponent;
