import Map from '@/components/contact/Map'
import Head from 'next/head'
import React from 'react'

const contact = () =>
{
    return (
        <>
            <Head>
                <title>Nest | Contact</title>
            </Head>
            <div>
                {/* HOW TO HELP DIV */}
                <div className='grid grid-cols-2 mx-20 my-16'>
                    <div className='w-[30rem] leading-8'>
                        <p className="text-primary font-bold text-2xl my-5">How can we help you?</p>
                        <h3 className="text-primaryText text-3xl font-semibold">Let us know how</h3>
                        <h3 className='text-primaryText text-3xl font-semibold'>we can help you</h3>
                        <p className="text-secondaryText w-full">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                            elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                            leo.
                        </p>
                        <p className='text-secondaryText'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                            elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                            leo.
                        </p>
                    </div>
                    <div className='grid grid-cols-2 leading-7 gap-5'>
                        <div>
                            <p className='text-primary font-bold text-lg'>01. Visit Feedback</p>
                            <p className='text-secondaryText'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                                elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                                leo.
                            </p>
                        </div>
                        <div>
                            <p className='text-primary font-bold text-lg'>02. Billing Inquiries</p>
                            <p className='text-secondaryText'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                                elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                                leo.
                            </p>
                        </div>
                        <div>
                            <p className='text-primary font-bold text-lg'>03. Employer Services</p>
                            <p className='text-secondaryText'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                                elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                                leo.
                            </p>
                        </div>
                        <div>
                            <p className='text-primary font-bold text-lg'>04. General Inquiries</p>
                            <p className='text-secondaryText'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                                elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                                leo.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Map />
        </>
    )
}

export default contact