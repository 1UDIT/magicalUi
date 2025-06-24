'use client';

import { MoonIcon, Sun } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaDiscord, FaTwitter } from 'react-icons/fa';
import { cn } from '@/Lib/utils';
import { Button } from '../UI/Button';
import SearchBar from './SearchBar';

export default function Navbar() {
    const [open, setOpen] = useState(false)
    const [darkMode, setDarkMode] = useState(false);
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
        <nav className="flex items-center justify-between px-6 py-3 bg-black text-white font-medium border-b-1 border-dashed border-[#504f4f]">
            {/* Left Section */}
            <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2 relative z-10 overflow-visible">
                    <div className="relative w-8 h-8">
                        <div className="relative z-10 flex items-center justify-center w-full h-full bg-white text-black rounded-md font-bold">
                            <div className="absolute inset-0 rounded-md bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 blur-lg opacity-50 animate-pulse" />
                            M
                        </div>
                    </div>
                    <span className="font-semibold text-lg"><Link href={"/"}>Magical UI</Link></span>
                </div>

                <ul className="flex items-center space-x-5 text-sm text-gray-300">
                    <Link href={"/Components"}>Components</Link>
                </ul>
            </div>

            {/* <div className="flex items-center space-x-5 text-sm text-gray-300">
                <FaDiscord className="cursor-pointer" />
                <FaTwitter className="cursor-pointer" />
                {isMounted && (
                    darkMode
                        ? <MoonIcon className="cursor-pointer" onClick={() => setDarkMode(false)} />
                        : <Sun className="cursor-pointer" onClick={() => setDarkMode(true)} />
                )}
                <Button
                    variant="outline"
                    className={cn(
                        "relative h-8 w-full justify-start rounded-[0.5rem] bg-muted/50 text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-40 lg:w-56 xl:w-64"
                    )}
                    onClick={() => setOpen(true)}
                >
                    <span className="hidden lg:inline-flex">Search documentation...</span>
                    <span className="inline-flex lg:hidden">Search...</span>
                    <kbd className="pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
                        <span className="text-xs">⌘</span>K
                    </kbd>
                </Button>
            </div> */}
            <SearchBar />
        </nav>
    );
}
