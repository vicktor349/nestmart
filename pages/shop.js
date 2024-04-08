import Head from 'next/head'
import React from 'react'
import ShopProducts from '@/components/shop/ShopProducts'
import { BiCategory } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { GrSort } from "react-icons/gr";
import BottomHeroBanner from '@/components/BottomHeroBanner';


const shop = () =>
{

    return (
        <>
            <Head>
                <title>Nest | Shop</title>
            </Head>
            {/* SHOP BANNER */}
            <div className='mb-28'>
                <div className="bg-[url('/images/shopbanner/shopBanner.png')] bg-cover bg-center h-64 flex items-center mb-16 rounded-xl">
                    <p className="text-primaryText text-5xl font-semibold ml-12">Shop</p>
                </div>
                {/* CATEGORY DIV */}
                <div className='flex items-center py-5'>
                    <h1 className='text-secondaryText ssm:hidden sm:flex'>We found <span className="text-primary">30</span> items for you!</h1>
                    <div className='ml-auto flex items-center space-x-3'>
                        <div className="border-secondaryText border border-solid text-secondaryText rounded-lg hover:cursor-pointer">
                            <div className='p-2 flex items-center'>
                                <BiCategory />
                                <p>Show: 50</p>
                                <IoIosArrowDown />
                            </div>
                        </div>
                        <div className="border-secondaryText border border-solid text-secondaryText rounded-lg hover:cursor-pointer">
                            <div className='p-2 flex items-center'>
                                <GrSort />
                                <p>Sort by: Featured</p>
                                <IoIosArrowDown />
                            </div>
                        </div>
                    </div>
                </div>
                <ShopProducts />
                <BottomHeroBanner />
            </div>

        </>
    )
}

export default shop