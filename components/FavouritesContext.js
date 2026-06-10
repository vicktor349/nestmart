import React, { createContext, useContext, useState, useEffect } from 'react';
import supabase from '@/helpers/supabase';
import { useUser } from './userContext';

const FavouritesContext = createContext();

export const FavouritesProvider = ({ children }) =>
{
    const { user } = useUser();
    const [favourites, setFavourites] = useState([]);

    useEffect(() =>
    {
        if (user) fetchFavourites();
        else setFavourites([]);
    }, [user]);

    async function fetchFavourites()
    {
        const { data } = await supabase.from('favourites').select('*').eq('user_id', user.id);
        if (data) setFavourites(data);
    }

    const isFavourite = (productId) => favourites.some(f => f.product_id === productId);

    const toggleFavourite = async (product) =>
    {
        if (!user) return;
        if (isFavourite(product.id))
        {
            setFavourites(prev => prev.filter(f => f.product_id !== product.id));
            await supabase.from('favourites').delete().eq('user_id', user.id).eq('product_id', product.id);
        } else
        {
            const item = {
                user_id: user.id,
                product_id: product.id,
                imageurl: product.imageurl,
                text: product.text,
                price: product.price,
                changedprice: product.changedprice,
                category: product.category,
                vendor: product.vendor,
                rating: product.rating,
            };
            setFavourites(prev => [...prev, item]);
            await supabase.from('favourites').insert(item);
        }
    };

    return (
        <FavouritesContext.Provider value={{ favourites, isFavourite, toggleFavourite }}>
            {children}
        </FavouritesContext.Provider>
    );
};

export const useFavourites = () => useContext(FavouritesContext);
