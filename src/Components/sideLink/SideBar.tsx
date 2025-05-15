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
        items: ["Card", "TypingText", "CardAnimation", "TanstackTable"],
    },
    {
        title: "Navigation",
        items: ["Breadcrumb", "Footer", "Navbar", "Tabs"],
    },
];

const SideBar = () => {
    const [openSections, setOpenSections] = useState<string[]>(["Interactive Components"]);

    const toggleSection = (section: string) => {
        setOpenSections((prev) =>
            prev.includes(section)
                ? prev.filter((s) => s !== section)
                : [...prev, section]
        );
    };

    return (
        <div className='container mx-auto w-full max-w-[88rem] flex-1 items-start px-4 lg:grid lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10 lg:px-8 border-r-2 border-[#504f4f]'>
            <aside className='fixed  z-30 -ml-2 hidden h-[calc(100vh-6.5rem)] w-full shrink-0 lg:sticky lg:block lg:self-start'>
                <div className='relative overflow-hidden h-full py-6 pr-6 lg:py-8'>
                    <h5 className='mb-1 rounded-md px-2 py-1 text-sm font-semibold text-black dark:text-white'> Components</h5>
                    <div className='grid grid-flow-row auto-rows-max text-sm px-2 py-1'>
                        {sections.map((section) => (
                            <div key={section.title}>
                                <button
                                    onClick={() => toggleSection(section.title)}
                                    className="flex items-center w-full text-left font-medium hover:bg-gray-800 rounded px-2 py-1"
                                >
                                    {openSections.includes(section.title) ? (
                                        <ChevronDown className="mr-2 h-4 w-4" />
                                    ) : (
                                        <ChevronRight className="mr-2 h-4 w-4" />
                                    )}
                                    {section.title}
                                </button>
                                {openSections.includes(section.title) && (
                                    <ul className="ml-6 mt-1 space-y-1">
                                        {section.items.map((item) => (
                                            <li className="text-sm hover:underline cursor-pointer" key={item}>
                                                <Link href={`/Home/${item}`} >
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
    )
}

export default SideBar
