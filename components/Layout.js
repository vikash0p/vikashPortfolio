'use client'
import React from 'react'

import { Footer, Header, Navbar, TopLeftImage } from '@/components'


const Layout = ({ children }) => {
    return (
        <div className='max-w-7xl m-auto '>
            <Navbar />
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default Layout
