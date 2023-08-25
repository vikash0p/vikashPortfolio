import React from 'react'

import { Footer, Header, Navbar, TopLeftImage } from '@/components'


const Layout = ({ children }) => {
    return (
        <div className='w-full min-h-screen  bg-site bg-cover bg-center bg-no-repeat  text-white '>
            <TopLeftImage />
            <Navbar />
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default Layout
