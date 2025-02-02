import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Rating } from '@mantine/core'
import { useRouter } from 'next/router'
import supabase from '@/helpers/supabase'
import { useCart } from './CartContext'
import { notifications } from '@mantine/notifications'
import Loader from './Loader'

const BestSellingCard = () =>
{
    const [sellingData, setSellingData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const router = useRouter()
    const { addToCart } = useCart()

    const route = (id) =>
    {
        router.push(`/bestsellingproduct/${id}`)
    }

    useEffect(() =>
    {
        getSellingData()
    }, [])

    async function getSellingData()
    {
        try
        {
            const { data, error } = await supabase.from('bestsellingproduct').select();
            if (error)
            {
                console.error("Error fetching data:", error);
            } else
            {
                setSellingData(data)
                setIsLoading(false)
            }
        } catch (err)
        {
            console.error("Unexpected error:", err);
        }
    }

    if (isLoading || !sellingData)
    {
        return (
            <Loader />
        )
    }

    const handleAddToCart = (data) =>
    {
        addToCart(data)
        notifications.show({
            title: 'Success',
            message: `${data.text} has been added to the cart.`,
            color: 'green',
        });
    }

    return (
        <div>
            <div className='grid sssms:grid-cols-2 sm:grid-cols-100 ssm:gap-2 sm:gap-5 select-none'>
                {
                    sellingData.map((data) =>
                    {
                        return (
                            <div onClick={() => route(data.id)} className='rounded-lg shadow-md hover:cursor-pointer' key={data.id}>
                                <p className="bg-primary text-white w-24 py-[0.11rem] text-center rounded-ss-xl rounded-ee-xl" >{data.tag}</p>
                                <Image src={data.imageurl} className="ssm:h-32 ssm:w-32 sm:h-48 sm:w-48 mx-auto object-contain" alt='Product Image' width={500} height={500} />
                                <div className='mx-3'>
                                    <p className='text-sm text-[#ADADAD]'>{data.category}</p>
                                    <h3 className='text-primaryText sm:font-semibold hover:cursor-pointer ssm:text-sm sm:text-base line-clamp-2'>{data.text}</h3>
                                    <section >
                                        <Rating value={data.rating} readOnly fractions={2} />
                                        <p>By <span className='text-[#3BB77E] hover:cursor-pointer hover:underline'>{data.vendor}</span></p>
                                        <section className='flex items-center sm:mt-2  text-md justify-between'>
                                            <p className='text-[#3BB77E] font-semibold'>{`$ ${data.price}`}</p>
                                            <p className='text-[#ADADAD] ml-2 font-semibold'><s>{`$${data.changedprice}`}</s></p>
                                        </section>
                                        <div className="w-full bg-[#E9ECEF] rounded-full h-2 dark:bg-[#E9ECEF] my-1">
                                            <div className="bg-primary h-2 rounded-full w-20"></div>
                                        </div>
                                        <p className='text-[#ADADAD] text-sm mt-2'>Sold: 90/120</p>
                                        <button onClick={(e) => { e.stopPropagation(); handleAddToCart(data); }} className='text-white text-sm bg-primary flex justify-center mt-2 py-2 px-5 ml-auto rounded-[0.2rem] ssm:mb-3 sm:mb-8 font-bold w-full'>
                                            Add To Cart
                                        </button>
                                    </section>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default BestSellingCard