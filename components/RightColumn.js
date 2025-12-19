// RightColumn.js
"use client";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import SkillsSection from "./sections/SkillsSection";
import ContactSection from "./sections/ContactSection";
import ProjectsSection from "./sections/ProjectsSection";

export default function RightColumn() {
  return (
    <div
      id="main-scroll-container"
      className="ml-auto w-full h-screen overflow-y-scroll scroll-smooth bg-white"
      style={{
        scrollSnapType: "y proximity",
      }}
    >
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
