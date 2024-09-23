import ProfileCardComponent from '@/components/ReusableComponent/ProfileCardComponent'
import TopTitle from '@/components/ReusableComponent/TopTitle'
import React from 'react'

const Services = () => {
  return (
      <section>
          <TopTitle title="Services" />
          <div className='w-full mt-14 flex flex-col lg:flex-row gap-5'>
              <div className=" lg:w-1/4 ">
                  <ProfileCardComponent />

              </div>
              <div className="lg:w-3/4">

              </div>
          </div>
      </section>
  )
}

export default Services
