import { Navbar } from "@/components/navbar";
import { Sidebar } from "../../components/sidebar";

interface ChatLayoutProps {
    children: React.ReactNode;
}

export default function ChatLayout({ children }: ChatLayoutProps) {
    return (
        <div>
            <Navbar />
            <main className="flex h-full">
                <Sidebar />
                <div className="h-full w-full lg:pl-[300px]  bg-[#1a202c]">
                    {children}
                </div>
            </main>
        </div>
    );
};