import {HomeIcon, MagnifyingGlassIcon, Cog6ToothIcon, UserIcon, ChevronUpIcon, BriefcaseIcon, HeartIcon} from "@heroicons/react/24/outline";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup, SidebarGroupContent, SidebarGroupLabel,
    SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem,
} from "@/components/ui/sidebar"
import Link from "next/link";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";

const items = [
    {
        title: "Home",
        url: "/home",
        icon: HomeIcon,
    },
    {
        title: "Search",
        url: "/home/search",
        icon: MagnifyingGlassIcon,
    },
    {
        title: "Bookings",
        url: "/home/bookings",
        icon: BriefcaseIcon,
    },
    {
        title: "Favorites",
        url: "/home/favorites",
        icon: HeartIcon,
    },
    {
        title: "Settings",
        url: "/home/settings",
        icon: Cog6ToothIcon,
    },
]

export function AppSidebar() {
    return (
        <Sidebar variant={"sidebar"} className={"z-10"}>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel id={"sidebar-logo"} className={"text-brilliant_red text-lg"}>flowbnb</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <Link href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <SidebarMenuButton>
                                    <UserIcon /> Username
                                    <ChevronUpIcon className="ml-auto" />
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                side="top"
                                className="w-[--radix-popper-anchor-width]"
                            >
                                <DropdownMenuItem>
                                    <span>Sign out</span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    )
}
