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
    <div className="w-full h-full flex items-start md:items-center justify-center bg-white overflow-y-auto md:overflow-hidden">
      <div className="w-full flex flex-col px-4 py-16 sm:px-8 md:px-12 lg:px-16 sm:py-12 md:py-8">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-8 md:mb-10 flex-shrink-0">
          <h1 className="text-[var(--text-color)] text-2xl sm:text-3xl md:text-4xl font-semibold mb-2 sm:mb-3">
            Projects
          </h1>
          <p className="text-[var(--text-color)] text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2">
            A showcase of my recent development work, featuring full-stack applications
            and interactive web experiences.
          </p>
        </div>

        {/* Carousel */}
        <div className="flex items-center justify-center md:flex-1">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full max-w-5xl"
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