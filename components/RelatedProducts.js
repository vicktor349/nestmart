import React from 'react'
import { Rating, Tabs } from '@mantine/core';
import Image from 'next/image';
import relatedproduct from '@/data/relatedproduct';
import { useRouter } from 'next/router';

const RelatedProducts = () =>
{
    const router = useRouter()

    const route = (id) =>
    {
        router.push(`/relatedproduct/${id}`)
    }

    return (
        <div className='mx-24 mt-12 mb-12'>
            <Tabs defaultValue="first" color='#3BB77E'>
                <Tabs.List>
                    <Tabs.Tab value="first" className='font-semibold text-primaryText text-2xl'>Related Products</Tabs.Tab>
                </Tabs.List>
            </Tabs>
            <div className='grid grid-cols-4 gap-2 mt-20'>
                {relatedproduct.map((data, id) =>
                {
                    return (
                        <div onClick={() => route(data.id)} className='border border-1 border-[#ADADAD] rounded-xl hover:shadow-xl hover:cursor-pointer' key={id}>
                            <p className="bg-[#F74B81] text-white w-20 py-[0.11rem] text-center rounded-ss-xl rounded-ee-xl" >{data.tag}</p>
                            <Image src={data.imageUrl} className="h-48 w-48 mx-auto mt-5 object-contain" alt='Product Image' width={500} height={500} />
                            <div className='mx-6'>
                                <h3 className='text-primaryText font-semibold hover:cursor-pointer'>{data.text}</h3>
                                <section >
                                    <section className='flex justify-between'>
                                        <Rating value={data.rating} readOnly fractions={2} />
                                    </section>
                                    <section className='flex items-center mt-5 mb-8 text-md'>
                                        <p className='text-[#3BB77E] font-semibold'>{data.price}</p>
                                        <p className='text-[#ADADAD] ml-2 font-semibold'><s>{data.changedPrice}</s></p>
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

export default RelatedProducts