"use client";

import FadeIn from "../ui/fade-in";

const experiences = [
  {
    year: "Present",
    title: "United Commercial Bank PLC",
    role: "Officer",
    description:
      "Working on Oracle FLEXCUBE, Virtual Account Management (VAM), Liquidity Management (OBLM), UAT Testing and Digital Banking.",
  },
  {
    year: "Professional",
    title: "Income Tax Consultant",
    role: "Tax Consultancy",
    description:
      "Preparing income tax returns, tax planning, e-TIN registration and financial consultancy services.",
  },
  {
    year: "Creator",
    title: "Smart Banking BD",
    role: "YouTube Creator",
    description:
      "Creating educational videos on banking, finance, loans, taxation and digital banking.",
  },
];

export default function Experience() {
  return (
    <FadeIn>
      <section
        id="experience"
        className="mx-auto max-w-7xl px-6 py-28"
      >
        <div className="text-center">

          <p className="uppercase tracking-[0.3em] text-blue-400">
            Experience
          </p>

          <h2 className="mt-5 text-5xl font-bold text-white">
            Professional Journey
          </h2>

        </div>

        <div className="relative mt-20">

          <div className="absolute left-6 top-0 h-full w-[2px] bg-blue-500/30" />

          <div className="space-y-14">

            {experiences.map((item) => (

              <div
                key={item.title}
                className="relative pl-20"
              >

                <div className="absolute left-2 top-2 h-8 w-8 rounded-full border-4 border-[#050816] bg-blue-500" />

                <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-blue-500">

                  <span className="text-sm uppercase tracking-widest text-blue-400">
                    {item.year}
                  </span>

                  <h3 className="mt-3 text-3xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 font-medium text-blue-400">
                    {item.role}
                  </p>

                  <p className="mt-5 leading-8 text-slate-400">
                    {item.description}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>
    </FadeIn>
  );
}