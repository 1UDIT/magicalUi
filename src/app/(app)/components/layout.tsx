import SideBar from "@/Components/sideLink/SideBar";

 
interface RootLayoutProps {
    children: React.ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
    return (
        <div className="flex flex-col dark:bg-black bg-white">
            <div className='container w-full flex-1 items-start px-4 lg:grid lg:grid-cols-[270px_minmax(0,1fr)] lg:gap-10 lg:px-8'>
                <SideBar />
                {children}
            </div>
        </div>
    );
}
 