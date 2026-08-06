const projects = [
  {
    title: "Oracle FLEXCUBE Implementation",
    category: "Core Banking",
    description:
      "Worked on Oracle FLEXCUBE modules including UAT, Virtual Account Management, Liquidity Management and Digital Banking.",
    tech: ["Oracle", "FLEXCUBE", "UAT"],
  },
  {
    title: "Income Tax Consultancy",
    category: "Finance",
    description:
      "Prepared income tax returns, tax planning, e-TIN registration and tax compliance services.",
    tech: ["Income Tax", "e-TIN", "Finance"],
  },
  {
    title: "Smart Banking BD",
    category: "YouTube",
    description:
      "Educational YouTube channel focused on banking, finance, loans and taxation.",
    tech: ["YouTube", "SEO", "Content"],
  },
];

export default function Projects() {
  return (
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

      <div className="mt-20 grid gap-8 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-blue-500"
          >
            <p className="text-sm uppercase tracking-widest text-blue-400">
              {project.category}
            </p>

            <h3 className="mt-4 text-2xl font-bold text-white">
              {project.title}
            </h3>

            <p className="mt-5 leading-8 text-slate-400">
              {project.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-blue-500/10 px-4 py-2 text-sm text-blue-400"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}