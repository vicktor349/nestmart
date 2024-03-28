import React from 'react'
import whatweprovideData from '@/data/whatweprovideData'
import Image from 'next/image'


const WhatweprovideCard = () =>
{
    return (
        <div className='grid ssm:grid-cols-providessm xl:grid-cols-providexl  gap-10'>
            {whatweprovideData.map((data, id) =>
            {
                return (
                    <div key={id} className='border border-[#ECECEC] text-center leading-8 h-96 rounded-2xl'>
                        <div className='mt-12'>
                            <Image src={data.imageUrl} alt='What we provide' height={500} width={500} className='w-24 h-24 mx-auto object-contain' />
                            <div>
                                <h3 className='text-2xl font-semibold text-primaryText'>{data.title}</h3>
                                <p className='text-secondaryText'>{data.text}</p>
                            </div>
                            <p className="text-primary hover:cursor-pointer hover:underline select-none">Read more</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default WhatweprovideCard