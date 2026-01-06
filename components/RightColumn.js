"use client";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import SkillsSection from "./sections/SkillsSection";
import ContactSection from "./sections/ContactSection";
import ProjectsSection from "./sections/ProjectsSection";
import LeftColumnMobile from "./LeftColumnMobile";

export default function RightColumn({ includeMobileIntro }) {
  return (
    <div
      id="main-scroll-container"
      className="ml-auto w-full h-screen overflow-y-scroll scroll-smooth bg-white"
      style={{
        scrollSnapType: "y proximity",
      }}
    >
      {/* Mobile Intro Section - Only on mobile */}
      {includeMobileIntro && (
        <section
          id="intro"
          className="min-h-screen h-screen w-full sticky top-0"
          style={{ scrollSnapAlign: "start", zIndex: 0 }}
        >
          <LeftColumnMobile />
        </section>
      )}

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen h-screen w-full sticky top-0"
        style={{ scrollSnapAlign: "start", zIndex: 1 }}
      >
        <HeroSection />
      </section>

      {/* About Section */}
      <section
        id="about"
        className="min-h-screen h-screen w-full sticky top-0"
        style={{ scrollSnapAlign: "start", zIndex: 2 }}
      >
        <AboutSection />
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="min-h-screen h-screen w-full sticky top-0"
        style={{ scrollSnapAlign: "start", zIndex: 3 }}
      >
        <SkillsSection />
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="min-h-screen h-screen w-full sticky top-0"
        style={{ scrollSnapAlign: "start", zIndex: 4 }}
      >
        <ProjectsSection />
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="min-h-screen h-screen w-full sticky top-0"
        style={{ scrollSnapAlign: "start", zIndex: 5 }}
      >
        <ContactSection />
      </section>
    </div>
  );
}