'use client';

import { Pager } from "@/Components/pager";
import SideBar from "@/Components/sideLink/SideBar";
import { Button } from "@/Components/UI/Button";
import { getPagerForDoc } from "@/Lib/get-pager";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";


interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const pathname = usePathname();
  const pager = getPagerForDoc(pathname);
  console.log(pager, "pager")

  return (
    <div className="w-full flex-1 items-start px-4 lg:grid lg:grid-cols-[270px_minmax(0,1fr)] grid-cols-1 lg:gap-10 lg:px-8">
      {/* Sidebar */}
      <div className="hidden lg:block  h-full">
        <SideBar />
      </div>

      {/* Main content + footer */}
      <div className="flex flex-col min-h-full">
        <div className="flex-1">
          <div className="mx-auto flex w-full max-w-2xl min-w-0 flex-1 flex-col gap-8 px-4 py-6 text-neutral-800 md:px-0 lg:py-8 dark:text-neutral-300">
            <h1 className="scroll-m-20 text-4xl font-semibold tracking-tight sm:text-3xl xl:text-4xl">
              <div className="flex items-start justify-between">
                {pager?.activeLink?.title}
                <div className="docs-nav bg-background/80 border-border/50 fixed inset-x-0 bottom-0 isolate z-50 flex items-center gap-2 border-t px-6 py-4 backdrop-blur-sm sm:static sm:z-0 sm:border-t-0 sm:bg-transparent sm:px-0 sm:pt-1.5 sm:backdrop-blur-none">

                  {pager?.prev && (
                    <Button
                      variant="secondary"
                      size="icon"
                      className="extend-touch-target ml-auto size-8 shadow-none md:size-7"
                      asChild
                    >
                      <Link href={pager?.prev?.href || ""}>
                        <ArrowLeft />
                        <span className="sr-only">Previous</span>
                      </Link>
                    </Button>
                  )}
                  {pager?.next && (
                    <Button
                      variant="secondary"
                      size="icon"
                      className="extend-touch-target size-8 shadow-none md:size-7"
                      asChild
                    >
                      <Link href={pager?.prev?.href|| ""}>
                        <span className="sr-only">Next</span>
                        <ArrowRight />
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            </h1>
            {children}
          </div>
        </div>


        <div className="flex flex-col min-h-full">
          <div className="flex-1">
            {/* <div className="mx-auto  gap-8 px-4 py-6 text-neutral-800 md:px-0 lg:py-8 dark:text-neutral-300"> */}
            {/* <div className="flex flex-col gap-2"> */}
            {/* <div className="flex items-start justify-between">
                <h1 className="scroll-m-20 text-4xl font-semibold tracking-tight sm:text-3xl xl:text-4xl">
                  {pager?.activeLink?.title}
                </h1> */}
            {/* <div className="docs-nav bg-background/80 border-border/50 fixed inset-x-0 bottom-0 isolate z-50 flex items-center gap-2 border-t px-6 py-4 backdrop-blur-sm sm:static sm:z-0 sm:border-t-0 sm:bg-transparent sm:px-0 sm:pt-1.5 sm:backdrop-blur-none">
                     
                    {neighbours.previous && (
                      <Button
                        variant="secondary"
                        size="icon"
                        className="extend-touch-target ml-auto size-8 shadow-none md:size-7"
                        asChild
                      >
                        <Link href={neighbours.previous.url}>
                          <IconArrowLeft />
                          <span className="sr-only">Previous</span>
                        </Link>
                      </Button>
                    )}
                    {neighbours.next && (
                      <Button
                        variant="secondary"
                        size="icon"
                        className="extend-touch-target size-8 shadow-none md:size-7"
                        asChild
                      >
                        <Link href={neighbours.next.url}>
                          <span className="sr-only">Next</span>
                          <IconArrowRight />
                        </Link>
                      </Button>
                    )}
                  </div> */}
            {/* </div> */}
            {/* <div className="w-full flex-1 *:data-[slot=alert]:first:mt-0"> */}
            {/* </div> */}
            {/* </div> */}
            {/* </div> */}
          </div>
        </div>


        <footer className="py-4 border-t border-gray-200 dark:border-gray-700">
          <Pager prev={pager.prev} next={pager.next} />
        </footer>
      </div>
    </div>
  );
}

