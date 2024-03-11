import Image from 'next/image';
import React from 'react'
import Link from 'next/link';
import dealsData from '@/data/dealsData';

const Deals = () =>
{
  return (
    <>
      <div className='mt-10'>
        <h2 className='text-3xl font-semibold text-primaryText'>Deals of The Day</h2>
        <div className='grid grid-cols-100 gap-5 select-none'>
          {
            dealsData.map((data, id) =>
            {
              return (
                <div key={id}>
                  <Image src={data.imageUrl} className="h-96 w-full mx-auto mt-5 object-contain" alt='Product Image' width={100} height={100} />
                  <div className='mx-auto w-72 bg-white shadow-md relative -mt-28 rounded-2xl'>
                    <div className='px-7 py-1'>
                      <p className='text-sm text-[#ADADAD] w-full bg-white'>{data.category}</p>
                      <h3 className='text-primaryText font-semibold hover:cursor-pointer'>{data.text}</h3>
                      <section >
                        <section className='flex justify-between'>
                          <Image src={"/images/popular/rating.png"} alt='Rating' width={100} height={100} className='object-contain h-auto w-auto' />
                          <p className='text-[#B6B6B6]'>({data.rating})</p>
                        </section>
                        <p>By <span className='text-[#3BB77E] hover:cursor-pointer hover:underline'>{data.vendor}</span></p>
                        <section className='flex items-center mb-2 text-md'>
                          <p className='text-[#3BB77E] font-bold'>{data.price}</p>
                          <p className='text-[#ADADAD] ml-2 font-bold'><s>{data.changedPrice}</s></p>
                          <Link href="/" className='text-primary text-sm bg-[#DEF9EC] flex items-center py-2 px-5 ml-auto rounded-[0.2rem]'>
                            <Image src={"/images/popular/cart.svg"} width={100} height={100} className='w-5 h-5' alt='Cart Logo' />
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

export default Deals;