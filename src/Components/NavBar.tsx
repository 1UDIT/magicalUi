'use client';

import { MoonIcon, Sun, } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaDiscord, FaTwitter } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';

export default function Navbar() {
    const [text, setText] = useState('');
    const [isMounted, setIsMounted] = useState(false);
    const [darkMode, setDarkMode] = useState(() => {
        if (typeof window !== "undefined") { return localStorage.getItem("theme") === "dark"; }
    });

    useEffect(() => {
        const root = window.document.documentElement;

        if (darkMode) {
            root.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            root.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null; // or a loader


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
                    <Link href={"/Home"}>Components</Link>
                    {/* <li className="flex items-center space-x-1">
                        <span>Templates</span>
                        <span className="text-green-400 border border-green-400 text-xs px-1 rounded-full">new</span>
                    </li>
                    <li>Pricing</li>
                    <li>Showcase</li>
                    <li>Playground</li> */}
                </ul>
            </div>
            <div className="flex items-center space-x-5 text-sm text-gray-300">
                <FaDiscord className="cursor-pointer" />
                <FaTwitter className="cursor-pointer" />

                {darkMode ? <MoonIcon className="cursor-pointer" onClick={() => setDarkMode(!darkMode)} /> : <Sun className="cursor-pointer" onClick={() => setDarkMode(!darkMode)} />}
                <div className="flex items-center space-x-2 bg-zinc-900 px-3 py-1.5 rounded-full border border-zinc-700">
                    <FiSearch className="text-gray-400" />
                    <input
                        onChange={(e) => setText(e.target.value)}
                        value={text}
                        type="text"
                        placeholder="Search Components"
                        className="bg-transparent text-sm focus:outline-none placeholder-gray-400"
                    />
                    <kbd className="bg-zinc-800 text-gray-400 text-xs px-1.5 py-0.5 rounded">⌘ K</kbd>
                </div>
            </div>
        </nav >
    );
}
