import { motion } from "framer-motion";
import React, { useState } from "react";
import Image from "next/image";
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";
import clsx from "clsx";

export type imageSlider = {
    src: string[],
    children: React.ReactNode,
    itemName: string
} 

const ImageSlider: React.FC<imageSlider> = ({src, itemName, children}) => {
    const [slide, setSlide] = useState<number>(0);

    const handleNext = () => {
        setSlide(slide < src.length - 1 ? slide + 1 : slide);
    }

    const handlePrev = () => {
        setSlide(slide > 0 ? slide - 1 : slide);
    }

    return (
        <div 
            className="relative w-full max-w-[95%] mx-auto flex items-center justify-center"
            style={{ minHeight: 220 }}
        >
            <FaCircleArrowLeft 
                onClick={handlePrev} 
                className={clsx(
                    "absolute left-2 top-1/2 -translate-y-1/2 text-[2rem] text-[var(--white-bg-color)] cursor-pointer z-20"
                )} 
            />
            <div className="w-[400px] h-[400px] flex items-center justify-center overflow-hidden rounded-[50px] shadow relative bg-[var(--white-color)] max-[400px]:w-[350px] max-[400px]:h-[350px] max-[350px]:w-[300px] max-[350px]:h-[300px]">
                {src.map((img, index) => (
                    <Image 
                        src={img}
                        key={index}
                        height={350}
                        width={350}
                        alt={itemName}
                        className={
                            clsx(
                                "object-cover absolute top-0 left-0 w-full h-full transition-opacity duration-300",
                                slide !== index && "opacity-0 pointer-events-none",
                                slide === index && "opacity-100"
                            )
                        }
                    />
                ))}
                <FaCircleArrowRight 
                    onClick={handleNext} 
                    className={clsx(
                        "absolute right-2 top-1/2 -translate-y-1/2 text-[2rem] text-[var(--white-bg-color)] cursor-pointer z-20"
                    )} 
                />
                {children && (
                    <motion.div
                        initial={{ y: 500 }}
                        animate={{ y: 0 }}
                        exit={{ y: 500 }}
                        dir="rtl"
                        transition={{ duration:0.4, delay: 0}}
                        className="bg-[var(--white-bg-color)] absolute h-[40%] bottom-0 w-[100%]"
                    >
                        <div>
                            {children}
                        </div>
                    </motion.div>
                )}
            </div>
        </div>
    )
}

export default ImageSlider;