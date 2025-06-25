'use client'

import { AnimationCard } from '@/components/UI/AnimationCard' 
import React from 'react'

const page = () => {
    return (
        <div className='flex items-center justify-center h-full'>
            <AnimationCard title='Interactive 3D Rotating Card'
                description='Experience the dynamic elegance of a 3D animated card'
                imageUrl='https://images.unsplash.com/photo-1745004752779-cef1c3615850?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
        </div>
    )
}

export default page
