import {Bars3Icon, MagnifyingGlassIcon} from "@heroicons/react/24/solid";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {SidebarTrigger} from "@/components/ui/sidebar";

export default function NavigationBar() {
    return (
        <main className={"flex items-center justify-between py-4 px-12 border-b-[1px] border-border"}>
            <div className={"flex items-center gap-6"}>
                <SidebarTrigger />
                <h2 id={"logo"} className={"text-cherry_red text-2xl"}>flowbnb</h2>
            </div>
            <div className={"flex items-center gap-2"}>
                <MagnifyingGlassIcon className={"h-6 w-6 text-foreground opacity-75"} />
                <Input className={"h-7 rounded-full bg-neutral-200 p-2 transition-all"} />
            </div>
            <div className={"flex items-center gap-2"}>
                <Button className={"bg-cherry_red hover:bg-brilliant_red h-7 rounded-full"}>Sign up</Button>
                <Button className={"bg-cherry_red hover:bg-brilliant_red h-7 rounded-full"}>Log in</Button>
            </div>
        </main>
    )
}