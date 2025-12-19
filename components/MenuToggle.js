// components/MenuToggle.js
"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const menuItems = [
  {
    id: "about",
    title: "About",
    desc: "Learn about my journey from BA to Dev.",
  },
  {
    id: "skills",
    title: "Skills",
    desc: "Tools and technologies I use.",
  },
  {
    id: "projects",
    title: "Projects",
    desc: "Preview some of my work.",
  },
  {
    id: "contact",
    title: "Contact",
    desc: "Have a project or idea? Let's chat.",
  },
];

export default function MenuToggle() {
  const [open, setOpen] = useState(false);

  const handleScrollTo = (sectionId) => {
    setOpen(false); // Close menu

    // Dispatch custom event for menu navigation
    window.dispatchEvent(
      new CustomEvent("menuNavigation", { detail: { sectionId } })
    );

    // Get main scroll container and target section
    const mainContainer = document.getElementById("main-scroll-container");
    const targetSection = document.getElementById(sectionId);

    if (mainContainer && targetSection) {
      // Scroll the main container to the section's offset position
      mainContainer.scrollTo({
        top: targetSection.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      {!open && (
        <SheetTrigger asChild>
          <Button
            size="icon"
            className="group fixed top-4 left-4 z-[100] h-10 w-10 rounded-lg bg-[var(--primary-color)] hover:bg-[var(--ring-color)] transition-all duration-200 [&_svg]:!size-8"
            aria-label="Open navigation menu"
          >
            <Menu className="text-[var(--ring-color)] group-hover:text-[var(--primary-color)] transition-colors" />
          </Button>
        </SheetTrigger>
      )}

      <SheetContent side="left" className="w-[300px] sm:w-[400px] bg-white">
        <SheetHeader>
          <SheetTitle className="text-[var(--primary-color)]">Navigation</SheetTitle>
          <SheetDescription className="text-gray-600">Jump to any section</SheetDescription>
        </SheetHeader>

        <nav className="mt-8 space-y-4">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScrollTo(item.id)}
              className="w-full text-left p-4 rounded-lg hover:bg-[var(--secondary-color)] transition-colors"
            >
              <h4 className="text-lg font-semibold text-[var(--primary-color)]">
                {item.title}
              </h4>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </button>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
