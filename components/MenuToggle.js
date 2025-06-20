"use client";

import { useState } from "react";

export default function MenuToggle({ includeMobileIntro = false }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScrollTo = (sectionId) => {
    // Close menu immediately
    setMenuOpen(false);
    
    const container = document.getElementById('main-scroll-container');
    if (!container) {
      console.warn('Scroll container not found');
      return;
    }

    const viewportHeight = window.innerHeight;
    const isMobile = window.innerWidth < 768; // md breakpoint
    
    // Add small delay to ensure menu close animation doesn't interfere
    setTimeout(() => {
      if (isMobile) {
        // Mobile: Use empirically tested positions that actually work
        // These values are based on testing where each section is optimally visible
        let mobileSectionPositions;
        
        if (includeMobileIntro) {
          // With intro - adjust these values if you have the intro enabled
          // You'll need to test and provide the scroll positions for this scenario
          mobileSectionPositions = {
            hero: viewportHeight * 0.88,     // Estimated (740/844 ≈ 0.88)
            about: viewportHeight * 2.54,    // (1440+700)/844 ≈ 2.54
            skills: viewportHeight * 3.37,   // (2140+700)/844 ≈ 3.37
            projects: viewportHeight * 4.19, // (2840+700)/844 ≈ 4.19
            contact: viewportHeight * 5.02   // (3540+700)/844 ≈ 5.02
          };
        } else {
          // Without intro - converted from your exact tested positions (viewport was 844px)
          mobileSectionPositions = {
            hero: viewportHeight * 0.88,     // 740/844 ≈ 0.88
            about: viewportHeight * 1.71,    // 1440/844 ≈ 1.71
            skills: viewportHeight * 2.54,   // 2140/844 ≈ 2.54
            projects: viewportHeight * 3.37, // 2840/844 ≈ 3.37
            contact: viewportHeight * 4.19   // 3540/844 ≈ 4.19
          };
        }
        
        const targetPosition = mobileSectionPositions[sectionId];
        
        if (targetPosition !== undefined) {
          container.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
          
          // Special handling for projects section on mobile
          if (sectionId === 'projects') {
            setTimeout(() => {
              const projectsScrollContainer = container.querySelector('#projects .overflow-y-auto');
              if (projectsScrollContainer) {
                projectsScrollContainer.scrollTo({ 
                  top: 0, 
                  behavior: 'smooth' 
                });
              }
            }, 500);
          }
        } else {
          console.warn(`Mobile section "${sectionId}" not found`);
        }
      } else {
        // Desktop scroll calculations remain the same
        const sectionPositions = {
          hero: 0,
          about: viewportHeight * 1,
          skills: viewportHeight * 2, 
          projects: viewportHeight * 3,
          contact: viewportHeight * 4
        };

        const targetPosition = sectionPositions[sectionId];
        
        if (targetPosition !== undefined) {
          container.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
          
          // Special handling for projects section - reset internal scroll to top
          if (sectionId === 'projects') {
            setTimeout(() => {
              const projectsScrollContainer = container.querySelector('#projects .overflow-y-auto');
              if (projectsScrollContainer) {
                projectsScrollContainer.scrollTo({ 
                  top: 0, 
                  behavior: 'smooth' 
                });
              }
            }, 500);
          }
        } else {
          console.warn(`Desktop section "${sectionId}" not found`);
        }
      }
    }, 100); // Small delay for menu close
  };

  return (
    <>
      {/* Menu Button */}
      <header className="fixed top-0 left-0 lg:w-[50%] z-50 py-4 px-4 flex justify-start">
        <button
          className={`w-12 h-12 flex items-center justify-center duration-300 ease-in-out border-none rounded ${
            menuOpen ? "bg-[var(--ring-color)] border-[var(--primary-color)]" : "bg-[var(--primary-color)]"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            display="block"
            className={`w-10 h-10 fill-current ${
              menuOpen ? "text-[var(--primary-color)]" : "text-[var(--ring-color)]"
            }`}
          >
            <path d="M0 96C0 78.3 14.3 64 32 64h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zm0 160c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm448 160c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32z" />
          </svg>
        </button>
      </header>

      {/* Overlay Menu */}
      <div
        className={`fixed top-20 left-6 right-6 bg-white lg:w-[20%] shadow-xl rounded-lg p-6 z-40 transition-all duration-300 ease-in-out ${
          menuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <nav className="space-y-4">
          {[
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
            }            
          ].map((item) => (
            <div key={item.id}>
              <button
                onClick={() => handleScrollTo(item.id)}
                className="text-left w-full hover:bg-[var(--secondary-color)] rounded px-2 py-1"
              >
                <h4 className="text-lg font-semibold text-[var(--primary-color)]">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </button>
            </div>
          ))}
        </nav>
      </div>
    </>
  );
}