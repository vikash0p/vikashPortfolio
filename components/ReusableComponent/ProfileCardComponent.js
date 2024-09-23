'use client'
import Image from 'next/image';
import { motion } from 'framer-motion';
import React from 'react';

const ProfileCardComponent = () => {
    return (
        <motion.div
            className="w-full max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden "
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <motion.div className="flex items-center ">
                <motion.div
                    className="w-full h-72 relative  overflow-hidden border-2 border-gray-300"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <Image
                        src="/images/illustration_transparent_background.png"
                        alt="Profile Picture"
                        layout="fill"
                        objectFit="cover"
                    />
                </motion.div>

            </motion.div>
<motion.div
    className="px-5 py-4 text-lg back1"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.5, duration: 0.6 }}
>
    <div className="space-y-3">
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
    </div>
</motion.div>

        </motion.div>
    );
};

export default ProfileCardComponent;
