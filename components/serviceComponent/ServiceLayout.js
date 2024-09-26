'use client'
import dynamic from 'next/dynamic'
import React from 'react'
import TopTitle from '../ReusableComponent/TopTitle'

const ProfileCardComponent = dynamic(() => import('../ReusableComponent/ProfileCardComponent'), { ssr: false });
const ServiceData = dynamic(() => import('./ServiceData'), { ssr: false })
const Pricing = dynamic(() => import('./Pricing'), { ssr: false })

const ServiceLayout = () => {
  return (
    <>
          <TopTitle title="Services" />
          <div className='w-full mt-14 flex flex-col lg:flex-row gap-5'>
              <div className=" lg:w-1/4 ">
                  <ProfileCardComponent />

              </div>
              <div className="lg:w-3/4">
                  <ServiceData />
                  <Pricing />
              </div>
          </div>
    </>
  )
}

export default ServiceLayout
