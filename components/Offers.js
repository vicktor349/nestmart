import Image from 'next/image'
import React from 'react'
import Offerdata from '@/data/offerdata'

const Offers = () =>
{

    return (
        <div className='grid grid-cols-100 gap-5 my-24'>
            {Offerdata.map((data) =>
            {
                return (
                    <div key={data.id} className='bg-[#F4F6FA] w-full rounded-md'>
                        <div className='flex items-center px-1 py-2'>
                            <Image src={data.imageUrl} alt='offer image' width={100} height={100} className='h-14 w-14 object-contain' priority />
                            <div className='ml-4'>
                                <h3 className='font-semibold'> {data.name}</h3>
                                <p className='text-[#ADADAD]'>{data.text}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Offers