import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import dealsoftheday from '@/data/dealsoftheday'
import { MdArrowForwardIos } from "react-icons/md";


const DealsOfTheDay = () =>
{
    return (
        <>
            <div className='mt-10'>
                <div className='flex items-center text-secondaryText'>
                    <h2 className='text-3xl font-semibold text-primaryText'>Deals of The Day</h2>
                    <p className='flex items-center ml-auto hover:cursor-pointer'>All Deals <MdArrowForwardIos /></p>
                </div>
                <div className='grid grid-cols-100 gap-5 select-none mt-3'>
                    {
                        dealsoftheday.map((data, id) =>
                        {
                            return (
                                <div key={id}>
                                    <Image src={data.imageUrl} className="h-fit w-full mx-auto mt-5 object-contain bg-cover bg-center" alt='Product Image' width={500} height={500} />
                                    <div className="z-[999] absolute -mt-40 flex items-center space-x-2 mx-5">
                                        <div className='text-center bg-white rounded-md w-16'>
                                            <div>
                                                <p className='text-primary mt-2'>{data.days}</p>
                                                <p className='text-secondaryText mb-2'>Days</p>
                                            </div>
                                        </div>
                                        <div className='text-center bg-white rounded-md w-16'>
                                            <p className='text-primary mt-2'>{data.hours}</p>
                                            <p className='text-secondaryText mb-2'>Hours</p>
                                        </div>
                                        <div className='text-center bg-white rounded-md w-16'>
                                            <p className='text-primary mt-2'>{data.mins}</p>
                                            <p className='text-secondaryText mb-2'>Mins</p>
                                        </div>
                                        <div className='text-center bg-white rounded-md w-16'>
                                            <p className='text-primary mt-2'>{data.sec}</p>
                                            <p className='text-secondaryText mb-2'>Sec</p>
                                        </div>
                                    </div>
                                    <div className='mx-auto w-72 bg-white shadow-md relative -mt-16 rounded-2xl'>
                                        <div className='px-5 py-1'>
                                            <p className='text-sm text-[#ADADAD] w-full bg-white'>{data.category}</p>
                                            <h3 className='text-primaryText font-semibold hover:cursor-pointer text-md'>{data.text}</h3>
                                            <section >
                                                <section className='flex justify-between'>
                                                    <Image src={"/images/popular/rating.png"} alt='Rating' width={500} height={500} className='object-contain h-auto w-auto bg-cover bg-center' />
                                                    <p className='text-[#B6B6B6]'>({data.rating})</p>
                                                </section>
                                                <p>By <span className='text-[#3BB77E] hover:cursor-pointer hover:underline'>{data.vendor}</span></p>
                                                <section className='flex items-center mb-2 text-md'>
                                                    <p className='text-[#3BB77E] font-semibold'>{data.price}</p>
                                                    <p className='text-[#ADADAD] ml-2 font-semibold'><s>{data.changedPrice}</s></p>
                                                    <Link href="/" className='text-primary text-sm bg-[#DEF9EC] flex items-center py-2 px-5 ml-auto rounded-[0.2rem]'>
                                                        <Image src={"/images/popular/cart.svg"} width={500} height={500} className='w-5 h-5' alt='Cart Logo' />
                                                        Add
                                                    </Link>
                                                </section>
                                            </section>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default DealsOfTheDay