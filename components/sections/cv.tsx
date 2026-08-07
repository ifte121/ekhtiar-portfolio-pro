export default function CV() {
  return (
    <section
      id="cv"
      className="relative py-28 px-6 bg-[#050816]"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-14">
          <p className="uppercase tracking-[8px] text-blue-400">
            RESUME
          </p>

          <h2 className="text-5xl font-bold text-white mt-4">
            My Professional Resume
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            View or download my latest CV to learn more about my
            banking experience, Oracle FLEXCUBE projects,
            tax consultancy and professional achievements.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden">

          <iframe
            src="/cv.pdf"
            className="w-full h-[900px]"
          />

        </div>

        <div className="flex justify-center mt-10">

          <a
            href="/cv.pdf"
            download
            className="rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-10 py-4 text-white text-lg font-semibold hover:scale-105 transition duration-300"
          >
            Download CV
          </a>

        </div>

      </div>
    </section>
  );
}