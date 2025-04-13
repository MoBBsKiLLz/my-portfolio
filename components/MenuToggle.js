"use client";

import { useState } from "react";

export default function MenuToggle({ scrollRef }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Menu Button */}
      <header className="fixed top-0 left-0 lg:w-[50%] z-50 py-4 px-4 flex justify-start">
        <button
          className={`w-12 h-12 flex items-center justify-center duration-300 ease-in-out border-none rounded ${
            menuOpen ? "bg-orange-400 border-indigo-950" : "bg-indigo-950"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            display="block"
            className={`w-10 h-10 fill-current ${
              menuOpen ? "text-indigo-950" : "text-orange-400"
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
          ].map((item) => (
            <div key={item.id}>
              <button
                onClick={() => {
                  const section = document.getElementById(item.id);
                  if (section && scrollRef?.current) {
                    scrollRef.current.scrollTo({
                      top: section.offsetTop,
                      behavior: "smooth",
                    });
                  }
                  setMenuOpen(false);
                }}
                className="text-left w-full"
              >
                <h4 className="text-lg font-semibold">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </button>
            </div>
          ))}
        </nav>
      </div>
    </>
  );
}
