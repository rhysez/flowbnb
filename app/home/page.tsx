import MostPopular from "@/components/custom/home/MostPopular";
import CategoryHighlight from "@/components/custom/home/CategoryHighlight";

export default function Home() {
    return (
        <main className={"space-y-16"}>
            <MostPopular />
            <CategoryHighlight />
        </main>
    );
}
