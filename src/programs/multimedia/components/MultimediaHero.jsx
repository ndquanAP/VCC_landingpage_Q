import React from "react";

// Import images (you'll need to copy these from game_multi/assets)
import img1 from "../assets/img-multi1.png";
import img2 from "../assets/img-multi2.png";
import img3 from "../assets/img-multi3.png";

export default function MultimediaHero() {
  return (
    <section className="relative isolate w-full overflow-hidden bg-gradient-to-br from-[#0b0d2a] via-[#1b0f3a] to-[#0b0d2a] text-white">
      {/* decorative glow */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full bg-fuchsia-600/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-indigo-600/20 blur-3xl" />

      <div className="px-4 md:px-0 py-14 md:py-20">
        <div className="grid w-full md:max-w-none md:mx-0 grid-cols-1 items-center gap-10 md:grid-cols-2">
          {/* LEFT: Copy */}
          <div className="md:pl-16">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-fuchsia-300">
              Program
            </p>

            <h1 className="text-[42px] leading-[1.1] font-extrabold uppercase tracking-wide text-fuchsia-300 md:text-6xl">
              Multimedia
            </h1>

            <p className="mt-8 max-w-xl text-sm md:text-base font-semibold tracking-wide uppercase text-white/90">
              Training goal: graphic design, video,
              <br /> audio, multimedia communication
            </p>

            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 bg-fuchsia-500 rounded-full"></span>
                <span className="text-sm text-white/80">
                  Digital Media Production
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 bg-fuchsia-500 rounded-full"></span>
                <span className="text-sm text-white/80">
                  Video Editing & Animation
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 bg-fuchsia-500 rounded-full"></span>
                <span className="text-sm text-white/80">
                  Sound Design & Audio Engineering
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 bg-fuchsia-500 rounded-full"></span>
                <span className="text-sm text-white/80">
                  Interactive Media Design
                </span>
              </div>
            </div>

            {/* Explore More button with brackets */}
            <div className="mt-10">
              <a
                href="#explore"
                className="relative inline-flex items-center rounded-xl bg-gradient-to-r from-fuchsia-600 to-violet-600 px-7 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(168,85,247,.35)] transition hover:translate-y-[-1px] active:translate-y-0"
              >
                <span className="absolute left-[-18px] top-1/2 h-5 w-[10px] -translate-y-1/2 rounded-sm bg-fuchsia-500" />
                <span className="absolute right-[-18px] top-1/2 h-5 w-[10px] -translate-y-1/2 rounded-sm bg-fuchsia-500" />
                Explore More
              </a>
            </div>
          </div>

          {/* RIGHT: Card stack */}
          <div className="relative h-[340px] md:h-[380px] lg:h-[420px] md:pr-12 lg:pr-16 hidden md:block">
            {/* Left card */}
            <Card
              className="absolute left-0 top-16"
              label="Media Design"
              img={img1}
            />
            {/* Center (raised) card */}
            <Card
              className="absolute left-28 -top-6 scale-110 z-10 shadow-[0_30px_70px_rgba(0,0,0,.5)]"
              label="Film Maker"
              img={img2}
              highlight
            />
            {/* Right card */}
            <Card
              className="absolute left-50 -top-95"
              label="Audio Production"
              img={img3}
            />
          </div>
        </div>
      </div>

      {/* subtle top border gradient */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  );
}

/* Card component */
function Card({ img, label, className = "", highlight = false }) {
  return (
    <div
      className={[
        "group relative h-56 w-44 rounded-3xl border border-white/10 bg-white/5 backdrop-blur",
        "shadow-[0_20px_60px_rgba(0,0,0,.35)]",
        highlight ? "ring-1 ring-fuchsia-400/30" : "",
        className,
      ].join(" ")}
    >
      {/* glow for center card */}
      {highlight && (
        <div className="pointer-events-none absolute -inset-6 rounded-[28px] bg-fuchsia-500/20 blur-xl" />
      )}

      <img
        src={img}
        alt={label}
        className="h-full w-full rounded-3xl object-cover"
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 rounded-b-3xl bg-gradient-to-t from-black/60 to-transparent p-3 text-center text-sm">
        {label}
      </div>
    </div>
  );
}
