import supabase from '@/helpers/supabase'
import { Divider } from '@mantine/core'
import React, { useEffect, useState } from 'react'
import { useUser } from '../userContext'

const Order = () =>
{
    const { user } = useUser()
    const [orders, setOrders] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() =>
    {
        if (user) getOrders()
    }, [user])

    async function getOrders()
    {
        const { data, error } = await supabase
            .from('order_history')
            .select('*')
            .eq('user_id', user.id)
            .order('id', { ascending: false })

        if (error) console.error('Error fetching orders:', error.message)
        else setOrders(data)
        setLoading(false)
    }

    const statusColor = (s) =>
    {
        if (s === 'Delivered' || s === 'Paid') return 'text-green-500'
        if (s === 'Cancelled') return 'text-red-500'
        return 'text-yellow-500'
    }

    if (loading)
    {
        return (
            <div className="flex justify-center items-center h-64">
                <div className="loader"></div>
            </div>
        )
    }

    return (
        <section className="relative">
            <div className="w-full">
                <h2 className="font-manrope font-bold text-3xl lead-10 text-black mb-9">Order History</h2>

                {orders.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-64 space-y-4 text-secondaryText">
                        <p className="text-xl font-semibold">No orders yet</p>
                        <p className="text-sm">Your completed purchases will appear here.</p>
                    </div>
                ) : (
                    <div className="border border-gray-300 rounded-lg overflow-hidden">
                        {orders.map((order, index) => (
                            <React.Fragment key={order.id}>
                                <div className="flex max-lg:flex-col items-center gap-8 lg:gap-16 px-6 py-8">
                                    <div className="grid grid-cols-4 w-full">
                                        <div className="col-span-4 sm:col-span-1">
                                            <img
                                                src={order.imageurl}
                                                alt={order.product}
                                                className="h-28 w-28 object-contain"
                                                onError={(e) => { e.target.style.display = 'none' }}
                                            />
                                        </div>
                                        <div className="col-span-4 sm:col-span-3 max-sm:mt-4 sm:pl-8 flex flex-col justify-center max-sm:items-center">
                                            <h6 className="text-black font-semibold mb-3">{order.product}</h6>
                                            <div className="flex items-center max-sm:flex-col gap-x-10">
                                                <span className="font-normal text-lg text-gray-500">Order #{order.id}</span>
                                                <p className="font-semibold text-black">Price: ₦{order.price}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-around w-full sm:pl-28 lg:pl-0">
                                        <div className="flex flex-col justify-center items-start max-sm:items-center">
                                            <p className="font-normal text-lg text-gray-500 leading-8 mb-2">Status</p>
                                            <p className={`font-semibold text-lg leading-8 ${statusColor(order.status)}`}>
                                                {order.status}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {index < orders.length - 1 && <Divider />}
                            </React.Fragment>
                        ))}
                        <Divider />
                        <div className="px-6 flex justify-end py-6">
                            <p className="font-medium text-xl text-black">
                                <span className="text-gray-500">Total: </span>
                                ₦{orders.reduce((sum, o) => sum + Number(o.price), 0).toFixed(2)}
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}

export default Order
