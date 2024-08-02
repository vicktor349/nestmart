import supabase from '@/config/supabase'
import Head from 'next/head'
import React, { useState } from 'react'
import { showNotification } from '@mantine/notifications'
import { useRouter } from 'next/router'
import { Loader } from '@mantine/core'
import { HiOutlineLockClosed } from 'react-icons/hi'

const resetpasswordform = () =>
{
    const { push } = useRouter()
    const [newPassword, setNewPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = async (e) =>
    {
        setIsSubmitting(true)
        e.preventDefault()
        if (newPassword !== confirmPassword)
        {
            showNotification({
                title: 'Error',
                message: 'Passwords do not match.',
                color: 'red',
            })
            return
        }

        const { error } = await supabase.auth.updateUser({ password: newPassword })

        if (error)
        {
            showNotification({
                title: 'Error',
                message: error.message,
                color: 'red',
            })
        } else
        {
            showNotification({
                title: 'Success',
                message: 'Password updated successfully!',
                color: 'green',
            })
            setIsSubmitting(!isSubmitting)
            push('/signin')
        }
        setIsSubmitting(false)
    }

    return (
        <>
            <Head>
                <title>Nest | Reset Password</title>
            </Head>
            <div className='flex justify-center items-center'>
                <div className='grid place-items-center ssm:w-full sm:w-[30rem] sm:border ssms:px-3 ssm:py-8 ssms:py-28 sm:px-10 space-y-5'>
                    <div className='border border-black border-solid rounded-full sm:w-32 ssm:h-20 ssm:w-20 sm:h-32 flex items-center justify-center'><HiOutlineLockClosed className='ssm:w-10 ssm:h-10 sm:w-20 sm:h-20' /></div>
                    <p>Create A Strong Password</p>
                    <p className='text-gray-400 ssm:text-sm sssms:text-base'>Your password must be at least 6 characters</p>
                    <form className='w-full ssms:w-96 space-y-5' onSubmit={handleSubmit}>
                        <div className="mt-2">
                            <input
                                required
                                id="new-password"
                                name="new-password"
                                type="password"
                                placeholder='Enter new password'
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 outline-none"
                            />
                        </div>
                        <div className="mt-2">
                            <input
                                id="confirm-password"
                                name="confirm-password"
                                type="password"
                                placeholder='Confirm new password'
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 outline-none"
                            />
                        </div>
                        <div>
                            <button type="submit" disabled={isSubmitting} className="flex w-full justify-center items-center rounded-md bg-primary h-10 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                {isSubmitting ? <Loader size={16} color='white' /> : "Update Password"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default resetpasswordform
