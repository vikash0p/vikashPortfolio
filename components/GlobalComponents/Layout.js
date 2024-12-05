'use client'
import React from 'react'

import TopLeftImage from './TopLeftImage'
import Footer from './Footer'
import Navbar from './Navbar'
import Header from './Header'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = ({ children }) => {
    return (
        <main className='px-1 m-auto max-w-7xl md:px-3 lg:px-0 '>
            <TopLeftImage />
            <Navbar />
            <Header />
            {children}
            <Footer />
            <ToastContainer />
        </main>
    )
}

export default Layout
