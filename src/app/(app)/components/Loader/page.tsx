"use client"

import React from "react"; 
import Loading from "@/Components/UI/Loading";

const Page = () => {
  return (
    <div className="flex items-center justify-center h-full w-full">
       <Loading size="md" color="#df2c2cff" text="Loading your content..." />
    </div>
  );
};

export default Page;
