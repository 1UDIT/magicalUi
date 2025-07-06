'use client'

import { useState } from "react";
import { motion } from "framer-motion";
import CardLogin from '@/Components/UI/Login/CardLogin'
import CardSignup from '@/Components/UI/Login/CardSignup'
import React from 'react'

const page = () => {
    const [flipped, setFlipped] = useState(false);
    return (
        <div className="w-full flex items-center justify-center">
            <div className="relative  perspective-[1500px] w-[400px] h-[600px]">
                <motion.div
                    className="absolute w-full h-full transition-transform duration-700 [transform-style:preserve-3d]"
                    animate={{ rotateY: flipped ? 180 : 0 }}
                >
                    <div className="absolute w-full h-full backface-hidden">
                        <CardLogin onFlip={() => setFlipped(true)} />
                    </div>
                    <div className="absolute w-full h-full rotate-y-180 backface-hidden">
                        <CardSignup onFlip={() => setFlipped(false)} />
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default page
