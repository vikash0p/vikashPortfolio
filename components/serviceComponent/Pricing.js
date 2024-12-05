'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';
import { plans } from './priceData';
import { fadeIn } from '@/utils/variants';



const Pricing = () => {
    return (
        <motion.div className="py-12 "
        >
            <motion.h2
                variants={fadeIn("up", 0.3)}
                initial="hidden"
                whileInView="show"
                viewport={{
                    once: false,
                    amount: 0.4
                }}
                className="mb-8 text-3xl font-bold text-center">Choose Your Plan</motion.h2>
            <div className="grid max-w-5xl grid-cols-1 gap-8 mx-auto md:grid-cols-2 lg:grid-cols-3">
                {plans.map((plan, index) => (
                    <motion.div
                        key={plan.name}
                        className="p-6 transition-transform duration-300 rounded-lg shadow-lg back2 hover:scale-105"
                        variants={fadeIn("up", 0.4)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{
                            once: false,
                            amount: index * 0.05
                        }}
                    >
                        <h3 className="mb-4 text-xl font-semibold">{plan.name}</h3>
                        <p className="mb-4 text-2xl font-bold">{plan.price}</p>
                        <ul className="mb-6">
                            {plan.features.map((feature) => (
                                <li key={feature} className="flex items-center mb-2">
                                    <FaCheck className="mr-2 " />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <button className="w-full p-3 transition duration-300 back2">
                            Choose Plan
                        </button>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default Pricing;
