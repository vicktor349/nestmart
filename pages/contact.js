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
                <div className='lg:mx-16 mt-6 mb-16'>
                    <div className='leading-8'>
                        <p className="text-primary font-bold ssm:text-xl lg:text-2xl xl:text-4xl text-center my-2">How can we help you?</p>
                        <h3 className="text-primaryText sm:text-2xl lg:text-3xl xl:text-5xl font-semibold text-center my-4">Let us know how we can help you</h3>
                        <p className="text-secondaryText w-full">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                            elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                            leo.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                            elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                            leo.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                            elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                            leo.
                        </p>
                        <p className='text-secondaryText my-7'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                            elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                            leo.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                            elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                            leo.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                            elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                            leo.
                        </p>
                    </div>
                    <div className='grid lg:grid-cols-2 leading-7 gap-5'>
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