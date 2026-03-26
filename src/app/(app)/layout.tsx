import Navbar from "@/Components/NavBar/NavBar";
import SideBar from "@/Components/sideLink/SideBar";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="flex flex-col h-screen antialiased ">
      <Navbar />
      {children}
    </div>
  );
}
