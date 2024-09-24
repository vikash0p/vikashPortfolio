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
        <div className="w-full max-w-2xl m-auto min-h-[400px]  rounded-md p-10 back1">
            <motion.div
                initial="hidden"
                animate="visible"
                variants={formVariants}
            >

                <form onSubmit={handleSubmit} className="  ">
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                        <div className="relative flex items-center">
                            <FaUser className="absolute left-3 text-white " />
                            <input
                                type="text"
                                name="name"
                                value={state.name}
                                onChange={handleInputChange}
                                placeholder="Your Name"
                                className="pl-10 p-3 border border-gray-300 placeholder:text-white  bg-transparent rounded w-full focus:outline-none  "
                                required
                            />
                        </div>

                        {/* Email */}
                        <div className="relative flex items-center">
                            <FaEnvelope className="absolute left-3 text-white" />
                            <input
                                type="email"
                                name="email"
                                value={state.email}
                                onChange={handleInputChange}
                                placeholder="Your Email"
                                className="pl-10 p-3 border border-gray-300 placeholder:text-white  bg-transparent rounded w-full focus:outline-none"
                                required
                            />
                        </div>

                        {/* Phone */}
                        <div className="relative flex items-center">
                            <FaPhone className="absolute left-3 text-white" />
                            <input
                                type="tel"
                                name="phone"
                                value={state.phone}
                                onChange={handleInputChange}
                                placeholder="Your Phone"
                                className="pl-10 p-3 border border-gray-300 placeholder:text-white  bg-transparent rounded w-full focus:outline-none"
                            />
                        </div>

                        {/* Subject Select */}
                        <div className="relative flex items-center">
                            <FaRegCommentDots className="absolute left-3 text-white" />
                            <select
                                name="subject"
                                value={state.subject}
                                onChange={handleInputChange}
                                className="pl-10 p-3 border border-gray-300 placeholder:text-white  bg-transparent rounded w-full focus:outline-none"
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
                            <FaMessage className="absolute left-3 top-3 text-white" />
                            <textarea
                                name="message"
                                value={state.message}
                                onChange={handleInputChange}
                                placeholder="Your Message"
                                rows="3"
                                className="pl-10 p-3 border border-gray-300 placeholder:text-white  bg-transparent rounded w-full focus:outline-none"
                                required
                            />
                        </div>

                        {/* Submit Button */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            type="submit"
                            className=" px-8 py-2  rounded back2 text-white"
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
