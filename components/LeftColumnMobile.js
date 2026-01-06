export default function LeftColumnMobile() {
  return (
    <div className="bg-[var(--primary-color)] text-[var(--secondary-color)] flex flex-col justify-between min-h-screen min-w-screen px-8 py-8">
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
              const section = document.getElementById("contact");
              section?.scrollIntoView({ behavior: "smooth" });
            }}
            className="mt-8 px-6 py-3 bg-[var(--primary-color)] text-[var(--ring-color)] border border-[var(--ring-color)] rounded-full hover:bg-[var(--ring-color)] hover:text-[var(--primary-color)] transition"
          >
            <p className="text-base">Let&apos;s work together!</p>
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="mb-24 space-y-4 relative z-10">
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
            className="underline hover:no-underline"
            download
            rel="noopener noreferrer"
          >
            my resume.
          </a>
        </p>
      </footer>
    </div>
  );
}
