import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import supabase from '@/helpers/supabase';
import { notifications } from '@mantine/notifications';
import { Loader } from '@mantine/core';

const VerifyEmail = () =>
{
    const router = useRouter();
    const { email } = router.query;
    const [isSending, setIsSending] = useState(false);
    const [timeLeft, setTimeLeft] = useState(300);

    useEffect(() =>
    {
        const timer = setInterval(() =>
        {
            setTimeLeft((prevTime) =>
            {
                if (prevTime <= 0)
                {
                    clearInterval(timer);
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    useEffect(() =>
    {
        if (timeLeft === 0)
        {
            setIsSending(false);
        }
    }, [timeLeft]);

    const handleResendVerificationClick = async () =>
    {
        if (isSending) return;

        setIsSending(true);
        setTimeLeft(300);

        const { error } = await supabase.auth.resend({
            type: 'signup',
            email: email,
            options: {
                emailRedirectTo: "/"
            }
        });

        if (error)
        {
            notifications.show({ title: "Error", message: error.message, color: "red" });
        } else
        {
            notifications.show({ title: "Success", message: "Confirmation mail has been sent", color: "#3BB77E" });
        }
    };

    const formatTime = (seconds) =>
    {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes}:${secs < 10 ? `0${secs}` : secs}`;
    };

    return (
        <div className='flex items-center justify-center' style={{ height: "55vh" }}>
            <Head>
                <title>Nest | Verify Email</title>
            </Head>
            <div className='grid place-items-center ssm:max-w-[27rem] sm:max-w-xl'>
                <Image src={"/images/pendingverification.png"} height={500} width={500} alt='Image of verification email' className='w-24 h-24' priority />
                <div className='grid place-items-center  text-center ssm:text-sm xl:text-base'>
                    <p className='ssm:text-xl sm:text-2xl 2xl:text-4xl text-primaryText'>Verify your email address</p>
                    <p className='ssm:leading-8 xl:leading-9'>Verify your email address A verification email has been sent to your email <span className='text-primary underline hover:cursor-pointer'>{email} </span>
                        Please check your email and click the link provided in the mail to complete your
                        account registration
                    </p>
                </div>
                <div className='grid place-items-center text-center mt-5 ssm:text-sm xl:text-base'>
                    <p className='ssm:leading-8 xl:leading-9'>
                        If you do not receive the email within the next 5 minutes, use the
                        button below to resend the verification email
                    </p>
                </div>
                <button
                    className={`flex items-center justify-center rounded-full ssm:text-sm text-base ssm:w-60 xl:w-80 2xl:w-96 h-12 font-semibold shadow-sm mt-5 ${isSending || timeLeft > 0
                        ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
                        : 'bg-primary text-white shadow-primary'
                        }`}
                    onClick={handleResendVerificationClick}
                    disabled={isSending || timeLeft > 0}
                >
                    {isSending ? <Loader size={20} color="white" /> : `Resend Verification Email ${timeLeft == 0 ? "" : formatTime(timeLeft)}`}
                </button>
            </div>
        </div>
    );
};

export default VerifyEmail;