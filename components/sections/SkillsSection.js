// sections/SkillsSection.js
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
  {
    name: "Prisma",
    category: "Database",
    color: "#0C344B",
    logo: "/images/prisma.png",
  },
];

export default function SkillsSection() {
  return (
    <section className="flex flex-col items-center min-h-screen px-4 py-16 bg-gray-100">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl md:text-4xl font-bold mb-10 text-[var(--text-color)]"
      >
        Technologies I Work With
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 w-full max-w-5xl">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Card className="hover:scale-105 transition-transform">
              <CardHeader className="flex items-center justify-center pb-2">
                <div className="relative w-16 h-16">
                  <Image
                    src={skill.logo}
                    alt={skill.name}
                    fill
                    sizes="64px"
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </CardHeader>
              <CardContent className="flex flex-col items-center space-y-2">
                <p className="text-sm font-semibold text-[var(--text-color)]">
                  {skill.name}
                </p>
                <Badge variant="secondary">{skill.category}</Badge>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
