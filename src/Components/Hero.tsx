// Components/Hero.tsx
'use client';

import Link from "next/link";
import AnimatedGradientText from "@/Components/UI/AnimatedGradientText";
import { useSpaceBackground } from "@/Hook/useSpaceBackground";
import { useState } from "react";

export default function Hero() {
    const [ready, setReady] = useState(false);

    useSpaceBackground("space-bg", {
        starCount: 350,
        disableOnMobile: true,
        onReady: () => setReady(true),
    });

    return (
        <>
            <canvas
                id="space-bg"
                className={`fixed inset-0 z-[-1] pointer-events-none transition-opacity duration-700
                  ${ready ? "opacity-100" : "opacity-0"}`}
            />

            <div className="absolute top-1/4 left-20 border border-cyan-400/60 w-10 h-10 rotate-12 animate-float" />
            <div className="absolute bottom-1/3 right-32 border border-purple-400/60 w-12 h-12 rotate-45 animate-float delay-2000" />

            <main className="flex-grow flex flex-col items-center justify-center px-4 text-white bg-transparent">
                <section className="text-center mb-12">
                    <AnimatedGradientText
                        speed={2}
                        colorFrom="#4ade80"
                        colorTo="#06b6d4"
                        className="text-4xl font-semibold tracking-tight md:text-5xl xl:text-6xl"
                    >
                        MagicalUI
                    </AnimatedGradientText>

                    <p className="mt-4 text-xl text-gray-300">
                        UI library for Engineers
                    </p>

                    <div className="mt-6">
                        <Link className="px-6 py-3 rounded-full
                            bg-gradient-to-r from-cyan-400 to-blue-500
                            text-black font-semibold 
                            hover:shadow-[0_0_10px_rgba(0,245,255,0.9)]
                            transition" href={"/components"}>
                            Get Started →
                        </Link>

                    </div>
                </section>
            </main>
        </>
    );
}
