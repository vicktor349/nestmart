import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router'
import { MdKeyboardArrowDown } from "react-icons/md";
import { PiHeadphones } from "react-icons/pi";

const CategoryNavbar = () =>
{
    const location = useRouter()
    const activeColor = (p) => location.pathname === p ? "#3BB77E" : "#253D4E"
    return (
        <div className='ssm:hidden lg:flex lg:items-center'>
            <div className="flex flex-row items-center bg-primary w-56 py-2 px-2 text-white border border-1 border-primary rounded-md hover:cursor-pointer">
                <p className='font-semibold'>Browse All Categories</p>
                <MdKeyboardArrowDown className='ml-1' />
            </div>

            <div className='flex items-center ml-auto space-x-12'>
                <Link href="/" className="font-semibold text-primaryText hover:text-[#7E7E7E] text-sm" style={{ color: activeColor("/") }}>Home</Link>
                <Link href="/about" className='font-semibold text-primaryText hover:text-[#7E7E7E] text-sm' style={{ color: activeColor("/about") }}>About</Link>
                <Link href="/shop" className='font-semibold text-primaryText hover:text-[#7E7E7E] text-sm' style={{ color: activeColor("/shop") }}>Shop</Link>
                <Link href="/" className='font-semibold text-primaryText hover:text-[#7E7E7E] text-sm'>Blog</Link>
                <Link href="/contact" className='font-semibold text-primaryText hover:text-[#7E7E7E] text-sm' style={{ color: activeColor("/contact") }}>Contact</Link>
                <div className='ssm:hidden xl:flex items-center'>
                    <PiHeadphones className='h-10 w-10' />
                    <section className="leading-3 ml-2">
                        <p className='text-primary text-2xl font-bold'>1900 - 888</p>
                        <p className='text-[#7E7E7E] text-[13px]'>24/7 Support Center</p>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default CategoryNavbar