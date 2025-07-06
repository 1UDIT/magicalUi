

"use client";
import React, { useRef, useState, useEffect } from "react";

export const SketchHoverImage = ({ imageUrl }: { imageUrl: string }) => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const [hovered, setHovered] = useState(false);
    const [circle1Done, setCircle1Done] = useState(false);
    const [size, setSize] = useState(0);

    useEffect(() => {
        const updateSize = () => {
            if (wrapperRef.current) {
                const { width } = wrapperRef.current.getBoundingClientRect();
                setSize(width);
            }
        };
        updateSize();
        window.addEventListener("resize", updateSize);
        return () => window.removeEventListener("resize", updateSize);
    }, []);

    const padding = 20;
    const outerSize = size + padding * 2;
    const cx = outerSize / 2;
    const cy = outerSize / 2;
    const r = size / 2 + 10;

    // Describe a full circle using path arc command
    const describeCircle = (cx: number, cy: number, r: number) => {
        return `
      M ${cx - r}, ${cy}
      a ${r},${r} 0 1,0 ${r * 2},0
      a ${r},${r} 0 1,0 -${r * 2},0
    `;
    };

    const circlePath = describeCircle(cx, cy, r);
    const circlePath2 = describeCircle(cx + 3, cy - 3, r - 4);

    return (
        <div className="w-full h-full overflow-hidden group items-center justify-center flex sm:pt-10">
            <div
                className="relative w-full   max-w-xs aspect-square flex items-center justify-center"
                onMouseEnter={() => {
                    setHovered(true);
                    setCircle1Done(false);
                }}
                onMouseLeave={() => {
                    setHovered(false);
                    setCircle1Done(false);
                }}
                ref={wrapperRef}
            >
                <img
                    src={imageUrl}
                    alt="Sketch image"
                    className="w-full h-full rounded-xl object-cover grayscale hover:grayscale-0 transition-all duration-300"
                />

                <svg
                    className="absolute"
                    width={outerSize}
                    height={outerSize}
                    style={{ top: `-${padding}px`, left: `-${padding}px`, pointerEvents: "none" }}
                >
                    <path
                        d={circlePath}
                        fill="none"
                        stroke="#df8c4a"
                        strokeWidth="1.95"
                        strokeDasharray="1070"
                        strokeDashoffset={hovered ? "0" : "999"}
                        className={`transition-[stroke-dashoffset] duration-[1200ms] ease-in-out ${hovered ? "stroke-[#df8c4a]" : "stroke-transparent"
                            }`}
                        onTransitionEnd={() => setCircle1Done(true)}
                    />
                    <path
                        d={circlePath2}
                        fill="none"
                        stroke="#df8c4a"
                        strokeWidth="1.6"
                        strokeDasharray="1050"
                        strokeDashoffset={hovered && circle1Done ? "0" : "999"}
                        className={`transition-[stroke-dashoffset] duration-[1200ms] ease-in-out delay-[200ms] ${hovered && circle1Done ? "stroke-[#df8c4a]" : "stroke-transparent"
                            }`}
                    />
                </svg>
            </div>
        </div>
    );
};





