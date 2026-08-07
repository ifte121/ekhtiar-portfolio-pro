import { skills } from "@/data/skills";


export default function Skills() {
  return (
    <section
      id="skills"
      className="relative bg-[#050816] py-28 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <p className="uppercase tracking-[8px] text-blue-400">
            SKILLS
          </p>

          <h2 className="mt-4 text-5xl font-bold text-white">
            Professional Skills
          </h2>

          <p className="mt-5 text-gray-400">
            My expertise in Banking, Finance and Technology.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">

          {skills.map((skill) => (

            <div
              key={skill.name}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition duration-300 hover:border-blue-500"
            >

              <div className="mb-4 flex justify-between">

                <h3 className="text-lg font-semibold text-white">
                  {skill.name}
                </h3>

                <span className="text-blue-400">
                  {skill.level}%
                </span>

              </div>

              <div className="h-3 overflow-hidden rounded-full bg-slate-800">

                <div
                  className="h-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 transition-all duration-1000"
                  style={{
                    width: `${skill.level}%`,
                  }}
                />

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}