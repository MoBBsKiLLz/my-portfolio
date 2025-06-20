import Image from "next/image";
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Sample screenshot data - replace with your actual screenshots
const screenshots = [
  {
    src: "/images/openportal/Login.png",
    alt: "OpenPortal Login Page",
    title: "Login"
  },
  {
    src: "/images/openportal/Invite Management.png", 
    alt: "User Invite Management",
    title: "Invite Management"
  },
  {
    src: "/images/openportal/Invite Management_Dark Mode.png",
    alt: "User Invite Management Dark Mode",
    title: "Invite Management Dark"
  },
  {
    src: "/images/openportal/User Settings.png",
    alt: "User Settings",
    title: "Settings"
  },
  {
    src: "/images/openportal/Create Invite.png",
    alt: "Create Invite",
    title: "Invite"
  }
];

export default function ProjectCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'center',
    skipSnaps: false,
    dragFree: false
  });
  
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((index) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative">
      {/* Carousel Container */}
      <div className="overflow-hidden rounded-lg bg-gray-50" ref={emblaRef}>
        <div className="flex">
          {screenshots.map((screenshot, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0 relative">
              <div className="relative w-full h-64 md:h-80 bg-white rounded-lg shadow-sm mx-2">
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
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed z-10"
        onClick={scrollPrev}
        disabled={prevBtnDisabled}
        aria-label="Previous screenshot"
      >
        <ChevronLeft className="w-5 h-5 text-gray-700" />
      </button>

      <button
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed z-10"
        onClick={scrollNext}
        disabled={nextBtnDisabled}
        aria-label="Next screenshot"
      >
        <ChevronRight className="w-5 h-5 text-gray-700" />
      </button>

      {/* Dot Indicators */}
      <div className="flex justify-center mt-4 space-x-2">
        {screenshots.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${
              index === selectedIndex 
                ? 'bg-indigo-600 w-6' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            onClick={() => scrollTo(index)}
            aria-label={`Go to screenshot ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}