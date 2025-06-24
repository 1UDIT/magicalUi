import Link from "next/link";

export default async function RootLayout() {
    return (
        <>
            <main className="flex-grow flex flex-col items-center justify-center px-4 text-white">
                <section className="text-center mb-8 md:mb-12">
                    
                    <h1 className="text-3xl md:text-5xl font-bold">
                        Dive into the World of Anonymous Feedback
                    </h1>
                    <p className="mt-3 md:mt-4 text-base md:text-lg">
                        True Feedback - Where your identity remains a secret.
                    </p>
                    <div className="w-full flex items-center justify-center">
                        <div className="btn relative  cursor-pointer flex items-center justify-center rounded-[100px] border-none p-[2px] w-31 ">
                            <p className="relative z-[1] w-full rounded-[100px] bg-black p-1 text-base text-[#fff] backdrop-blur-[40px]">
                               <Link href={'/Components'}>Component</Link> 
                            </p>
                        </div>
                    </div>
                </section>
            </main> 
        </>
    );
}