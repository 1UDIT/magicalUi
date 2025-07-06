import Navbar from "@/Components/NavBar/NavBar";
import SideBar from "@/Components/sideLink/SideBar";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="flex flex-col h-dvh antialiased dark:bg-black bg-white">
      <Navbar />
      <div className="flex-1 w-full container px-4 lg:px-8 lg:grid lg:grid-cols-[270px_minmax(0,1fr)] ">
        <SideBar />
        {children}
      </div>
    </div>
  );
}
