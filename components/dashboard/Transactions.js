import React, { useEffect, useState } from 'react'
import supabase from '@/helpers/supabase'
import { useUser } from '../userContext'
import { Divider } from '@mantine/core'
import { BsCheckCircle, BsClockHistory, BsXCircle } from 'react-icons/bs'

const Transactions = () =>
{
    const { user } = useUser()
    const [transactions, setTransactions] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() =>
    {
        if (user) fetchTransactions()
    }, [user])

    async function fetchTransactions()
    {
        const { data } = await supabase
            .from('order_history')
            .select('*')
            .eq('user_id', user.id)
            .order('id', { ascending: false })
        if (data) setTransactions(data)
        setLoading(false)
    }

    const total = transactions.reduce((sum, t) => sum + Number(t.price), 0)

    const StatusIcon = ({ status }) =>
    {
        if (status === 'Paid' || status === 'Delivered') return <BsCheckCircle className="text-green-500" size={18} />
        if (status === 'Cancelled') return <BsXCircle className="text-red-500" size={18} />
        return <BsClockHistory className="text-yellow-500" size={18} />
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
        <section>
            <h2 className="font-bold text-3xl text-black mb-9">Transactions</h2>
            {transactions.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-64 space-y-4 text-secondaryText">
                    <p className="text-xl font-semibold">No transactions yet</p>
                    <p className="text-sm">Your payment history will appear here.</p>
                </div>
            ) : (
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <div className="grid grid-cols-4 bg-gray-50 px-6 py-3 text-sm font-semibold text-gray-500">
                        <p className="col-span-2">Product</p>
                        <p>Amount</p>
                        <p>Status</p>
                    </div>
                    <Divider />
                    {transactions.map((t, i) => (
                        <React.Fragment key={t.id}>
                            <div className="grid grid-cols-4 items-center px-6 py-5">
                                <div className="col-span-2 flex items-center space-x-3">
                                    <img
                                        src={t.imageurl}
                                        alt={t.product}
                                        className="w-12 h-12 object-contain rounded"
                                        onError={(e) => { e.target.style.display = 'none' }}
                                    />
                                    <div>
                                        <p className="font-medium text-sm text-primaryText line-clamp-1">{t.product}</p>
                                        <p className="text-xs text-gray-400">
                                            {t.created_at ? new Date(t.created_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) : '—'}
                                        </p>
                                    </div>
                                </div>
                                <p className="font-semibold text-primaryText">₦{Number(t.price).toFixed(2)}</p>
                                <div className="flex items-center space-x-2">
                                    <StatusIcon status={t.status} />
                                    <span className="text-sm font-medium">{t.status}</span>
                                </div>
                            </div>
                            {i < transactions.length - 1 && <Divider />}
                        </React.Fragment>
                    ))}
                    <Divider />
                    <div className="px-6 py-4 flex justify-end">
                        <p className="font-semibold text-lg">Total spent: <span className="text-primary">₦{total.toFixed(2)}</span></p>
                    </div>
                </div>
            )}
        </section>
    )
}

export default Transactions
