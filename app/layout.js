import { Layout } from '@/components'
import './globals.css'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body className={`${inter.className} bg-primary/60 `} >
        <Layout>
            <main className='px-2 mb-32 md:px-3 lg:px-4 xl:px-5 lg:mb-0'>
              {children}
            </main>
        </Layout>
      </body>
    </html>
  )
}
