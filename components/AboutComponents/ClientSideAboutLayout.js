'use client'
import React from 'react';
import TopTitle from "../ReusableComponent/TopTitle";
import ProfileCardComponent from "../ReusableComponent/ProfileCardComponent";
import Introdction from "./Introduction";
import JobComponent from "./JobComponent";
import EducationComponent from "./EducationComponent";
import MyExpertiseSkills from "./MyExpertiseSkills";


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