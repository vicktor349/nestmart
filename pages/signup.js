import { Checkbox, Divider } from '@mantine/core'
import Head from 'next/head'
import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { MdFacebook } from "react-icons/md";
import Link from 'next/link';



const signup = () =>
{
    const Button = ({ text, icon }) =>
    {
        return (
            <div className='text-primaryText bg-white border-borderColor border rounded-md w-44 h-12 flex items-center justify-center text-center hover:cursor-pointer select-none space-x-3'>
                {icon} <p className='font-semibold text-primaryText'>{text}</p>
            </div>

        )
    }
    return (
        <>
            <Head>
                <title>Nest | SignUp</title>
            </Head>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 lg:px-8">
                <div className="mt-12 mb-40 sm:mx-auto sm:w-full sm:max-w-sm">
                    <h3 className='text-primaryText text-center font-semibold text-4xl mb-6'>Sign Up</h3>
                    <form className="space-y-6" action="#" method="POST">
                        <div className='flex items-center space-x-6'>
                            <div className="mt-2">
                                <label htmlFor="firstname" className="block text-sm font-medium leading-6 text-gray-900">
                                    First Name
                                </label>
                                <input
                                    id="firstname"
                                    name="firstname"
                                    type="text"
                                    required
                                    className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 outline-none"
                                />
                            </div>
                            <div className="mt-2 ml-auto">
                                <label htmlFor="lastname" className="block text-sm font-medium leading-6 text-gray-900">
                                    Last Name
                                </label>
                                <input
                                    id="lastname"
                                    name="lastname"
                                    type="text"
                                    required
                                    className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 outline-none"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 outline-none"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="mt-2">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 outline-none px-2"
                                />
                            </div>
                            <div className="text-sm my-5 flex items-center">
                                <Checkbox
                                    label="Remember me"
                                    className='text-primaryText'
                                />
                                <a href="#" className="font-semibold text-primaryText ml-auto">
                                    Forgot password?
                                </a>
                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign in
                            </button>
                        </div>
                    </form>
                    <div className='flex items-center mt-4'>
                        <p className='text-primaryText'>Already have an account?</p>
                        <Link href="/signin" className='text-primaryText ml-4 underline'>
                            Sign In
                        </Link>
                    </div>
                    <Divider label="Or continue with" labelPosition='center' className='font-semibold my-5' />
                    <div className="flex items-center justify-between space-x-6">
                        <Button text="Google" icon={<FcGoogle className='text-xl' />} />
                        <Button text="Google" icon={<MdFacebook className='text-2xl' color='#0080ff' />} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default signup