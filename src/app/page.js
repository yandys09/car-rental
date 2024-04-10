import Carousels from "@/components/Carousel";
import Explore from "@/components/Explore";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
<Carousels />
<div className="relative">
  <Explore />
</div>
    </div>
  );
}
