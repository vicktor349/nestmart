import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Rating } from '@mantine/core'

const ShopProducts = ({ shopData }) =>
{
    const router = useRouter()
    const route = (id) =>
    {
        router.push(`/fullproduct/${id}`)
    }
    return (
        <div><div className='mt-6'>
            <div className='grid ssm:grid-cols-50 sm:grid-cols-100 gap-5 select-none'>
                {
                    shopData.map((data, id) =>
                    {
                        return (
                            <div onClick={() => route(data.id)} className='border border-1 border-[#ADADAD] rounded-xl hover:shadow-xl hover:cursor-pointer' key={id}>
                                <p className="bg-[#F74B81] text-white w-20 py-[0.11rem] text-center rounded-ss-xl rounded-ee-xl" >{data.tag}</p>
                                <Image src={data.imageurl} className="h-48 w-48 mx-auto mt-5 object-contain" alt='Product Image' width={500} height={500} />
                                <div className='mx-6'>
                                    <p className='text-sm text-[#ADADAD]'>{data.category}</p>
                                    <h3 className='text-primaryText font-semibold hover:cursor-pointer'>{data.text}</h3>
                                    <section >
                                        <Rating value={data.rating} readOnly fractions={2} className='my-2' />
                                        <p>By <span className='text-[#3BB77E] hover:cursor-pointer hover:underline'>{data.vendor}</span></p>
                                        <section className='flex items-center mt-5 mb-8 text-md'>
                                            <p className='text-[#3BB77E] font-semibold'>{`$ ${data.price}`}</p>
                                            <p className='text-[#ADADAD] ml-2 font-semibold'><s>{`$ ${data.changedprice}`}</s></p>
                                            <Link href="/" className='text-primary text-sm bg-[#DEF9EC] flex items-center py-2 px-5 ml-auto rounded-[0.2rem]'>
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
        </div></div>
    )
}

export default ShopProducts