import { AboutMetaData } from "@/meta/AboutMetaData";
import dynamic from 'next/dynamic';
const ClientSideAboutLayout = dynamic(() => import('@/components/aboutPage/ClientSideAboutLayout'));
export const metadata = AboutMetaData;


const About = () => {
  return (

      <ClientSideAboutLayout />
    
  )
}

export default About