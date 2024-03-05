import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link'

const Navbar = () =>
{
    const [isOpened, setIsOpened] = useState(true)
    const handleToggle = () =>
    {
        setIsOpened(!isOpened)
    }
    return (
        <nav className="mt-3">
            <div className='flex items-center'>
                {/* burger icon */}
                <div className="ssm:flex xl:hidden">
                    {
                        isOpened ?
                            <Image src={"/images/icons/burger.svg"} height={100} width={100}
                                className='w-8 h-8 hover:cursor-pointer' alt="burger icon" onClick={handleToggle} />
                            :
                            <Image src={"/images/icons/close.svg"} height={100} width={100}
                                className='w-8 h-8 hover:cursor-pointer' alt="burger icon" onClick={handleToggle} />
                    }
                </div>
                {/* DIV LOGO */}
                <div className="items-center ssm:hidden lg:flex">
                    <Link href="/">
                        <Image src={"/images/logo.svg"} width={100} height={100} alt="Nest Mart Logo" className='h-14 w-14' />
                    </Link>
                    <section className='leading-3 ml-2'>
                        <Link className='text-primary text-4xl font-bold select-none ' href="/">Nest</Link>
                        <p className="text-primaryText text-[10px]">MART & GROCERY</p>
                    </section>
                </div>
                {/* SEARCHBAR DIV */}
                <div className='border-2 rounded-md border-[#BCE3C9] w-[30rem] mx-auto ssm:hidden lg:flex justify-center'>
                    <section className='flex items-center py-2 px-1'>
                        <p className="hover:cursor-pointer font-bold text-sm" >All Categories</p>
                        <Image src={"/images/icons/downwardarrow.svg"} height={10} width={10} alt='Downward Arrow' />
                        <input type="text" className='w-[20rem] pl-2 outline-none' placeholder='Search for items...' />
                        <Image src={"/images/icons/search.svg"} width={20} height={20} alt='Search Icon' className="hover:cursor-pointer ml-1" />
                    </section>
                </div>
                {/* THIRD SECTION OF DIV */}
                <div className='flex items-center select-none ml-auto'>
                    <div className="border-[#ECECEC] rounded-sm border hover:cursor-pointer shadow-xl mr-4">
                        <section className='py-2 px-1 ssm:hidden xl:flex items-center'>
                            <Image src={"/images/icons/mappoint.svg"} alt="map point" height={20} width={20} />
                            <h3 className="text-primary px-1">Your Location</h3>
                            <Image src={"/images/icons/downwardarrow.svg"} height={100} width={10} alt='Downward Arrow' />
                        </section>
                    </div>
                    {/* compare div */}
                    <div>
                        <section className='ssm:hidden xl:flex items-center'>
                            <Image src={"/images/icons/cycle.svg"} width={20} height={20} alt="cycle icon" className="h-7 w-7" />
                            <div className="absolute ml-4 -mt-6 w-6 h-6 bg-primary text-white border border-primary rounded-full flex items-center justify-center">3</div>
                            <Link className="text-[#7E7E7E] ml-3" href="#">Compare</Link>
                        </section>
                    </div>
                    <div className='mx-4'>
                        <section className='flex items-center'>
                            <Image src={"/images/icons/love.svg"} width={100} height={100} alt="cycle icon" className="h-7 w-7" />
                            <div className="absolute ml-4 -mt-6 w-6 h-6 bg-primary text-white border border-primary rounded-full flex items-center justify-center">6</div>
                            <Link href="#" className="text-[#7E7E7E] ml-3 ssm:hidden xl:flex">Wishlist</Link>
                        </section>
                    </div>
                    <div>
                        <section className='flex items-center'>
                            <Image src={"/images/icons/cart.svg"} width={20} height={20} alt="cycle icon" className="h-7 w-7" />
                            <div className="absolute ml-4 -mt-6 w-6 h-6 bg-primary text-white border border-primary rounded-full flex items-center justify-center">2</div>
                            <Link href="#" className="text-[#7E7E7E] ml-3 ssm:hidden xl:flex">Cart</Link>
                        </section>
                    </div>
                    <div className='mb-1 ml-2'>
                        <section className='ssm:hidden xl:flex items-center'>
                            <Image src={"/images/icons/profile.svg"} width={20} height={20} alt="cycle icon" className="h-10 w-10" />
                            <Link href="#" className="text-[#7E7E7E]">Account</Link>
                        </section>
                    </div>
                </div>
            </div>
        </nav >
    )
}

export default Navbar