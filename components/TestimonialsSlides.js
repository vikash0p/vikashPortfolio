"use client";
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { testimonialData } from '@/data';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeIn } from '@/variants';


const TestimonialsSlides = ()=> {

    return (
        <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{
                once: false,
                amount: 0.6
            }}
         className='w-full lg:w-[65%]  h-[90vh] flex place-items-center  mx-auto '>
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className=" "
            >
                {
                    testimonialData.map((value,index)=>{
                        return(
                            <SwiperSlide key={index} className=' p-20  flex justify-between items-center'>
                                <div className='flex flex-col justify-center items-center transition-all duration-500 '>
                                    <Image
                                        src={value.image}
                                        alt={value.name}
                                        width={150}
                                        height={150}
                                        className='object-cover'
                                    />
                                    <h1 className=''>{value.name} </h1>
                                    <h1 className=''>{value.position} </h1>
                                    <h1 className='text-center'>{value.message} </h1>

                                </div>
                               

   
                            </SwiperSlide>


                        )
                    })
                }

            </Swiper>
        </motion.div>
    );
}

export default TestimonialsSlides