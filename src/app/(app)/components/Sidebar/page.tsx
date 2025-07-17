'use client'

import Silder from '@/Components/UI/Silder'
import React, { useState } from 'react'

const page = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false); 
    return (
        <div className="relative flex justify-center items-center h-full">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-blue-600 text-white px-4 py-2 rounded"
            >
                Toggle Sidebar
            </button>
            <Silder position={"left"} isOpen={isOpen} setIsOpen={setIsOpen}/>
        </div>
    )
}

export default page
