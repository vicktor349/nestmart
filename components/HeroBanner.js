import Image from 'next/image'
import React from 'react'

const HeroBanner = () =>
{
    return (
        <div className="bg-[url('/images/herobanner/heroBanner1.png')] mt-10 w-full ssm:h-[15rem] md:h-[27rem] lg:h-[33rem] border-transparent rounded-3xl flex items-center">
            <div className="ml-24">
                <p className='text-primaryText ssm:text-2xl md:text-5xl font-semibold'>Fresh Vegetables</p>
                <p className='text-primaryText ssm:text-2xl md:text-5xl font-semibold'>Big discount</p>
                <p className='text-[#7E7E7E]'>Save up to 50% off on your first order</p>
                <div className='bg-white rounded-[6rem] flex items-center'>
                    <Image src={"/images/icons/email.svg"} alt='email icon' width={100} height={100} className='w-6 h-6 mx-5' />
                    <input type="text" className='rounded-[6rem] text-[#9ca3af] outline-none' placeholder='Your email address' />
                    <button className='bg-primary rounded-[6rem] text-white w-36 ml-6'>Subscribe</button>
                </div>
            </div>
        </div>
    )
}

export default HeroBanner;