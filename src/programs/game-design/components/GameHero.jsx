import React from "react";

// Import images (you'll need to copy these from game_multi/assets)
import heroImg from "../assets/HeroBanner.png";

export default function GameHero() {
  return (
    <section className="relative isolate w-full overflow-hidden bg-gradient-to-br from-[#0b0d2a] via-[#1b0f3a] to-[#0b0d2a] text-white">
      {/* decorative glow */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full bg-fuchsia-600/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-indigo-600/20 blur-3xl" />

      <div className="px-4 py-16 md:py-24 md:px-0">
        <div className="grid w-full md:max-w-none md:mx-0 grid-cols-1 items-center gap-10 md:grid-cols-2">
          {/* LEFT: Copy */}
          <div className="md:ml-12">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-fuchsia-300">
              Program
            </p>
            <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">
              <span className="block">Game Design</span>
              <span className="block">and Development</span>
            </h1>

            <ul className="mt-8 space-y-4 text-sm md:text-base">
              <Feature>
                Training goal: game development, programming, 2D/3D game design
              </Feature>
              <Feature>
                Highlighted courses: Unity, game programming, game art
              </Feature>
              <Feature>Intensive semester & capstone project</Feature>
              <Feature>International certification opportunities</Feature>
              <Feature>Industry collaboration and internships</Feature>
            </ul>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#apply"
                className="rounded-2xl bg-fuchsia-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-600/30 transition hover:translate-y-[-1px] hover:bg-fuchsia-500 active:translate-y-0"
              >
                Apply Now
              </a>
              <a
                href="#curriculum"
                className="rounded-2xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
              >
                View Curriculum
              </a>
            </div>
          </div>

          {/* RIGHT: Illustration */}
          <div className="relative mx-auto aspect-[4/3] w-full max-w-[520px] md:max-w-[700px] lg:max-w-[820px] md:ml-auto hidden md:block">
            <div className="absolute right-0 w-100">
              <img
                src={heroImg}
                alt="Game Design and Development"
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* subtle top border gradient */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  );
}

function Feature({ children }) {
  return (
    <li className="group flex items-start gap-3 leading-relaxed">
      <span className="mt-1 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-fuchsia-500/20 ring-1 ring-fuchsia-400/40">
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-fuchsia-300"
        >
          <path
            d="M12 2v20M2 12h20"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span className="text-white/90">{children}</span>
    </li>
  );
}
