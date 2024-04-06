import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import CategoryNavbar from './CategoryNavbar'
import BreadCrumb from './BreadCrumb'
import { useRouter } from 'next/router'


const Layout = ({ children }) =>
{
    const router = useRouter()
    const Displayed = router.pathname === "/signin" || router.pathname === "/signup";
    return (
        <div>
            <Navbar />
            {!Displayed && <CategoryNavbar />}
            {/* <BreadCrumb
                homeElement="Home"
                separator=">"
                containerClasses="breadcrumbs"
                listClasses="breadcrumb-item"
                activeClasses="active"
                capitalizeLinks={true}
            /> */}
            {children}
            <Footer />
        </div>
    )
}

export default Layout