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
import { FaQuoteLeft,FaQuoteRight } from "react-icons/fa";

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
            className=" w-full max-w-6xl m-auto mt-10"
        >
            <h6 className="text-3xl font-semibold text-center">Testimonial</h6>
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={{ clickable: true, dynamicBullets: true }}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="w-full"
                slidesPerView={1}
                breakpoints={{
                    640: { slidesPerView: 1, spaceBetween: 20 },
                    768: { slidesPerView: 1.5, spaceBetween: 20 },
                    1024: { slidesPerView: 2, spaceBetween: 50 },
                }}
                loop={true}
            >
                {testimonialData.map((value, index) => (
                    <SwiperSlide
                        key={index}
                        className="back2 py-10 px-8 mt-5 "
                    >
                        <div className="flex flex-col justify-center items-center text-center space-y-4">
                            <div className="relative mb-4">
                                <Image
                                    src={value.image}
                                    alt={value.name}
                                    width={100}
                                    height={100}
                                    sizes="100px"
                                    loading="lazy"
                                    className="rounded-full object-cover border-4 border-white shadow-lg"
                                />
                            </div>
                            <div>
                                <p className="text-lg font-bold ">{value.name}</p>
                                <p className="text-sm  font-medium">{value.position}</p>
                            </div>
                            <p className="text-sm sm:text-base max-w-lg leading-relaxed italic  relative">
                                <FaQuoteLeft className="text-2xl absolute -left-6 " />
                                {value.message}
                                <FaQuoteRight className="text-2xl absolute -right-1 " />
                            </p>
                        </div>
                    </SwiperSlide>
                ))}


            </Swiper>
        </motion.div>
    );
};

export default TestimonialsSlides;
