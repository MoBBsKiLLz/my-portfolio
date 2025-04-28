"use client";

import { useState } from "react";

export default function MenuToggle() {
  const [menuOpen, setMenuOpen] = useState(false);

  // const handleScrollTo = (id) => {
  //   if (!scrollRef?.current) return;
  
  //   const isMobile = window.innerWidth < 768;
  
  //   if (isMobile) {
  //     // scrollRef points to a container with 400vh height
  //     const sectionOffsets = {
  //       about: window.innerHeight * 2,
  //       skills: window.innerHeight * 3,
  //       contact: window.innerHeight * 4,
  //     };
  
  //     const offset = sectionOffsets[id];
  
  //     if (offset !== undefined) {
  //       scrollRef.current.scrollTo({
  //         top: offset,
  //         behavior: "smooth",
  //       });
  //     }
  //   } else {
  //     const section = document.getElementById(`${id}-anchor`);
  //     if (section) {
  //       const offset = section.offsetTop;
  //       scrollRef.current.scrollTo({
  //         top: offset + window.innerHeight * 1,
  //         behavior: "smooth",
  //       });
  //     }
  //   }
  
  //   setMenuOpen(false);
  // };
  

  return (
    <>
      {/* Menu Button */}
      <header className="fixed top-0 left-0 lg:w-[50%] z-50 py-4 px-4 flex justify-start">
        <button
          className={`w-12 h-12 flex items-center justify-center duration-300 ease-in-out border-none rounded ${
            menuOpen ? "bg-[var(--secondary-color)] border-[var(--primary-color)]" : "bg-[var(--primary-color)]"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            display="block"
            className={`w-10 h-10 fill-current ${
              menuOpen ? "text-[var(--primary-color)]" : "text-[var(--secondary-color)]"
            }`}
          >
            <path d="M0 96C0 78.3 14.3 64 32 64h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zm0 160c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm448 160c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32z" />
          </svg>
        </button>
      </header>

      {/* Overlay Menu */}
      <div
        className={`fixed top-20 left-6 right-6 bg-white lg:w-[30%] shadow-xl rounded-lg p-6 z-40 transition-all duration-300 ease-in-out ${
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
              desc: "Delicately tender with a slice of cheese.",
            },
            {
              id: "skills",
              title: "Skills",
              desc: "Our great selection from the best in town.",
            },
            {
              id: "contact",
              title: "Contact",
              desc: "Want to work together? Let's chat.",
            },
          ].map((item) => (
            <div key={item.id}>
              <button
                onClick={() => {
                  const section = document.getElementById(`${item.id}-anchor`);
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                  setMenuOpen(false);
                }}
                className="text-left w-full"
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
