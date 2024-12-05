import Layout from '@/components/GlobalComponents/Layout';
import './globals.css'
import { LayoutMetaData } from "@/meta/LayoutMetaData";
import { Chakra } from "@/utils/FontContainer";


export const metadata = LayoutMetaData;





export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body className={`${Chakra.className}  bg-site bg-cover bg-center bg-no-repeat  text-white`} >
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  )
}
