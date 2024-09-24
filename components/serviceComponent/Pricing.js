'use client'
// components/Pricing.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';
import { plans } from './priceData';



const Pricing = () => {
    return (
        <div className="py-12 ">
            <h2 className="text-center text-3xl font-bold mb-8">Choose Your Plan</h2>
            <div className="max-w-5xl  mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {plans.map((plan) => (
                    <motion.div
                        key={plan.name}
                        className="p-6 back1 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-xl font-semibold mb-4">{plan.name}</h3>
                        <p className="text-2xl font-bold mb-4">{plan.price}</p>
                        <ul className="mb-6">
                            {plan.features.map((feature) => (
                                <li key={feature} className="flex items-center mb-2">
                                    <FaCheck className=" mr-2" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <button className="w-full p-3 back2 transition duration-300">
                            Choose Plan
                        </button>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Pricing;
