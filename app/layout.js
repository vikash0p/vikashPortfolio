import { Layout, Animationpage } from '@/components'
import './globals.css'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Vikash',
  description: 'Passionate Front-End Developer with a keen eye htmlFor design and a love htmlFor creating seamless user experiences. Proficient in HTML, CSS, JavaScript, and responsive design principles. Experienced in translating UI/UX designs into interactive websites. Committed to optimizing performance and staying updated with the latest web technologies. Let\'s craft the web together.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body  className={`${inter.className} bg-primary/60 `}>
        <Layout>
          <Animationpage>
            <main className='px-2 mb-32 md:px-3 lg:px-4 xl:px-5 lg:mb-0'>
              {children}
            </main>
          </Animationpage>
        </Layout>
      </body>
    </html>
  )
}
