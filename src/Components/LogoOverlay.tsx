"use client"
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const LOGO_SIZE = 160;
const SCROLL_THRESHOLD = 200;

const LogoOverlay = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  const scale = useTransform(scrollY, [0, SCROLL_THRESHOLD], [4, 0.8]);
  const y = useTransform(scrollY, [0, SCROLL_THRESHOLD], ["0vh", "-40vh"]);
  const x = useTransform(scrollY, [0, SCROLL_THRESHOLD], ["0vw", "-30vw"]);
  const opacity = useTransform(scrollY, [0, 0.1, SCROLL_THRESHOLD], [1, 0.9, 0]);

  return (
    <motion.div
      
      className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none bg-[#fff]"
      style={{ opacity }}
    >
      <motion.div
        ref={ref}
        style={{ scale, y, x }}
        initial={{ opacity: 0, scale: 1.4 }}
        animate={{ opacity: 1, scale: 3.8 }}
        transition={{ duration: 1, ease: "easeOut"}}
        className="flex items-center justify-center"
      >
        <Image
          src="/Bagro-logo-b.png"
          alt="Bagro Logo"
          width={LOGO_SIZE}
          height={LOGO_SIZE}
          className="object-contain drop-shadow-lg"
          priority
        />
      </motion.div>
    </motion.div>
  );
};

export default LogoOverlay; 