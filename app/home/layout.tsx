import type { Metadata } from "next";
import "../globals.css";
import NavigationBar from "@/components/layout/NavigationBar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import {AppSidebar} from "@/components/layout/SideBar";

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <SidebarProvider defaultOpen={true}>
            <AppSidebar />
            <main className={"w-full"}>
                <NavigationBar />
                <section className={"p-4"}>
                    {children}
                </section>
            </main>
        </SidebarProvider>
    );
}