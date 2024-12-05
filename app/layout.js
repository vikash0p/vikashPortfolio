import Layout from '@/components/Layout';
import './globals.css'
import { Chakra_Petch, } from 'next/font/google'
import { LayoutMetaData } from "@/meta/LayoutMetaData";
const inter = Chakra_Petch({ subsets: ['latin'], weight: ['400', '500', '600'] })


export const metadata = LayoutMetaData;





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
