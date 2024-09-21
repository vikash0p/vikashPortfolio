"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { testimonialData } from "@/data";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const TestimonialsSlides = () => {
    return (
        <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{
                once: false,
                amount: 0.6,
            }}
            className="max-w-7xl mx-auto lg:w-[65%] h-[90vh] flex items-center"
        >
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={{ clickable: true }} // Enable pagination dots
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="w-full"
            >
                {testimonialData.map((value, index) => (
                    <SwiperSlide
                        key={index}
                        className="p-8 sm:p-10 md:p-16 lg:p-20 flex justify-between items-center"
                    >
                        <div className="flex flex-col justify-center items-center transition-all duration-500">
                            <Image
                                src={value.image}
                                alt={value.name}
                                width={150}
                                height={150}
                                className="rounded-full object-cover mb-4"
                            />
                            <h1 className="text-lg font-semibold text-center">{value.name}</h1>
                            <h2 className="text-sm text-gray-500 mb-2">{value.position}</h2>
                            <p className="text-center text-sm sm:text-base md:text-lg max-w-lg leading-relaxed">
                                {value.message}
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </motion.div>
    );
};

export default TestimonialsSlides;
