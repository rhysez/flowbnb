import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {HeartIcon} from "@heroicons/react/24/solid";
import Image from "next/image";

export default function PlaceCard() {
    return (
        <Card>
            <CardHeader className={"p-0"}>
                <Image
                    src={"/example-place.png"}
                    alt={"rental property"}
                    width={400}
                    height={400}
                    className={"rounded-t-lg"}
                    priority
                />
            </CardHeader>
            <CardContent className={"mt-4"}>
                <CardTitle className={"text-left"}>Rental Place</CardTitle>
                <CardDescription className={"text-left"}>This is a description of the place.</CardDescription>
            </CardContent>
            <CardFooter className="flex justify-between">
                <div className={"bg-foreground_muted text-white hover:bg-brilliant_red py-1 px-3 rounded-full transition-all text-sm font-light"}>
                    View Rental
                </div>
                <div className={"w-6 h-6"}>
                    <HeartIcon className={"text-foreground_muted hover:text-brilliant_red transition-all cursor-pointer"} />
                </div>
            </CardFooter>
        </Card>
    )
}