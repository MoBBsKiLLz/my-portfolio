import { github } from "react-syntax-highlighter/dist/esm/styles/hljs";

// data/projects.js
export const projects = [
  {
    id: 1,
    title: "OpenPortal 2.0",
    description: "A multi-user, role-based management portal built for a self-storage software company. Features include user management across regions, accounts, and facilities with granular permissions for System Admins, Account Managers, and Facility Managers.",
    image: "/images/openportal/Invite Management.png",
    technologies: ["Next.js", "Prisma", "shadcn/ui", "NextAuth"],
    liveUrl: "https://openportal2-2fd44b16b864.herokuapp.com/",
  },
  {
    id: 2,
    title: "NBA Analytics Dashboard",
    description: "An interactive analytics platform for NBA statistics and team performance metrics. Features real-time data visualization, team comparisons, and advanced statistical analysis with dynamic charts and filtering capabilities.",
    image: "/images/nba-analytics/screenshot.png",
    technologies: ["React", "shadcn/ui", "NBA API", "Tailwind CSS"],
    liveUrl: "https://variance-ebon.vercel.app/",
    githubUrl: "https://github.com/MoBBsKiLLz/Variance"
  },
];