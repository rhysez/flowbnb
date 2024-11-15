import type { Metadata } from "next";
import "./globals.css";
import NavigationBar from "@/components/layout/NavigationBar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import {AppSidebar} from "@/components/layout/SideBar";

export const metadata: Metadata = {
  title: "Flowbnb",
  description: "Sleek, performance oriented bed and breakfast booking site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
      {children}
      </body>
    </html>
  );
}
