import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import CategoryNavbar from './CategoryNavbar'
import BreadCrumb from './BreadCrumb'

const Layout = ({ children }) =>
{
    return (
        <div>
            <Navbar />
            <CategoryNavbar />
            <BreadCrumb
                homeElement="Home"
                separator=">"
                containerClasses="breadcrumbs"
                listClasses="breadcrumb-item"
                activeClasses="active"
                capitalizeLinks={true}
            />
            {children}
            <Footer />
        </div>
    )
}

export default Layout