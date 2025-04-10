import { motion } from "framer-motion";
import { useState } from "react";

export default function LeftColumn() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.div
      initial={{ width: "100%", opacity: 1 }}
      animate={{ width: "50%", opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="flex flex-col justify-between h-full p-8 fixed left-0 top-0 bottom-0 bg-indigo-1000 z-10"
    >
      <div className="flex flex-col justify-between h-full p-8 md:w-[50%] fixed left-0 top-0 bottom-0 z-10">
        {/* Top: Menu Button */}
        <header className="flex justify-between items-center relative z-40">
          <button
            className={`w-12 h-12 flex items-center justify-center duration-300 ease-in-out border-none rounded ${menuOpen ? "bg-orange-400 border-orange-400" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              display= "block"
              className={`w-10 h-10 fill-current ${
                menuOpen ? "text-indigo-950" : "text-orange-400"
              }`}
            >
              <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/>
            </svg>
          </button>
        </header>

        {/* Intro */}
        <div className="flex-1 flex items-center overflow-y-auto relative z-10 text-orange-400">
          <div className="space-y-6">
            <h1 className="text-5xl font-bold leading-snug">
              Interfaces should feel as good as they look
            </h1>
            <p className="text-base">
              I’m Miguel Zepeda, and I turn frontend ideas into pixel-perfect
              reality.
            </p>
            <button className="mt-4 px-6 py-2 bg-indigo-1000 text-orange-400 border border-orange-400 rounded-full hover:bg-orange-400 hover:text-indigo-1000 transition">
              Let’s work together!
            </button>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 space-y-4 relative z-10">
          <p className="text-sm text-gray-300">
            Find me at{" "}
            <a
              href="https://github.com/MoBBsKiLLz"
              className="underline hover:no-underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            , and{" "}
            <a
              href="https://www.linkedin.com/in/miguelzepeda1989/"
              className="underline hover:no-underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            .
          </p>
          <p className="text-sm text-gray-300">
            Download{" "}
            <a
              href="/resume.docx"
              className="underline hover:no-underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              my resume.
            </a>
          </p>
        </footer>

        {/* Overlay Menu */}
        <div
          className={`absolute top-24 left-6 right-6 bg-white shadow-xl rounded-lg p-6 z-20 transition-all duration-300 ease-in-out ${
            menuOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <nav className="space-y-4">
            {[
              {
                title: "About",
                desc: "Delicately tender with a slice of cheese.",
              },
              {
                title: "Clients",
                desc: "Our great selection from the best in town.",
              },
              {
                title: "References",
                desc: "Hear what our happy customers say.",
              },
              { title: "Projects", desc: "Served on a bed of frontend tech." },
              { title: "Contact", desc: "A superb choice to finish the day." },
            ].map((item) => (
              <div key={item.title}>
                <h4 className="text-lg font-semibold">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </nav>
        </div>
      </div>
    </motion.div>
  );
}
