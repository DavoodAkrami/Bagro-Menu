"use client"
import { MenuItem } from '../Data/Categories';
import { motion } from 'framer-motion';
import React from 'react';
import ImageSlider from './ImageSlider';
import { FaFireFlameCurved } from "react-icons/fa6";


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
            className="w-[80%] max-md:w-[95%] mx-auto px-[1.6rem] py-[2rem] max-md:px-[1rem] max-md:py-[1.2rem] bg-[var(--card-glassy-color)] border-[3px] border-[var(--card-color)] rounded-[5px] cursor-pointer]"
        >
            <div className="flex items-center gap-[20%] text-[var(--white-color)] text-[2.6rem] px-[1rem] max-md:text-[1.6rem] ">
                <div className="font-[700] flex gap-[5px] items-center">
                    {item.name}
                    {item.isNewItem && <span className="text-[var(--error-color)] text-[1.2rem]">(New)</span>}
                    {item.isSpicy && <span><FaFireFlameCurved className="text-[var(--error-color)] text-[1.6rem]" /></span>}
                </div>
                <div>
                    {item.price}
                </div>
            </div>
            <div className="flex flex-wrap gap-x-2 gap-y-1 pt-[1rem] max-md:gap-x-1 max-md:gap-y-1 text-[var(--text-color)] font-[600] text-[0.7rem] md:text-[1rem]">
                {item.ingredients.map((ingredient: string, index: number) => (
                    <div key={index}>
                        {ingredient}
                        {index < item.ingredients.length - 1 && ', '}
                    </div>               
                ))}
            </div>
        </motion.div>
    )

    // return (
    //     <motion.div
    //         layoutId={`card-${item.id}`}
    //         onClick={() => onSelect?.(item.id)}
    //         dir="rtl" 
    //     >
            
    //     </motion.div>
    // )
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
            <ImageSlider src={item.images} itemName={item.name}>
                <div className="flex w-[90%] mx-auto justify-between items-center text-[1.8rem] text-[var(--text-color)]">
                    <div className="font-[600]">
                        {item.name}
                    </div>
                    <div>
                        {item.price}
                    </div>
                </div>
                <div className="flex flex-wrap gap-x-[4px] gap-y-[6px] mx-auto w-[90%] tetx-[var(--text-color)] mt-[12px]">
                    {item.ingredients.map((ingredient: string, index: number) => (
                        <div key={index} className="text-[0.8rem]">
                            {ingredient}
                            {index < item.ingredients.length - 1 && ', '}
                        </div>               
                    ))}
                </div>
            </ImageSlider>
        </motion.div>
    )
}   



export {ItemCard, ItemCardOpen};