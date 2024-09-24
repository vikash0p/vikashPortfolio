'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import SocialMedia from '../ReusableComponent/SocialMedia';

const ContactAddress = () => {
    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className="max-w-lg mx-auto p-6 rounded-lg shadow-md">
            <motion.div
                className="mb-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-2xl font-bold mb-2">Get in Touch</h2>
                <p className=" mb-4">{`I am available for full-time work. Connect with me via and call in to my account.`} </p>

                <div className="flex items-center mb-3">
                    <FaEnvelope className="" />
                    <span className="ml-2 ">Vikash752200@gmail.com</span>
                </div>
                <div className="flex items-center mb-3">
                    <FaPhone className="" />
                    <span className="ml-2 ">+(91)-9990127407</span>
                </div>
                <div className="flex items-center mb-3">
                    <FaMapMarkerAlt className="" />
                    <span className="ml-2 ">House no 28, Gali no-1,Palla Village,Faridabad, HR</span>
                </div>
                <div className='mt-12'>
                    <SocialMedia />

                </div>
            </motion.div>


        </div>
    );
};

export default ContactAddress;
