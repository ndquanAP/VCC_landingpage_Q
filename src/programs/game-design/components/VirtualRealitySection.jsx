import React from "react";

// Import images (you'll need to copy these from game_multi/assets)
import virtualImg from "../assets/img-decor_virtual.png";
import arrowImg from "../assets/img-decor_arrow.png";

export default function VirtualRealitySection() {
  return (
    <section className="relative isolate w-full overflow-hidden bg-gradient-to-br from-[#0b0d2a] via-[#1a0f38] to-[#0b0d2a] text-white">
      {/* decorative blobs */}
      <div className="pointer-events-none absolute -top-32 left-10 h-40 w-40 rotate-12 rounded-3xl bg-fuchsia-600/20 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-32 right-10 h-44 w-44 -rotate-12 rounded-3xl bg-indigo-600/25 blur-2xl" />

      <div className="pointer-events-none absolute top-10 w-[200px]">
        <img src={arrowImg} alt="Decorative arrow" />
      </div>

      {/* outer paddings: full width at md+ */}
      <div className="px-4 md:px-24 py-10 md:py-16">
        {/* CARD */}
        <div className="relative mx-4 md:mx-10 lg:mx-16 overflow-hidden rounded-[36px] bg-white/90 text-[#2f1d67] shadow-[0_10px_40px_rgba(0,0,0,.25)]">
          {/* BACKGROUND */}
          <div className="absolute w-3/4 left-0 bottom-0 lg:block hidden">
            <img src={virtualImg} alt="Virtual reality background" />
          </div>

          {/* CONTENT GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 p-8 lg:p-16">
            {/* LEFT art area */}
            <div className="relative order-2 lg:order-1 min-h-[260px] lg:min-h-[360px]">
              {/* Content can be added here */}
            </div>

            {/* RIGHT text area */}
            <div className="order-1 lg:order-2 flex flex-col justify-center lg:mb-48">
              <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-[#3a2585]">
                Virtual Reality <br /> Game Development
              </h2>
              <p className="mt-4 max-w-lg text-sm lg:text-base text-[#5a48a8]">
                Experience cutting-edge VR technology and learn to create
                immersive gaming experiences. Our program covers VR development
                frameworks, 3D modeling, and interactive design principles.
              </p>
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 bg-fuchsia-500 rounded-full"></span>
                  <span className="text-sm text-[#5a48a8]">
                    Unity 3D & Unreal Engine
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 bg-fuchsia-500 rounded-full"></span>
                  <span className="text-sm text-[#5a48a8]">
                    Oculus & HTC Vive Development
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 bg-fuchsia-500 rounded-full"></span>
                  <span className="text-sm text-[#5a48a8]">
                    3D Modeling & Animation
                  </span>
                </div>
              </div>
              <a
                href="#curriculum"
                className="mt-6 inline-flex w-max items-center rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:translate-y-[-1px] active:translate-y-0"
              >
                View Curriculum
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
