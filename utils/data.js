import { HiHome, HiUser,  } from 'react-icons/hi2';
import {  FaProjectDiagram, FaServicestack, FaBlog } from "react-icons/fa";
import {  SiNetlify, SiVercel } from "react-icons/si";
import { DiGithubBadge } from 'react-icons/di';
import { AiFillInstagram } from 'react-icons/ai';
import { IoIosContact } from "react-icons/io";


// nav data
export const navData = [
  { name: 'Home', path: '/', icon: <HiHome /> },
  { name: 'About', path: '/about', icon: <HiUser /> },
  { name: 'Services', path: '/services', icon: <FaServicestack /> },
  { name: 'Projects', path: '/work', icon: <FaProjectDiagram /> },
  { name: 'Blogs', path: '/blog', icon: <FaBlog /> },

  { name: 'contact', path: '/contact', icon: <IoIosContact />, },
];


export const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',

      },

    ],
  },

  {
    title: 'experience',
    info: [
      {
        title: 'UX/UI Designer - XYZ Company',
      },
      {
        title: 'Web Developer - ABC Agency',
      },
      {
        title: 'Intern -XYZ Corporation',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: ' **Bachelor of Computer Applications (BCA)**',
      },
      {
        title: '**High School (12th Grade)**',
      },

    ],
  },
]

export const social = [
  {
    id: 1,
    icon: <DiGithubBadge />,
    href: 'https://github.com/vikash0p'
  },
  {
    id: 2,
    icon: <SiNetlify />,
    href: "https://app.netlify.com/teams/vikash2000158/overview",
  },
  {
    id: 3,
    icon: <AiFillInstagram />,
    href: 'https://www.instagram.com/v_pandat000/'
  },
  {
    id: 4,
    icon: <SiVercel />,
    href: "https://vercel.com/vikash0p"
  },



]

export const testimonialData = [
  {
    image: 'https://res.cloudinary.com/dhttnehwp/image/upload/v1733393462/vikashProtfolio/s7yq7vxivvwtbelk5du5.jpg',
    name: 'Anne Smith',
    position: 'Data Analyst',
    message:
      'Their solutions streamlined processes, simplifying complex datasets. Highly recommend their services for data-driven companies seeking actionable insights.',
  },
  {
    image: 'https://res.cloudinary.com/dhttnehwp/image/upload/v1733393462/vikashProtfolio/ablsicmkn75fmzbtqxxr.jpg',
    name: 'Jane Doe',
    position: 'Graphic Designer',
    message:
      'Attention to detail exceeded expectations. The creativity and professionalism shown were outstanding. Thrilled to collaborate again soon.',
  },
  {
    image: 'https://res.cloudinary.com/dhttnehwp/image/upload/v1733393462/vikashProtfolio/g4s2h8sltvg9cd4hrfab.jpg',
    name: 'John Doe',
    position: 'Software Developer',
    message:
      'Technical expertise and problem-solving skills built a scalable solution on time. An absolute pleasure working with this talented team.',
  },
  {
    image: 'https://res.cloudinary.com/dhttnehwp/image/upload/v1733393462/vikashProtfolio/pvfz5pspezd6smgycwp0.jpg',
    name: 'Emily Davis',
    position: 'Marketing Specialist',
    message:
      'Comprehensive marketing strategy increased engagement and conversions significantly. Their digital landscape understanding is truly exceptional and unmatched.',
  },
  {
    image: 'https://res.cloudinary.com/dhttnehwp/image/upload/v1733393462/vikashProtfolio/y0uwdpedzwlopbj5lvgs.jpg',
    name: 'Michael Johnson',
    position: 'Project Manager',
    message:
      'Large-scale project management was seamless. Their team’s clear communication ensured on-time delivery under budget with excellent results.',
  },
  {
    image: 'https://res.cloudinary.com/dhttnehwp/image/upload/v1733393462/vikashProtfolio/rayjq0u5cl2otcunfkhn.jpg',
    name: 'Samantha Lee',
    position: 'Product Manager',
    message:
      'Complex product ideas turned into tangible results. Adaptability and technical proficiency made this an exceptional collaborative experience overall.',
  },
];



export const project = [
  {
    id: 1,
    image: 'https://res.cloudinary.com/dhttnehwp/image/upload/v1733390224/vikashProtfolio/rpmghtqnenw1g1ae8wcm.png',
    link: 'https://frontendblog-nu.vercel.app',
    title: 'modern blog',
  },
  {
    id: 2,
    image: 'https://res.cloudinary.com/dhttnehwp/image/upload/v1733390224/vikashProtfolio/z3ahklldphstwgphqqje.png',
    link: 'https://karmatattoo.vercel.app',
    title: 'karma tattoo',
  },
  {
    id: 3,
    image: 'https://res.cloudinary.com/dhttnehwp/image/upload/v1733390224/vikashProtfolio/q0dukvr0izhdo2efbfbl.png',
    link: 'https://frontendpizza.vercel.app',
    title: "hop pizza",
  },
  {
    id: 4,
    image: 'https://res.cloudinary.com/dhttnehwp/image/upload/v1733390224/vikashProtfolio/fbazxpwsvtwskts4yori.png',
    link: 'https://storefashion.vercel.app',
    title: 'fashion store',
  },
  {
    id: 5,
    image: 'https://res.cloudinary.com/dhttnehwp/image/upload/v1733390224/vikashProtfolio/nhlpofihqj7povqxpexb.png',
    link: 'https://jewllery-eight.vercel.app',
    title: 'elegant jewellery',
  },
  {
    id: 6,
    image: 'https://res.cloudinary.com/dhttnehwp/image/upload/v1733390224/vikashProtfolio/gbgxggzh1ckxl9ptnfkr.png',
    link: 'https://yoga-gilt-beta.vercel.app',
    title: 'mantra yoga',
  },
  {
    id: 7,
    image: 'https://res.cloudinary.com/dhttnehwp/image/upload/v1733390224/vikashProtfolio/ddzz8aytsnxse3vdwgtc.png',
    link: 'https://hotals.vercel.app',
    title: 'Delicious food',
  },
  {
    id: 8,
    image: 'https://res.cloudinary.com/dhttnehwp/image/upload/v1733390224/vikashProtfolio/uum25cqpb6xkhtkimr5z.png',
    link: 'https://lasvpn.vercel.app',
    title: 'laslas vpn',
  },

  {
    id: 10,
    image: 'https://res.cloudinary.com/dhttnehwp/image/upload/v1733390224/vikashProtfolio/xj5tslap4ruhqmpofptf.png',
    link: 'https://barshop.vercel.app',
    title: 'bar shop',
  },
  {
    id: 11,
    image: 'https://res.cloudinary.com/dhttnehwp/image/upload/v1733390224/vikashProtfolio/dpjhntvhrhq2xdy2w5qb.png',
    link: 'https://fruitsshop.vercel.app/shop',
    title: 'Fruits shop',
  },
  {
    id: 12,
    image: 'https://res.cloudinary.com/dhttnehwp/image/upload/v1733390224/vikashProtfolio/j2yly5jsoseilhf9owng.png',
    link: 'https://groceryapp-ten.vercel.app',
    title: 'Grocery shop',
  },
  {
    id: 13,
    image: 'https://res.cloudinary.com/dhttnehwp/image/upload/v1733390224/vikashProtfolio/gaqaimgczmumdpzi2um2.png',
    link: 'https://fabfit.netlify.app',
    title: 'ShowFit',
  },
  {
    id: 14,
    image: 'https://res.cloudinary.com/dhttnehwp/image/upload/v1733390224/vikashProtfolio/mh3v6cuuhuisrcpctpos.png',
    link: 'https://youtebe.netlify.app',
    title: 'youtube clone',
  },
  {
    id: 15,
    image: 'https://res.cloudinary.com/dhttnehwp/image/upload/v1733390224/vikashProtfolio/jo1sfayise6dbn9i6c3y.png',
    link: 'https://protein.netlify.app/shop',
    title: 'Fitness club',
  },
  {
    id: 16,
    image: 'https://res.cloudinary.com/dhttnehwp/image/upload/v1733390224/vikashProtfolio/oex3xbtkrunmytztcjn0.png',
    link: 'https://tdoo.netlify.app',
    title: 'todo app',
  },

]


