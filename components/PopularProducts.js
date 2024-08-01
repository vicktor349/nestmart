import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Rating } from '@mantine/core'
import supabase from '@/config/supabase'

const PopularProducts = () =>
{
    const router = useRouter()
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const route = (id) =>
    {
        router.push(`/products/${id}`)
    }
    useEffect(() =>
    {
        getProducts();
    }, []);

    async function getProducts()
    {
        try
        {
            const { data, error } = await supabase.from('products').select();
            if (error)
            {
                console.error("Error fetching data:", error);
            } else
            {
                setProducts(data)
                setIsLoading(false)
            }
        } catch (err)
        {
            console.error("Unexpected error:", err);
        }
    }

    if (isLoading || !products)
    {
        return (
            <div className='fixed inset-0 flex items-center justify-center bg-white z-[999999]'>
                <div className="loader">
                </div>
            </div>
        )
    }


    return (
        <div className='md:mt-6'>
            <h2 className='text-3xl font-semibold text-primaryText ssm:py-6 md:py-12'>Popular Products</h2>
            <div className='grid sssms:grid-cols-2 sm:grid-cols-100 ssm:gap-2 sm:gap-5 select-none'>
                {products.map((data) =>
                {
                    return (
                        <div
                            onClick={() => route(data.id)}
                            className='rounded-xl shadow-md hover:cursor-pointer'
                            key={data.id}
                        >
                            <p className="bg-[#F74B81] text-white w-20 py-[0.11rem] text-center rounded-ss-xl rounded-ee-xl">
                                {data.tag}
                            </p>
                            <Image
                                src={data.imageurl}
                                className="ssm:h-32 ssm:w-32 sm:h-48 sm:w-48 mx-auto sm:mt-5 object-contain"
                                alt={`Image of ${data.text}`}
                                width={500}
                                height={500}
                            />
                            <div className='ssm:mx-2 sm:mx-3'>
                                <p className='text-sm text-[#ADADAD]'>{data.category}</p>
                                <h3 className='text-primaryText sm:font-semibold hover:cursor-pointer sm:h-12 ssm:text-sm sm:text-base sssms:h-10 ssm:h-10 ssms:h-10 line-clamp-2'>
                                    {data.text}
                                </h3>
                                <section>
                                    <Rating value={data.rating} readOnly fractions={2} />
                                    <p>
                                        By <span className='text-[#3BB77E] hover:cursor-pointer hover:underline'>{data.vendor}</span>
                                    </p>
                                    <section className='sm:flex items-center ssm:mb-4 ssm:mt-1 sm:mb-5 text-md'>
                                        <section className='flex items-center ssm:space-x-5 xl:space-x-2'>
                                            <p className='text-[#3BB77E] font-semibold'>{`$  ${data.price}`}</p>
                                            <p className='text-[#ADADAD] sm:ml-2 font-semibold'>
                                                <s>{`$ ${data.changedprice}`}</s>
                                            </p>
                                        </section>
                                        <Link href={"/"} className='text-primary text-sm bg-[#DEF9EC] sm:flex items-center py-2 px-5 ml-auto rounded-[0.2rem] ssm:hidden'>
                                            <Image
                                                src={"/images/popular/cart.svg"}
                                                width={500}
                                                height={500}
                                                className='w-5 h-5'
                                                alt='Cart Logo'
                                            />
                                            Add
                                        </Link>
                                        <Link href={"/"} className='text-primary text-sm bg-[#DEF9EC] ssm:flex items-center py-2 px-5 ml-auto rounded-[0.4rem] sm:hidden font-bold justify-center'>
                                            Add to Cart
                                        </Link>
                                    </section>
                                </section>
                            </div>
                        </div>

                    )
                })}
            </div>
        </div>
    )
}

export default PopularProducts