// components/ProjectCarousel.js
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const screenshots = [
  {
    src: "/images/openportal/Login.png",
    alt: "OpenPortal Login Page",
    title: "Login",
  },
  {
    src: "/images/openportal/Invite Management.png",
    alt: "User Invite Management",
    title: "Invite Management",
  },
  {
    src: "/images/openportal/Invite Management_Dark Mode.png",
    alt: "User Invite Management Dark Mode",
    title: "Invite Management Dark",
  },
  {
    src: "/images/openportal/User Settings.png",
    alt: "User Settings",
    title: "Settings",
  },
  {
    src: "/images/openportal/Create Invite.png",
    alt: "Create Invite",
    title: "Invite",
  },
];

export default function ProjectCarousel() {
  return (
    <Carousel
      opts={{
        align: "center",
        loop: true,
      }}
      className="w-full max-w-4xl"
    >
      <CarouselContent>
        {screenshots.map((screenshot, index) => (
          <CarouselItem key={index}>
            <div className="relative w-full h-64 md:h-80 bg-white rounded-lg shadow-sm">
              <Image
                src={screenshot.src}
                alt={screenshot.alt}
                fill
                className="object-contain p-4"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute bottom-2 left-4 right-4 bg-black/70 text-white px-3 py-1 rounded text-sm">
                {screenshot.title}
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-2" />
      <CarouselNext className="right-2" />
    </Carousel>
  );
}
