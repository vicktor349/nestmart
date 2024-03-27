import OurTeam from '@/components/about/OurTeam'
import WhatweprovideCard from '@/components/about/WhatweprovideCard'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'


const About = () =>
{
    return (
        <div className='mb-28'>
            <Head>
                <title>Nest | About</title>
            </Head>
            <div className='grid grid-cols-2 mt-5 gap-10'>
                <div className='w-fit'>
                    <Image
                        src={"/images/aboutpageimages/about.png"}
                        alt='Woman Cooking'
                        width={500}
                        height={500}
                        className='rounded-2xl hover:cursor-pointer select-none'
                        priority
                    />
                </div>
                <div className='text-[#7E7E7E] flex flex-col justify-between'>
                    <div>
                        <p className='font-bold text-primaryText xl:text-5xl text-center'>Welcome to Nest</p>
                        <p className='ssm:my-2 xl:my-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            reprehenderit in voluptate id est laborum.
                        </p>
                        <p className='ssm:my-2 xl:my-4'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            reprehenderit in voluptate id est laborum.
                        </p>
                    </div>
                    <div className='grid grid-cols-3 gap-5 relative'>
                        <Image
                            src={"/images/aboutpageimages/strawberry.png"}
                            alt="chef spraying on strawberry"
                            height={500}
                            width={500}
                            className='rounded-2xl hover:cursor-pointer select-none'
                        />
                        <Image
                            src={"/images/aboutpageimages/garlic.png"}
                            alt='Picture of garlic bowl'
                            height={500}
                            width={500}
                            className='rounded-2xl hover:cursor-pointer select-none'
                        />
                        <Image
                            src={"/images/aboutpageimages/chef.png"}
                            alt='Picture of chef making a plate of food'
                            height={500}
                            width={500}
                            className='rounded-2xl hover:cursor-pointer select-none'
                        />
                    </div>
                </div>
            </div>


            {/* TITLE DIV */}
            <div className='flex items-center justify-center'>
                <h1 className='text-3xl text-primaryText mb-6 font-bold'>
                    What we provide?
                </h1>
            </div>
            <WhatweprovideCard />
            {/* PARTNERS DIV */}
            <div className='mt-24 grid grid-cols-2 gap-10'>
                <Image src={"/images/aboutpageimages/aboutPartners.png"} alt='About Image' width={500} height={500} className='object-contain w-fit h-fit' />
                <div>
                    <p className="text-secondaryText font-bold text-3xl">Our Performance</p>
                    <h2 className='text-4xl font-bold text-primaryText my-10'>Your Partner for e-commerce grocery solution</h2>
                    <p className='text-secondaryText leading-8'>
                        Ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                        doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
                        inventore veritatis et quasi architecto
                    </p>
                    <p className='text-secondaryText leading-8 mt-7'>
                        Ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                        doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
                        inventore veritatis et quasi architecto
                    </p>
                </div>
            </div>
            {/* WHO WE ARE DIV */}
            <div className='grid grid-cols-3 mt-32 gap-10 leading-8'>
                <div className='w-full'>
                    <h1 className="text-primaryText text-3xl font-semibold">Who we are</h1>
                    <p className="text-secondaryText">
                        Volutpat diam ut venenatis tellus in metus. Nec dui nunc
                        mattis enim ut tellus eros donec ac odio orci ultrices in.
                        ellus eros donec ac odio orci ultrices in.
                    </p>
                </div>
                <div className='w-full'>
                    <h1 className="text-primaryText text-3xl font-semibold">Our history</h1>
                    <p className="text-secondaryText">
                        Volutpat diam ut venenatis tellus in metus. Nec dui nunc
                        mattis enim ut tellus eros donec ac odio orci ultrices in.
                        ellus eros donec ac odio orci ultrices in.
                    </p>
                </div>
                <div className='w-full'>
                    <h1 className="text-primaryText text-3xl font-semibold">Our mission</h1>
                    <p className="text-secondaryText">
                        Volutpat diam ut venenatis tellus in metus. Nec dui nunc
                        mattis enim ut tellus eros donec ac odio orci ultrices in.
                        ellus eros donec ac odio orci ultrices in.
                    </p>
                </div>
            </div>
            <Image src={"/images/aboutpageimages/teamstats.png"} width={2000} height={2000} alt='Team stats' className='w-full my-24' />
            {/* OUR TRAM */}
            <OurTeam />
        </div>
    )
}

export default About