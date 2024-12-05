'use client'
import dynamic from 'next/dynamic';
import React from 'react';

const EducationComponent = dynamic(() => import('@/components/aboutPage/EducationComponent'), { ssr: false });
const Introdction = dynamic(() => import('@/components/aboutPage/Introduction'), { ssr: false });
const JobComponent = dynamic(() => import('@/components/aboutPage/JobComponent'), { ssr: false });
const MyExpertiseSkills = dynamic(() => import('@/components/aboutPage/MyExpertiseSkills'), { ssr: false });
const ProfileCardComponent = dynamic(() => import('@/components/ReusableComponent/ProfileCardComponent'), { ssr: false });
const TopTitle = dynamic(() => import('@/components/ReusableComponent/TopTitle'), { ssr: false });


const ClientSideAboutLayout = () => {
    return (
        <section>
            <TopTitle title="About Me" />
            <div className='flex flex-col w-full h-full gap-5 mt-14 lg:flex-row'>
                <div className=" lg:w-1/4">
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