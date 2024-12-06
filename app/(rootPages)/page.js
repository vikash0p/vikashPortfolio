import HomeLayout from "@/components/HomeComponents/HomeLayout";
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
