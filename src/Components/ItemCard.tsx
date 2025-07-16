"use client"
import { MenuItem } from '../Data/Menu';
import { motion } from 'framer-motion';
import React from 'react';

type ItemCardProps = {
    item: MenuItem | undefined;
    onSelect?: (id: number) => void;
}

const ItemCard: React.FC<ItemCardProps> = ({item, onSelect}) => {
    if(!item) {
        return null;
    } 
    return (
        <motion.div
            layoutId={`card-${item.id}`}
            onClick={() => onSelect?.(item.id)}
            dir="rtl" 
            className="w-[80%] max-md:w-[95%] mx-auto px-[1.6rem] py-[2rem] max-md:px-[1rem] max-md:py-[1.2rem] bg-[var(--card-color)] rounded-[10px] cursor-pointer]"
        >
            <div className="flex items-center gap-[20%] text-[var(--white-color)] text-[2.6rem] px-[1rem] max-md:text-[1.6rem] ">
                <div className="font-[700]">
                    {item.name}
                </div>
                <div>
                    {item.price}
                </div>
            </div>
            <div className="flex flex-wrap gap-x-2 gap-y-1 pt-[1rem] max-md:gap-x-1 max-md:gap-y-1 text-[var(--text-color)] font-[600] text-[0.8rem]">
                {item.ingredients.map((ingredient: string, index: number) => (
                    <div key={index}>
                        {ingredient}
                        {index < item.ingredients.length - 1 && ', '}
                    </div>               
                ))}
            </div>
        </motion.div>
    )
}


const ItemCardOpen: React.FC<ItemCardProps> = ({item}) => {
    if(!item) {
        return null;
    } 
    return (
        <motion.div
            layoutId={`card-${item.id}`}
            className=""
        >
            {item.name}
        </motion.div>
    )
}   



export {ItemCard, ItemCardOpen};