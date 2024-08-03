import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) =>
{
    const [cartItems, setCartItems] = useState([]);

    useEffect(() =>
    {
        const storedCartItems = localStorage.getItem('cartItems');
        if (storedCartItems)
        {
            setCartItems(JSON.parse(storedCartItems));
        }
    }, []);

    useEffect(() =>
    {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (product) =>
    {
        setCartItems(prevItems =>
        {
            const existingItem = prevItems.find(item => item.id === product.id);
            if (existingItem)
            {
                return prevItems.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prevItems, { ...product, quantity: 1 }];
        });
    };

    const updateQuantity = (id, quantity) =>
    {
        if (quantity < 0) return;
        setCartItems(prevItems =>
            prevItems
                .map(item => (item.id === id ? { ...item, quantity } : item))
                .filter(item => item.quantity > 0)
        );
    };

    const removeItem = (id) =>
    {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    };

    const clearCart = () =>
    {
        setCartItems([]);
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, updateQuantity, removeItem, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
