import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import { BsCheckCircle, BsXCircle } from 'react-icons/bs';
import { Loader } from '@mantine/core';
import supabase from '@/helpers/supabase';
import { useCart } from '@/components/CartContext';

const CheckoutCallback = () =>
{
    const router = useRouter();
    const { clearCart } = useCart();
    const [status, setStatus] = useState('verifying');
    const [errorMessage, setErrorMessage] = useState('');
    const verified = useRef(false);

    useEffect(() =>
    {
        if (!router.isReady || verified.current) return;

        const { reference } = router.query;
        if (!reference)
        {
            setStatus('failed');
            setErrorMessage('No transaction reference found.');
            return;
        }

        verified.current = true;

        const verifyPayment = async () =>
        {
            try
            {
                const res = await fetch(`/api/paystack/verify?reference=${encodeURIComponent(reference)}`);
                const data = await res.json();

                if (!res.ok || !data.success)
                {
                    setStatus('failed');
                    setErrorMessage(data.error || `Payment ${data.status || 'was not successful'}.`);
                    return;
                }

                const { data: { session } } = await supabase.auth.getSession();
                const userId = session?.user?.id;

                if (data.items && data.items.length > 0 && userId)
                {
                    const orders = data.items.map(item => ({
                        user_id: userId,
                        imageurl: item.imageurl,
                        product: item.product,
                        price: item.price * item.quantity,
                        status: 'Paid',
                    }));
                    const { error } = await supabase.from('order_history').insert(orders);
                    if (error)
                    {
                        console.error('Failed to save order history:', error.message);
                        setErrorMessage(`Payment succeeded but we could not save your order (${error.message}). Please contact support with reference: ${reference}`);
                        setStatus('failed');
                        return;
                    }
                }

                if (userId)
                {
                    const productList = data.items.map(i => `${i.product} (x${i.quantity})`).join(', ');
                    await supabase.from('messages').insert({
                        user_id: userId,
                        title: 'Order Confirmed!',
                        body: `Thank you for your purchase! Your order has been received and is being processed. Items ordered: ${productList}. Total paid: ₦${data.amount.toFixed(2)}. You can track your order in the Orders section of your dashboard.`,
                    });
                }

                clearCart();
                setStatus('success');
            } catch (err)
            {
                console.error('Verification error:', err);
                setStatus('failed');
                setErrorMessage('Could not verify your payment. If you were charged, please contact support.');
            }
        };

        verifyPayment();
    }, [router.isReady, router.query]);

    return (
        <>
            <Head>
                <title>Nest | {status === 'success' ? 'Payment Successful' : status === 'failed' ? 'Payment Failed' : 'Verifying Payment'}</title>
            </Head>
            <div className="flex justify-center items-center" style={{ minHeight: '70vh' }}>
                {status === 'verifying' ? (
                    <div className="grid place-items-center space-y-4">
                        <Loader size={48} color="green" />
                        <p className="text-secondaryText">Verifying your payment...</p>
                    </div>
                ) : (
                    <div className="grid place-items-center space-y-6 px-4 text-center">
                        {status === 'success' ? (
                            <>
                                <BsCheckCircle className="text-primary" size={80} />
                                <h1 className="ssm:text-2xl sm:text-4xl font-semibold text-primaryText">Payment Successful!</h1>
                                <p className="text-secondaryText">Thank you for your order. We&apos;re getting it ready for you.</p>
                                <div className="flex items-center space-x-4">
                                    <Link href="/dashboard?component=Order" className="py-3 px-5 bg-primary text-white rounded-md shadow-sm">
                                        View Orders
                                    </Link>
                                    <Link href="/shop" className="py-3 px-5 border border-primary text-primary rounded-md">
                                        Continue Shopping
                                    </Link>
                                </div>
                            </>
                        ) : (
                            <>
                                <BsXCircle className="text-red-500" size={80} />
                                <h1 className="ssm:text-2xl sm:text-4xl font-semibold text-primaryText">Payment Failed</h1>
                                <p className="text-secondaryText">{errorMessage}</p>
                                <Link href="/cart" className="py-3 px-5 bg-primary text-white rounded-md shadow-sm">
                                    Back to Cart
                                </Link>
                            </>
                        )}
                    </div>
                )}
            </div>
        </>
    );
};

export default CheckoutCallback;
