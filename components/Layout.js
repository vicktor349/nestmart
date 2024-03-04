import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import CategoryNavbar from './CategoryNavbar'

const Layout = ({ children }) =>
{
    return (
        <div>
            <Navbar />
            <CategoryNavbar />
            {children}
            <Footer />
        </div>
    )
}

export default Layout