'use client'

import { AnimationShareBtn } from '@/Components/UI/AnimationShareBtn'
import { FaFacebook } from 'react-icons/fa'
import { BsGithub, BsInstagram, BsTwitterX } from 'react-icons/bs'
import { FaWhatsapp } from "react-icons/fa";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useState } from "react";

const page = () => {
    const [activeTab, setActiveTab] = useState("Preview");

    const codeString =
        `import React from 'react'; 

function App() {
  return (
    <div className="relative w-full h-full overflow-hidden group items-center justify-center flex">
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
    </div>
  );
} 
export default App;`;


    return (
        <div>
            <p>Share Animation Button</p>
            <div className="w-full h-[450px] mx-auto  dark:bg-black bg-white text-white rounded-lg shadow-md p-4 mt-10 border border-[#504f4f] p-2">
                <div className="border-b border-dashed border-[#504f4f]">
                    <button
                        onClick={() => setActiveTab("Preview")}
                        className={`py-2 px-4 text-sm font-medium text-center rounded-t-md ${activeTab === "Preview"
                            ? "bg-gray-800 text-white"
                            : "bg-gray-900 text-gray-400"
                            }`}
                    >
                        Preview
                    </button>
                    <button
                        onClick={() => setActiveTab("Code")}
                        className={`py-2 px-4 text-sm font-medium text-center rounded-t-md ${activeTab === "Code"
                            ? "bg-gray-800 text-white"
                            : "bg-gray-900 text-gray-400"
                            }`}
                    >
                        Code
                    </button>
                </div>

                <div className="border rounded-xl h-9/10 w-full border-[#504f4f] my-2">
                    {activeTab === "Preview" ? (
                        <div className="relative w-full h-full overflow-hidden group items-center justify-center flex">
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
                        </div>
                    ) : (
                        <div className="px-2 h-full overflow-auto rounded-b-lg">
                            <SyntaxHighlighter
                                language="jsx"
                                style={oneDark}
                                showLineNumbers
                            >
                                {codeString}
                            </SyntaxHighlighter>
                        </div>

                    )}
                </div>
            </div>
        </div>
    )
}

export default page
