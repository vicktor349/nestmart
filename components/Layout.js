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
            <div className='ssm:mx-4 sm:mx-8 md:mx-16 lg:mx-20 xl:mx-24 2xl:mx-48 font-Montserrat max-w-screen-2xl'>
                {Displayed && <CategoryNavbar />}
                {children}
                {Displayed && <Footer />}
            </div>
        </div>
    );
};

export default Layout;
