"use client";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import LeftColumnMobile from "./LeftColumnMobile"
import StackedSection from "./StackedSection";

export default function RightColumn({ includeMobileIntro = false }) {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    container: scrollRef,
  });

  const y = useTransform(scrollYProgress, [0.1, 0.5], ["100%", "0%"]);
  const opacity = useTransform(scrollYProgress, [0.15, 0.4], [0, 1]);

  return (
    <div
      ref={scrollRef}
      className="ml-auto w-full min-h-screen h-screen overflow-y-scroll relative z-0 scroll-smooth bg-white"
    >
      {includeMobileIntro && (
        <StackedSection sectionId="intro">
          <LeftColumnMobile />
        </StackedSection>
      )}
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
