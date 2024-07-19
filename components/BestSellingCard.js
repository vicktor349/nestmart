import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import bestsellingData from '@/data/bestsellingData'
import { Rating } from '@mantine/core'
import { useRouter } from 'next/router'
import supabase from '@/config/supabase'

const BestSellingCard = () =>
{
    const [sellingData, setSellingData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const router = useRouter()

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
            const { data, error } = await supabase.from('bestsellingdata').select();
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
            <div className='fixed inset-0 flex items-center justify-center bg-white z-[999999]'>
                <div className="loader">
                </div>
            </div>
        )
    }

    return (
        <div>
            <div className='grid ssm:grid-cols-50 sm:grid-cols-100 gap-5 select-none'>
                {
                    sellingData.map((data, id) =>
                    {
                        return (
                            <div onClick={() => route(data.id)} className='border border-1 border-[#ADADAD] rounded-xl hover:shadow-xl hover:cursor-pointer' key={id}>
                                <p className="bg-primary text-white w-24 py-[0.11rem] text-center rounded-ss-xl rounded-ee-xl" >{data.tag}</p>
                                <Image src={data.imageurl} className="h-48 w-48 mx-auto mt-5 object-contain" alt='Product Image' width={500} height={500} />
                                <div className='mx-6'>
                                    <p className='text-sm text-[#ADADAD]'>{data.category}</p>
                                    <h3 className='text-primaryText font-semibold hover:cursor-pointer h-20'>{data.text}</h3>
                                    <section >
                                        <Rating value={data.rating} readOnly fractions={2} />
                                        <p>By <span className='text-[#3BB77E] hover:cursor-pointer hover:underline'>{data.vendor}</span></p>
                                        <section className='flex items-center mt-2  text-md justify-between'>
                                            <p className='text-[#3BB77E] font-semibold'>{`$ ${data.price}`}</p>
                                            <p className='text-[#ADADAD] ml-2 font-semibold'><s>{`$${data.changedprice}`}</s></p>
                                        </section>
                                        <div className="w-full bg-[#E9ECEF] rounded-full h-2 dark:bg-[#E9ECEF] my-1">
                                            <div className="bg-primary h-2 rounded-full w-20"></div>
                                        </div>
                                        <p className='text-[#ADADAD] text-sm mt-2'>Sold: 90/120</p>
                                        <Link href="/" className='text-white text-sm bg-primary flex justify-center mt-2 py-2 px-5 ml-auto rounded-[0.2rem] mb-8 font-bold'>
                                            Add To Cart
                                        </Link>
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