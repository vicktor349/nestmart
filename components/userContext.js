import React, { createContext, useContext, useState, useEffect } from 'react';
import supabase from '@/config/supabase';
import { useRouter } from 'next/router';

const UserContext = createContext();

export const UserProvider = ({ children }) =>
{
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const { push } = useRouter()

    useEffect(() =>
    {
        const fetchUser = async () =>
        {
            const { data: { user } } = await supabase.auth.getUser();
            setUser(user);
            setLoading(false);
        };

        fetchUser();

        const { data: authListener } = supabase.auth.onAuthStateChange((event, session) =>
        {
            if (event === 'SIGNED_IN')
            {
                setUser(session.user);
            } else if (event === 'SIGNED_OUT')
            {
                setUser(null);
            }
        });

        return () =>
        {
            if (authListener) authListener.subscription.unsubscribe();
        };
    }, []);

    const logout = async () =>
    {
        await supabase.auth.signOut();
        setUser(null);
    };

    return (
        <UserContext.Provider value={{ user, loading, logout }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () =>
{
    return useContext(UserContext);
};