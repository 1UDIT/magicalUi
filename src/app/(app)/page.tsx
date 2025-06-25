import Link from "next/link";
import AnimatedGradientText from "@/components/UI/AnimatedGradientText";

export default async function RootLayout() {
    return (
        <>
            <main className="flex-grow flex flex-col items-center justify-center px-4 dark:text-white text-black">
                <section className="text-center mb-8 md:mb-12">

                    <AnimatedGradientText
                        speed={2}
                        colorFrom="#4ade80"
                        colorTo="#06b6d4"
                        className="text-4xl font-semibold tracking-tight bold md:text-4xl lg:text-5xl xl:text-6xl"
                    >
                        MagicalUI
                    </AnimatedGradientText>

                    <p className="mt-3 md:mt-4 text-xl">
                        UI library for Engineers
                    </p>
                    <div className="w-full flex items-center justify-center mt-4">
                        <div className="btn relative  cursor-pointer flex items-center justify-center rounded-[100px] border-none p-[2px] w-31 ">
                            <p className="relative z-[1] w-full rounded-[100px] bg-black p-1 text-base text-[#fff] backdrop-blur-[40px]">
                                <Link href={'/components'}>Get Started →</Link>
                            </p>
                        </div>
                    </div>
                </section>
            </main >
        </>
    );
}