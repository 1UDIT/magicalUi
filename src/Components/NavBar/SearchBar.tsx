'use client';

import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import { Circle, } from "lucide-react"
import { Button } from '../UI/Button';
import { cn } from '@/Lib/utils';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/Components/UI/dialog"
import { docsConfig } from "@/Config/docs"
import { useRouter } from 'next/navigation';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, } from '../UI/command';
import { useIsMac } from '@/Hook/useMac';
import { FcDownLeft } from 'react-icons/fc';

function SearchBar({
    className,
}: {
    className?: string
}) {
    const [open, setOpen] = useState(false)
    const router = useRouter()
    const isMac = useIsMac();
    const [selectedType, setSelectedType] = useState<
        "color" | "page" | "component" | "block" | null
    >(null);
    const [copyPayload, setCopyPayload] = useState("");



    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
                if (
                    (e.target instanceof HTMLElement && e.target.isContentEditable) ||
                    e.target instanceof HTMLInputElement ||
                    e.target instanceof HTMLTextAreaElement ||
                    e.target instanceof HTMLSelectElement
                ) {
                    return
                }

                e.preventDefault()
                setOpen((open) => !open)
            }
        }

        document.addEventListener("keydown", down)
        return () => document.removeEventListener("keydown", down)
    }, [])

    const runCommand = useCallback((command: () => unknown) => {
        setOpen(false)
        command()
    }, []);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button
                    variant="secondary"
                    className={cn(
                        "text-surface-foreground/60 dark:bg-card relative h-8 w-full justify-start pl-2.5 font-normal shadow-none sm:pr-12 md:w-40 lg:w-56 xl:w-64", className
                    )}
                    onClick={() => setOpen(true)}
                >
                    <span className="hidden lg:inline-flex">Search documentation...</span>
                    <span className="inline-flex lg:hidden">Search...</span>
                    <div className="absolute top-1.5 right-1.5 hidden gap-1 sm:flex">
                        <CommandMenuKbd>{isMac ? "⌘" : "Ctrl"}</CommandMenuKbd>
                        <CommandMenuKbd className="aspect-square">K</CommandMenuKbd>
                    </div>
                </Button>
            </DialogTrigger>
            <DialogContent
                showCloseButton={false}
                className="rounded-xl border-none bg-clip-padding p-2 pb-11 shadow-2xl ring-4 ring-neutral-200/80 dark:bg-neutral-900 dark:ring-neutral-800"
            >
                <DialogHeader className="sr-only">
                    <DialogTitle>Search documentation...</DialogTitle>
                    <DialogDescription>Search for a command to run...</DialogDescription>
                </DialogHeader>
                <Command className="**:data-[slot=command-input-wrapper]:bg-input/50 **:data-[slot=command-input-wrapper]:border-input rounded-none bg-transparent **:data-[slot=command-input]:!h-9 **:data-[slot=command-input]:py-0 **:data-[slot=command-input-wrapper]:mb-0 **:data-[slot=command-input-wrapper]:!h-9 **:data-[slot=command-input-wrapper]:rounded-md **:data-[slot=command-input-wrapper]:border">
                    <CommandInput placeholder="Search documentation..." />
                    <CommandList className="no-scrollbar min-h-80 scroll-pt-2 scroll-pb-1.5">
                        <CommandEmpty className="text-muted-foreground py-12 text-center text-sm">
                            No results found.
                        </CommandEmpty>
                        {docsConfig.sidebarNav.map((group) => (
                            <CommandGroup key={group.title} heading={group.title}>
                                {group?.items?.map((navItem) => (
                                    <CommandItem
                                        key={navItem.href}
                                        value={navItem.title}
                                        onSelect={() => {
                                            runCommand(() => router.push(navItem.href as string))
                                        }}
                                    >
                                        <div className="mr-2 flex h-4 w-4 items-center justify-center">
                                            <Circle className="h-3 w-3" />
                                        </div>
                                        {navItem.title}
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        ))}

                    </CommandList>
                </Command>
                <div className="text-muted-foreground absolute inset-x-0 bottom-0 z-20 flex h-10 items-center gap-2 rounded-b-xl border-t border-t-neutral-100 bg-neutral-50 px-4 text-xs font-medium dark:border-t-neutral-700 dark:bg-neutral-800">
                    <div className="flex items-center gap-2">
                        <CommandMenuKbd>
                            <FcDownLeft />
                        </CommandMenuKbd>{" "}
                        {selectedType === "page" || selectedType === "component"
                            ? "Go to Page"
                            : null}
                        {selectedType === "color" ? "Copy OKLCH" : null}
                    </div>
                    {copyPayload && (
                        <>
                            <div className="flex items-center gap-1">
                                <CommandMenuKbd>{isMac ? "⌘" : "Ctrl"}</CommandMenuKbd>
                                <CommandMenuKbd>C</CommandMenuKbd>
                                {copyPayload}
                            </div>
                        </>
                    )}
                </div>
            </DialogContent>
        </Dialog>
    );
}

function CommandMenuKbd({ className, ...props }: React.ComponentProps<"kbd">) {
    return (
        <kbd
            className={cn(
                "bg-background text-muted-foreground pointer-events-none flex h-5 items-center justify-center gap-1 rounded border px-1 font-sans text-[0.7rem] font-medium select-none [&_svg:not([class*='size-'])]:size-3",
                className
            )}
            {...props}
        />
    )
}
export default SearchBar