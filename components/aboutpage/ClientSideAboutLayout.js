'use client'
import dynamic from 'next/dynamic';
import React from 'react';

const EducationComponent = dynamic(() => import('@/components/aboutpage/EducationComponent'), { ssr: false });
const Introdction = dynamic(() => import('@/components/aboutpage/Introduction'), { ssr: false });
const JobComponent = dynamic(() => import('@/components/aboutpage/JobComponent'), { ssr: false });
const MyExpertiseSkills = dynamic(() => import('@/components/aboutpage/MyExpertiseSkills'), { ssr: false });
const ProfileCardComponent = dynamic(() => import('@/components/ReusableComponent/ProfileCardComponent'), { ssr: false });
const TopTitle = dynamic(() => import('@/components/ReusableComponent/TopTitle'), { ssr: false });


const ClientSideAboutLayout = () => {
    return (
        <section>
            <TopTitle title="About Me" />
            <div className='w-full mt-14 flex flex-col lg:flex-row gap-5'>
                <div className=" lg:w-1/4 ">
                    <ProfileCardComponent />
                </div>
                <div className="lg:w-3/4" >
                    <Introdction />
                    <JobComponent />
                    <EducationComponent />
                    <MyExpertiseSkills />
                </div>
            </div>
        </section>
    )
}

export default ClientSideAboutLayout;