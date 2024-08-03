import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useCart } from '@/components/CartContext';

const Cart = () =>
{
    const { cartItems, updateQuantity, removeItem, clearCart } = useCart();

    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

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
                                <Image src="/images/cart.png" alt='Cart Image' className='w-72 h-72' width={500} height={500} />
                                <p className='text-3xl font-semibold'>Your cart is empty!</p>
                                <p>Browse our categories and discover our best deals!</p>
                                <Link href="/" className='w-fit py-3 px-3 bg-primary text-white rounded-md shadow-primary shadow-sm'>
                                    Start Shopping
                                </Link>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="grid grid-cols-3 gap-4">
                        <div className="col-span-2">
                            <h1 className="text-4xl font-bold mb-4 text-primaryText">Your Cart</h1>
                            <div className='flex items-center justify-between'>
                                <p>There are <span className='text-primary'>{cartItems.length}</span> products in your cart</p>
                                <div className='text-[#666] flex items-center hover:cursor-pointer hover:text-red-500 text-sm space-x-1' onClick={clearCart}>
                                    <RiDeleteBin6Line />
                                    <p>Clear Cart</p>
                                </div>
                            </div>
                            <table className="min-w-full bg-white mt-12">
                                <thead>
                                    <tr className='bg-gray-200'>
                                        <th className="py-6 pl-3 text-left text-primaryText">Product</th>
                                        <th className="py-6 text-left text-primaryText">Unit Price</th>
                                        <th className="py-6 text-left text-primaryText">Quantity</th>
                                        <th className="py-6 text-left text-primaryText">Subtotal</th>
                                        <th className="py-6 pr-3 text-center text-primaryText">Remove</th>
                                    </tr>
                                </thead>
                                <tbody className='border border-solid border-gray-200'>
                                    {cartItems.map(item => (
                                        <tr key={item.id} className='border-b border-solid border-gray-200'>
                                            <td className="py-10 pl-4">{item.text}</td>
                                            <td className="py-10">${item.price.toFixed(2)}</td>
                                            <td className="py-10">
                                                <input
                                                    type="number"
                                                    value={item.quantity}
                                                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value, 10))}
                                                    className="border-2 border-primary border-solid rounded-md p-2 w-20"
                                                    min="0"
                                                />
                                            </td>
                                            <td className="py-10 text-primary font-semibold text-lg">${(item.price * item.quantity).toFixed(2)}</td>
                                            <td className="text-center">
                                                <button onClick={() => removeItem(item.id)} className="text-[#666] hover:text-red-500"><RiDeleteBin6Line size={20} /></button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="col-span-1 mt-28">
                            <div className="rounded-lg shadow-lg py-12 space-y-7 px-4">
                                <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                                <p className='flex items-center justify-between text-primaryText'>Subtotal: <span className='font-semibold text-primary'>${subtotal.toFixed(2)}</span></p>
                                <p className='flex items-center justify-between text-primaryText'>Shipping: <span className='font-semibold text-primary'>Free</span></p>
                                <p className='flex items-center justify-between text-primaryText'>Total: <span className='font-semibold text-primary'>${subtotal.toFixed(2)}</span></p>
                                <button className="bg-primary text-white py-3 px-4 rounded mt-4 w-full hover:shadow-lg">Proceed To Checkout</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Cart;
