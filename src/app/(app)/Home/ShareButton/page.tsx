'use client'

import { AnimationShareBtn } from '@/Components/UI/AnimationShareBtn'
import { FaFacebook } from 'react-icons/fa'
import { BsGithub, BsInstagram, BsTwitterX } from 'react-icons/bs'
import { FaWhatsapp } from "react-icons/fa";
import React from 'react'

const page = () => {
    return (
        <div className='flex items-center justify-center h-full'>
            <AnimationShareBtn
                socialLinks={[
                    { icon: <FaFacebook />, color: "#1877f2", url: "#" },
                    { icon: <BsGithub />, color: "#25d366", url: "#" },
                    { icon: <BsTwitterX />, color: "#000000", url: "#" },
                    { icon: <BsInstagram />, color: "#ff4500", url: "#" },
                    { icon: <FaWhatsapp />, color: "#0a66c2", url: "#" },
                ]}
            />
        </div>
    )
}

export default page
