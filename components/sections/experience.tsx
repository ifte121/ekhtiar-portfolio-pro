"use client";

import { experiences } from "@/data/experience";
import FadeIn from "../ui/fade-in";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative bg-[#050816] py-28 px-6"
    >
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <FadeIn>
          <div className="mb-16 text-center">
            <p className="uppercase tracking-[8px] text-blue-400">
              EXPERIENCE
            </p>

            <h2 className="mt-4 text-5xl font-bold text-white">
              Professional Experience
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-gray-400">
              My professional journey in Banking, Oracle FLEXCUBE,
              Income Tax Consultancy and Financial Education.
            </p>
          </div>
        </FadeIn>

        {/* Timeline */}
        <div className="relative border-l border-blue-500/30 pl-8">
          {experiences.map((item, index) => (
            <FadeIn key={index}>
              <div className="relative mb-12">
                {/* Timeline Dot */}
                <div className="absolute -left-[42px] top-2 h-5 w-5 rounded-full border-4 border-[#050816] bg-blue-500"></div>

                {/* Card */}
                <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-[0_0_35px_rgba(59,130,246,0.35)]">
                  <span className="rounded-full bg-blue-600/20 px-4 py-1 text-sm font-medium text-blue-300">
                    {item.duration}
                  </span>

                  <h3 className="mt-5 text-2xl font-bold text-white">
                    {item.position}
                  </h3>

                  <h4 className="mt-2 text-lg text-blue-400">
                    {item.company}
                  </h4>

                  <p className="mt-5 leading-8 text-gray-400">
                    {item.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}