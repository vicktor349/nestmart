import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import dealsData from '@/data/dealsData';
import { Rating } from '@mantine/core';
import { BsCart2 } from 'react-icons/bs';

const Deals = () =>
{
  return (
    <div className='mt-10'>
      <h2 className='text-3xl font-semibold text-primaryText'>Deals of The Day</h2>
      <div className='grid grid-cols-100 gap-5 select-none mt-3'>
        {dealsData.map((data) => (
          <div key={data.id} className='relative'>
            <div className="relative w-full h-80">
              <Image
                src={data.imageUrl}
                className="object-contain bg-cover bg-center w-full h-full"
                alt='Product Image'
                fill
                sizes="(max-width: 768px) 150vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className='mx-auto w-64 bg-white shadow-md relative -mt-24 rounded-2xl'>
              <div className='px-2 py-1'>
                <p className='text-sm text-[#ADADAD] w-full bg-white'>{data.category}</p>
                <h3 className='text-primaryText font-semibold hover:cursor-pointer text-md'>{data.text}</h3>
                <section>
                  <Rating value={data.rating} readOnly fractions={2} className='my-1' />
                  <p>By <span className='text-[#3BB77E] hover:cursor-pointer hover:underline'>{data.vendor}</span></p>
                  <section className='flex items-center mb-2 text-md'>
                    <p className='text-[#3BB77E] font-semibold'>{data.price}</p>
                    <p className='text-[#ADADAD] ml-2 font-semibold'><s>{data.changedPrice}</s></p>
                    <Link href="/" className='text-primary text-sm bg-[#DEF9EC] flex items-center py-2 px-5 ml-auto rounded-[0.2rem]'>
                      <BsCart2 className='w-5 h-5' />
                      Add
                    </Link>
                  </section>
                </section>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Deals;
