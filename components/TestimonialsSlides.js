"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { testimonialData } from "@/utils/data";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/variants";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const TestimonialsSlides = () => {
    return (
        <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{
                once: false,
                amount: 0.4,
            }}
            className="w-full max-w-6xl m-auto mt-10 "
        >
            <h1 className="text-3xl font-semibold text-center">Testimonial</h1>
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={{ clickable: true, dynamicBullets: true }}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="w-full "
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
                        className="px-8 py-10 mt-5 rounded-md back3 "
                    >
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="relative mb-4">
                                <Image
                                    src={value.image}
                                    alt={value.name}
                                    width={100}
                                    height={100}
                                    sizes="100px"
                                    loading="lazy"
                                    className="object-cover w-32 h-32 border-4 border-white rounded-full shadow-lg"
                                />
                            </div>
                            <div>
                                <p className="text-lg font-bold ">{value.name}</p>
                                <p className="text-sm font-medium">{value.position}</p>
                            </div>
                            <p className="relative max-w-lg text-sm italic leading-relaxed sm:text-base">
                                <FaQuoteLeft className="absolute text-2xl -left-6 " />
                                {value.message}
                                <FaQuoteRight className="absolute text-2xl -right-1 " />
                            </p>
                        </div>
                    </SwiperSlide>
                ))}


            </Swiper>
        </motion.div>
    );
};

export default TestimonialsSlides;
