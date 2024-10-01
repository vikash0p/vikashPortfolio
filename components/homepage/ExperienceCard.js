'use client';
import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { FaUserTie, FaProjectDiagram, FaSmile } from "react-icons/fa";
import { fadeIn } from "@/variants";

const ExperienceCard = () => {
    return (
        <motion.div className="max-w-6xl p-6 mx-auto" variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{
                once: false,
                amount: 0.3
            }}>
            <h1 className="mb-8 text-3xl font-bold text-center">My Achievements</h1>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">

                {/* Years of Experience Card */}
                <motion.div
                    className="p-6 text-white shadow-lg back3 rounded-xl"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    <h2 className="mb-4 text-2xl font-bold text-center">Experience</h2>
                    <div className="flex flex-col items-center">
                        <FaUserTie size={40} className="mb-2 text-blue-300" />
                        <p className="text-4xl font-semibold">
                            <CountUp start={0} end={2} duration={5} suffix="+" />
                        </p>
                        <p className="text-sm">Years of Experience</p>
                    </div>
                </motion.div>

                {/* Projects Completed Card */}
                <motion.div
                    className="p-6 text-white shadow-lg back3 rounded-xl"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.0 }}
                >
                    <h2 className="mb-4 text-2xl font-bold text-center">Projects</h2>
                    <div className="flex flex-col items-center">
                        <FaProjectDiagram size={40} className="mb-2 text-green-300" />
                        <p className="text-4xl font-semibold">
                            <CountUp start={0} end={10} duration={5} suffix="+" />
                        </p>
                        <p className="text-sm">Projects Completed</p>
                    </div>
                </motion.div>

                {/* Happy Clients Card */}
                <motion.div
                    className="p-6 text-white shadow-lg back3 rounded-xl"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2 }}
                >
                    <h2 className="mb-4 text-2xl font-bold text-center">Clients</h2>
                    <div className="flex flex-col items-center">
                        <FaSmile size={40} className="mb-2 text-yellow-300" />
                        <p className="text-4xl font-semibold">
                            <CountUp start={0} end={1500} duration={5} suffix="+" />
                        </p>
                        <p className="text-sm">Happy Clients</p>
                    </div>
                </motion.div>

            </div>
        </motion.div>
    );
};

export default ExperienceCard;
