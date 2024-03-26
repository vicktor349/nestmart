import Image from 'next/image'
import React from 'react'

const FeaturedCategoriesCard = ({ logo, item, amount, bg }) =>
{
    return (
        <div className={`${bg} w-40 h-56 flex justify-center items-center border border-transparent rounded-3xl hover:shadow-md hover:cursor-pointer`}>
            <div className='grid place-items-center'>
                <Image src={logo} alt='Featured Image' width={100} height={100} className='h-auto w-auto' />
                <section className='text-center'>
                    <h3 className='text-primaryText font-semibold text-lg'>{item}</h3>
                    <p className='text-[#7E7E7E]'>{amount} items</p>
                </section>
            </div>
        </div>
    )
}

export default FeaturedCategoriesCard