// components/pager.tsx
"use client";

import Link from "next/link"; 
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

export function Pager({ prev, next }: { prev: any; next: any }) {
  // console.log(prev,"prev","next",next)
  return (
    <div className=" justify-between hidden lg:flex items-center">
      {prev ? (
        <Link
          href={prev?.href || ""}
          className="bg-[#262626] text-white hover:bg-[#1a1a1a] px-4 h-8 flex items-center gap-2 rounded-md"
        >
          <FaArrowLeft /> {prev?.title}
        </Link>
      ) : <div />}

      {next ? (
        <Link href={next?.href || ""} className="bg-[#262626] text-white hover:bg-[#1a1a1a] px-4 h-8 flex items-center gap-2 rounded-md">
          {next?.title} <FaArrowRight/>
        </Link>
      ) : <div />}
    </div>
  );
}
