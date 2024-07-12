import { Navbar } from "@/components/navbar";



interface NewLayoutProps {
    children: React.ReactNode;
}

export default function NewLayout({ children }: NewLayoutProps) {
    return (
        <div className="w-full h-full">
            
            <main className="flex w-full h-full">
            <Navbar />
                <div className="h-full w-full pl-[300px]">
                    
                    {children}
                </div>
            </main>
        </div>
    );
};