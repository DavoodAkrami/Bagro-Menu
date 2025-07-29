"use client"
import { MenuItem } from '../Data/Categories';
import { motion } from 'framer-motion';
import React from 'react';
import {ImageSlider, LandingImageSlider} from './ImageSlider';


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
            className=""
            onClick={() => onSelect?.(item.id)}
        >
            <LandingImageSlider src={item.images} itemName={item.name}>
                <div className="flex w-[90%] mx-auto justify-between items-center text-[1.8rem] text-[var(--white-color)]">
                    <div className="font-[650] text-[2rem]">
                        {item.name}
                    </div>
                    <div className="text-[2rem]">
                        {item.price}
                    </div>
                </div>
            </LandingImageSlider>
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