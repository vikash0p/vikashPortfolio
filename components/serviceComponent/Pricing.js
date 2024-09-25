'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';
import { plans } from './priceData';
import { fadeIn } from '@/variants';



const Pricing = () => {
    return (
        <motion.div className="py-12 "
          >
            <motion.h2
                variants={fadeIn("up", 0.6)}
                initial="hidden"
                whileInView="show"
                viewport={{
                    once: false,
                    amount:  0.5
                }}
             className="text-center text-3xl font-bold mb-8">Choose Your Plan</motion.h2>
            <div className="max-w-5xl  mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {plans.map((plan,index) => (
                    <motion.div
                        key={plan.name}
                        className="p-6 back1 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                        variants={fadeIn("up", 0.6)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{
                            once: false,
                            amount: index * 0.1
                        }}
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
        </motion.div>
    );
};

export default Pricing;
