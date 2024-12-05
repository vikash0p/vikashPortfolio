import HomeLayout from '@/components/homepage/HomeLayout'
import { HomeMetaData } from "@/meta/HomeMetaData"
import React from 'react'

export const metadata = HomeMetaData;

const Home = () => {
  return (
    <>
      <HomeLayout />
    </>
  )
}

export default Home
