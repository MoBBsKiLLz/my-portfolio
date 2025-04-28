import { motion } from "framer-motion";

export default function LeftColumn() {
  return (
    <motion.div
      initial={{ width: "100%", opacity: 1 }}
      animate={{ width: "50%", opacity: 2 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="flex flex-col justify-between h-full p-8 lg:fixed left-0 top-0 bottom-0 bg-[var(--primary-color)] z-10"
    >
      <div className="flex flex-col justify-between h-full p-8 lg:w-[50%] fixed left-0 top-0 bottom-0 z-10">
        {/* Intro */}
        <div className="flex-1 flex items-center overflow-y-auto relative z-10 text-[var(--secondary-color)]">
          <div className="space-y-6">
            <h1 className="text-5xl font-bold leading-snug">
              Interfaces should feel as good as they look
            </h1>
            <p className="text-base">
              I’m Miguel Zepeda, and I turn frontend ideas into pixel-perfect
              reality.
            </p>
            <button
              onClick={() => {
                const section = document.getElementById("contact-anchor");
                section?.scrollIntoView({ behavior: "smooth" });
              }}
              className="mt-4 px-6 py-2 bg-[var(--primary-color)] text-[var(--ring-color)] border border-[var(--ring-color)] rounded-full hover:bg-[var(--ring-color)] hover:text-[var(--primary-color)] transition"
            >
              Let’s work together!
            </button>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 space-y-4 relative z-10">
          <p className="text-sm text-[var(--tertiary-color)]">
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
          <p className="text-sm text-[var(--tertiary-color)]">
            Download{" "}
            <a
              href="/Resume.docx"
              download
              className="underline hover:no-underline"
              rel="noopener noreferrer"
            >
              my resume.
            </a>
          </p>
        </footer>
      </div>
    </motion.div>
  );
}
