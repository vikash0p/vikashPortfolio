import { AboutMetaData } from "@/meta/blog/AboutMetaData";
import dynamic from 'next/dynamic';
const ClientSideAboutLayout = dynamic(() => import('@/components/aboutPage/ClientSideAboutLayout'));
export const metadata = AboutMetaData;


const About = () => {
  return (

      <ClientSideAboutLayout />

  )
}

export default About