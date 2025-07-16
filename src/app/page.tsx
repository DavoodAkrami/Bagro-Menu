"use client"
import Image from "next/image";
import { ItemCard, ItemCardOpen } from "@/Components/ItemCard";
import { categories } from "@/Data/Menu";
import Menu from "@/Data/Menu";
import { MenuItem } from "@/Data/Menu";
import { useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"


const Home = () => {
    const SCROLL_THRESHOLD = 200;
    const [idModalOpen, setIdModalOpen] = useState<number>();
    const findItemById = (id: number) => {
        return Menu.find(item => item.id === id);
    }
    const foundItem: MenuItem | undefined = idModalOpen ? findItemById(idModalOpen) : undefined; 
    const { scrollY } = useScroll();

    const opacity = useTransform(scrollY, [0, SCROLL_THRESHOLD], [0, 1]);
    const pointerEvents = useTransform(scrollY, [SCROLL_THRESHOLD - 40, SCROLL_THRESHOLD], ["none", "auto"]);

    return (
        <div className=" min-h-[200vh] bg-[var(--primary-color)]"> 
            <motion.div 
                    style={{ opacity, pointerEvents }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                className="flex flex-col pt-120 gap-[1rem]"
            >
                {categories.map((cat) => (
                    <div key={cat.id} className="flex flex-col gap-[0.6rem]" id={cat.id}>
                        <div className=" px-[3%]">
                            <div className="romance-font text-[2rem] text-[var(--text-color)] font-[550]">
                                {cat.label}
                            </div>
                            <div className="w-[100%] bg-[var(--text-color)] text-[var(--white-color)] px-[1rem] py-[0.5rem] flex justify-end rounded-[4px]">
                                {cat.exp}
                            </div>
                        </div>
                        <div>
                            {Menu.map((item: MenuItem, index: number) => (
                                cat.id === item.category ? <ItemCard key={index} item={item} onClick={() => setIdModalOpen(item.id)} /> : null
                            ))}
                        </div>
                    </div>
                ))}

            </motion.div>
            
        </div>
    );
}   

export default Home;
