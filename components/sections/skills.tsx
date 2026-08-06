const skills = [
  { name: "Oracle FLEXCUBE", level: 95 },
  { name: "Core Banking", level: 92 },
  { name: "Digital Banking", level: 90 },
  { name: "UAT Testing", level: 96 },
  { name: "Income Tax Consultancy", level: 94 },
  { name: "Next.js", level: 82 },
  { name: "React", level: 80 },
  { name: "YouTube SEO", level: 90 },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-7xl px-6 py-28"
    >
      <div className="text-center">
        <p className="uppercase tracking-[0.3em] text-blue-400">
          Skills
        </p>

        <h2 className="mt-5 text-5xl font-bold text-white">
          Professional Skills
        </h2>
      </div>

      <div className="mt-20 grid gap-8 md:grid-cols-2">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="mb-3 flex justify-between">
              <span className="font-medium text-white">
                {skill.name}
              </span>

              <span className="text-blue-400">
                {skill.level}%
              </span>
            </div>

            <div className="h-3 rounded-full bg-slate-700">
              <div
                className="h-3 rounded-full bg-blue-500"
                style={{
                  width: `${skill.level}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}