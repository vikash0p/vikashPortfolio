'use client'
import React from 'react'

import { Footer, Header, Navbar,  } from '@/components'
import TopLeftImage from './TopLeftImage'


const Layout = ({ children }) => {
    return (
        <div className='max-w-7xl m-auto px-1 md:px-3 lg:px-0 '>
            <TopLeftImage />
            <Navbar />
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default Layout
