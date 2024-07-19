import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { CiMenuBurger } from "react-icons/ci";
import { CgClose } from "react-icons/cg";
import { BsCart2 } from "react-icons/bs";

const Navbar = () =>
{
    const [isOpened, setIsOpened] = useState(false)
    const location = useRouter()
    const activeColor = (p) => location.pathname === p ? "#3BB77E" : "#253D4E"
    const handleToggle = () =>
    {
        setIsOpened(!isOpened)
    }
    const closeMobileMenu = () =>
    {
        setIsOpened(false)
    }

    return (
        <nav className="bg-[rgb(255,255,255)] z-[9999] sticky top-0 h-24 grid shadow-xl">
            <div className='flex items-center'>
                {/* burger icon */}
                <div className="ssm:flex xl:hidden">
                    {
                        !isOpened ?
                            <CiMenuBurger
                                className='w-6 h-6 mb-1 hover:cursor-pointer font-light' alt="burger icon" onClick={handleToggle} />
                            :
                            <CgClose
                                className='w-6 h-6 hover:cursor-pointer' alt="burger icon" onClick={handleToggle} />
                    }
                </div>
                {/* MOBILE DRAWER */}
                {
                    isOpened ?
                        <div className='absolute mt-64 bg-white w-full'>
                            <div className='mx-4 mb-6'>
                                <ul className="space-y-5">
                                    <li>
                                        <Link href="/" className="text-primaryText block" style={{ color: activeColor("/") }} onClick={closeMobileMenu}>Home</Link>
                                    </li>
                                    <li>
                                        <Link href="/about" className="text-primaryText block" style={{ color: activeColor("/about") }} onClick={closeMobileMenu}>About</Link>
                                    </li>
                                    <li>
                                        <Link href="/shop" className="text-primaryText block" style={{ color: activeColor("/shop") }} onClick={closeMobileMenu}>Shop</Link>
                                    </li>
                                    <li>
                                        <Link href="/contact" className="text-primaryText block" style={{ color: activeColor("/contact") }} onClick={closeMobileMenu}>Contact</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        :
                        ""
                }
                {/* DESKTOP VIEW */}
                {/* DIV LOGO */}
                <div className="items-center ssm:hidden xl:flex">
                    <Link href="/">
                        <Image src={"/images/logo.png"} width={100} height={100} alt="Nest Mart Logo" className='h-10 w-12' priority />
                    </Link>
                    <section className='leading-3 ml-2'>
                        <Link className='text-primary text-4xl font-bold select-none ' href="/">Nest</Link>
                        <p className="text-primaryText text-[10px]">MART & GROCERY</p>
                    </section>
                </div>
                {/* SEARCHBAR DIV */}
                <div className='border-2 rounded-md border-[#BCE3C9] w-[30rem] mx-auto ssm:hidden lg:flex justify-center'>
                    <section className='flex items-center py-2 px-1'>
                        <p className="hover:cursor-pointer font-bold text-sm text-primary" >All Categories</p>
                        <Image src={"/images/icons/downwardarrow.svg"} height={10} width={10} alt='Downward Arrow' className='w-4 h-4 mt-1' />
                        <input type="text" className='w-[20rem] text-[#9ca3af] pl-2 outline-none' placeholder='Search for items...' />
                        <Image src={"/images/icons/search.svg"} width={20} height={20} alt='Search Icon' className="hover:cursor-pointer ml-1" />
                    </section>
                </div>
                {/* THIRD SECTION OF DIV */}
                <div className='flex items-center select-none ml-auto space-x-7'>
                    {/* Cart div */}
                    <div className='mb-1 -mr-4'>
                        <section className='flex items-center'>
                            <BsCart2 className="h-6 w-6" />
                            <div className="absolute ml-3 -mt-5 w-6 h-6 bg-primary text-white border border-primary rounded-full flex items-center justify-center">2</div>
                            <Link href="#" className="text-[#7E7E7E] ssm:hidden xl:flex">Cart</Link>
                        </section>
                    </div>
                    <div className='mb-1'>
                        <section className='flex items-center'>
                            <Image src={"/images/icons/profile.svg"} width={20} height={20} alt="cycle icon" className="h-10 w-10" />
                            <Link href="/signin" className="text-[#7E7E7E]">SignIn</Link>
                        </section>
                    </div>
                </div>
            </div>
        </nav >
    )
}

export default Navbar