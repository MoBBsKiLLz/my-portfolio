"use client";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";

export default function RightColumn() {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    container: scrollRef,
  });

  const y = useTransform(scrollYProgress, [0.1, 0.5], ["100%", "0%"]);
  const opacity = useTransform(scrollYProgress, [0.15, 0.4], [0, 1]);
  

  return (
    <div
      ref={scrollRef}
      className="ml-auto lg:w-[50%] h-screen overflow-y-scroll relative z-0 scroll-smooth bg-black"
    >
      {/* Fixed hero section */}
      <div className="sticky top-0 w-full h-screen z-10">
        {/* Hero section in normal flow */}
        <HeroSection />

        {/* Overlay Section - scrolls over the fixed hero */}
        <motion.div
          className="absolute top-0 left-0 w-full h-screen z-20"
          style={{ y, opacity }}
        >
          <AboutSection />
        </motion.div>

        {/* Add a phantom spacer div so the page scrolls enough */}
        <div className="h-[200vh]" />
      </div>
    </div>
  );
}
