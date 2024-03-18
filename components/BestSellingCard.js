import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import bestsellingData from '@/data/bestsellingData'

const BestSellingCard = () =>
{

    return (
        <div className='mt-6'>
            <div className='grid ssm:grid-cols-50 sm:grid-cols-100 gap-5 select-none'>
                {
                    bestsellingData.map((data, id) =>
                    {
                        return (
                            <div className='border border-1 border-[#ADADAD] rounded-xl hover:shadow-xl hover:cursor-pointer' key={id}>
                                <p className="bg-primary text-white w-20 py-[0.11rem] text-center rounded-ss-xl rounded-ee-xl" >{data.tag}</p>
                                <Image src={data.imageUrl} className="h-48 w-48 mx-auto mt-5 object-contain" alt='Product Image' width={100} height={100} />
                                <div className='mx-6'>
                                    <p className='text-sm text-[#ADADAD]'>{data.category}</p>
                                    <h3 className='text-primaryText font-semibold hover:cursor-pointer'>{data.text}</h3>
                                    <section >
                                        <section className='flex justify-between'>
                                            <Image src={"/images/popular/rating.png"} alt='Rating' width={100} height={100} className='object-contain h-auto w-auto' />
                                            <p className='text-[#B6B6B6] mt-2'>({data.rating})</p>
                                        </section>
                                        <p>By <span className='text-[#3BB77E] hover:cursor-pointer hover:underline'>{data.vendor}</span></p>
                                        <section className='flex items-center mt-2  text-md'>
                                            <p className='text-[#3BB77E] font-bold'>{data.price}</p>
                                            <p className='text-[#ADADAD] ml-2 font-bold'><s>{data.changedPrice}</s></p>
                                        </section>
                                        <div className="w-full bg-[#E9ECEF] rounded-full h-2 dark:bg-[#E9ECEF] my-1">
                                            <div className="bg-primary h-2 rounded-full w-20"></div>
                                        </div>
                                        <p className='text-[#ADADAD] text-sm'>Sold: 90/120</p>
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