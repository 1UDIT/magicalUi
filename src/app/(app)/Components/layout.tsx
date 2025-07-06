// /app/Components/SidebarLayout.tsx
"use client"; // If this needs client-side behavior (optional)

import SideBar from "@/Components/sideLink/SideBar";
import type { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

export default function SidebarLayout({ children }: Props) {
    return ( 
        <>{children} </> 
    );
}
