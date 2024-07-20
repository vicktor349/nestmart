import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import SearchDatabase from '@/components/SearchDatabase';
import { Rating } from '@mantine/core';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

const SearchPage = () =>
{
    const Router = useRouter();
    const { query } = Router.query;
    const [state, setState] = useState({ searchResults: [], isLoading: true, error: null });

    useEffect(() =>
    {
        if (query)
        {
            const fetchResults = async () =>
            {
                try
                {
                    const results = await SearchDatabase(query);
                    setState({ searchResults: results, isLoading: false, error: null });
                } catch (error)
                {
                    setState({ searchResults: [], isLoading: false, error: 'Failed to fetch results' });
                }
            };
            fetchResults();
        }
    }, [query]);

    const { searchResults, isLoading, error } = state;

    if (isLoading)
    {
        return (
            <div className='fixed inset-0 flex items-center justify-center bg-white z-[999999]'>
                <div className="loader"></div>
            </div>
        );
    }

    if (error)
    {
        return (
            <div className='fixed inset-0 flex items-center justify-center bg-white z-[999999]'>
                <p>{error}</p>
            </div>
        );
    }

    return (
        <>
            <Head>
                <title>Nest | Search Result For {query}</title>
            </Head>
            <div className='my-24'>
                <ul>
                    <div className='grid ssm:grid-cols-50 sm:grid-cols-100 gap-5 select-none'>
                        {searchResults.map((data, id) => (
                            <SearchResult key={id} data={data} />
                        ))}
                    </div>
                </ul>
            </div>
        </>
    );
}

const SearchResult = React.memo(({ data }) => (
    <div className='border border-1 border-[#ADADAD] rounded-xl hover:shadow-xl hover:cursor-pointer'>
        <p className="bg-[#F74B81] text-white w-20 py-[0.11rem] text-center rounded-ss-xl rounded-ee-xl">{data.tag}</p>
        <Image src={data.imageurl} className="h-48 w-48 mx-auto mt-5 object-contain" alt={`Image of ${data.text}`} width={500} height={500} />
        <div className='mx-6'>
            <p className='text-sm text-[#ADADAD]'>{data.category}</p>
            <h3 className='text-primaryText font-semibold hover:cursor-pointer h-20'>{data.text}</h3>
            <section>
                <Rating value={data.rating} readOnly fractions={2} />
                <p>By <span className='text-[#3BB77E] hover:cursor-pointer hover:underline'>{data.vendor}</span></p>
                <section className='flex items-center mt-5 mb-8 text-md'>
                    <p className='text-[#3BB77E] font-semibold'>{`$ ${data.price}`}</p>
                    <p className='text-[#ADADAD] ml-2 font-semibold'><s>{`$ ${data.changedprice}`}</s></p>
                    <Link href="/" className='text-primary text-sm bg-[#DEF9EC] flex items-center py-2 px-5 ml-auto rounded-[0.2rem]'>
                        <Image src="/images/popular/cart.svg" width={500} height={500} className='w-5 h-5' alt='Cart Logo' />
                        Add
                    </Link>
                </section>
            </section>
        </div>
    </div>
));

export default SearchPage;