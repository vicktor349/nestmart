import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const Footer = () =>
{
    return (
        <div className='grid grid-cols-footer text-primaryText leading-10 '>
            <div>
                <div className="items-center ssm:hidden lg:flex">
                    <Link href="/">
                        <Image src={"/images/logo.png"} width={100} height={100} alt="Nest Mart Logo" className='h-10 w-12' priority />
                    </Link>
                    <section className='leading-3 ml-2'>
                        <Link className='text-primary text-4xl font-bold select-none ' href="/">Nest</Link>
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
            <div className='ml-4'>
                <h3 className='font-bold text-2xl'>Account</h3>
                <p>Sign In</p>
                <p>View Cart</p>
                <p>My Wishlist</p>
                <p>Track My Order</p>
                <p>Help Ticket</p>
                <p>Shipping Details</p>
                <p>Compare products</p>
            </div>
            <div>
                <h3 className='font-bold text-2xl'>Account</h3>
                <p>Sign In</p>
                <p>View Cart</p>
                <p>My Wishlist</p>
                <p>Track My Order</p>
                <p>Help Ticket</p>
                <p>Shipping Details</p>
                <p>Compare products</p>
            </div>
            <div>
                <h3 className='font-bold text-2xl'>Popular</h3>
                <p>Milk & Flavoured Milk</p>
                <p>Butter and Margarine</p>
                <p>Eggs Substitutes</p>
                <p>Marmalades</p>
                <p>Sour Cream and Dips</p>
                <p>Tea & Kombucha</p>
                <p>Cheese</p>
            </div>
            <div className='col-start-5 col-end-8 leading-[5rem]'>
                <h3 className='font-bold text-2xl'>Install App</h3>
                <p>From App Store or Google Play</p>
                <div className='flex items-center'>
                    <section className='bg-black rounded-md text-white flex items-center leading-5 w-52 justify-center'>
                        <Image src={"/images/icons/applelogo.svg"} alt='Apple Logo' width={100} height={100} className='w-8 h-8 ml-' />
                        <section className='py-2 ml-2'>
                            <p>Downlad on</p>
                            <h3 className='text-xl'>App Store</h3>
                        </section>
                    </section>
                    <section className='bg-black rounded-md text-white flex items-center leading-5 w-52 justify-center ml-4'>
                        <Image src={"/images/icons/playstore.svg"} alt='Google play stor Logo' width={100} height={100} className='w-8 h-8 ml-' />
                        <section className='py-3 ml-2'>
                            <p className="font-light">GET IT ON</p>
                            <h3 className=''>Google Play</h3>
                        </section>
                    </section>
                </div>
                <p>Secured Payment Gateways</p>
                <div className='flex items-center'>
                    <Image src={"/images/icons/visa.svg"} alt='Visa Logo' width={100} height={100} className='w-16 h-16' />
                    <Image src={"/images/icons/mastercard.svg"} alt='Mastercard Logo' width={100} height={100} className='w-16 h-16 mx-6' />
                    <Image src={"/images/icons/maestro.svg"} alt='Maestro Logo' width={100} height={100} className='w-16 h-16' />
                </div>
            </div>
        </div>
    )
}

export default Footer