"use client";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import SkillsSection from "./sections/SkillsSection";
import LeftColumnMobile from "./LeftColumnMobile";
import ContactSection from "./sections/ContactSection";
import ProjectsSection from "./sections/ProjectsSection";

export default function RightColumn({ includeMobileIntro = false, scrollRef }) {
  const fallbackRef = useRef();
  const containerRef = scrollRef || fallbackRef;

  const { scrollYProgress } = useScroll({ container: containerRef });

  // Desktop transforms
  const aboutY = useTransform(scrollYProgress, [0.0, 0.2], ["100%", "0%"]);
  const skillsY = useTransform(scrollYProgress, [0.2, 0.4], ["100%", "0%"]);
  const projectsY = useTransform(scrollYProgress, [0.4, 0.6], ["100%", "0%"]);
  const contactY = useTransform(scrollYProgress, [0.6, 0.8], ["100%", "0%"]);

  const aboutOpacity = useTransform(scrollYProgress, [0.05, 0.2], [0, 1]);
  const skillsOpacity = useTransform(scrollYProgress, [0.25, 0.4], [0, 1]);
  const projectsOpacity = useTransform(scrollYProgress, [0.45, 0.6], [0, 1]);
  const contactOpacity = useTransform(scrollYProgress, [0.65, 0.8], [0, 1]);

  // Mobile transforms - Fixed to ensure proper scrolling to contact section
  // Calculate based on total sections (5 or 6 depending on includeMobileIntro)
  const totalSections = includeMobileIntro ? 6 : 5;
  const sectionStep = 1 / totalSections;
  
  let currentStep = 0;
  
  // Always create hero transform, but adjust range based on includeMobileIntro
  const heroY = useTransform(
    scrollYProgress, 
    includeMobileIntro 
      ? [currentStep, currentStep + sectionStep] 
      : [0, 0], // When not included, keep it at 0 (no movement)
    ["100%", "0%"]
  );
  
  if (includeMobileIntro) currentStep += sectionStep;
  
  const mobileAboutY = useTransform(
    scrollYProgress,
    [currentStep, currentStep + sectionStep],
    ["100%", "0%"]
  );
  currentStep += sectionStep;
  
  const mobileSkillsY = useTransform(
    scrollYProgress,
    [currentStep, currentStep + sectionStep],
    ["100%", "0%"]
  );
  currentStep += sectionStep;
  
  const mobileProjectsY = useTransform(
    scrollYProgress,
    [currentStep, currentStep + sectionStep],
    ["100%", "0%"]
  );
  currentStep += sectionStep;
  
  const mobileContactY = useTransform(
    scrollYProgress,
    [currentStep, Math.min(currentStep + sectionStep, 1.0)],
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
          <div className="absolute top-0 left-0 w-full h-screen" style={{ zIndex: 10 }}>
            <LeftColumnMobile />
          </div>
        )}

        {/* Page 2 - Hero Section (or Page 1 if no intro) */}
        <motion.div
          className="absolute top-0 left-0 w-full h-screen"
          style={{ 
            y: heroY,
            zIndex: 20,
            isolation: 'isolate'
          }}
        >
          <HeroSection />
        </motion.div>

        {/* Page 3 - About Section (or Page 2 if no intro) */}
        <motion.div
          id="about"
          className="absolute top-0 left-0 w-full h-screen"
          style={{ 
            y: mobileAboutY,
            zIndex: 30,
            isolation: 'isolate'
          }}
        >
          <AboutSection />
        </motion.div>

        {/* Page 4 - Skills Section (or Page 3 if no intro) */}
        <motion.div
          id="skills"
          className="absolute top-0 left-0 w-full h-screen"
          style={{ 
            y: mobileSkillsY,
            zIndex: 40,
            isolation: 'isolate'
          }}
        >
          <SkillsSection />
        </motion.div>

        {/* Page 5 - Projects Section (or Page 4 if no intro) */}
        <motion.div
          id="projects"
          className="absolute top-0 left-0 w-full h-screen"
          style={{ 
            y: mobileProjectsY,
            zIndex: 50,
            isolation: 'isolate'
          }}
        >
          <div className="pb-24">
            <ProjectsSection />
          </div>
        </motion.div>

        {/* Page 6 - Contact Me Section (or Page 5 if no intro) */}
        <motion.div
          id="contact"
          className="absolute top-0 left-0 w-full h-screen"
          style={{ 
            y: mobileContactY,
            zIndex: 60,
            isolation: 'isolate'
          }}
        >
          <ContactSection />
        </motion.div>

        {/* Phantom scroll area - adjusted based on total sections */}
        <div className={`${includeMobileIntro ? 'h-[600vh]' : 'h-[500vh]'}`} />
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

        {/* Page 4 - Projects Section scrolls over Skills */}
        <motion.div
          id="projects"
          className="absolute top-0 left-0 w-full h-screen z-40"
          style={{ y: projectsY, opacity: projectsOpacity }}
        >
          <ProjectsSection />
        </motion.div>

        <motion.div
          id="contact"
          className="absolute top-0 left-0 w-full h-screen z-50"
          style={{ y: contactY, opacity: contactOpacity }}
        >
          <ContactSection />
        </motion.div>
      </div>
      {/* Phantom scroll area for 5 full screens */}
      <div className="relative z-0">
        <div id="hero-anchor" className="h-screen" />
        <div id="about-anchor" className="h-screen" />
        <div id="skills-anchor" className="h-screen" />
        <div id="projects-anchor" />
        <div id="contact-anchor" className="h-screen" />
      </div>
    </div>
  );
}