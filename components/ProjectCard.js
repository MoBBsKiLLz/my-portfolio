import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { getProjectAspectRatio, getProjectImageClasses } from "../utils/projectHelpers";

export default function ProjectCard({ project }) {
  const {
    title,
    description,
    image,
    type = "desktop",
    technologies,
    liveUrl,
    githubUrl
  } = project;

  const aspectRatio = getProjectAspectRatio(type);
  const imageClasses = getProjectImageClasses(type);

  return (
    <Card className="overflow-hidden h-full max-h-[75vh] flex flex-col">
      {/* Project Image */}
      <div className={`relative w-full ${aspectRatio} bg-gradient-to-br from-gray-50 to-gray-100 flex-shrink-0`}>
        <Image
          src={image}
          alt={`${title} screenshot`}
          fill
          className={`${imageClasses.objectFit} ${imageClasses.padding}`}
          priority
        />
      </div>

      {/* Project Content - Scrollable if needed */}
      <div className="flex-1 overflow-y-auto flex flex-col min-h-0">
        <CardHeader className="flex-shrink-0 pb-3">
          <CardTitle className="text-lg sm:text-xl md:text-2xl leading-tight">{title}</CardTitle>
          <CardDescription className="text-xs sm:text-sm md:text-base line-clamp-2 mt-1">
            {description}
          </CardDescription>
        </CardHeader>

        <CardContent className="flex-1 flex flex-col justify-between space-y-3 pb-4">
          {/* Technologies */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-2 sm:px-3 py-0.5 sm:py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row gap-2 pt-2">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200 font-medium text-sm whitespace-nowrap"
              >
                <ExternalLink size={14} />
                View Live
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors duration-200 font-medium text-sm whitespace-nowrap"
              >
                <ExternalLink size={14} />
                GitHub
              </a>
            )}
          </div>
        </CardContent>
      </div>
    </Card>
  );
}