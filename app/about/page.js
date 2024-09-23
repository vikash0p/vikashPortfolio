import EducationComponent from '@/components/aboutpage/EducationComponent'
import Introdction from '@/components/aboutpage/Introduction'
import MyExpertiseSkills from '@/components/aboutpage/MyExpertiseSkills'
import ProfileCardComponent from '@/components/ReusableComponent/ProfileCardComponent'
import TopTitle from '@/components/ReusableComponent/TopTitle'
import React from 'react'



const About = () => {
  return (
    <section>
      <TopTitle title="About Me" />
      <div className='w-full mt-14 flex flex-col lg:flex-row gap-5'>
        <div className=" lg:w-1/4 ">
          <ProfileCardComponent />

        </div>
        <div className="lg:w-3/4">
          <Introdction />
          <EducationComponent />
          <MyExpertiseSkills />
        </div>
      </div>
    </section>
  )
}

export default About
