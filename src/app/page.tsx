"use client"
import { ItemCard, ItemCardOpen } from "@/Components/ItemCard";
import { categories } from "@/Data/Menu";
import Menu from "@/Data/Menu";
import { MenuItem } from "@/Data/Menu";
import { useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"


const Home = () => {
    const [selectedId, setSelectedId] = useState<number | null>(null);
    const SCROLL_THRESHOLD = 200;
    const findItemById = (id: number) => {
        return Menu.find(item => item.id === id);
    }
    const { scrollY } = useScroll();

    const opacity = useTransform(scrollY, [0, SCROLL_THRESHOLD], [0, 1]);
    const pointerEvents = useTransform(scrollY, [SCROLL_THRESHOLD - 40, SCROLL_THRESHOLD], ["none", "auto"]);

    const handleSelect = (id: number) => {
        setSelectedId(id);
    }

    const handleClose = () => {
        setSelectedId(null);
    }

    const selectedItem: MenuItem | undefined = Menu.find((item) => item.id === selectedId);

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
                            <div className="w-[100%] bg-[var(--text-color)] text-[var(--white-color)] px-[1rem] py-[0.5rem] flex justify-end rounded-[5px]">
                                {cat.exp}
                            </div>
                        </div>
                        <div>
                            {Menu.map((item: MenuItem, index: number) => (
                                cat.id === item.category ? <ItemCard key={index} item={item} onSelect={handleSelect} /> : null
                            ))}
                        </div>
                    </div>
                ))}
            </motion.div>
            <AnimatePresence>
                {selectedId && 
                    <div className="fixed inset-0 z-50 flex items-center justify-center">
                        <motion.div
                                className="absolute inset-0 bg-white/40 backdrop-blur-[3px]"
                                onClick={handleClose}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.4 }}
                            />
                            <div className="relative z-10" onClick={e => e.stopPropagation()}>
                                <ItemCardOpen item={selectedItem}/>
                            </div>
                    </div>
                }
            </AnimatePresence>
        </div>
    );
}   

export default Home;
