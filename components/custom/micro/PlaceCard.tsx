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
                <CardTitle>Rental Place</CardTitle>
                <CardDescription>This is a description of the place.</CardDescription>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button className={"bg-cherry_red text-white hover:bg-brilliant_red"}>View</Button>
                <Button size={"icon"} variant="ghost">
                    <HeartIcon className={"text-foreground_muted"} />
                </Button>
            </CardFooter>
        </Card>
    )
}