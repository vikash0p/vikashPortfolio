import dynamic from 'next/dynamic';
const ClientSideAboutLayout = dynamic(() => import('@/components/aboutpage/ClientSideAboutLayout'));
export const metadata = {
  title: "About Vikash | Frontend Developer & Software Engineer",
  description:
    "Learn more about Vikash, a frontend web developer and software engineer with expertise in React, Node.js, and modern JavaScript frameworks. Discover the journey, skills, and values that drive Vikash's passion for building dynamic and efficient web applications.",
  openGraph: {
    title: {
      default: "About Vikash | Frontend Developer",
      template: "%s | Vikash",
    },
    description:
      "Discover Vikash's background, skills, and professional experience in frontend web development. Specializing in creating modern web applications with React and Node.js, Vikash brings a passion for solving technical challenges and delivering innovative solutions.",
    images: [
      {
        url: "https://myportfolio-navy-three.vercel.app/about-opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Vikash About Page openGraph",
      },
    ],
    url: "https://myportfolio-navy-three.vercel.app/about",
    siteName: "Vikash Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Vikash | Frontend Developer & Software Engineer",
    description:
      "Learn more about Vikash, a frontend web developer specializing in React and Node.js. Explore the journey, projects, and values that define Vikash's development career.",
    images: ["https://myportfolio-navy-three.vercel.app/about-opengraph-image.png"],
    creator: "@VikashPortfolio",
  },
  applicationName: "Vikash Portfolio",
  keywords: [
    "Frontend Developer",
    "Software Engineer",
    "Web Developer",
    "React Developer",
    "NodeJS Developer",
    "JavaScript",
    "Full Stack Development",
    "Portfolio",
    "Vikash About",
    "Developer Journey",
    "About Page",
    "Tech Skills",
    "Frontend Expertise",
    "Software Development",
    "Modern Web Development",
    "Innovative Web Solutions",
    "React Projects",
    "Web Application Development",
  ],
};


const About = () => {
  return (
    <>
      <ClientSideAboutLayout />
    </>
  )
}

export default About