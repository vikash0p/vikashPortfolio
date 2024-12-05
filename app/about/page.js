import { AboutMetaData } from "@/components/meta/AboutMetaData";
import dynamic from 'next/dynamic';
const ClientSideAboutLayout = dynamic(() => import('@/components/aboutpage/ClientSideAboutLayout'));
export const metadata =AboutMetaData;


const About = () => {
  return (
    <>
      <ClientSideAboutLayout />
    </>
  )
}

export default About