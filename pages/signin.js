import { useState } from 'react';
import { Checkbox, Divider, Loader } from '@mantine/core';
import Head from 'next/head';
import Link from 'next/link';
import { FcGoogle } from "react-icons/fc";
import { MdFacebook } from "react-icons/md";
import supabase from '@/helpers/supabase';
import { notifications } from '@mantine/notifications';
import { useRouter } from 'next/router';
import Loaderr from '@/components/Loader';
import SocialButton from '@/components/SocialButton';


const SignIn = () =>
{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const { replace } = useRouter()
    const handleSignIn = async (e) =>
    {
        e.preventDefault();
        setLoading(true);

        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        setLoading(false);
        setIsLoading(true)

        if (error)
        {
            setIsLoading(false)
            console.error('Error signing in:', error.message);
            notifications.show({ title: "Error", message: error.message, color: "red" });
        } else
        {
            const { data: { user } } = await supabase.auth.getUser();

            if (user)
            {
                if (user.user_metadata.role === "user")
                {
                    notifications.show({ title: "Success", message: "Login Successful", color: "#3BB77E" });
                    replace("/dashboard");
                } else if (user.user_metadata.role === "admin")
                {
                    notifications.show({ title: "Success", message: "Login Successful", color: "#3BB77E" });
                    replace("/admin/dashboard");
                } else
                {
                    console.log("Login Error");
                }
            }
        }
    };
    if (isLoading)
    {
        return (
            <Loaderr />
        );
    }




    return (
        <>
            <Head>
                <title>Nest | SignIn</title>
            </Head>
            <div className="flex justify-center items-center px-6 lg:px-8 w-full">
                <div className="ssm:max-w-[27rem] sm:max-w-md ssm:mt-5 sm:mt-10 sm:shadow-xl rounded-lg sm:p-10">
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
                                className="flex w-full justify-center items-center rounded-md bg-primary h-10 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
                        <SocialButton text="Google" icon={<FcGoogle className='text-xl' />} onClick={() => supabase.auth.signInWithOAuth({ provider: 'google' })} />
                        <SocialButton text="Facebook" icon={<MdFacebook className='text-2xl' color='#0080ff' />} onClick={() => supabase.auth.signInWithOAuth({ provider: 'facebook' })} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignIn;
