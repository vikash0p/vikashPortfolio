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
          <div className='flex flex-col w-full gap-5 mt-14 lg:flex-row'>
              <div className=" lg:w-1/4">
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
