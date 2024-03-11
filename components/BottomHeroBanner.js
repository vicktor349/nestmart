import Image from 'next/image'
import React from 'react'

const BottomHeroBanner = () =>
{
    return (
        <div className="bg-[url('/images/herobanner/heroBanner1.png')] mt-10 w-full ssm:h-[15rem] md:h-[27rem] lg:h-[33rem] border-transparent rounded-3xl flex items-center">
            <div className='ml-24 leading-10'>
                <p className='text-primaryText ssm:text-2xl md:text-5xl font-semibold'>Stay home & get your daily</p>
                <p className='text-primaryText ssm:text-2xl md:text-5xl font-semibold'>needs from our shop</p>
                <p className='text-[#7E7E7E]'>Start You'r Daily Shopping with <span className='text-primary hover:cursor-pointer hover:underline'>Nest Mart</span></p>
                <div className='bg-white w-96 h-16 rounded-[6rem] flex items-center mt-4'>
                    <Image src={"/images/icons/email.svg"} alt='email icon' width={100} height={100} className='w-6 h-6 mx-5' />
                    <input type="text" className='rounded-[6rem] text-[#9ca3af] outline-none' placeholder='Your email address' />
                    <button className='bg-primary h-16 rounded-[6rem] text-white w-72 l-6'>Subscribe</button>
                </div>
            </div>
        </div>

    )
}

export default BottomHeroBanner;