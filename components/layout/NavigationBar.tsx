import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {SidebarTrigger} from "@/components/ui/sidebar";

export default function NavigationBar() {
    return (
        <main className={"flex items-center justify-between py-4 md:px-12 border-b-[1px] border-border"}>
            <section className={"flex flex-col gap-2 md:flex-row md:items-center md:gap-12"}>
                <div className={"flex items-center gap-2"}>
                    <SidebarTrigger className={"hover:text-cherry_red h-12"}/>
                    <h2 id={"nav-logo"} className={"text-brilliant_red text-2xl"}>flowbnb</h2>
                </div>
            </section>
            <div className={"flex md:flex-row flex-col items-center gap-2"}>
                <Button className={"bg-cherry_red hover:bg-brilliant_red h-7 rounded-full opacity-75"}>
                    Sign up
                </Button>
                <Button className={"bg-cherry_red hover:bg-brilliant_red h-7 rounded-full opacity-75"}>
                    Log in
                </Button>
            </div>
        </main>
    )
}