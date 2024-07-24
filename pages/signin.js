import { useState } from 'react';
import { Checkbox, Divider, Loader } from '@mantine/core';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { MdFacebook } from "react-icons/md";
import supabase from '@/config/supabase';
import { notifications } from '@mantine/notifications';
import { useRouter } from 'next/router';
import { useUser } from '@/components/userContext';

const Button = ({ text, icon, onClick }) =>
{
    return (
        <div onClick={onClick} className='text-primaryText bg-white border-borderColor border rounded-md w-44 h-12 flex items-center justify-center text-center hover:cursor-pointer select-none space-x-3'>
            {icon} <p className='font-semibold text-primaryText'>{text}</p>
        </div>
    );
};

const SignIn = () =>
{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const { replace } = useRouter()
    const { user } = useUser()
    const handleSignIn = async (e) =>
    {
        e.preventDefault();
        setLoading(true);
        const { user, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });
        setLoading(false);
        if (error)
        {
            console.error('Error signing in:', error.message);
            notifications.show({ title: "Error", message: error.message, color: "red" })
        } else
        {
            notifications.show({ title: "Success", message: "Login Successful", color: "#3BB77E" })
        }
    };
    if (user)
    {
        replace('/dashboard');
        return null;
    }

    return (
        <>
            <Head>
                <title>Nest | SignIn</title>
            </Head>
            <div className="flex justify-center items-center px-6 lg:px-8">
                <div className="sm:w-full sm:max-w-sm mt-10">
                    <h3 className='text-primaryText text-center font-semibold text-4xl mb-6'>Sign In</h3>
                    <form className="space-y-6" onSubmit={handleSignIn}>
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
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 outline-none"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                Password
                            </label>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 outline-none px-2"
                                />
                            </div>
                            <div className="text-sm my-5 flex items-center">
                                <Checkbox label="Remember me" className='text-primaryText' />
                                <a href="/resetpassword" className="font-semibold text-primaryText ml-auto">
                                    Forgot password?
                                </a>
                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-primary h-10 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                disabled={loading}
                            >
                                {loading ? <Loader size={16} color='white' /> : 'Sign in'}
                            </button>
                        </div>
                    </form>
                    <div className='flex items-center mt-4'>
                        <p className='text-primaryText'>Don&apos;t have an account?</p>
                        <Link href="/signup" className='text-primaryText ml-4 underline'>
                            Sign Up
                        </Link>
                    </div>
                    <Divider label="Or continue with" labelPosition='center' className='font-semibold my-5' />
                    <div className="flex items-center justify-between space-x-6">
                        <Button text="Google" icon={<FcGoogle className='text-xl' />} onClick={() => supabase.auth.signInWithOAuth({ provider: 'google' })} />
                        <Button text="Facebook" icon={<MdFacebook className='text-2xl' color='#0080ff' />} onClick={() => supabase.auth.signInWithOAuth({ provider: 'facebook' })} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignIn;
