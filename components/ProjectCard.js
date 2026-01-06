// components/ProjectCard.js
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function ProjectCard({ project }) {
  const {
    title,
    description,
    image,
    technologies,
    liveUrl,
    githubUrl
  } = project;

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300">
      {/* Project Image */}
      <div className="relative w-full h-64 md:h-80 bg-gray-100">
        <Image
          src={image}
          alt={`${title} screenshot`}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Project Content */}
      <div className="p-6 md:p-8">
        <h2 className="text-[var(--text-color)] text-2xl md:text-3xl font-semibold mb-3">
          {title}
        </h2>

        <p className="text-[var(--text-color)] text-base md:text-lg mb-4 leading-relaxed">
          {description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="bg-indigo-100 text-indigo-700 hover:bg-indigo-200"
            >
              {tech}
            </Badge>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200 font-medium"
            >
              <ExternalLink size={18} />
              View Live
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors duration-200 font-medium"
            >
              <ExternalLink size={18} />
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}