// sections/ProjectsSection.js
"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import ProjectCarousel from "../ProjectCarousel";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function ProjectsSection() {
  const scrollAreaRef = useRef(null);

  useEffect(() => {
    const viewport = scrollAreaRef.current?.querySelector("[data-radix-scroll-area-viewport]");
    if (!viewport) return;

    // Only reset when navigating via menu
    const handleMenuNavigation = (event) => {
      if (event.detail.sectionId === "projects") {
        // Smooth scroll to top when using menu
        viewport.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }
    };

    window.addEventListener("menuNavigation", handleMenuNavigation);

    return () => {
      window.removeEventListener("menuNavigation", handleMenuNavigation);
    };
  }, []);

  return (
    <div ref={scrollAreaRef} className="w-full h-full flex items-start justify-center bg-white py-8">
      {/* Shadcn ScrollArea for inner content scrolling */}
      <ScrollArea
        className="max-w-4xl w-full h-[calc(100vh-4rem)] rounded-xl shadow-inner"
        style={{ overscrollBehavior: "contain" }}
      >
        <div className="p-4 md:p-6 space-y-6 md:space-y-10 bg-white">
          <h1 className="text-[var(--text-color)] text-2xl md:text-4xl font-semibold">
            OpenPortal 2.0
          </h1>

          {/* 1. Overview */}
          <section>
            <h2 className="text-[var(--text-color)] text-xl md:text-2xl font-semibold mb-2">
              Project Overview
            </h2>
            <p className="text-[var(--text-color)]">
              A multi-user, role-based management portal built for a self-storage
              software company. It allows System Admins, Account Managers, and
              Facility Managers to manage users across regions, accounts, and
              facilities.
            </p>
          </section>

          {/* 2. Screenshots Carousel */}
          <section>
            <h2 className="text-[var(--text-color)] text-xl md:text-2xl font-semibold mb-4">
              Application Screenshots
            </h2>
            <ProjectCarousel />
          </section>

          {/* 3. Design Diagram */}
          <section>
            <h2 className="text-[var(--text-color)] text-xl md:text-2xl font-semibold mb-2">
              Architecture Diagram
            </h2>
            <div className="relative w-full h-64 flex-shrink-0">
              <Image
                src="/images/openportal/Architecture.png"
                alt="OpenPortal Architecture Diagram"
                fill
                className="object-contain"
              />
            </div>
          </section>

          {/* 4. Code Snippet */}
          <section>
            <h2 className="text-[var(--text-color)] text-xl md:text-2xl font-semibold mb-2">
              Key Implementation Snippet
            </h2>
            <div className="w-full overflow-x-auto rounded-md bg-[#1e1e1e] flex-shrink-0">
              <SyntaxHighlighter
                language="javascript"
                style={atomDark}
                customStyle={{
                  minWidth: "100%",
                  background: "transparent",
                  padding: "1rem",
                  fontSize: "0.875rem",
                }}
                wrapLongLines
              >
                {`const user = await prisma.users.findUnique({
  where: { email: session.user.email },
  include: {
    user_account: { include: { accounts: true } },
    user_facility: { include: { facilities: true } },
  },
});`}
              </SyntaxHighlighter>
            </div>
          </section>

          {/* 5. Supporting Artifacts */}
          <section>
            <h2 className="text-[var(--text-color)] text-xl md:text-2xl font-semibold mb-2">
              Supporting Artifacts
            </h2>
            <ul className="list-disc pl-5 text-[var(--text-color)]">
              <li>
                <a
                  href="/images/ER Diagram.png"
                  download
                  className="underline text-indigo-600 hover:text-indigo-800 transition-colors"
                >
                  ERD Diagram
                </a>
              </li>
              <li>
                <a
                  href="/images/User Flow.png"
                  download
                  className="underline text-indigo-600 hover:text-indigo-800 transition-colors"
                >
                  User Flow Diagram
                </a>
              </li>
            </ul>
          </section>

          {/* 6. How to Run */}
          <section>
            <h2 className="text-[var(--text-color)] text-xl md:text-2xl font-semibold mb-2">
              How to Run
            </h2>
            <ol className="text-[var(--text-color)] list-decimal pl-5 space-y-1">
              <li>
                Clone the repo from GitHub:{" "}
                <code className="bg-gray-100 px-2 py-1 rounded text-sm">git clone ...</code>
              </li>
              <li>
                Install dependencies:{" "}
                <code className="bg-gray-100 px-2 py-1 rounded text-sm">npm install</code>
              </li>
              <li>
                Start dev server:{" "}
                <code className="bg-gray-100 px-2 py-1 rounded text-sm">npm run dev</code>
              </li>
              <li>
                Open{" "}
                <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                  http://localhost:3000
                </code>{" "}
                in your browser
              </li>
            </ol>
          </section>
        </div>
      </ScrollArea>
    </div>
  );
}
