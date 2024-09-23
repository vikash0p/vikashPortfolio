import { Layout } from '@/components'
import './globals.css'
import { Chakra_Petch, Inter, PT_Serif } from 'next/font/google'


const inter = Chakra_Petch({ subsets: ['latin'],weight:['400','500','600'] })




export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body className={`${inter.className}  bg-site bg-cover bg-center bg-no-repeat  text-white`} >
        <Layout>
            <main className=''>
              {children}
            </main>
        </Layout>
      </body>
    </html>
  )
}
