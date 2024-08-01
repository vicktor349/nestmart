import supabase from '@/config/supabase'
import { Divider } from '@mantine/core'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const Order = () =>
{
    const [orders, setOrders] = useState([])
    useEffect(() =>
    {
        getOrder()
    }, [])
    async function getOrder()
    {
        const { data, error: message } = await supabase.from('order_history').select("*")
        if (message)
        {
            console.log(`Error: ${message}`)
        } else
        {
            setOrders(data)
        }
    }
    return (
        <section className="relative">
            <div className="w-full">
                <h2 className="font-manrope font-bold text-3xl lead-10 text-black mb-9">Order History</h2>

                <div className="flex sm:flex-col lg:flex-row sm:items-center justify-between">
                    <ul className="flex max-sm:flex-col sm:items-center gap-x-14 gap-y-3">
                        <li
                            className="font-medium text-lg leading-8 cursor-pointer text-primary transition-all duration-500 hover:text-primary">
                            All Order</li>
                        <li
                            className="font-medium text-lg leading-8 cursor-pointer transition-all duration-500 hover:text-primary">
                            Summary</li>
                        <li
                            class="font-medium text-lg leading-8 cursor-pointer transition-all duration-500 hover:text-primary">
                            Completed</li>
                        <li
                            class="font-medium text-lg leading-8 cursor-pointer transition-all duration-500 hover:text-primary">
                            Cancelled</li>
                    </ul>
                </div>
                <div className="my-10 border border-gray-300">
                    <div className="flex max-md:flex-col items-center justify-between px-3 md:px-11">
                        <div className="py-8">
                            <p className="font-medium text-lg text-black whitespace-nowrap">Order : #10234987</p>
                            <p className="font-medium text-lg text-[#666] mt-3 whitespace-nowrap">Order Payment : 18th march 2021</p>
                        </div>
                        <div className="flex items-center gap-3 max-md:mt-5">
                            <button className="rounded-full px-7 py-3 bg-white text-gray-900 border border-gray-300 font-semibold text-sm shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:bg-gray-50 hover:border-gray-400">Show
                                Invoice
                            </button>
                            <button className="rounded-full px-7 py-3 bg-primary shadow-sm shadow-transparent text-white font-semibold text-sm transition-all duration-500 hover:shadow-primary hover:bg-primary">
                                View Order
                            </button>

                        </div>
                    </div>
                    <Divider />
                    {orders.map((order) => (
                        <>
                            <div className="flex max-lg:flex-col items-center gap-8 lg:gap-24 px-3 md:px-11 py-8" key={order.id}>
                                <div className="grid grid-cols-4 w-full">
                                    <div className="col-span-4 sm:col-span-1">
                                        <img src={order.imageurl} alt="" className="h-36 w-36" />
                                    </div>
                                    <div className="col-span-4 sm:col-span-3 max-sm:mt-4 sm:pl-8 flex flex-col justify-center max-sm:items-center">
                                        <h6 className="text-black font-semibold mb-3 whitespace-nowrap">{order.product}</h6>
                                        <p className="font-normal text-lg leading-8 text-gray-500 mb-3 whitespace-nowrap">By: Dust Studios</p>
                                        <div className="flex items-center max-sm:flex-col gap-x-10">
                                            <span className="font-normal text-lg text-gray-500 whitespace-nowrap">Size: s</span>
                                            <span className="font-normal text-lg text-gray-500 whitespace-nowrap">Qty: 1</span>
                                            <p className="font-semibold text-black whitespace-nowrap">{`Price: $${order.price}`}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-around w-full  sm:pl-28 lg:pl-0">
                                    <div className="flex flex-col justify-center items-start max-sm:items-center">
                                        <p className="font-normal text-lg text-gray-500 leading-8 mb-2 text-left whitespace-nowrap">
                                            Status</p>
                                        <p className={`font-semibold text-lg leading-8  text-left whitespace-nowrap ${order.status === "Delivered"
                                            ? "text-green-500"
                                            : order.status === "Pending"
                                                ? "text-yellow-500"
                                                : order.status === "Cancelled"
                                                    ? "text-red-500"
                                                    : ""}`}>{order.status}</p>
                                    </div>
                                    <div className="flex flex-col justify-center items-start max-sm:items-center">
                                        <p className="font-normal text-lg text-gray-500 leading-8 mb-2 text-left whitespace-nowrap">
                                            Delivery Expected by</p>
                                        <p className="font-semibold text-lg leading-8 text-black text-left whitespace-nowrap">23rd March
                                            2021</p>
                                    </div>

                                </div>
                            </div>
                            <Divider orientation="horizontal" />
                        </>
                    ))}
                    <div className="px-3 md:px-11 flex justify-end max-sm:flex-col-reverse">
                        <p className="font-medium text-xl leading-8 text-black max-sm:py-4 py-8"> <span className="text-gray-500">Total Price: </span> &nbsp;$200.00</p>
                    </div>
                </div>
            </div>
        </section>


    )
}

export default Order