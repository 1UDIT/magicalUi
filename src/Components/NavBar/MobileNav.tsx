"use client"

import * as React from "react"
import Link, { LinkProps } from "next/link"
import { Button } from "../UI/Button"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/UI/sheet";
import { docsConfig } from "@/Config/docs";
import { useRouter } from "next/navigation";
import { cn } from "@/Lib/utils";

export function MobileNav() {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
                <Button
                    variant="ghost"
                    className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
                >
                    <svg
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-5"
                    >
                        <path
                            d="M3 5H11"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                        <path
                            d="M3 12H16"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                        <path
                            d="M3 19H21"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                    </svg>
                    <span className="sr-only">Toggle Menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="space-y-0 gap-0">
                <Link
                    href="/"
                    onClick={() => {
                        setIsOpen(false);
                    }}
                    className="flex items-center h-16 px-4 border-b border-border"
                >
                    <span className="font-bold">MagicalUI</span>
                </Link>
                <div className="flex flex-col gap-8">
                    {docsConfig.sidebarNav.map((group, index) => (
                        <div key={index} className="flex flex-col gap-4">
                            <div className="flex flex-col gap-3">
                                {group.items.map((navItem) => {
                                    return (
                                        <MobileLink
                                            key={`${navItem.href}-${index}`}
                                            href={navItem.href}
                                            onOpenChange={setIsOpen}
                                        >
                                            {navItem.title}
                                        </MobileLink>
                                    )
                                })}
                            </div>
                        </div>
                    ))}
                </div>

            </SheetContent>
        </Sheet>
    );
}

function MobileLink({
    href,
    onOpenChange,
    className,
    children,
    ...props
}: LinkProps & {
    onOpenChange?: (open: boolean) => void
    children: React.ReactNode
    className?: string
}) {
    const router = useRouter()
    return (
        <Link
            href={href}
            onClick={() => {
                router.push(href.toString())
                onOpenChange?.(false)
            }}
            className={cn("text-2xl font-medium", className)}
            {...props}
        >
            {children}
        </Link>
    )
}