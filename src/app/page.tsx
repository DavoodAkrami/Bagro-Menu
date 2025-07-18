"use client"
import { ItemCard, ItemCardOpen } from "@/Components/ItemCard";
import { categories } from "@/Data/Categories";
import { useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { useMenu } from "@/contexts/MenuContext";

const Skeleton = () => (
    <div className="animate-pulse">
        <div className="h-8 bg-gray-300 rounded w-1/3 mb-2" />
        <div className="h-6 bg-gray-200 rounded w-2/3 mb-4" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-4">
            {[...Array(2)].map((_, i) => (
                <div key={i} className="h-32 bg-gray-200 rounded" />
            ))}
        </div>
    </div>
);

const Home = () => {
    const [selectedId, setSelectedId] = useState<number | null>(null);
    const SCROLL_THRESHOLD = 200;
    const { scrollY } = useScroll();
    const opacity = useTransform(scrollY, [0, SCROLL_THRESHOLD], [0, 1]);
    const pointerEvents = useTransform(scrollY, [SCROLL_THRESHOLD - 40, SCROLL_THRESHOLD], ["none", "auto"]);
    const { menu, loading } = useMenu();

    const handleSelect = (id: number) => {
        setSelectedId(id);
    }

    const handleClose = () => {
        setSelectedId(null);
    }

    const selectedItem = menu.find((item) => item.id === selectedId);

    return (
        <div className="bg-[var(--primary-color)]"> 
            <motion.div 
                    style={{ opacity, pointerEvents }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                className="flex flex-col pt-120 gap-[1rem]"
            >
                {categories.map((cat) => (
                    <div key={cat.id} className="flex flex-col gap-[0.6rem]">
                        <div className=" px-[3%]">
                            <div className="romance-font text-[2rem] text-[var(--text-color)] font-[550] scroll-mt-20"  id={cat.id}>
                                {cat.label}
                            </div>
                            <div className="w-[100%] bg-[var(--text-color)] text-[var(--white-color)] px-[1rem] py-[0.5rem] flex justify-end rounded-[5px] text-center min-h-[40px]">
                                {cat.exp}
                            </div>
                        </div>
                        {loading ? (
                            <Skeleton />
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-4">
                                {menu.filter((item) => cat.id === item.category).map((item, index) => (
                                    <ItemCard key={index} item={item} onSelect={handleSelect} />
                                ))}
                            </div>
                        )}
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
