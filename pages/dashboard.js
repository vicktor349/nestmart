import React, { useEffect, useState } from 'react';
import { useUser } from '@/components/userContext';
import { useRouter } from 'next/router';
import Head from 'next/head';
import SideNavbar from '@/components/dashboard/SideNavbar';
import Profile from '@/components/dashboard/Profile';
import Order from '@/components/dashboard/Order';
import Inbox from '@/components/dashboard/Inbox';
import NotAuthorized from '@/components/NotAuthorized';
import Loader from '@/components/Loader';

const Dashboard = () =>
{
    const { user, loading } = useUser();
    const router = useRouter();
    const [activeComponent, setActiveComponent] = useState("Profile")
    useEffect(() =>
    {
        if (router.isReady)
        {
            const { component } = router.query
            if (component)
            {
                setActiveComponent(component)
            }
        }
    }, [router.isReady, router.query])
    const handleSetActiveComponent = (component) =>
    {
        setActiveComponent(component)
        router.push({
            pathname: '/dashboard',
            query: { component }
        },
            undefined,
            { shallow: true }
        )
    }
    const renderComponent = () =>
    {
        switch (activeComponent)
        {
            case "Profile":
                return <Profile setActiveComponent={handleSetActiveComponent} />
            case "Order":
                return <Order setActiveComponent={handleSetActiveComponent} />
            case "Inbox":
                return <Inbox setActiveComponent={handleSetActiveComponent} />
        }
    }

    useEffect(() =>
    {
        if (!loading && !user)
        {
            router.replace('/signin');
        }
    }, [user, loading, router]);

    if (loading)
    {
        return (
            <Loader />
        );
    }

    if (!user)
    {
        return (
            <NotAuthorized />
        );
    }
    return (
        <>
            <Head>
                <title>Nest | Dashboard</title>
            </Head>
            <div className='lg:flex'>
                <div className='absolute left-0'>
                    <div className='lg:w-56 xl:w-64 2xl:w-72 lg:flex justify-center shadow-xl fixed top-20 ssm:hidden h-screen'>
                        <SideNavbar setActiveComponent={handleSetActiveComponent} activeComponent={activeComponent} />
                    </div>
                </div>
                <div className='flex-1 lg:ml-44 xl:ml-52 2xl:ml-40 w-full'>
                    <div className='left-80'>
                        {renderComponent()}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
