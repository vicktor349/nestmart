import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const Footer = () =>
{
    return (
        <div className='grid ssm:grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-primaryText leading-10'>
            <div>
                <div className="items-center hidden lg:flex">
                    <Link href="/">
                        <Image src={"/images/logo.png"} width={100} height={100} alt="Nest Mart Logo" className='h-10 w-12' priority />
                    </Link>
                    <section className='leading-3 ml-2'>
                        <Link className='text-primary text-4xl font-bold select-none' href="/">Nest</Link>
                        <p className="text-primaryText text-[10px]">MART & GROCERY</p>
                    </section>
                </div>
                <p>Awesome grocery store website template</p>
                <section className='flex items-center'>
                    <Image src={"/images/icons/location.svg"} alt='location logo' className='w-5 h-5' width={100} height={100} />
                    <span className='font-semibold'>Address:</span>
                    <p className='ml-1'>5171 W Campbell Ave</p>
                </section>
                <p>undefined Kent, Utah 53127 United States</p>
                <section className='flex items-center'>
                    <Image src={"/images/icons/contactheadphones.svg"} alt='contact headphones' className='w-5 h-5' width={100} height={100} />
                    <p className='font-semibold ml-1'>Call Us:</p>
                    <p className='ml-1'>(+91) - 540-025-124553</p>
                </section>
                <section className='flex items-center'>
                    <Image src={"/images/icons/emailcontact.svg"} className='h-5 w-5' width={100} height={100} alt='email icon' />
                    <p className='font-semibold ml-1'>Email:</p>
                    <p className='ml-1'>sale@Nest.com</p>
                </section>
                <section className='flex items-center'>
                    <Image src={"/images/icons/time.svg"} alt='time logo' width={100} height={100} className='h-5 w-5' />
                    <p className='mx-1 font-semibold'>Hours:</p>
                    <p>10:00 - 18:00, Mon - Sat</p>
                </section>
            </div>
            <div className='sm:col-span-1 lg:col-span-1'>
                <h3 className='font-bold text-2xl'>Account</h3>
                <p>Sign In</p>
                <p>View Cart</p>
                <p>My Wishlist</p>
                <p>Track My Order</p>
                <p>Help Ticket</p>
                <p>Shipping Details</p>
                <p>Compare products</p>
            </div>
            <div className='sm:col-span-1 lg:col-span-1'>
                <h3 className='font-bold text-2xl'>Account</h3>
                <p>Sign In</p>
                <p>View Cart</p>
                <p>My Wishlist</p>
                <p>Track My Order</p>
                <p>Help Ticket</p>
                <p>Shipping Details</p>
                <p>Compare products</p>
            </div>
            <div className='sm:col-span-1 lg:col-span-1'>
                <h3 className='font-bold text-2xl'>Popular</h3>
                <p>Milk & Flavoured Milk</p>
                <p>Butter and Margarine</p>
                <p>Eggs Substitutes</p>
                <p>Marmalades</p>
                <p>Sour Cream and Dips</p>
                <p>Tea & Kombucha</p>
                <p>Cheese</p>
            </div>
        </div>


    )
}

export default Footer