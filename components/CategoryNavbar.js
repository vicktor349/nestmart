import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CategoryNavbar = () =>
{
    return (
        <div className='ssm:hidden lg:flex items-center justify-between my-6'>
            <div className="flex flex-row items-center bg-primary w-52 py-2 px-2 text-white border border-1 border-primary rounded-md hover:cursor-pointer">
                <p className='font-bold'>Browse All Categories</p>
                <Image src={"/images/icons/downwardarrow.svg"} alt='Downward arrow' height={100} width={100} className='h-5 w-5 mt-1' />
            </div>
            <div className='flex items-center'>
                <Image src={"/images/icons/fire.svg"} width={100} height={100} className='w-5 h-5' alt='fire icon' />
                <Link href="#" className="font-semibold hover:text-[#7E7E7E] text-primaryText">Deals</Link>
            </div>
            <Link href="#" className="font-semibold text-primaryText hover:text-[#7E7E7E]">Home</Link>
            <Link href="#" className='font-semibold text-primaryText hover:text-[#7E7E7E]'>About</Link>
            <Link href="#" className='font-semibold text-primaryText hover:text-[#7E7E7E]'>Shop</Link>
            <Link href="#" className='font-semibold text-primaryText hover:text-[#7E7E7E]'>Vendors</Link>
            <Link href="#" className='font-semibold text-primaryText hover:text-[#7E7E7E]'>Mega menu</Link>
            <Link href="#" className='font-semibold text-primaryText hover:text-[#7E7E7E]'>Blog</Link>
            <Link href="#" className='font-semibold text-primaryText hover:text-[#7E7E7E]'>Pages</Link>
            <Link href="#" className='font-semibold text-primaryText hover:text-[#7E7E7E]'>Contact</Link>
            <div className='ssm:hidden xl:flex items-center'>
                <Image src={"/images/icons/headphones.svg"} alt="headphones icon" width={100} height={100} className='h-10 w-10' />
                <section className="leading-3 ml-2">
                    <p className='text-primary text-2xl font-bold'>1900 - 888</p>
                    <p className='text-[#7E7E7E] text-[13px]'>24/7 Support Center</p>
                </section>
            </div>
        </div>
    )
}

export default CategoryNavbar