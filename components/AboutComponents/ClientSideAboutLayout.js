'use client'
import React from 'react';
import dynamic from "next/dynamic";

const TopTitle = dynamic(() => import("../ReusableComponent/TopTitle"), { ssr: false });
const ProfileCardComponent = dynamic(() => import("../ReusableComponent/ProfileCardComponent"), { ssr: false });
const Introdction = dynamic(() => import("./Introduction"), { ssr: false });
const JobComponent = dynamic(() => import("./JobComponent"), { ssr: false });
const EducationComponent = dynamic(() => import("./EducationComponent"), { ssr: false });
const MyExpertiseSkills = dynamic(() => import("./MyExpertiseSkills"), { ssr: false });

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