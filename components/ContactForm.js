'use client';
import React, { useReducer, useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaPhone, FaRegCommentDots } from 'react-icons/fa';
import { FaMessage } from "react-icons/fa6";
import emailjs from '@emailjs/browser';
import { errorToast, successToast } from './Transiton';

const initialState = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
};

const formReducer = (state, action) => {
    switch (action.type) {
        case 'SET_FIELD':
            return {
                ...state,
                [action.field]: action.value
            };
        case 'RESET':
            return initialState;
        default:
            return state;
    }
};

const ContactForm = () => {
    const [state, dispatch] = useReducer(formReducer, initialState);
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = (e) => {
        dispatch({
            type: 'SET_FIELD',
            field: e.target.name,
            value: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true); // Set loading state

        const templateParams = {
            name: state.name,
            email: state.email,
            phone: state.phone,
            subject: state.subject,
            message: state.message
        };

        try {
            const response = await emailjs.send(
                'service_ei3n3ee',
                'template_6n5hmuf',
                templateParams,
                'dtDbGCmV48x09Ee5A'
            );
            successToast("Message sent successfully!");
            console.log('Email successfully sent!', response.status, response.text);
            dispatch({ type: 'RESET' }); // Reset form
        } catch (error) {
            errorToast('Failed to send email. Please try again later.');
            console.error('Failed to send email. Error:', error);
        } finally {
            setIsLoading(false); // Reset loading state
        }
    };

    const formVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    };

    return (
        <div className="w-full max-w-2xl m-auto min-h-[400px] rounded-md p-10 back2">
            <motion.div
                initial="hidden"
                animate="visible"
                variants={formVariants}
            >
                <form onSubmit={handleSubmit}>
                    <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
                        <div className="relative flex items-center">
                            <FaUser className="absolute text-white left-3" />
                            <input
                                type="text"
                                name="name"
                                value={state.name}
                                onChange={handleInputChange}
                                placeholder="Your Name"
                                className="w-full p-3 pl-10 bg-transparent border border-gray-300 rounded placeholder:text-white focus:outline-none"
                                required
                                autoComplete="off"
                            />
                        </div>

                        <div className="relative flex items-center">
                            <FaEnvelope className="absolute text-white left-3" />
                            <input
                                type="email"
                                name="email"
                                value={state.email}
                                onChange={handleInputChange}
                                placeholder="Your Email"
                                className="w-full p-3 pl-10 bg-transparent border border-gray-300 rounded placeholder:text-white focus:outline-none"
                                required
                                autoComplete="off"
                            />
                        </div>

                        <div className="relative flex items-center">
                            <FaPhone className="absolute text-white left-3" />
                            <input
                                type="tel"
                                name="phone"
                                value={state.phone}
                                onChange={handleInputChange}
                                placeholder="Your Phone"
                                className="w-full p-3 pl-10 bg-transparent border border-gray-300 rounded placeholder:text-white focus:outline-none"
                                required
                                autoComplete="off"
                            />
                        </div>

                        <div className="relative flex items-center">
                            <FaRegCommentDots className="absolute text-white left-3" />
                            <select
                                name="subject"
                                value={state.subject}
                                onChange={handleInputChange}
                                className="w-full p-3 pl-10 bg-transparent border border-gray-300 rounded placeholder:text-white focus:outline-none"
                                required
                                autoComplete="off"
                            >
                                <option className="text-black" value="" disabled>Select Service</option>
                                <option className="text-black" value="web">Website Development</option>
                                <option className="text-black" value="react">React.js Developer</option>
                                <option className="text-black" value="next">Next.js Developer</option>
                                <option className="text-black" value="html">Html Developer</option>
                            </select>
                        </div>
                    </div>

                    <div className='w-full mt-5 space-y-3'>
                        <div className="relative flex items-start">
                            <FaMessage className="absolute text-white left-3 top-[18px]" />
                            <textarea
                                name="message"
                                value={state.message}
                                onChange={handleInputChange}
                                placeholder="Your Message"
                                rows="3"
                                className="w-full p-3 pl-10 bg-transparent border border-gray-300 rounded placeholder:text-white focus:outline-none"
                                required
                            />
                        </div>

                        <motion.button
                            whileHover={{ scale: isLoading ? 1 : 1.05 }}
                            whileTap={{ scale: isLoading ? 1 : 0.95 }}
                            type="submit"
                            className={`px-8 py-2 text-white rounded back2 ${isLoading && 'opacity-50 cursor-not-allowed'}`}
                            disabled={isLoading}
                        >
                            {isLoading ? 'Sending...' : 'Send Message'}
                        </motion.button>
                    </div>
                </form>
            </motion.div>
        </div>
    );
};

export default ContactForm;
