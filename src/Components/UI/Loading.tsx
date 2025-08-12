"use client";

import React from "react";
import { motion } from "framer-motion";

type LoadingProps = {
    size?: "sm" | "md" | "lg" | "xl" | "2xl";
    color?: string;
    text?: string;
};

const sizeMap: Record<NonNullable<LoadingProps["size"]>, string> = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-10 h-10",
    xl: "w-12 h-12",
    "2xl": "w-16 h-16",
};

const Loading: React.FC<LoadingProps> = ({
    size = "md",
    color = "blue-500",
    text = "",
}) => {
    const sizeClass = sizeMap[size];
    console.log(`Loading component size: ${size}, color: ${color}`);

    return (
        <div className="flex flex-col items-center justify-center h-full w-full space-y-2">
            <motion.div
                style={
                    {
                        "--loaderColor": color,
                    } as React.CSSProperties
                }
                className={`${sizeClass} border-4 border-[var(--loaderColor)] border-t-transparent rounded-full`}
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            >
                <motion.div
                    style={
                        {
                            "mask": "radial-gradient(farthest-side, #0000 calc(100% - 3px), #fff 0)",
                            "WebkitMask": "radial-gradient(farthest-side, #0000 calc(100% - 3px), #fff 0)",
                            "background": "conic-gradient(#0000, var(--loaderColor))",
                        } as React.CSSProperties
                    }
                    className={`w-full h-full rounded-full`}
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                />
            </motion.div>
            {text && <p className="text-sm text-gray-600 dark:text-white">{text}</p>}
        </div>
    );
};

export default Loading;
