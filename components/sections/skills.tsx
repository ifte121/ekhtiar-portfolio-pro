"use client";

import FadeIn from "../ui/fade-in";

const skills = [
  { name: "Oracle FLEXCUBE", level: 95 },
  { name: "Digital Banking", level: 90 },
  { name: "UAT Testing", level: 92 },
  { name: "Income Tax", level: 94 },
  { name: "Financial Consulting", level: 90 },
  { name: "YouTube Content Creation", level: 88 },
];

export default function Skills() {
  return (
    <FadeIn>
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

        <div className="mt-20 space-y-8">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="mb-3 flex justify-between">
                <span className="font-semibold text-white">
                  {skill.name}
                </span>

                <span className="text-blue-400">
                  {skill.level}%
                </span>
              </div>

              <div className="h-3 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </FadeIn>
  );
}