import { Checkbox, Divider, Loader, Stepper, Button, Group } from '@mantine/core';
import Head from 'next/head';
import React, { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { MdFacebook } from "react-icons/md";
import Link from 'next/link';
import supabase from '@/helpers/supabase';
import { notifications } from '@mantine/notifications';
import { useUser } from '@/components/userContext';
import { useRouter } from 'next/router';
import SocialButton from '@/components/SocialButton';

const Signup = () =>
{
    const [isSubmitting, setIsSubmitting] = useState(false)
    const { replace, push } = useRouter()
    const { user } = useUser()
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        rememberMe: false
    });

    const handleChange = (e) =>
    {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    if (user)
    {
        if (user.identities[0].identity_data.email_verified === "true")
        {
            replace("/dashboard")
        }
    }

    const handleSubmit = async (e) =>
    {
        setIsSubmitting(true)
        e.preventDefault();

        const { firstname, lastname, email, password } = formData;
        try
        {

            const { error } = await supabase.auth.signUp({
                email: email,
                password: password,
                options: {
                    data: {
                        firstname: firstname,
                        lastname: lastname,
                        role: "user"
                    }
                },

            });
            // const { error } = await supabase.auth.admin.createUser({
            //     email: email,
            //     password: password,
            //     user_metadata: {
            //         firstname: firstname,
            //         lastname: lastname,
            //         role: "admin"
            //     },
            //     email_confirm: true
            // });

            if (error)
            {
                console.error('Error signing up:', error.message);
                notifications.show({ title: "Error", message: error.message, color: "red" })
            } else
            {
                notifications.show({ title: "Success", message: "You have signed up successfully!", color: "#3BB77E" });
                push({
                    pathname: "/verifyemail",
                    query: { email: email }
                })
            }
        } catch (err)
        {
            notifications.show({ title: "Error", message: err, color: "red" })
            setIsSubmitting(false)
        }
        setIsSubmitting(false)
    };


    return (
        <>
            <Head>
                <title>Nest | SignUp</title>
            </Head>
            <div className="flex justify-center items-center px-6 lg:px-8 w-full">
                <div className="ssm:max-w-[27rem] sm:max-w-lg sm:shadow-xl sm:p-10 rounded-lg sm:mt-4">
                    <h3 className='text-primaryText text-center font-semibold text-4xl mb-6'>Sign Up</h3>
                    <form className="space-y-6" onSubmit={handleSubmit} method="POST">
                        <div className='grid grid-cols-2 gap-2'>
                            <div className="mt-2">
                                <label htmlFor="firstname" className="block text-sm font-medium leading-6 text-gray-900">
                                    First Name
                                </label>
                                <input
                                    id="firstname"
                                    name="firstname"
                                    type="text"
                                    required
                                    value={formData.firstname}
                                    onChange={handleChange}
                                    className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 outline-none"
                                />
                            </div>
                            <div className="mt-2">
                                <label htmlFor="lastname" className="block text-sm font-medium leading-6 text-gray-900">
                                    Last Name
                                </label>
                                <input
                                    id="lastname"
                                    name="lastname"
                                    type="text"
                                    required
                                    value={formData.lastname}
                                    onChange={handleChange}
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
                                    value={formData.email}
                                    onChange={handleChange}
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
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 outline-none px-2"
                                />
                            </div>
                            <div className="text-sm my-5 flex items-center">
                                <Checkbox
                                    label="Remember me"
                                    name="rememberMe"
                                    checked={formData.rememberMe}
                                    onChange={handleChange}
                                    className='text-primaryText'
                                />
                                <a href="/resetpassword" className="font-semibold text-primaryText ml-auto">
                                    Forgot password?
                                </a>
                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="flex w-full justify-center items-center rounded-md bg-primary h-10 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                {isSubmitting ? <Loader size={16} color='white' /> : " Sign Up"}
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
                        <SocialButton text="Google" icon={<FcGoogle className='text-xl' />} />
                        <SocialButton text="Facebook" icon={<MdFacebook className='text-2xl' color='#0080ff' />} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signup;