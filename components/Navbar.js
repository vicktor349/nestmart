import Image from 'next/image';
import React, { useState, useCallback, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { CiMenuBurger } from 'react-icons/ci';
import { CgClose } from 'react-icons/cg';
import { BsCart2 } from 'react-icons/bs';
import SearchDatabase from './SearchDatabase';

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
                {isOpened && (
                    <div className="absolute mt-72 bg-white w-52 rounded-lg -ml-4" ref={mobileMenuRef}>
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
                        <Image
                            src="/images/icons/downwardarrow.svg"
                            height={10}
                            width={10}
                            alt="Downward Arrow"
                            className="w-4 h-4 mt-1"
                        />
                        <form onSubmit={handleSearch} className="flex">
                            <input
                                type="text"
                                className="w-[20rem] text-[#9ca3af] pl-2 outline-none"
                                placeholder="Search for items..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <button type="submit">
                                <Image
                                    src="/images/icons/search.svg"
                                    width={20}
                                    height={20}
                                    alt="Search Icon"
                                    className="hover:cursor-pointer ml-1"
                                />
                            </button>
                        </form>
                    </section>
                    {searchResults.length > 0 && (
                        <div className="absolute bg-white border border-primary w-full mt-12 rounded-md shadow-lg z-50 max-h-72 overflow-y-auto">
                            <ul>
                                {searchResults.map((result, index) => (
                                    <li key={index} className="p-2 hover:bg-gray-200 cursor-pointer">
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
                            <BsCart2 className="h-6 w-6" />
                            <div className="absolute ml-3 -mt-5 w-6 h-6 bg-primary text-white border border-primary rounded-full flex items-center justify-center">
                                2
                            </div>
                            <Link href="#" className="text-[#7E7E7E] ssm:hidden xl:flex">
                                Cart
                            </Link>
                        </section>
                    </div>
                    <div className="mb-1">
                        <section className="flex items-center">
                            <Image
                                src="/images/icons/profile.svg"
                                width={20}
                                height={20}
                                alt="Profile icon"
                                className="h-10 w-10"
                            />
                            <Link href="/signin" className="text-[#7E7E7E]">
                                SignIn
                            </Link>
                        </section>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default React.memo(Navbar);
