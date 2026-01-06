import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { getProjectImageClasses } from "../utils/projectHelpers";

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

  const imageClasses = getProjectImageClasses(type);
  
  // Adjusted heights - mobile images are shorter to allow card content to show
  const imageContainerClass = type === "mobile" 
    ? "relative w-full h-[250px] sm:h-[300px] md:h-[350px] bg-gradient-to-br from-gray-50 to-gray-100 flex-shrink-0"
    : "relative w-full h-[200px] sm:h-[250px] md:h-[300px] bg-gradient-to-br from-gray-50 to-gray-100 flex-shrink-0";

  return (
    <Card className="overflow-hidden flex flex-col md:h-[75vh]">
      {/* Project Image */}
      <div className={imageContainerClass}>
        <Image
          src={image}
          alt={`${title} screenshot`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={`${imageClasses.objectFit} ${imageClasses.padding}`}
          style={{ objectFit: 'contain' }}
          priority
        />
      </div>

      {/* Project Content - Scrollable if needed */}
      <div className="flex-1 flex flex-col min-h-0 md:overflow-y-auto">
        <CardHeader className="flex-shrink-0 pb-2 sm:pb-3">
          <CardTitle className="text-lg sm:text-xl md:text-2xl leading-tight">{title}</CardTitle>
          <CardDescription className="text-xs sm:text-sm md:text-base line-clamp-2 mt-1">
            {description}
          </CardDescription>
        </CardHeader>

        <CardContent className="flex-1 flex flex-col justify-between space-y-2 sm:space-y-3 pb-3 sm:pb-4">
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
          <div className="flex flex-col sm:flex-row gap-2 pt-1 sm:pt-2">
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