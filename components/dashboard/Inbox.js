import React, { useEffect, useState } from 'react'
import supabase from '@/helpers/supabase'
import { useUser } from '../userContext'
import { Divider } from '@mantine/core'
import { CiMail } from 'react-icons/ci'

const Inbox = () =>
{
    const { user } = useUser()
    const [messages, setMessages] = useState([])
    const [loading, setLoading] = useState(true)
    const [selected, setSelected] = useState(null)

    useEffect(() =>
    {
        if (user) fetchMessages()
    }, [user])

    async function fetchMessages()
    {
        const { data } = await supabase
            .from('messages')
            .select('*')
            .eq('user_id', user.id)
            .order('created_at', { ascending: false })
        if (data) setMessages(data)
        setLoading(false)
    }

    const openMessage = async (msg) =>
    {
        setSelected(msg)
        if (!msg.is_read)
        {
            await supabase.from('messages').update({ is_read: true }).eq('id', msg.id)
            setMessages(prev => prev.map(m => m.id === msg.id ? { ...m, is_read: true } : m))
        }
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
            <h2 className="font-bold text-3xl text-black mb-9">Inbox</h2>
            {messages.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-64 space-y-4 text-secondaryText">
                    <CiMail size={60} className="text-gray-300" />
                    <p className="text-xl font-semibold">No messages yet</p>
                    <p className="text-sm">Messages about your orders will appear here.</p>
                </div>
            ) : (
                <div className="grid lg:grid-cols-3 gap-4">
                    <div className="lg:col-span-1 border border-gray-200 rounded-lg overflow-hidden divide-y divide-gray-200">
                        {messages.map(msg => (
                            <div
                                key={msg.id}
                                onClick={() => openMessage(msg)}
                                className={`p-4 cursor-pointer hover:bg-gray-50 ${selected?.id === msg.id ? 'bg-primary/10 border-l-4 border-primary' : ''}`}
                            >
                                <div className="flex items-center space-x-3">
                                    {msg.is_read
                                        ? <CiMail className="text-gray-400 shrink-0" size={20} />
                                        : <CiMail className="text-primary shrink-0" size={20} />}
                                    <div className="min-w-0">
                                        <p className={`text-sm truncate ${msg.is_read ? 'text-gray-600' : 'font-semibold text-primaryText'}`}>{msg.title}</p>
                                        <p className="text-xs text-gray-400">
                                            {new Date(msg.created_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="lg:col-span-2 border border-gray-200 rounded-lg p-6">
                        {selected ? (
                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold text-primaryText">{selected.title}</h3>
                                <p className="text-xs text-gray-400">
                                    {new Date(selected.created_at).toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
                                </p>
                                <Divider />
                                <p className="text-gray-600 leading-relaxed">{selected.body}</p>
                            </div>
                        ) : (
                            <div className="flex flex-col items-center justify-center h-full text-gray-400 space-y-2 py-20">
                                <CiMail size={48} />
                                <p>Select a message to read</p>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </section>
    )
}

export default Inbox
