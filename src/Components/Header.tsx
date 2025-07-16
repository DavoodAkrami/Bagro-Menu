"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"

const SCROLL_THRESHOLD = 200;

const Header = () => {
  const { scrollY } = useScroll();
  
  const opacity = useTransform(scrollY, [SCROLL_THRESHOLD - 40, SCROLL_THRESHOLD], [0, 1]);
  const pointerEvents = useTransform(scrollY, [SCROLL_THRESHOLD - 40, SCROLL_THRESHOLD], ["none", "auto"]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-full z-40 flex items-center justify-between px-[3%] bg-[var(--header-color)] backdrop-blur-md h-[80px]"
      style={{ opacity, pointerEvents }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center h-full">
        <Image
          src="/Bagro-logo-b.png"
          alt="Bagro Logo"
          height={180}
          width={180}
          className="object-contain"
        />
      </div>
      <div id="categories">
        
      </div>
    </motion.div>
  )
}

export default Header;