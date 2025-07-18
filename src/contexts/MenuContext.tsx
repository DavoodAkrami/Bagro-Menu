"use client"
import React, { createContext, useState, useEffect, useContext} from "react";
import { supabase } from "@/utils/supabaseClient"; 


export type MenuItem = {
    id: number;
    name: string;
    price: number | null;
    category: string;
    description: string;
    ingredients: string[];
    images: string[];
    isNewItem: boolean;
    isSpicy: boolean;
};

type MenuContext = {
    menu: MenuItem[];
    loading: boolean;
    error: string | null;
    refresh: () => void;
}

const MenuContext = createContext<MenuContext | undefined>(undefined);

export const useMenu = () => {
    const context = useContext(MenuContext);
    if (!context) throw new Error('useMenu must be used within a MenuProvider');
    return context;
}


export const MenuProvider: React.FC<{ children: React.ReactNode}> = ({ children }) => {
    const [menu, setMenu] = useState<MenuItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);


    const fetchMenu = async () => {
        setLoading(true);
        setError(null);
        const { data, error } = await supabase.from('menu').select('*').order('id');
        if (error) setError(error.message);
        else setMenu(data as MenuItem[]);
        setLoading(false);
    } 

    useEffect(() => {
        fetchMenu();
    }, []);


    return (
        <MenuContext.Provider value={{ menu, loading, error, refresh: fetchMenu }}>
            {children}
        </MenuContext.Provider>
    )
}