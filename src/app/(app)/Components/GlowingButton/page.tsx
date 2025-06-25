'use client'

import { GlowingButton } from '@/components/UI/GlowingButton'
import React from 'react'

const page = () => {
    return (
        <div className="w-full flex items-center justify-center">
            <GlowingButton onClick={() => alert("Clicked!")} className="mt-10" blur={0}
                borderWidth={4}
                spread={130}
                glow={true}
                disabled={false}>
                Click Me
            </GlowingButton>
        </div>
    )
}

export default page
