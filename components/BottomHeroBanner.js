import Image from 'next/image'
import React from 'react'

const BottomHeroBanner = () =>
{
    return (
        <div className="bg-[url('/images/herobanner/heroBanner1.png')] mt-10 w-full ssm:h-[20rem] sm:h-[25rem] md:h-[27rem] lg:h-[33rem] border-transparent rounded-3xl flex flex-col justify-center">
            <div className="ml-6 md:ml-24 md:text-left leading-10 h-72 w-fit">
                <p className="text-primaryText ssm:text-xl sm:text-2xl lg:text-3xl xl:text-5xl font-semibold -ml-1">Stay home & get your daily</p>
                <p className="text-primaryText ssm:text-xl sm:text-2xl lg:text-3xl xl:text-5xl font-semibold -ml-1">needs from our shop</p>
                <p className="text-[#7E7E7E] mt-6 md:text-lg lg:text-xl">Start You'r Daily Shopping with <span className="text-primary hover:underline hover:cursor-pointer">Nest Mart</span></p>
                <div className="bg-white mt-4 md:mt-6 ssm:w-[17rem] sm:w-full h-16 rounded-full flex items-center">
                    <Image src={"/images/icons/email.svg"} alt="email icon" width="20" height="20" className="w-6 h-6 ssm:mx-2 sm:mx-5" priority />
                    <input type="text" className="flex-grow rounded-full text-[#9ca3af] ssm:px-2 sm:px-4 outline-none" placeholder="Your email address" />
                    <button className="bg-primary h-16 rounded-full text-white ssm:hidden sm:block sm:w-24 md:w-32 ml-2 md:ml-0">Subscribe</button>
                </div>
            </div>
        </div>
    )
}

export default BottomHeroBanner;