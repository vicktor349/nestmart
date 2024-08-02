import supabase from '@/config/supabase'
import Head from 'next/head'
import React, { useState } from 'react'
import { showNotification } from '@mantine/notifications'
import { HiOutlineLockClosed } from "react-icons/hi2";
import { Loader } from '@mantine/core'

const ResetPassword = () =>
{
    const [email, setEmail] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = async (e) =>
    {
        setIsSubmitting(true)
        e.preventDefault()
        const { error } = await supabase.auth.resetPasswordForEmail(email)

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
                message: 'Password reset email sent!',
                color: 'green',
            })
        }
        setIsSubmitting(false)
    }


    return (
        <>
            <Head>
                <title>Nest | Reset Password</title>
            </Head>
            <div className='flex justify-center items-center'>
                <div className='grid place-items-center ssm:w-full ssms:w-[26rem] sm:w-[30rem] sm:shadow-xl ssms:px-3 ssm:py-12 ssms:py-28 sm:px-10 space-y-5'>
                    <div className='border border-black border-solid rounded-full sm:w-32 ssm:h-20 ssm:w-20 sm:h-32 flex items-center justify-center'><HiOutlineLockClosed className='ssm:w-10 ssm:h-10 sm:w-20 sm:h-20' /></div>
                    <p className='font-semibold text-2xl'>Trouble loggin in?</p>
                    <p className='text-center'>Enter your email and we'll send you a link to get back into your account.</p>
                    <form className='w-full ssms:w-96 space-y-5' onSubmit={handleSubmit}>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder='Enter your email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                autoComplete="email"
                                required
                                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 outline-none"
                            />
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center items-center rounded-md bg-primary h-10 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? <Loader size={16} color="white" /> : "Reset Password"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ResetPassword
