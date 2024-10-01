'use client';
import React, { useReducer } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaPhone, FaRegCommentDots } from 'react-icons/fa';
import { FaMessage } from "react-icons/fa6";



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

const ContactPage = () => {
    const [state, dispatch] = useReducer(formReducer, initialState);

    const handleInputChange = (e) => {
        dispatch({
            type: 'SET_FIELD',
            field: e.target.name,
            value: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted: ', state);
        dispatch({ type: 'RESET' });
    };

    const formVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    }; 2

    return (
        <div className="w-full max-w-2xl m-auto min-h-[400px]  rounded-md p-10 back2">
            <motion.div
                initial="hidden"
                animate="visible"
                variants={formVariants}
            >

                <form onSubmit={handleSubmit} className="">
                    <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
                        <div className="relative flex items-center">
                            <FaUser className="absolute text-white left-3 " />
                            <input
                                type="text"
                                name="name"
                                value={state.name}
                                onChange={handleInputChange}
                                placeholder="Your Name"
                                className="w-full p-3 pl-10 bg-transparent border border-gray-300 rounded placeholder:text-white focus:outline-none "
                                required
                            />
                        </div>

                        {/* Email */}
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
                            />
                        </div>

                        {/* Phone */}
                        <div className="relative flex items-center">
                            <FaPhone className="absolute text-white left-3" />
                            <input
                                type="tel"
                                name="phone"
                                value={state.phone}
                                onChange={handleInputChange}
                                placeholder="Your Phone"
                                className="w-full p-3 pl-10 bg-transparent border border-gray-300 rounded placeholder:text-white focus:outline-none"
                            />
                        </div>

                        {/* Subject Select */}
                        <div className="relative flex items-center">
                            <FaRegCommentDots className="absolute text-white left-3" />
                            <select
                                name="subject"
                                value={state.subject}
                                onChange={handleInputChange}
                                className="w-full p-3 pl-10 bg-transparent border border-gray-300 rounded placeholder:text-white focus:outline-none"
                                required
                            >
                                <option className='text-black bg-violet-400' value="" disabled>Select Service</option>
                                <option className='text-black bg-violet-400' value="web">Website Development</option>
                                <option className='text-black bg-violet-400' value="react">React.js Developer</option>
                                <option className='text-black bg-violet-400' value="next">Next.js Developer</option>
                                <option className='text-black bg-violet-400' value="html">Html Developer</option>
                            </select>
                        </div>

                    </div>
                    {/* Name */}

                    <div className='w-full mt-5 space-y-3'>
                        {/* Message */}
                        <div className="relative flex items-start">
                            <FaMessage className="absolute text-white left-3 top-3" />
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

                        {/* Submit Button */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            type="submit"
                            className="px-8 py-2 text-white rounded back2"
                        >
                            Send Message
                        </motion.button>
                    </div>
                </form>
            </motion.div>
        </div>
    );
};

export default ContactPage;
