"use client";

import FadeIn from "../ui/fade-in";
import Counter from "../ui/counter";

const stats = [
  {
    end: 6,
    suffix: "+",
    label: "Years Experience",
  },
  {
    end: 100,
    suffix: "+",
    label: "Income Tax Files",
  },
  {
    end: 50,
    suffix: "+",
    label: "Banking Projects",
  },
  {
    end: 500,
    suffix: "K+",
    label: "YouTube Views",
  },
];

export default function About() {
  return (
    <FadeIn>
      <section
        id="about"
        className="mx-auto max-w-7xl px-6 py-28"
      >
        <div className="text-center">
          <p className="uppercase tracking-[0.3em] text-blue-400">
            About Me
          </p>

          <h2 className="mt-5 text-5xl font-bold text-white">
            Professional Journey
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-slate-400 leading-8">
            I work as a Banker at United Commercial Bank PLC,
            specialize in Oracle FLEXCUBE, Digital Banking,
            Income Tax Consultancy and create financial
            education through Smart Banking BD.
          </p>
        </div>

        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl transition hover:-translate-y-2 hover:border-blue-500"
            >
              <h3 className="text-5xl font-bold text-blue-500">
                <Counter
                  end={item.end}
                  suffix={item.suffix}
                />
              </h3>

              <p className="mt-4 text-slate-400">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>
    </FadeIn>
  );
}