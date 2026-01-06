"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProjectCard from "../ProjectCard";
import { projects } from "../../data/projects";

export default function ProjectsSection() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-white overflow-hidden py-4 sm:py-8">
      <div className="w-full h-full flex flex-col px-4 sm:px-8 md:px-12 lg:px-16">
        {/* Section Header */}
        <div className="text-center mb-4 sm:mb-6 flex-shrink-0">
          <h1 className="text-[var(--text-color)] text-2xl sm:text-3xl md:text-4xl font-semibold mb-2 sm:mb-3">
            Projects
          </h1>
          <p className="text-[var(--text-color)] text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2">
            A showcase of my recent development work, featuring full-stack
            applications and interactive web experiences.
          </p>
        </div>

        {/* Carousel - Takes remaining height */}
        <div className="flex-1 flex items-center min-h-0">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent className="-ml-2 sm:-ml-4">
              {projects.map((project) => (
                <CarouselItem key={project.id} className="pl-2 sm:pl-4">
                  <ProjectCard project={project} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden lg:flex -left-12" />
            <CarouselNext className="hidden lg:flex -right-12" />
          </Carousel>
        </div>
      </div>
    </div>
  );
}
