import dynamic from 'next/dynamic';

const ClientSideAboutLayout = dynamic(() => import('@/components/aboutpage/ClientSideAboutLayout'));

const About = () => {
  return (
    <>
      <ClientSideAboutLayout />
    </>
  )
}

export default About