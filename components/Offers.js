import Image from 'next/image'
import React from 'react'

const Offers = () =>
{
    const Offerdata = [
        {
            imageUrl: "/images/offers/pricetag.png",
            name: "Best prices & offers",
            text: "24/7 amazing services"
        },
        {
            imageUrl: "/images/offers/freedelivery.png",
            name: "Free delivery",
            text: "Orders $50 or more"
        },
        {
            imageUrl: "/images/offers/deals.png",
            name: "Great daily deal",
            text: "When you sign up"
        },
        {
            imageUrl: "/images/offers/assortment.png",
            name: "Wide assortment",
            text: "Mega Discounts"
        },
        {
            imageUrl: "/images/offers/returns.png",
            name: "Easy returns",
            text: "Within 30 days"
        },
    ]
    return (
        <div className='grid grid-cols-100 gap-5 my-16'>
            {Offerdata.map((data, id) =>
            {
                return (
                    <div key={id} className='bg-[#F4F6FA] w-full rounded-md'>
                        <div className='flex items-center px-1 py-2'>
                            <Image src={data.imageUrl} alt='offer image' width={100} height={100} className='h-14 w-14 object-contain' />
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