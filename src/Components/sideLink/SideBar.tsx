'use client';
import { ChevronDown, ChevronRight } from "lucide-react";
import Link from 'next/link';
import React, { useState } from 'react'

const sections = [
    {
        title: "Introduction",
        items: ["Getting Started"],
    },
    {
        title: "Interactive Components",
        items: ["Button", "SketchImage", "GlowingButton", "ShareButton"],
    },
    {
        title: "Content Display",
        items: ["Card", "TypingText", "CardAnimation", "TanstackTable", "Sidebar"],
    },
];

const SideBar = () => {
    const [openSections, setOpenSections] = useState<string[]>(
        sections.map(section => section.title)
    );

    const toggleSection = (section: string) => {
        setOpenSections((prev) =>
            prev.includes(section)
                ? prev.filter((s) => s !== section)
                : [...prev, section]
        );
    };

    return (
        <div className='container border-r border-dashed border-[#504f4f] bg-white dark:bg-gray-900 h-full'>
            <aside className='fixed z-30 -ml-2 hidden h-[calc(100vh-6.5rem)] w-full h-full shrink-0 lg:sticky bg-white dark:bg-black lg:block lg:self-start border-r border-dashed border-[#504f4f]'>
                <div className='relative overflow-hidden h-full py-6 pr-3 lg:py-8'>
                    <h3 className='mb-1 rounded-md px-2 py-1 font-semibold text-black dark:text-white'>
                        Components
                    </h3>

                    <div className='grid grid-flow-row auto-rows-max px-2 py-1 text-black dark:text-white'>
                        {sections.map((section) => (
                            <div key={section.title}>
                                <button
                                    onClick={() => toggleSection(section.title)}
                                    className="flex items-center w-full text-left font-medium hover:bg-gray-100 dark:hover:bg-gray-800 rounded px-2 py-1 border-none outline-none focus:ring-0 focus:outline-none"
                                >
                                    {openSections.includes(section.title) ? (
                                        <ChevronDown className="mr-2 h-4 w-4" />
                                    ) : (
                                        <ChevronRight className="mr-2 h-4 w-4" />
                                    )}
                                    {section.title}
                                </button>

                                {openSections.includes(section.title) && (
                                    <ul className="mt-1 list-none  pl-2">
                                        {section.items.map((item) => (
                                            <li
                                                key={item}
                                                className="border-l border-gray-300 hover:dark:border-white dark:border-gray-700 list-none text-lg hover:underline cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 px-2 py-1"
                                            >
                                                <Link href={`/components/${item}`}>
                                                    {item}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </aside>
        </div>
    );
}

export default SideBar
