'use client'

import { useState } from "react";

const GlowButton = () => {
  const [activeTab, setActiveTab] = useState("account");
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
      <div className="w-[500px] h-[400px] mx-auto mt-10 bg-black text-white rounded-lg shadow-md p-4">
        <div className="flex border-b border-gray-700 pb-7">
          <button
            onClick={() => setActiveTab("account")}
            className={`flex-1 py-2 px-4 text-sm font-medium text-center rounded-t-md ${activeTab === "account"
              ? "bg-gray-800 text-white"
              : "bg-gray-900 text-gray-400"
              }`}
          >
            Account
          </button>
          <button
            onClick={() => setActiveTab("password")}
            className={`flex-1 py-2 px-4 text-sm font-medium text-center rounded-t-md ${activeTab === "password"
              ? "bg-gray-800 text-white"
              : "bg-gray-900 text-gray-400"
              }`}
          >
            Password
          </button>
        </div>

        <div className="p-4 border border-gray-700 border-t-0 rounded-b-md bg-gray-900 h-full w-full">
          {activeTab === "account" ? (
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