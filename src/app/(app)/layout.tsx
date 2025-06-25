import Navbar from "@/components/NavBar/NavBar";



interface RootLayoutProps {
    children: React.ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
    return (
        <div className=' flex flex-col min-h-screen antialiased bg-white dark:bg-black'>
            <Navbar />
            {children}
        </div>
    );
}
