'use client';
import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { FaUserTie, FaProjectDiagram, FaSmile } from "react-icons/fa";

const ExperienceCard = () => {
    return (
        <div className="max-w-6xl mx-auto p-6">
            <h1 className="text-3xl font-bold  mb-8">My Achievements</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                {/* Years of Experience Card */}
                <motion.div
                    className="back1 p-6 rounded-xl shadow-lg text-white"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-2xl font-bold mb-4 text-center">Experience</h2>
                    <div className="flex flex-col items-center">
                        <FaUserTie size={40} className="text-blue-300 mb-2" />
                        <p className="text-4xl font-semibold">
                            <CountUp start={0} end={2} duration={5} suffix="+" />
                        </p>
                        <p className="text-sm">Years of Experience</p>
                    </div>
                </motion.div>

                {/* Projects Completed Card */}
                <motion.div
                    className="back1 p-6 rounded-xl shadow-lg text-white"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.0 }}
                >
                    <h2 className="text-2xl font-bold mb-4 text-center">Projects</h2>
                    <div className="flex flex-col items-center">
                        <FaProjectDiagram size={40} className="text-green-300 mb-2" />
                        <p className="text-4xl font-semibold">
                            <CountUp start={0} end={10} duration={5} suffix="+" />
                        </p>
                        <p className="text-sm">Projects Completed</p>
                    </div>
                </motion.div>

                {/* Happy Clients Card */}
                <motion.div
                    className="back1 p-6 rounded-xl shadow-lg text-white"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2 }}
                >
                    <h2 className="text-2xl font-bold mb-4 text-center">Clients</h2>
                    <div className="flex flex-col items-center">
                        <FaSmile size={40} className="text-yellow-300 mb-2" />
                        <p className="text-4xl font-semibold">
                            <CountUp start={0} end={1500} duration={5} suffix="+" />
                        </p>
                        <p className="text-sm">Happy Clients</p>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default ExperienceCard;
