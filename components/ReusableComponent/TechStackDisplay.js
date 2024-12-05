'use client';
import { fadeIn } from '@/utils/variants';
import { motion } from 'framer-motion';
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNode } from 'react-icons/fa';
import { SiNextdotjs } from 'react-icons/si';

export const techStack = [
    {
        name: 'React.js',
        icon: <FaReact size={30} className="text-blue-500" />,
    },
    {
        name: 'Next.js',
        icon: <SiNextdotjs size={30} className="text-white" />,
    },
    {
        name: 'JavaScript',
        icon: <FaJs size={30} className="text-yellow-500" />,
    },
    {
        name: 'CSS',
        icon: <FaCss3Alt size={30} className="text-blue-600" />,
    },
    {
        name: 'HTML',
        icon: <FaHtml5 size={30} className="text-orange-600" />,
    },
];

// Animation variants for the tech stack icons
const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2, // Stagger effect for icons
            delayChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 120, damping: 12 } },
};

const TechStackDisplay = () => {
    return (
        <motion.div variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{
                once: false,
                amount: 0.6
            }}>
            <p className="text-xl text-center">Best skill on</p>
            <motion.div
                className="flex flex-wrap justify-center gap-2 my-10 md:gap-6 lg:mt-5"
                variants={containerVariants}
                initial="hidden"
                animate="show"
            >
                {techStack.map((tech, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        whileHover={{ scale: 1.1 }}
                        className="flex flex-col items-center"
                    >
                        <div className="p-3 mb-2 transition-shadow duration-300 ease-in-out rounded-lg shadow-md back3 shadow-violet-600 hover:shadow-xl hover:bg-white/20">
                            {tech.icon}
                        </div>
                        <p className="mt-1 text-sm">{tech.name}</p>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default TechStackDisplay;
