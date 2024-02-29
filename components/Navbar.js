import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const Navbar = () =>
{
    return (
        <nav className="mt-3">
            <div className='flex items-center'>
                <div className="flex items-center">
                    <Image src={"/images/logo.svg"} width={90} height={90} alt="Nest Mart Logo" />
                    <section className='leading-3 ml-2'>
                        <Link className='text-primary text-5xl font-bold select-none' href="/">Nest</Link>
                        <p className="text-primaryText">MART & GROCERY</p>
                    </section>
                </div>
                <div className='border-2 rounded-md border-[#BCE3C9] w-[30rem]'>
                    <section className='flex items-center py-2 pr-2 pl-3'>
                        <p className="hover:cursor-pointer" >All Categories</p>
                        <Image src={"/images/icons/downwardarrow.svg"} height={10} width={10} alt='Downward Arrow' />
                        <input type="text" className='w-[20rem] pl-2 outline-none' placeholder='Search for items...' />
                        <Image src={"/images/icons/search.svg"} width={20} height={20} alt='Search Icon' className="hover:cursor-pointer ml-1" />
                    </section>
                </div>
                <div>
                    <div className="border-[#ECECEC] rounded-sm border hover:cursor-pointer">
                        <section className='py-2 px-1 flex items-center'>
                            <Image src={"/images/icons/mappoint.svg"} alt="map point" height={20} width={20} />
                            <h3 className="text-primary px-2">Your Location</h3>
                            <Image src={"/images/icons/downwardarrow.svg"} height={10} width={10} alt='Downward Arrow' />
                        </section>
                    </div>
                </div>
            </div>
        </nav >
    )
}

export default Navbar