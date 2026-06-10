import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { AiFillHeart } from 'react-icons/ai'
import { BsCart2 } from 'react-icons/bs'
import { useFavourites } from '../FavouritesContext'
import { useCart } from '../CartContext'
import { notifications } from '@mantine/notifications'

const SavedItems = () =>
{
    const { favourites, toggleFavourite } = useFavourites()
    const { addToCart } = useCart()
    const router = useRouter()

    const handleAddToCart = (product) =>
    {
        addToCart(product)
        notifications.show({ title: 'Added to cart', message: product.text, color: 'green' })
    }

    return (
        <section>
            <h2 className="font-bold text-3xl text-black mb-9">Saved Items</h2>
            {favourites.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-64 space-y-4 text-secondaryText">
                    <AiFillHeart className="text-gray-300" size={60} />
                    <p className="text-xl font-semibold">No saved items yet</p>
                    <p className="text-sm">Tap the heart on any product to save it here.</p>
                </div>
            ) : (
                <div className="grid sssms:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                    {favourites.map((item) => (
                        <div key={item.id} className="border border-gray-200 rounded-xl hover:shadow-md transition-shadow">
                            <div className="relative">
                                <button
                                    onClick={() => toggleFavourite({ id: item.product_id, ...item })}
                                    className="absolute top-2 right-2 z-10 bg-white rounded-full p-1 shadow"
                                >
                                    <AiFillHeart className="text-red-500 text-lg" />
                                </button>
                                <Image
                                    src={item.imageurl}
                                    alt={item.text}
                                    width={300}
                                    height={300}
                                    className="w-full h-36 object-contain cursor-pointer mt-2"
                                    onClick={() => router.push(`/fullproduct/${item.product_id}`)}
                                />
                            </div>
                            <div className="p-3 space-y-2">
                                <p className="text-sm text-[#ADADAD]">{item.category}</p>
                                <p
                                    className="text-primaryText font-semibold text-sm line-clamp-2 cursor-pointer hover:text-primary"
                                    onClick={() => router.push(`/fullproduct/${item.product_id}`)}
                                >
                                    {item.text}
                                </p>
                                <div className="flex items-center justify-between">
                                    <p className="text-primary font-semibold">₦{item.price}</p>
                                    <button
                                        onClick={() => handleAddToCart({ id: item.product_id, ...item })}
                                        className="flex items-center space-x-1 bg-[#DEF9EC] text-primary text-sm py-1 px-3 rounded"
                                    >
                                        <BsCart2 />
                                        <span>Add</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </section>
    )
}

export default SavedItems
