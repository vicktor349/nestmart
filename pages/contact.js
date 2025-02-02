import Map from '@/components/contact/Map'
import { Input, Textarea } from '@mantine/core';
import Head from 'next/head'
import React from 'react'
import { TbMapPin } from "react-icons/tb";
import { MdOutlineMailOutline, MdSubject } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import BottomHeroBanner from '@/components/BottomHeroBanner';


// BUTTON COMPONENT
const MapButton = () =>
{
    return (
        <div className='text-white bg-primary rounded-md w-40 h-12 flex items-center justify-center text-center hover:cursor-pointer select-none'>
            <TbMapPin className='mr-4 text-2xl' />View map
        </div>

    )
}

// CONTACT COMPONENT
const Contact = ({ header }) =>
{
    return (
        <div>
            <div className='leading-10 text-secondaryText'>
                <h2 className='text-primary text-2xl font-semibold'>{header}</h2>
                <p>205 North Michigan Avenue, Suite 810</p>
                <p>Chicago, 60601, USA</p>
                <p>Phone: (123) 456-7890</p>
                <p>Email: contact@Evara.com</p>
            </div>
            <MapButton />
        </div>
    )
}

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
                        <p className="text-primary font-bold ssm:text-2xl lg:text-2xl xl:text-4xl text-center my-2">How can we help you?</p>
                        <h3 className="text-primaryText text-3xl lg:text-3xl xl:text-5xl font-semibold text-center my-4">Let us know how we can help you</h3>
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
            {/* HOW TO CONTACT US DIV */}
            <div className='grid ssm:space-y-11 sm:space-y-0 sm:grid-cols-2 xl:grid-cols-3 lg:mx-10 mt-6 mb-16'>
                <Contact header="Office" />
                <Contact header="Studio" />
                <Contact header="Shop" />
            </div>
            {/* CONTACT FORM */}
            <div className='lg:mx-24 xl:mx-48 space-y-5'>
                <h1 className="text-primary font-semibold text-xl">Contact form</h1>
                <h1 className='font-semibold text-primaryText text-3xl'>Drop Us a Line</h1>
                <p className='text-secondaryText text-md'>Your email address will not be published. Required fields are marked *</p>
                <div>
                    <div className='ssm:space-y-6 md:space-y-0 md:grid md:grid-cols-2 gap-10'>
                        <Input placeholder="First Name" size='lg' radius="md" leftSection={<AiOutlineUser size={24} />} />
                        <Input placeholder="Your Email" size='lg' radius="md" leftSection={<MdOutlineMailOutline size={24} />} />
                        <Input placeholder="Your Phone" size='lg' radius="md" leftSection={<BsTelephone size={24} />} />
                        <Input placeholder="Subject" size='lg' radius="md" leftSection={<MdSubject size={24} />} />
                    </div>
                    <Textarea className='mt-10' minRows={10} maxRows={10} placeholder='Send a message' autosize />
                    <button className="bg-primaryText text-white w-44 h-12 rounded-md mt-10">
                        Send message
                    </button>
                </div>
            </div>
            <div className='my-10'>
                <BottomHeroBanner />
            </div>
        </>
    )
}

export default contact