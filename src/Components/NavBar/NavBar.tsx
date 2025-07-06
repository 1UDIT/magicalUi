'use client';

import { MoonIcon, Sun } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaDiscord, FaTwitter } from 'react-icons/fa';
import SearchBar from './SearchBar';  
import { MobileNav } from './MobileNav';

export default function Navbar() {
    const [darkMode, setDarkMode] = useState(true);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const theme = localStorage.getItem("theme");
        if (theme === "dark") {
            setDarkMode(true);
        }
    }, []);

    useEffect(() => {
        if (!isMounted) return;
        const root = window.document.documentElement;
        if (darkMode) {
            root.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            root.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode, isMounted]);

    return (
        <nav className="flex items-center justify-between px-6 py-3 dark:bg-black bg-gray-300 text-white font-medium border-b-1 border-dashed border-[#504f4f]">
            {/* Left Section */}
            <MobileNav/>
            <div className="hidden lg:flex items-center space-x-6">
                <div className="flex items-center space-x-2 relative z-10 overflow-visible">
                    <div className="relative w-8 h-8">
                        <div className="relative z-10 flex items-center justify-center w-full h-full bg-white text-black rounded-md font-bold">
                            <div className="absolute inset-0 rounded-md bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 blur-lg opacity-50 animate-pulse" />
                            M
                        </div>
                    </div>
                    <span className="font-semibold text-lg dark:text-white text-black"><Link href={"/"}>Magical UI</Link></span>
                </div>

                <ul className="flex items-center space-x-5 text-sm  text-black dark:text-gray-300">
                    <Link href={"/components"}>Components</Link>
                </ul>
            </div>
            <div className="flex items-center space-x-5 text-sm dark:text-gray-300 text-black">
                <SearchBar className="hidden lg:flex" />
                <FaDiscord className="cursor-pointer" />
                <FaTwitter className="cursor-pointer" />
                {isMounted && (
                    darkMode
                        ? <MoonIcon className="cursor-pointer" onClick={() => setDarkMode(false)} />
                        : <Sun className="cursor-pointer" onClick={() => setDarkMode(true)} />
                )}
            </div>
        </nav>
    );
}
