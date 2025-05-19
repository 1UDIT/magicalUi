import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

export const SketchHoverImage = ({ imageUrl }: { imageUrl: string }) => {
    const [hovered, setHovered] = useState(false);
    const [circle1Done, setCircle1Done] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);
    const [scale, setScale] = useState(1);

    const handleMouseEnter = () => {
        setHovered(true);
        setCircle1Done(false);
        setScale(0.95);
        setRotateY(20);
    };

    const handleMouseLeave = () => {
        setHovered(false);
        setCircle1Done(false);
        setRotateX(0);
        setRotateY(0);
        setScale(1);
    };

    return (
        <div className="relative w-full h-full overflow-hidden group items-center justify-center flex">
            <motion.div ref={cardRef}
                className="relative w-64 h-64  overflow-hidden group  grayscale hover:grayscale-0"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                animate={{
                    rotateX,
                    rotateY,
                    scale,
                }}
                transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 10,
                }}
            >
                <img
                    src={imageUrl}
                    alt="sketch target"
                    className="w-full h-full object-cover rounded-xl"
                />
                {/* SVG Overlay */}
            </motion.div>
            <svg
                className="absolute top-0 left-0 w-full h-full pointer-events-none"
                viewBox="0 0 200 200"
            >

                <circle
                    cx="100"
                    cy="100"
                    r="35"
                    stroke="black"
                    strokeWidth="0.8"
                    fill="none"
                    strokeDasharray="660"
                    strokeDashoffset={hovered ? 0 : 660}
                    className={`transition-[stroke-dashoffset] duration-[1500ms] ease-in-out ${hovered ? "stroke-red-600" : "stroke-transparent"
                        }`}
                    onTransitionEnd={() => setCircle1Done(true)}
                />
                <circle
                    cx="102"
                    cy="98"
                    r="34"
                    stroke="black"
                    strokeWidth="0.6"
                    fill="none"
                    strokeDasharray="650"
                    strokeDashoffset={hovered && circle1Done ? 0 : 650}
                    className={`transition-[stroke-dashoffset] duration-[1500ms] ease-in-out delay-[200ms] ${hovered && circle1Done ? "stroke-red-600" : "stroke-transparent"
                        }`}
                />
            </svg>
        </div>
    );
};
