import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import supabase from '@/helpers/supabase';
import { useRouter } from 'next/router';

const UserContext = createContext();

export const UserProvider = ({ children }) =>
{
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const { replace } = useRouter();

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
        replace("/");
        await supabase.auth.signOut();
        setUser(null);
    };

    const value = useMemo(() => ({ user, loading, logout }), [user, loading, logout]);

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () =>
{
    return useContext(UserContext);
};