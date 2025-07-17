"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { categories } from "@/Data/Menu";

const SCROLL_THRESHOLD = 200;

const Header = () => {
  const { scrollY } = useScroll();
  
  const opacity = useTransform(scrollY, [SCROLL_THRESHOLD - 40, SCROLL_THRESHOLD], [0, 1]);
  const pointerEvents = useTransform(scrollY, [SCROLL_THRESHOLD - 40, SCROLL_THRESHOLD], ["none", "auto"]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-full z-40 flex items-center justify-between px-[3%] bg-[var(--header-color)] backdrop-blur-md py-[3%]"
      style={{ opacity, pointerEvents }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >w-
      <div className="flex items-center h-full max-sm:[100%]">
        <Image
          src="/Bagro-logo-b.png"
          alt="Bagro Logo"
          height={200}
          width={200}
          className="object-contain"
        />
      </div>
      <div id="categories">
          <nav className="flex flex-wrap gap-y-[5px] gap-x-[10px] text-center">
            {categories.map((cat) => (
              <h5 key={cat.id} className="font-[550] text-[var(--text-color)] active:text-[var(--active-color)]" onClick={() => { window.location.hash = cat.id; }}>{cat.label}</h5>
            ))}
          </nav>
      </div>
    </motion.div>
  )
}

export default Header;