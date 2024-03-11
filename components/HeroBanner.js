import Image from 'next/image'
import React from 'react'

const HeroBanner = () =>
{
    return (
        <div class="bg-[url('/images/herobanner/heroBanner1.png')] mt-10 w-full ssm:h-[15rem] md:h-[27rem] lg:h-[33rem] border-transparent rounded-3xl flex flex-col justify-center">
            <div class="ml-6 md:ml-24 md:text-left leading-10">
                <p class="text-primaryText text-2xl md:text-5xl font-semibold">Fresh Vegetables</p>
                <p class="text-primaryText text-2xl md:text-5xl font-semibold">Big discount</p>
                <p class="text-[#7E7E7E]">Save up to 50% off on your first order</p>
                <div class="bg-white mt-4 md:mt-6 w-full md:w-96 h-16 rounded-full flex items-center">
                    <img src="/images/icons/email.svg" alt="email icon" width="20" height="20" class="w-6 h-6 mx-5" />
                    <input type="text" class="flex-grow rounded-full text-[#9ca3af] px-4 outline-none" placeholder="Your email address" />
                    <button class="bg-primary h-16 rounded-full text-white w-24 md:w-32 ml-2 md:ml-0">Subscribe</button>
                </div>
            </div>
        </div>

    )
}

export default HeroBanner;