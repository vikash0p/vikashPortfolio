'use client'
import React from 'react'

import { Footer, Header, Navbar, TopLeftImage } from '@/components'


const Layout = ({ children }) => {
    return (
        <div className='max-w-7xl m-auto px-1 md:px-3 lg:px-0 '>
            <Navbar />
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default Layout
