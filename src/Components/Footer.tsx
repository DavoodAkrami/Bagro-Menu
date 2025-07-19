"use client"
import Image from "next/image"
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";


const Footer = () => {
    const [isAuth, setIsAuth] = useState<boolean>(false);

    useEffect(() => {
        setIsAuth(localStorage.getItem("isAuthenticated") === "true");
    }, []);

    const router = useRouter();
    const pathname = usePathname();

    const handleAdmin = () => {
        if (isAuth) {
            router.push("/admin")
        } else {
            router.push("/auth")
        }
    }

    if (pathname === "/admin" || pathname === "/auth") return null;
    return (
        <div className="bg-[var(--primary-color)] pt-[5vh]">
            <hr className="w-[95%] mx-auto text-[var(--text-color)]" />
            <div className="flex items-center justify-between px-[5%]">
                <Image 
                    height={100}
                    width={100}
                    src="/Bagro-logo-b.png"
                    alt="Bagro-logo"
                    onClick={handleAdmin}
                /> 
                <div className="text-[var(--text-color)] pb-[7.5px]">
                    All rights reserved for Bagro &copy; {new Date().getFullYear()}
                </div>
            </div>      
        </div>
    )
}

export default Footer;