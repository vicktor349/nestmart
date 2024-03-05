import Image from 'next/image'
import React from 'react'

const HeroBanner = () =>
{
    return (
        <div className="bg-[url('/images/herobanner/heroBanner1.png')] mt-10 w-full ssm:h-[15rem] md:h-[27rem] lg:h-[33rem] border-transparent rounded-3xl objec">
            <div className="absolute ssm:top-[25%] md:top-[30%] lg:top-[50%] left-[10%] md:leading-[4rem]">
                <p className='text-primaryText ssm:text-2xl md:text-5xl font-semibold'>Fresh Vegetables</p>
                <p className='text-primaryText ssm:text-2xl md:text-5xl font-semibold'>Big discount</p>
                <p className='text-[#7E7E7E]'>Save up to 50% off on your first order</p>
            </div>
        </div>
    )
}

export default HeroBanner;