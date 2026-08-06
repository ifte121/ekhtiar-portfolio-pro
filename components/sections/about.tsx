export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-7xl px-6 py-28"
    >
      <div className="grid gap-16 lg:grid-cols-2 items-center">

        <div>
          <p className="text-blue-400 uppercase tracking-[0.3em]">
            About Me
          </p>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-white">
            Banking Professional &
            <span className="text-blue-500"> Financial Consultant</span>
          </h2>

          <p className="mt-8 text-slate-400 leading-8">
            I am currently working at United Commercial Bank PLC
            with experience in Oracle FLEXCUBE, Digital Banking,
            UAT, Banking Operations and Financial Technology.
          </p>

          <p className="mt-6 text-slate-400 leading-8">
            Besides my banking career, I also work as an
            Income Tax Consultant and create educational
            content on YouTube to help people understand
            banking and finance.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10">
          <div className="grid grid-cols-2 gap-6">

            <div>
              <h3 className="text-5xl font-bold text-blue-500">
                6+
              </h3>
              <p className="mt-2 text-slate-400">
                Years Experience
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-blue-500">
                100+
              </h3>
              <p className="mt-2 text-slate-400">
                Tax Files
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-blue-500">
                50+
              </h3>
              <p className="mt-2 text-slate-400">
                Banking Projects
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-blue-500">
                YouTube
              </h3>
              <p className="mt-2 text-slate-400">
                Financial Education
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}