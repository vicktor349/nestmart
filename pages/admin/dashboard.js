import { useUser } from '@/components/userContext'
import supabase from '@/helpers/supabase'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'


const dashboard = () =>
{
    const { user } = useUser()
    const { replace } = useRouter()
    const [users, setUsers] = useState([])
    if (user)
    {
        if (user.user_metadata.role !== 'admin')
        {
            replace("/")
        }
    }
    useEffect(() =>
    {
        const getAllUsers = async () =>
        {
            const { data: { users }, error } = await supabase.auth.admin.listUsers()
            const filteredusers = users.filter(user => user.user_metadata.role === "user")
            setUsers(filteredusers)
        }
        getAllUsers()
    }, [])

    const handleUserDelete = async (id) =>
    {
        const { data, error } = await supabase.auth.admin.deleteUser(
            id
        )
    }

    return (
        <>
            <Head>
                <title>Nest | Admin Dashboard</title>
            </Head>
            <div className="h-dvh">
                {users.map((user) => (
                    <div key={user.id} className='flex items-center'>
                        <p>{user.user_metadata.firstname}</p>
                        <button className='bg-primary w-fit px-4 py-1 rounded-md' onClick={() => handleUserDelete(user.id)}>Delete User</button>
                    </div>
                ))}
            </div>
        </>
    )
}

export default dashboard