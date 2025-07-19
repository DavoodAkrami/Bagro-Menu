import Image from "next/image"
import { useRouter } from "next/router";


const Footer = () => {
    const router = useRouter();
    if (router.pathname === "/admin") return null;
    return (
        <div>
            <Image 
                height={100}
                width={100}
                src="/Bagro-logo-b.png"
                alt="Bagro-logo"
            />        
        </div>
    )
}

export default Footer;