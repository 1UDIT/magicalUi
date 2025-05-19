import SideBar from "@/Components/sideLink/SideBar";
import Navbar from "@/Components/NavBar";



interface RootLayoutProps {
    children: React.ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
    return (
        <div className="flex flex-col dark:bg-black bg-white">
            <div className='container mx-auto w-full max-w-[88rem] flex-1 items-start px-4 lg:grid lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10 lg:px-8'>
                <SideBar />
                {children}
            </div>
        </div>
    );
}