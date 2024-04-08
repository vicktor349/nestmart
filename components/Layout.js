import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import CategoryNavbar from './CategoryNavbar';
import { useRouter } from 'next/router';

const Layout = ({ children }) =>
{
    const router = useRouter();
    const Displayed = router.pathname !== '/signin' && router.pathname !== '/signup' && router.pathname !== '/404';

    return (
        <div>
            <Navbar />
            {Displayed && <CategoryNavbar />}
            {/* <BreadCrumb
                homeElement="Home"
                separator=">"
                containerClasses="breadcrumbs"
                listClasses="breadcrumb-item"
                activeClasses="active"
                capitalizeLinks={true}
            /> */}
            {children}
            {Displayed && <Footer />}
        </div>
    );
};

export default Layout;
