'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';
import SocialMedia from './ReusableComponent/SocialMedia';
import Link from 'next/link';
import { project } from '@/data';


const links = [
  { Name: 'About', href: '/about' },
  { Name: 'Portfolio', href: '/portfolio' },
  { Name: 'Project', href: '/work' },
  { Name: 'Blog', href: '/blog' },
  { Name: 'Contact', href: '/contact' },
];
const Services = [
  { Name: 'React Development', href: '/services/react' },
  { Name: 'Next Development', href: '/services/next' },
  { Name: 'Web Development', href: '/services/web' },
  { Name: 'Html Developers', href: '/server/html' },
];
const Footer = () => {
  const newProject = [...project.slice().reverse().slice(0, 5)];
  return (
    <motion.footer
      className="px-5 py-10 my-20 shadow-lg lg:mt-20 md:px-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Footer container */}
      <div className="grid max-w-screen-xl grid-cols-1 gap-8 mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div className='flex flex-col items-center w-full gap-10 md:gap-10 lg:5'>
          <div className="relative w-20 h-20 aspect-square back2">
            <Image
              src="https://res.cloudinary.com/dhttnehwp/image/upload/v1733392712/vikashProtfolio/vueogxjajke3lcwmkn8i.webp"
              alt="avatar"
              fill
              className="object-cover object-center"
              priority={true}
              quality={75}
            />
          </div>
          <SocialMedia />
        </div>

        {/* Quick Links */}
        <div>
          <h1 className="mb-4 text-lg font-semibold">Quick Links</h1>
          <ul className="space-y-2">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:underline focus:outline-none focus:underline">{link.Name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h1 className="mb-4 text-lg font-semibold">Projects</h1>
          <ul className="space-y-2">
            {newProject.map((value) => (
              <li key={value.link}>
                <Link href={value.link}  className="hover:underline focus:outline-none focus:underline">{value.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h1 className="mb-4 text-lg font-semibold">Services</h1>
          <ul className="space-y-2">
            {Services.map((link) => (
              <li key={link.href}>
                <Link href={link.href}  className="hover:underline focus:outline-none focus:underline">{link.Name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="flex flex-col items-center justify-between max-w-screen-xl pt-5 mx-auto mt-10 text-center border-t border-gray-700">

        {/* Footer Text */}
        <motion.p
          className="text-sm "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          © {new Date().getFullYear()}. All rights reserved by <span className='font-semibold text-center text-red-600'>Vikash Pandat</span>
        </motion.p>
      </div>
    </motion.footer>
  );
};

export default Footer;
