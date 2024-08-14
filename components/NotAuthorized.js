import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

const NotAuthorized = () =>
{
    return (
        <>
            <Head>
                <title>Nest | Not Authorized</title>
            </Head>
            <div className='fixed inset-0 flex items-center justify-center bg-white z-[999999] h-[90vh]'>
                <div className='grid place-items-center space-y-3 md:space-y-6'>
                    <Image width={500} height={500} className='h-64 w-64' src={"/images/caution.jpg"} alt="Image displaying not allowed" priority />
                    <p className='text-primary ssm:text-sm sssms:text-base ssms:text-xl md:text-3xl'>Oops! You're not authorized to view this page</p>
                    <p className='text-primaryText'>Redirecting you to sign in page</p>
                </div>
            </div>
        </>
    )
}

export default NotAuthorized