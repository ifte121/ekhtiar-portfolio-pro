import Image from "next/image";

const projects = [
  {
    title: "Oracle FLEXCUBE Implementation",
    category: "Banking",
    description:
      "Worked on Oracle FLEXCUBE Digital Banking, OBVAM, OBLM, OBCM, UAT Testing and Core Banking implementation.",
    image: "/project1.jpg",
    tech: ["Oracle", "FLEXCUBE", "SQL", "UAT"],
    demo: "#",
    details: "#",
  },
  {
    title: "Income Tax Consultancy",
    category: "Tax",
    description:
      "Professional income tax return preparation, e-TIN registration, tax planning and compliance services.",
    image: "/project2.jpg",
    tech: ["Income Tax", "Finance", "e-TIN"],
    demo: "#",
    details: "#",
  },
  {
    title: "Smart Banking BD",
    category: "YouTube",
    description:
      "Educational YouTube channel focused on Banking, Loans, Finance and Digital Banking.",
    image: "/project3.jpg",
    tech: ["YouTube", "SEO", "Finance"],
    demo: "#",
    details: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-28 px-6 bg-[#050816]"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <p className="uppercase tracking-[8px] text-blue-400">
            PROJECTS
          </p>

          <h2 className="mt-4 text-5xl font-bold text-white">
            Featured Projects
          </h2>

          <p className="mt-5 text-gray-400 max-w-2xl mx-auto">
            Professional Banking, Oracle FLEXCUBE, Tax Consultancy and
            Financial Education Projects.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {projects.map((project) => (

            <div
              key={project.title}
              className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-blue-500"
            >

              {/* Image */}
              <div className="relative h-64 w-full overflow-hidden">

                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-700 hover:scale-110"
                />

              </div>

              {/* Content */}
              <div className="p-6">

                <span className="rounded-full bg-blue-600/20 px-3 py-1 text-sm text-blue-400">
                  {project.category}
                </span>

                <h3 className="mt-5 text-2xl font-bold text-white">
                  {project.title}
                </h3>

                <p className="mt-4 text-gray-400 leading-7">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mt-6 flex flex-wrap gap-2">

                  {project.tech.map((tech) => (

                    <span
                      key={tech}
                      className="rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm text-blue-300"
                    >
                      {tech}
                    </span>

                  ))}

                </div>

                {/* Buttons */}
                <div className="mt-8 flex gap-4">

                  <a
                    href={project.demo}
                    className="flex-1 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 py-3 text-center font-semibold text-white transition hover:scale-105"
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.details}
                    className="flex-1 rounded-xl border border-white/20 py-3 text-center font-semibold text-white transition hover:bg-white/10"
                  >
                    Details
                  </a>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}