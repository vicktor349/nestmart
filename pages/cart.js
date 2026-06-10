import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { Loader } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { useCart } from '@/components/CartContext';
import { useUser } from '@/components/userContext';
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md';
import ConfirmationModal from '@/components/ConfirmationModal';

const Cart = () =>
{
    const { cartItems, updateQuantity, removeItem, clearCart } = useCart();
    const { user } = useUser();
    const router = useRouter();
    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [itemToRemove, setItemToRemove] = useState(null);
    const [isCheckingOut, setIsCheckingOut] = useState(false);

    const handleCheckout = async () =>
    {
        if (!user)
        {
            notifications.show({ title: 'Sign in required', message: 'Please sign in to checkout.', color: 'yellow' });
            router.push('/signin');
            return;
        }

        setIsCheckingOut(true);
        try
        {
            const res = await fetch('/api/paystack/initialize', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: user.email, items: cartItems }),
            });
            const data = await res.json();

            if (!res.ok)
            {
                notifications.show({ title: 'Error', message: data.error || 'Could not start checkout.', color: 'red' });
                setIsCheckingOut(false);
                return;
            }

            window.location.href = data.authorization_url;
        } catch (err)
        {
            console.error('Checkout error:', err);
            notifications.show({ title: 'Error', message: 'Could not start checkout.', color: 'red' });
            setIsCheckingOut(false);
        }
    };

    const handleQuantityChange = (id, quantity) =>
    {
        if (quantity === 0)
        {
            const item = cartItems.find(item => item.id === id);
            setItemToRemove(item);
            setIsModalOpen(true);
        } else
        {
            updateQuantity(id, quantity);
        }
    };

    const handleRemoveItemClick = (item) =>
    {
        setItemToRemove(item);
        setIsModalOpen(true);
    };

    const handleConfirmRemove = (id) =>
    {
        removeItem(id);
        setIsModalOpen(false);
        setItemToRemove(null);
    };

    const handleCloseModal = () =>
    {
        setIsModalOpen(false);
        setItemToRemove(null);
    };

    return (
        <>
            <Head>
                <title>Nest | Cart</title>
            </Head>
            <div className="mx-auto px-4 mb-32">
                {cartItems.length === 0 ? (
                    <div style={{ height: "80vh" }}>
                        <div className='flex justify-center'>
                            <div className='grid place-items-center space-y-7'>
                                <Image src="/images/cart.png" alt='Cart Image' className='ssm:w-48 ssm:h-48 sm:w-72 sm:h-72' width={500} height={500} priority />
                                <p className='ssm:text-xl sm:text-3xl font-semibold'>Your cart is empty!</p>
                                <p className='ssm:text-sm text-center sm:text-base'>Browse our categories and discover our best deals!</p>
                                <Link href="/" className='w-fit py-3 px-3 bg-primary text-white rounded-md shadow-primary shadow-sm'>
                                    Start Shopping
                                </Link>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="xl:grid grid-cols-3 gap-4">
                        <div className="col-span-2">
                            <h1 className="text-4xl font-bold mb-4 text-primaryText">Your Cart</h1>
                            <div className='ssms:flex items-center justify-between ssm:space-y-3 ssms:space-y-0'>
                                <p>There are <span className='text-primary'>{cartItems.length}</span> products in your cart</p>
                                <div className='text-[#666] flex items-center hover:cursor-pointer hover:text-red-500 text-sm space-x-1 w-fit' onClick={clearCart}>
                                    <RiDeleteBin6Line />
                                    <p>Clear Cart</p>
                                </div>
                            </div>
                            <table className="min-w-full bg-white mt-12">
                                <thead>
                                    <tr className='bg-gray-200'>
                                        <th className="py-6 pl-3 text-left text-primaryText ssm:text-sm lg:text-base">Product</th>
                                        <th className="py-6 text-left text-primaryText ssm:text-sm lg:text-base">Price($)</th>
                                        <th className="py-6 lg:text-left text-primaryText ssm:text-sm lg:text-base">Quantity</th>
                                        <th className="py-6 ssm:pr-1 lg:pr-3 text-center text-primaryText ssm:text-sm lg:text-base">Remove</th>
                                    </tr>
                                </thead>
                                <tbody className='border border-solid border-gray-200'>
                                    {cartItems.map(item => (
                                        <tr key={item.id} className='border-b border-solid border-gray-200'>
                                            <td className="py-10 pl-4 text-sm">{item.text}</td>
                                            <td className="py-10">{item.price.toFixed(2)}</td>
                                            <td className="py-10">
                                                <div className="custom-number-input w-20">
                                                    <input
                                                        type="number"
                                                        value={item.quantity}
                                                        onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value, 10))}
                                                        className="border-2 border-primary border-solid rounded-md p-2 w-20 no-spinner"
                                                        min="0"
                                                    />
                                                    <button
                                                        type="button"
                                                        className="up"
                                                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                                    >
                                                        <MdOutlineKeyboardArrowUp className='w-6 h-6 text-primary' />
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className="down"
                                                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                                    >
                                                        <MdOutlineKeyboardArrowDown className='w-6 h-6 text-primary' />
                                                    </button>
                                                </div>
                                            </td>
                                            <td className="text-center">
                                                <button onClick={() => handleRemoveItemClick(item)} className="text-[#666] hover:text-red-500"><RiDeleteBin6Line size={20} /></button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="col-span-1 ssm:mt-12 xl:mt-28">
                            <div className="rounded-lg shadow-lg py-12 space-y-7 px-4">
                                <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                                <p className='flex items-center justify-between text-primaryText'>Subtotal: <span className='font-semibold text-primary'>₦{subtotal.toFixed(2)}</span></p>
                                <p className='flex items-center justify-between text-primaryText'>Shipping: <span className='font-semibold text-primary'>Free</span></p>
                                <p className='flex items-center justify-between text-primaryText'>Total: <span className='font-semibold text-primary'>₦{subtotal.toFixed(2)}</span></p>
                                <button
                                    onClick={handleCheckout}
                                    disabled={isCheckingOut}
                                    className="bg-primary text-white py-3 px-4 rounded mt-4 w-full hover:shadow-lg flex justify-center items-center"
                                >
                                    {isCheckingOut ? <Loader size={20} color="white" /> : 'Proceed To Checkout'}
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <ConfirmationModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                onConfirm={handleConfirmRemove}
                item={itemToRemove}
            />
        </>
    );
};

export default Cart;