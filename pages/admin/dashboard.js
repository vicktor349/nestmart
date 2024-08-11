import { useUser } from '@/components/userContext'
import { useRouter } from 'next/router'
import React from 'react'


const dashboard = () =>
{
    const { user } = useUser()
    const { replace } = useRouter()
    if (user)
    {
        if (user.user_metadata.role !== 'admin')
        {
            replace("/")
        }
    }

    return (
        <div>
            admin dashboard
        </div>
    )
}

export default dashboard