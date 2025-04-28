"use client";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import SkillsSection from "./sections/SkillsSection";
import LeftColumnMobile from "./LeftColumnMobile";
import ContactSection from "./sections/ContactSection";

export default function RightColumn({ includeMobileIntro = false, scrollRef }) {
  const fallbackRef = useRef();
  const containerRef = scrollRef || fallbackRef;

  const { scrollYProgress } = useScroll({ container: containerRef });

  // Desktop transforms
  const aboutY = useTransform(scrollYProgress, [0.1, 0.4], ["100%", "0%"]);
  const aboutOpacity = useTransform(scrollYProgress, [0.15, 0.4], [0, 1]);
  const skillsY = useTransform(scrollYProgress, [0.4, 0.7], ["100%", "0%"]);
  const skillsOpacity = useTransform(scrollYProgress, [0.45, 0.7], [0, 1]);
  const contactY = useTransform(scrollYProgress, [0.7, 1], ["100%", "0%"]);
  const contactOpacity = useTransform(scrollYProgress, [0.75, 1], [0, 1]);

  // Mobile transforms
  const heroY = useTransform(scrollYProgress, [0.0, 0.25], ["100%", "0%"]);
  const mobileAboutY = useTransform(
    scrollYProgress,
    [0.25, 0.5],
    ["100%", "0%"]
  );
  const mobileSkillsY = useTransform(
    scrollYProgress,
    [0.5, 0.75],
    ["100%", "0%"]
  );
  const mobileContactY = useTransform(
    scrollYProgress,
    [0.75, 1],
    ["100%", "0%"]
  );

  return (
    <div
      ref={containerRef}
      id="main-scroll-container"
      className="ml-auto w-full min-h-screen h-screen overflow-y-scroll relative z-0 scroll-smooth bg-white"
    >
      {/* MOBILE STACK */}
      <div className="sticky top-0 w-full h-screen z-10 md:hidden">
        {/* Page 1 - Intro */}
        {includeMobileIntro && (
          <div className="absolute top-0 left-0 w-full h-screen z-10">
            <LeftColumnMobile />
          </div>
        )}

        {/* Page 2 - Hero Section */}
        <motion.div
          className="absolute top-0 left-0 w-full h-screen z-20"
          style={{ y: heroY }}
        >
          <HeroSection />
        </motion.div>

        {/* Page 3 - About Section */}
        <motion.div
          id="about"
          className="absolute top-0 left-0 w-full h-screen z-30"
          style={{ y: mobileAboutY }}
        >
          <AboutSection />
        </motion.div>

        {/* Page 4 - Skills Section */}
        <motion.div
          id="skills"
          className="absolute top-0 left-0 w-full h-screen z-40"
          style={{ y: mobileSkillsY }}
        >
          <SkillsSection />
        </motion.div>

        {/* Page 5 - Contact Me Section */}
        <motion.div
          id="contact"
          className="absolute top-0 left-0 w-full h-screen z-50"
          style={{ y: mobileContactY }}
        >
          <ContactSection />
        </motion.div>

        {/* Phantom scroll area for 4 full screens */}
        <div className="h-[500vh]" />
      </div>

      {/* DESKTOP STACK */}
      <div className="sticky top-0 w-full h-screen z-10 md:block hidden">
        {/* Page 1 - Hero Section */}
        <HeroSection />

        {/* Page 2 - About Section scrolls over Hero */}
        <motion.div
          id="about"
          className="absolute top-0 left-0 w-full h-screen z-20"
          style={{ y: aboutY, opacity: aboutOpacity }}
        >
          <AboutSection />
        </motion.div>

        {/* Page 3 - Skills Section scrolls over About */}
        <motion.div
          id="skills"
          className="absolute top-0 left-0 w-full h-screen z-30"
          style={{ y: skillsY, opacity: skillsOpacity }}
        >
          <SkillsSection />
        </motion.div>

        <motion.div
          id="contact"
          className="absolute top-0 left-0 w-full h-screen z-40"
          style={{ y: contactY, opacity: contactOpacity }}
        >
          <ContactSection />
        </motion.div>
      </div>
      {/* Phantom scroll area for 4 full screens */}
      <div className="relative z-0">
          <div id="hero-anchor" className="h-screen" />
          <div id="about-anchor" className="h-screen" />
          <div id="skills-anchor" className="h-screen" />
          <div id="contact-anchor" className="h-screen" />
        </div>
    </div>
  );
}
