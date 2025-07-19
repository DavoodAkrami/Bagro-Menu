"use client"
import { useState } from "react"
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

const Auth = () => {
    const router = useRouter();
    const [password, setPassword] = useState<string>("");
    const [username, setUsername] = useState<string>("");

    const validUsername = process.env.NEXT_PUBLIC_USERNAME;
    const validPassword = process.env.NEXT_PUBLIC_PASSWORD; 
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (password === validPassword && username === validUsername) {
            localStorage.setItem("isAuthenticated", "true")
            setPassword("")
            setUsername("")
            router.push("/admin");
        } else {
            alert("Invalid username or password");
        }
    }


    return (
        <div className="flex justify-center items-center min-h-screen bg-[var(--background-color)] px-4 relative">
            <button
                type="button"
                aria-label="Go back to home"
                onClick={() => router.push("/")}
                className="absolute top-4 left-4 flex items-center gap-2 px-3 py-2 rounded-lg bg-[var(--table-bg-color)] border border-[var(--brand-color)] text-[var(--brand-color)] hover:bg-[var(--secondary-color)] hover:text-[var(--text-color)] shadow transition-all focus:outline-none focus:ring-2 focus:ring-[var(--brand-color)] text-base sm:text-lg z-10"
            >
                <FaArrowLeft className="text-lg sm:text-xl" />
                <span className="hidden sm:inline font-medium">Back</span>
            </button>
            <form 
                onSubmit={handleSubmit}
                className="flex flex-col gap-8 sm:gap-10 bg-[var(--card-color)] w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-md xl:max-w-lg 2xl:max-w-xl p-6 sm:p-10 md:p-12 justify-center items-center rounded-2xl shadow-lg"
            >
                <h2 className="text-2xl sm:text-3xl font-bold text-[var(--brand-color)] mb-2 text-center tracking-wide drop-shadow-sm select-none">
                    Sign In to Admin Panel
                </h2>
                <div className="w-16 h-1 bg-[var(--brand-color)] rounded-full mb-4" />
                <input 
                    type="text"
                    name="username"
                    aria-label="Username"
                    value={username}
                    placeholder="UserName"
                    onChange={e => setUsername(e.target.value)} 
                    className="w-full px-4 py-2 sm:py-3 border border-[var(--brand-color)] bg-[var(--table-bg-color)] rounded-xl text-[var(--text-color)] focus:border-2 focus:outline-none text-base sm:text-lg transition-all"
                />
                <input 
                    type="password"
                    name="password"
                    aria-label="Password"
                    value={password}
                    placeholder="Password"
                    onChange={e => setPassword(e.target.value)} 
                    className="w-full px-4 py-2 sm:py-3 border border-[var(--brand-color)] bg-[var(--table-bg-color)] rounded-xl text-[var(--text-color)] focus:border-2 focus:outline-none text-base sm:text-lg transition-all"
                />
                <button
                    type="submit"
                    className="py-2 sm:py-3 px-6 sm:px-8 bg-[var(--table-bg-color)] border-2 border-[var(--brand-color)] rounded-xl text-[var(--text-color)] font-semibold cursor-pointer hover:bg-[var(--secondary-color)] w-full max-w-xs transition-all focus:outline-none focus:ring-2 focus:ring-[var(--brand-color)]"
                >
                    sign-in
                </button>
            </form>
        </div>
    )

}

export default Auth;