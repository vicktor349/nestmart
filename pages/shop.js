import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import ShopProducts from '@/components/shop/ShopProducts'
import { BiCategory } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { GrSort } from "react-icons/gr";
import BottomHeroBanner from '@/components/BottomHeroBanner';
import supabase from '@/helpers/supabase';
import Loader from '@/components/Loader';



const shop = () =>
{
    const [shopData, setShopData] = useState([])
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() =>
    {
        getProducts();
    }, []);

    async function getProducts()
    {
        try
        {
            const { data, error } = await supabase.from('fullproduct').select();
            if (error)
            {
                console.error("Error fetching data:", error);
            } else
            {
                setShopData(data)
                setIsLoading(false)
            }
        } catch (err)
        {
            console.error("Unexpected error:", err);
        }
    }

    if (isLoading || !shopData)
    {
        return (
            <Loader />
        )
    }


    return (
        <>
            <Head>
                <title>Nest | Shop</title>
            </Head>
            {/* SHOP BANNER */}
            <div className='sm:mb-28'>
                <div className="bg-[url('/images/shopbanner/shopBanner.png')] bg-cover bg-center ssm:h-32 sm:h-64 flex items-center sm:mb-16 rounded-xl">
                    <p className="text-primaryText ssm:text-xl sm:text-5xl font-semibold ml-12">Shop</p>
                </div>
                {/* CATEGORY DIV */}
                <div className='flex items-center sm:py-5'>
                    <h1 className='text-secondaryText ssm:hidden sm:flex'>We found <span className="text-primary mx-1"> {shopData.length} </span> items for you!</h1>
                    <div className='ml-auto flex items-center space-x-3 ssm:py-5 sm:py-0'>
                        <div className="border-secondaryText border border-solid text-secondaryText rounded-lg hover:cursor-pointer">
                            <div className='p-2 flex items-center'>
                                <BiCategory />
                                <p>Show: {shopData.length}</p>
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
                <ShopProducts shopData={shopData} />
                <BottomHeroBanner />
            </div>

        </>
    )
}

export default shop