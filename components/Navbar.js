import React, { useState, useCallback, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { CiLogout, CiMenuBurger } from 'react-icons/ci';
import { CgClose } from 'react-icons/cg';
import { BsBox2, BsCart2 } from 'react-icons/bs';
import SearchDatabase from './SearchDatabase';
import { useUser } from './userContext';
import { FiUser } from "react-icons/fi";
import { Avatar, Menu } from '@mantine/core';
import { GoMail } from "react-icons/go";
import { GrFavorite } from 'react-icons/gr';
import { RiArrowDownSLine, RiSearch2Line } from "react-icons/ri";
import { useCart } from './CartContext';

const debounce = (func, delay) =>
{
    let timeoutId;
    const debounced = (...args) =>
    {
        if (timeoutId) clearTimeout(timeoutId);
        timeoutId = setTimeout(() =>
        {
            func(...args);
        }, delay);
    };
    debounced.cancel = () =>
    {
        if (timeoutId) clearTimeout(timeoutId);
    };
    return debounced;
};

const Navbar = () =>
{
    const { user, logout } = useUser();
    const [isOpened, setIsOpened] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const { pathname, push } = useRouter();
    const searchContainerRef = useRef(null);


    const activeColor = useCallback(
        (p) => (pathname === p ? '#3BB77E' : '#253D4E'),
        [pathname]
    );

    const handleToggle = () => setIsOpened(!isOpened);
    const closeMobileMenu = () => setIsOpened(false);

    const debouncedSearch = useCallback(
        debounce(async (query) =>
        {
            if (query)
            {
                const results = await SearchDatabase(query);
                setSearchResults(results.slice(0, 10))
            } else
            {
                setSearchResults([]);
            }
        }, 300),
        []
    );

    useEffect(() =>
    {
        debouncedSearch(searchQuery);
        return () =>
        {
            debouncedSearch.cancel();
        };
    }, [searchQuery, debouncedSearch]);

    const handleSearch = async (e) =>
    {
        e.preventDefault();
        setSearchResults([]);
        push(`/searchpage?query=${encodeURIComponent(searchQuery)}`);
    };

    const handleResultClick = () =>
    {
        setSearchResults([]);
        setSearchQuery('');
    };

    const handleClickOutside = (event) =>
    {
        if (
            searchContainerRef.current &&
            !searchContainerRef.current.contains(event.target)
        )
        {
            setSearchResults([]);
        }
    };

    useEffect(() =>
    {
        document.addEventListener('mousedown', handleClickOutside);
        return () =>
        {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // MOBILE MENU CLOSE ON MOUSE CLICK
    const mobileMenuRef = useRef()
    useEffect(() =>
    {
        const handleClickOutside = (event) =>
        {
            if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target))
            {
                setIsOpened(false);
            }
        };

        if (isOpened)
        {
            document.addEventListener('mousedown', handleClickOutside);
        } else
        {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () =>
        {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpened]);

    const { cartItems } = useCart()

    return (
        <nav className="bg-white z-9999 sticky top-0 h-24 grid shadow-xl mb-10 z-[9999]">
            <div className="flex items-center mx-4 sm:mx-8 md:mx-16 lg:mx-20 xl:mx-24 2xl:mx-48 font-Montserrat max-w-screen-2xl">
                <div className="ssm:flex xl:hidden">
                    {!isOpened ? (
                        <CiMenuBurger
                            className="w-6 h-6 mb-1 hover:cursor-pointer font-light"
                            alt="burger icon"
                            onClick={handleToggle}
                        />
                    ) : (
                        <CgClose
                            className="w-6 h-6 hover:cursor-pointer"
                            alt="burger icon"
                            onClick={handleToggle}
                        />
                    )}
                </div>
                {/* MOBILE VIEW */}
                {isOpened && (
                    <div className="absolute mt-72 bg-white w-52 rounded-lg -ml-4 shadow-lg" ref={mobileMenuRef}>
                        <div className="ml-9 my-4">
                            <ul className="space-y-5">
                                {['/', '/about', '/shop', '/contact'].map((path) => (
                                    <li key={path}>
                                        <Link
                                            href={path}
                                            className="text-primaryText block"
                                            style={{ color: activeColor(path) }}
                                            onClick={closeMobileMenu}
                                        >
                                            {path.slice(1) || 'Home'}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}
                <div className="items-center ssm:hidden xl:flex">
                    <Link href="/">
                        <Image
                            src="/images/logo.png"
                            width={100}
                            height={100}
                            alt="Nest Mart Logo"
                            className="h-10 w-12"
                            priority
                        />
                    </Link>
                    <section className="leading-3 ml-2">
                        <Link href="/" className="text-primary text-4xl font-bold select-none">
                            Nest
                        </Link>
                        <p className="text-primaryText text-[10px]">MART & GROCERY</p>
                    </section>
                </div>
                <div className="border-2 rounded-md border-[#BCE3C9] w-[30rem] mx-auto ssm:hidden lg:flex justify-center relative" ref={searchContainerRef}>
                    <section className="flex items-center py-2 px-1">
                        <p className="hover:cursor-pointer font-bold text-sm text-primary">
                            All Categories
                        </p>
                        <RiArrowDownSLine color='#3bb77e' className="w-4 h-4 mt-1" />
                        <form onSubmit={handleSearch} className="flex">
                            <input
                                type="text"
                                className="w-[20rem] text-[#9ca3af] pl-2 outline-none"
                                placeholder="Search for items..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <button type="submit">
                                <RiSearch2Line color="#3bb773" className='hover:cursor-pointer w-5 h-5' />
                            </button>
                        </form>
                    </section>
                    {searchResults.length > 0 && (
                        <div className="absolute bg-white border border-primary w-full mt-12 rounded-md shadow-lg z-50 max-h-72 overflow-y-auto">
                            <ul>
                                {searchResults.map((result) => (
                                    <li key={result.id} className="p-2 hover:bg-gray-200 cursor-pointer">
                                        <Link href={`/${result.table}/${result.id}`} onClick={handleResultClick} className='flex items-center space-x-5'>
                                            <Image src={result.imageurl} width={50} height={50} className='bg-transparent' alt='Images' />
                                            <p className='text-sm'>{result.text}</p>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
                <div className="flex items-center select-none ml-auto space-x-7">
                    <div className="relative mb-1 -mr-4">
                        <section className="flex items-center">
                            <Link href="/cart"><BsCart2 className="h-6 w-6" /></Link>
                            <div className="absolute ml-3 -mt-5 w-6 h-6 bg-primary text-white border border-primary rounded-full flex items-center justify-center">
                                {cartItems.length}
                            </div>
                            <Link href="/cart" className="text-[#7E7E7E] ssm:hidden xl:flex ml-2">
                                Cart
                            </Link>
                        </section>
                    </div>
                    <div className="mb-1 ml-5">
                        <section className="flex items-center">
                            {
                                user ?
                                    <>
                                        <Menu trigger="click-hover" withArrow arrowPosition="side" transitionProps={{ duration: 150 }}>
                                            <Menu.Target>
                                                <div className='flex items-center space-x-3 sm:hover:bg-gray-100 sm:rounded-md px-3 py-2 hover:cursor-pointer'>
                                                    <Avatar src='' className='hover:cursor-pointer' />
                                                    <p className='ssm:hidden sm:flex'>Hi, {user.user_metadata.firstname}</p>
                                                </div>
                                            </Menu.Target>
                                            <Menu.Dropdown className='mt-6 py-3'>
                                                <Menu.Item className='w-40 hover:bg-gray-200 text-[#222]'>
                                                    <Link href="/dashboard?component=Profile" className='flex items-center space-x-4 py-1'>
                                                        <FiUser size={18} />
                                                        <p className='text-md'>My Profile</p>
                                                    </Link>
                                                </Menu.Item>
                                                <Menu.Item className='w-40 hover:bg-gray-200'>
                                                    <Link href="dashboard?component=Order" className='flex items-center space-x-4 py-1'>
                                                        <BsBox2 size={18} />
                                                        <p className='text-md'>Orders</p>
                                                    </Link>
                                                </Menu.Item>
                                                <Menu.Item className='w-40 hover:bg-gray-200'>
                                                    <Link href="/dashboard?component=Inbox" className='flex items-center space-x-4 py-1'>
                                                        <GoMail size={18} />
                                                        <p className='text-md'>Inbox</p>
                                                    </Link>
                                                </Menu.Item>
                                                <Menu.Item className='w-40 hover:bg-gray-200'>
                                                    <div className='flex items-center space-x-4 py-1'>
                                                        <GrFavorite size={18} />
                                                        <p className='text-md'>Saved Items</p>
                                                    </div>
                                                </Menu.Item>
                                                <Menu.Item onClick={logout} className='w-40 hover:cursor-pointer hover:bg-red-200'>
                                                    <div className='flex items-center space-x-4 py-1'>
                                                        <CiLogout size={18} color="#d62626" />
                                                        <p className='text-md text-red-600'>Logout</p>
                                                    </div>
                                                </Menu.Item>
                                            </Menu.Dropdown>
                                        </Menu>
                                    </>
                                    :
                                    <>
                                        <FiUser className='w-6 h-6' />
                                        <Link href="/signin" className="text-[#7E7E7E]">
                                            SignIn
                                        </Link>
                                    </>
                            }
                        </section>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default React.memo(Navbar);