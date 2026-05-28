import React, { useState } from "react";

export default function Collection() {
  const items = [
    { id: 1, title: "Digital Art Portfolio", category: "Graphic Design" },
    { id: 2, title: "Animation Showcase", category: "Motion Graphics" },
    { id: 3, title: "Interactive Media", category: "UI/UX Design" },
    { id: 4, title: "Video Production", category: "Film Making" },
    { id: 5, title: "Audio Engineering", category: "Sound Design" },
  ];

  const [active, setActive] = useState(2); // center card by default (index 2)
  const CARD_W = 260; // card width (px)
  const OVERLAP = 100; // overlap amount

  return (
    <section className="relative isolate w-full overflow-hidden bg-gradient-to-br from-[#0b0d2a] via-[#1a0f38] to-[#0b0d2a] text-white">
      <div className="px-4 md:px-0 py-14 md:py-20">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-sm font-medium text-white/70">
            Student{" "}
            <span className="bg-gradient-to-r from-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
              Projects
            </span>
          </p>
          <h2 className="mt-3 text-4xl md:text-6xl font-extrabold tracking-tight text-white">
            Our Collection
          </h2>
          <p className="mt-4 text-white/60 max-w-2xl mx-auto">
            Explore outstanding projects created by our multimedia students,
            showcasing creativity and technical excellence.
          </p>
        </div>

        {/* Coverflow track */}
        <div className="relative mx-auto mt-12 h-[360px] md:h-[420px] max-w-[1100px]">
          {items.map((item, i) => {
            const offset = i - active; // relative position to center card
            const translateX = offset * (CARD_W - OVERLAP);
            const scale = 1 - Math.min(Math.abs(offset) * 0.12, 0.36);
            const z = 50 - Math.abs(offset); // center card on top
            const opacity = 1 - Math.min(Math.abs(offset) * 0.15, 0.45);

            const isCenter = offset === 0;

            return (
              <button
                key={item.id}
                onClick={() => setActive(i)}
                className="absolute left-1/2 top-1/2 h-[320px] w-[260px] -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-out focus:outline-none"
                style={{
                  transform: `translate(-50%, -50%) translateX(${translateX}px) scale(${scale})`,
                  zIndex: z,
                  opacity,
                }}
              >
                <div
                  className={[
                    "group relative h-full w-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm shadow-[0_20px_60px_rgba(0,0,0,.4)]",
                    isCenter ? "ring-1 ring-fuchsia-400/40" : "",
                  ].join(" ")}
                >
                  {/* Project placeholder image */}
                  <div className="relative h-2/3 w-full bg-gradient-to-br from-fuchsia-500/20 to-indigo-500/20">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-16 w-16 rounded-full bg-white/20 flex items-center justify-center">
                        <div className="h-8 w-8 rounded-full bg-fuchsia-400/60"></div>
                      </div>
                    </div>
                    {/* Category badge */}
                    <div className="absolute top-4 left-4 px-2 py-1 bg-black/30 backdrop-blur-sm rounded-full text-xs text-white/80">
                      {item.category}
                    </div>
                  </div>

                  {/* Project info */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 pt-12">
                    <h3 className="font-semibold text-white text-sm">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs text-white/60">
                      Student Project Showcase
                    </p>

                    {isCenter && (
                      <div className="mt-3 opacity-100 transition-opacity duration-300">
                        <button className="text-xs bg-fuchsia-500/20 hover:bg-fuchsia-500/30 px-3 py-1 rounded-full text-fuchsia-300 transition-colors">
                          View Details
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Glow effect for center card */}
                  {isCenter && (
                    <div className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-fuchsia-500/10 blur-xl" />
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Navigation dots */}
        <div className="mt-8 flex justify-center gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={[
                "h-2 w-2 rounded-full transition-all duration-300",
                i === active
                  ? "bg-fuchsia-400 w-6"
                  : "bg-white/30 hover:bg-white/50",
              ].join(" ")}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
