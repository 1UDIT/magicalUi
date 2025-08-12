'use client';
import { docsConfig } from "@/Config/docs";
import { ChevronDown, ChevronRight } from "lucide-react";
import Link from 'next/link';
import React, { useState } from 'react'


const SideBar = () => {
    const [openSections, setOpenSections] = useState<string[]>(
        docsConfig.sidebarNav.map(section => section.title)
    );

    const toggleSection = (section: string) => {
        setOpenSections((prev) =>
            prev.includes(section)
                ? prev.filter((s) => s !== section)
                : [...prev, section]
        );
    };

    return (
        <aside className='fixed z-30 -ml-2 hidden h-full   w-full  shrink-0 lg:sticky bg-white dark:bg-black lg:block lg:self-start border-r border-dashed border-[#504f4f]'>
            <div className='relative overflow-hidden h-full py-6 pr-3 lg:py-8'>
                <h3 className='mb-1 rounded-md px-2 py-1 font-semibold text-black dark:text-white'>
                    Components
                </h3>
                <nav className="space-y-2">
                    {docsConfig.sidebarNav.map((item, i) =>
                        item.items ? (
                            <div key={i}>
                                <button
                                    onClick={() => toggleSection(item.title)}
                                    className="flex items-center w-full text-left font-medium hover:bg-gray-100 dark:hover:bg-gray-800 rounded px-2 py-1 border-none outline-none focus:ring-0 focus:outline-none"
                                >
                                    {openSections.includes(item.title) ? (
                                        <ChevronDown className="mr-2 h-4 w-4" />
                                    ) : (
                                        <ChevronRight className="mr-2 h-4 w-4" />
                                    )}
                                    {item.title}
                                </button>
                                {openSections.includes(item.title) && (
                                    <ul className="mt-1 list-none  pl-2">
                                        {item?.items?.map((subItem) => (
                                            <Link href={subItem.href} key={subItem.title}>
                                                <li
                                                    className="border-l  border-gray-300 hover:dark:border-white dark:border-gray-700 list-none text-lg hover:underline cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 px-2 py-1"
                                                >
                                                    {subItem.title}
                                                </li>
                                            </Link>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ) : (
                            <Link
                                key={i}
                                href={item.href!}
                                className="block rounded px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-800"
                            >
                                {item.title}
                            </Link>
                        )
                    )}
                </nav>
            </div>
        </aside>
    );
}

export default SideBar
