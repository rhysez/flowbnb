import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import PlaceCard from "@/components/custom/micro/PlaceCard";

function LocalCarousel() {
    return (
        <Carousel
            opts={{
                align: "start",
            }}
            className="w-full"
        >
            <CarouselContent>
                {Array.from({ length: 6 }).map((_, index) => (
                    <CarouselItem key={index} className="basis-1/2 md:basis-1/3 lg:basis-1/4">
                        <div className="p-1">
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <PlaceCard />
                                    </TooltipTrigger>
                                    <TooltipContent className={"bg-foreground_muted"}>
                                        <p>Drag to see more</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    )
}

export default function HomeMostPopular() {
    return (
        <section className={"space-y-6"}>
            <h3 className={"lg:text-4xl md:text-2xl text-foreground_muted font-bold"}>Most popular places today...</h3>
            <section>
                <LocalCarousel />
            </section>
        </section>
    )
}