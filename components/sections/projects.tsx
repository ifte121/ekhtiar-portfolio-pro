"use client";

import FadeIn from "../ui/fade-in";

const projects = [
  {
    title: "Oracle FLEXCUBE UAT",
    description:
      "Banking system testing including VAM, OBLM, OBCM and Digital Banking.",
  },
  {
    title: "Income Tax Consultancy",
    description:
      "Professional income tax return preparation and tax planning services.",
  },
  {
    title: "Smart Banking BD",
    description:
      "Educational YouTube platform focused on banking, finance and taxation.",
  },
];

export default function Projects() {
  return (
    <FadeIn>
      <section
        id="projects"
        className="mx-auto max-w-7xl px-6 py-28"
      >
        <div className="text-center">
          <p className="uppercase tracking-[0.3em] text-blue-400">
            Projects
          </p>

          <h2 className="mt-5 text-5xl font-bold text-white">
            Featured Projects
          </h2>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500"
            >
              <div className="text-5xl">🚀</div>

              <h3 className="mt-6 text-2xl font-bold text-white">
                {project.title}
              </h3>

              <p className="mt-5 leading-8 text-slate-400">
                {project.description}
              </p>

              <button className="mt-8 rounded-xl border border-blue-500 px-5 py-2 text-blue-400 transition hover:bg-blue-500 hover:text-white">
                View Project
              </button>
            </div>
          ))}
        </div>
      </section>
    </FadeIn>
  );
}