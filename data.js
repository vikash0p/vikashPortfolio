import {HiHome,HiUser,HiViewColumns,HiRectangleGroup,HiChatBubbleBottomCenterText,HiEnvelope,} from 'react-icons/hi2';
import { FaHtml5, FaCss3, FaJs, FaReact, FaWordpress, FaFigma, FaProjectDiagram, FaServicestack, FaBlog } from "react-icons/fa";
import { SiNextdotjs, SiFramer, SiAdobexd, SiAdobephotoshop, SiNetlify, SiVercel } from "react-icons/si";
import { DiGithubBadge } from 'react-icons/di';
import { AiFillInstagram } from 'react-icons/ai';
import { IoIosContact } from "react-icons/io";


// nav data
export const navData = [
  { name: 'Home', path: '/', icon: <HiHome /> },
  { name: 'About', path: '/about', icon: <HiUser /> },
  { name: 'Services', path: '/services', icon: <FaServicestack /> },
  { name: 'work', path: '/work', icon: <FaProjectDiagram /> },
  { name: 'Blog', path: '/blog', icon: <FaBlog /> },

  { name: 'contact', path: '/contact', icon: <IoIosContact />,},
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

export const project = [
  {
    id: 1,
    image: '/avtar.jpg',
    link: 'https://portfoliopro-snowy.vercel.app/',
    title: 'Creating, innovating, problem-solving  designing a brighter future, one idea at a time.',
  },
  {
    id: 2,
    image: '/grocery.jpg',
    link: 'https://groceryapp-ten.vercel.app/',
    title: 'Fresh produce, pantry essentials, and delightful treats - your neighborhood grocery.',
  },
  {
    id: 3,
    image: '/hotal.jpg',
    link: 'https://hotals.vercel.app/',
    title: "Luxurious rooms, impeccable service, breathtaking views - your unforgettable hotel experience.",
  },
  {
    id: 4,
    image: '/netflix.jpg',
    link: 'https://netflixapp-rho.vercel.app/',
    title: 'Unlimited entertainment: movies, series, documentaries - streaming joy html every moment.',
  },
  {
    id: 5,
    image: '/resturnat.jpg',
    link: 'https://vercel.com/vikash0p/resturant',
    title: 'Savor exquisite flavors, impeccable service, and warm ambiance at our culinary haven.',
  },
  {
    id: 6,
    image: '/shop.jpg',
    link: 'https://showfit.netlify.app/',
    title: 'Discover trends, find deals, and shop your favorites - retail therapy awaits.',
  },
  {
    id: 7,
    image: '/vpn.jpg',
    link: 'https://lasvpn.vercel.app/',
    title: 'Secure browsing, anonymity assured - your online world, privately accessible with VPN.',
  },

]

export const testimonialData = [
  {
    image: '/images/t-avt-1.png',
    name: 'Anne Smith',
    position: 'Data Analyst',
    message:
      'Working with the team has been a fantastic experience. Their data solutions helped streamline our processes, making it easier to draw insights from complex datasets. I highly recommend their services for any data-driven company.',
  },
  {
    image: '/images/t-avt-2.png',
    name: 'Jane Doe',
    position: 'Graphic Designer',
    message:
      'As a designer, attention to detail is critical, and they exceeded my expectations. The creativity and professionalism shown throughout the project were outstanding. I’m excited to collaborate again in the future.',
  },
  {
    image: '/images/t-avt-3.png',
    name: 'John Doe',
    position: 'Software Developer',
    message:
      'Their technical expertise and problem-solving skills are truly exceptional. We managed to build a robust and scalable solution within tight deadlines. It was an absolute pleasure working with such a talented team.',
  },
  {
    image: '/test1.jpg',
    name: 'Emily Davis',
    position: 'Marketing Specialist',
    message:
      'They helped us develop a comprehensive marketing strategy that resulted in a significant increase in engagement and conversions. Their understanding of the digital landscape is second to none!',
  },
  {
    image: '/profile.jpg',
    name: 'Michael Johnson',
    position: 'Project Manager',
    message:
      'Managing large-scale projects requires attention to detail and clear communication. Their team made the process seamless from start to finish. We were able to deliver on time and under budget.',
  },
  {
    image: '/profile_user.jpg',
    name: 'Samantha Lee',
    position: 'Product Manager',
    message:
      'Their ability to take complex product ideas and turn them into tangible results is amazing. The team is not only technically proficient but also great at adapting to changing requirements throughout the project.',
  },
];
