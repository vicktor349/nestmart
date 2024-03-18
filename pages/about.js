import Head from 'next/head'
import Image from 'next/image'
import React from 'react'


const About = () =>
{
    return (
        <>
            <Head>
                <title>Nest | About</title>
            </Head>
            <div className='grid grid-cols-2 my-20'>
                <div>
                    <Image src={"/images/aboutpageimages/about.jpg"}
                        alt='Woman Cooking'
                        width={300}
                        height={300}
                        className='rounded-xl w-96 h-[30rem]'
                    />
                </div>
                <div className='leading-7'>
                    <p className='font-bold text-primaryText text-5xl'>Welcome to Nest</p>
                    <p className='my-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate id est laborum.
                    </p>
                    <p className='my-6'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate id est laborum.
                    </p>
                </div>
            </div>
        </>
    )
}

export default About