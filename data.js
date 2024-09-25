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
  { name: 'Projects', path: '/work', icon: <FaProjectDiagram /> },
  { name: 'Blogs', path: '/blog', icon: <FaBlog /> },

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



export const project = [
  {
    id: 1,
    image: '/project/blog.png',
    link: 'https://frontendblog-nu.vercel.app',
    title: 'modern blog',
  },
  {
    id: 2,
    image: '/project/tattoo.png',
    link: 'https://karmatattoo.vercel.app',
    title: 'Fresh produce',
  },
  {
    id: 3,
    image: '/project/pizza.png',
    link: 'https://frontendpizza.vercel.app',
    title: "hop pizza",
  },
  {
    id: 4,
    image: '/project/fashionStore.png',
    link: 'https://storefashion.vercel.app',
    title: 'fashion store',
  },
  {
    id: 5,
    image: '/project/eligentjewllery.png',
    link: 'https://jewllery-eight.vercel.app',
    title: 'elegant jewellery',
  },
  {
    id: 6,
    image: '/project/mantrayoga.png',
    link: 'https://yoga-gilt-beta.vercel.app',
    title: 'mantra yoga',
  },
  {
    id: 7,
    image: '/project/delicuious.png',
    link: 'https://hotals.vercel.app',
    title: 'Delicious food',
  },
  {
    id: 8,
    image: '/project/laslas.png',
    link: 'https://lasvpn.vercel.app',
    title: 'laslas vpn',
  },
  {
    id: 9,
    image: '/project/portfoioone.png',
    link: 'https://portfolio-silk-rho-11.vercel.app',
    title: 'personal portfolio',
  },
  {
    id: 10,
    image: '/project/barshop.png',
    link: 'https://barshop.vercel.app',
    title: 'bar shop',
  },
  {
    id: 11,
    image: '/project/fruitShop.png',
    link: 'https://fruitsshop.vercel.app/shop',
    title: 'Fruits shop',
  },
  {
    id: 12,
    image: '/project/grocery.png',
    link: 'https://groceryapp-ten.vercel.app',
    title: 'Grocery shop',
  },
  {
    id: 13,
    image: '/project/showfit.png',
    link: 'https://fabfit.netlify.app',
    title: 'ShowFit',
  },
  {
    id: 14,
    image: '/project/youotube.png',
    link: 'https://youtebe.netlify.app',
    title: 'youtube clone',
  },
  {
    id: 15,
    image: '/project/protein.png',
    link: 'https://protein.netlify.app/shop',
    title: 'Fitness club',
  },
  {
    id: 16,
    image: '/project/todo.png',
    link: 'https://tdoo.netlify.app',
    title: 'todo app',
  },

]


