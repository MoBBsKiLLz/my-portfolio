"use client";
import { motion } from "framer-motion";

const skills = [
  {
    name: "React",
    category: "Frontend",
    color: "#61DAFB",
    logo: "/images/react.svg",
  },
  {
    name: "Next.js",
    category: "Frontend",
    color: "#000000",
    logo: "/images/nextjs.svg",
  },
  {
    name: "Tailwind CSS",
    category: "Styling",
    color: "#38BDF8",
    logo: "/images/tailwindcss.svg",
  },
  {
    name: "JavaScript",
    category: "Language",
    color: "#F7DF1E",
    logo: "/images/javascript.svg",
  },
  {
    name: "Express.js",
    category: "Backend",
    color: "#000000",
    logo: "/images/express.png",
  },
  /* {
    name: "C#",
    category: "Language",
    color: "#9B4F96",
    logo: "/images/csharp.png",
  },
  {
    name: ".NET",
    category: "Backend",
    color: "#512BD4",
    logo: "/images/dotnet.png",
  }, */
  {
    name: "Prisma",
    category: "Database",
    color: "#0C344B",
    logo: "/images/prisma.png",
  },
  /* {
    name: "MySQL",
    category: "Database",
    color: "#4479A1",
    logo: "/images/mySql.png",
  }, */
];

export default function SkillsSection() {
  return (
    <section
      className="flex flex-col items-center justify-center min-h-screen px-4 py-16 bg-gray-100"
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl md:text-4xl font-bold mb-10 text-gray-900"
      >
        Technologies I Work With
      </motion.h2>

      <div className="grid grid-cols-2 grid-cols-3 gap-6 w-full max-w-5xl">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-white rounded-2xl shadow-md p-4 flex flex-col items-center justify-center hover:scale-105 transition-transform"
          >
            <div className="w-16 h-16 mb-4">
              <img src={skill.logo} alt={skill.name} className="object-contain w-full h-full" />
            </div>
            <p className="text-sm font-semibold text-gray-800">{skill.name}</p>
            <span className="text-xs text-gray-500">{skill.category}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
