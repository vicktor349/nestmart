import React, { useEffect, useState } from 'react';
import { useUser } from '@/components/userContext';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Loader } from '@mantine/core';
import Head from 'next/head';
import AccountDashboard from '@/components/dashboard/Dashboard';
import SideNavbar from '@/components/dashboard/SideNavbar';
import Profile from '@/components/dashboard/Profile';

const Dashboard = () =>
{
    const { user, loading } = useUser();
    const router = useRouter();
    const [activeComponent, setActiveComponent] = useState("Dashboard")
    const renderComponent = () =>
    {
        switch (activeComponent)
        {
            case "Dashboard":
                return <AccountDashboard setActiveComponent={activeComponent} />
            case "Profile":
                return <Profile setActiveComponent={activeComponent} />
        }
    }

    useEffect(() =>
    {
        if (!loading && !user)
        {
            const timer = setTimeout(() =>
            {
                router.replace('/signin');
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [user, loading, router]);

    if (loading)
    {
        return (
            <div className='fixed inset-0 flex items-center justify-center bg-white z-[999999]'>
                <div className="loader"></div>
            </div>
        );
    }

    if (!user)
    {
        return (
            <div className='fixed inset-0 flex items-center justify-center bg-white z-[999999]'>
                <div className='grid place-items-center space-y-6'>
                    <Image width={500} height={500} className='w-48 h-48' src={"/images/forbidden.png"} alt="Image displaying not allowed" priority />
                    <p className='text-primary text-3xl'>Oops! You're not authorized to view this page</p>
                    <p className='text-primaryText'>Redirecting you to login page</p>
                    <Loader size={72} color='#3BB77E' />
                </div>
            </div>
        );
    }

    return (
        <>
            <Head>
                <title>Nest | Dashboard</title>
            </Head>
            <div className='lg:flex'>
                <div className='absolute left-0 top-24'>
                    <div className='lg:w-80 lg:flex justify-center shadow-xl fixed ssm:hidden h-screen'>
                        <SideNavbar setActiveComponent={setActiveComponent} activeComponent={activeComponent} />
                    </div>
                </div>
                <div className='lg:flex-1 lg:ml-56 w-full'>
                    <div className='absolute left-96'>
                        {renderComponent()}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
