'use client'

import { useState } from "react";

const GlowButton = () => {
  const [activeTab, setActiveTab] = useState("Preview");
  return (
    <>
      {/*<div className="relative w-full h-full overflow-hidden group items-center justify-center flex">
       <button
        className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
        type="submit"
      >
        Sign up &rarr;
        <BottomGradient />
      </button> */}
      <div className="w-full h-[400px] mx-auto  dark:bg-black bg-white text-white rounded-lg shadow-md p-4 mt-10 border border-[#504f4f] p-2">
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

        <div className="border rounded-xl h-full w-full border-[#504f4f]">
          {activeTab === "Preview" ? (
            <div className="relative w-full h-full overflow-hidden group items-center justify-center flex">
              <button
                className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
                type="submit"
              >
                Sign up &rarr;
                <BottomGradient />
              </button>
            </div>
          ) : (
            <div>
              <h2 className="text-lg font-bold">Password</h2>
              <p className="text-sm text-gray-400 mb-4">
                Change your password here.
              </p>
              {/* Add password form here */}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default GlowButton;



const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-1 w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-1 w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};