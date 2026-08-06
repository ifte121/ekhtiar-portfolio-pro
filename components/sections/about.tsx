"use client";

import FadeIn from "../ui/fade-in";

const stats = [
  { value: "6+", label: "Years Experience" },
  { value: "100+", label: "Income Tax Files" },
  { value: "50+", label: "Banking Projects" },
  { value: "500K+", label: "YouTube Views" },
];

export default function About() {
  return (
    <FadeIn>
      <section
        id="about"
        className="mx-auto max-w-7xl px-6 py-28"
      >
        <div className="grid items-center gap-16 lg:grid-cols-2">

          <div>
            <p className="uppercase tracking-[0.3em] text-blue-400">
              About Me
            </p>

            <h2 className="mt-5 text-5xl font-bold text-white leading-tight">
              Banking Professional &
              <span className="text-blue-500">
                {" "}Financial Consultant
              </span>
            </h2>

            <p className="mt-8 leading-8 text-slate-400">
              I am currently working at United Commercial Bank PLC,
              specializing in Oracle FLEXCUBE, Digital Banking,
              Banking Operations, UAT Testing and Banking Technology.
            </p>

            <p className="mt-6 leading-8 text-slate-400">
              Alongside my banking career, I provide Income Tax
              Consultancy services and create financial education
              content through Smart Banking BD.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-blue-500"
              >
                <h3 className="text-5xl font-bold text-blue-500">
                  {item.value}
                </h3>

                <p className="mt-3 text-slate-400">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </FadeIn>
  );
}