import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import popularData from '@/data/populardata'

const PopularProducts = () =>
{

    return (
        <div className='mt-6'>
            <h2 className='text-3xl font-semibold text-primaryText py-12'>Popular Products</h2>
            <div className='grid ssm:grid-cols-50 sm:grid-cols-100 gap-5 select-none'>
                {
                    popularData.map((data, id) =>
                    {
                        return (
                            <div className='border border-1 border-[#ADADAD] rounded-xl hover:shadow-xl hover:cursor-pointer' key={id}>
                                <p className="bg-[#F74B81] text-white w-20 py-[0.11rem] text-center rounded-ss-xl rounded-ee-xl" >{data.tag}</p>
                                <Image src={data.imageUrl} className="h-48 w-48 mx-auto mt-5 object-contain" alt='Product Image' width={500} height={500} />
                                <div className='mx-6'>
                                    <p className='text-sm text-[#ADADAD]'>{data.category}</p>
                                    <h3 className='text-primaryText font-semibold hover:cursor-pointer'>{data.text}</h3>
                                    <section >
                                        <section className='flex justify-between'>
                                            <Image src={"/images/popular/rating.png"} alt='Rating' width={500} height={500} className='object-contain h-auto w-auto' />
                                            <p className='text-[#B6B6B6] mt-2'>({data.rating})</p>
                                        </section>
                                        <p>By <span className='text-[#3BB77E] hover:cursor-pointer hover:underline'>{data.vendor}</span></p>
                                        <section className='flex items-center mt-5 mb-8 text-md'>
                                            <p className='text-[#3BB77E] font-semibold'>{data.price}</p>
                                            <p className='text-[#ADADAD] ml-2 font-semibold'><s>{data.changedPrice}</s></p>
                                            <Link href={`/products/${data.id}`} className='text-primary text-sm bg-[#DEF9EC] flex items-center py-2 px-5 ml-auto rounded-[0.2rem]'>
                                                <Image src={"/images/popular/cart.svg"} width={500} height={500} className='w-5 h-5' alt='Cart Logo' />
                                                Add
                                            </Link>
                                        </section>
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

export default PopularProducts