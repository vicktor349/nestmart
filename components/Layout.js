import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import CategoryNavbar from './CategoryNavbar';
import { useRouter } from 'next/router';
import ScrollToTop from './ScrollToTop';

const Layout = ({ children }) =>
{
    const router = useRouter();
    const Displayed = router.pathname !== '/signin' && router.pathname !== '/signup' && router.pathname !== '/404' && router.pathname !== '/resetpassword' && router.pathname !== '/resetpasswordform' && router.pathname !== '/dashboard';
    const Display = router.pathname !== '/cart'
    return (
        <div>
            <ScrollToTop />
            <Navbar />
            <div className='ssm:mx-4 sm:mx-8 md:mx-16 lg:mx-20 xl:mx-24 2xl:mx-48 max-w-screen-2xl'>
                {Display && Displayed && <CategoryNavbar />}
                {children}
                {Displayed && <Footer />}
            </div>
        </div>
    );
};

export default Layout;
