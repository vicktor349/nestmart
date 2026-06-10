import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) =>
{
    const [cartItems, setCartItems] = useState(() =>
    {
        if (typeof window === 'undefined') return [];
        try
        {
            const stored = localStorage.getItem('cartItems');
            return stored ? JSON.parse(stored) : [];
        } catch
        {
            return [];
        }
    });

    useEffect(() =>
    {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (product, quantity = 1) =>
    {
        setCartItems(prevItems =>
        {
            const existingItem = prevItems.find(item => item.id === product.id);
            if (existingItem)
            {
                return prevItems.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
                );
            }
            return [...prevItems, { ...product, quantity }];
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
