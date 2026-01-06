// sections/ProjectsSection.js
"use client";

import ProjectCard from "../ProjectCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { projects } from "@/data/projects";

export default function ProjectsSection() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-white overflow-hidden">
      <div className="max-w-6xl w-full px-4 md:px-6 py-8 md:py-12">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-[var(--text-color)] text-3xl md:text-4xl font-semibold mb-4">
            Projects
          </h1>
          <p className="text-[var(--text-color)] text-base md:text-lg max-w-2xl mx-auto">
            A showcase of my recent development work, featuring full-stack applications
            and interactive web experiences.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative px-12">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {projects.map((project) => (
                <CarouselItem key={project.id}>
                  <ProjectCard project={project} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-12" />
            <CarouselNext className="-right-12" />
          </Carousel>
        </div>
      </div>
    </div>
  );
}
