const certificates = [
  {
    title: "Oracle FLEXCUBE Training",
    issuer: "Oracle Banking",
    year: "2026",
  },
  {
    title: "Core Banking Operations",
    issuer: "United Commercial Bank PLC",
    year: "2026",
  },
  {
    title: "Income Tax Consultancy",
    issuer: "Professional Practice",
    year: "2025",
  },
  {
    title: "Digital Banking",
    issuer: "Banking Technology",
    year: "2026",
  },
  {
    title: "Financial Technology",
    issuer: "Professional Development",
    year: "2025",
  },
  {
    title: "YouTube Content Creator",
    issuer: "Smart Banking BD",
    year: "2026",
  },
];

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="mx-auto max-w-7xl px-6 py-28"
    >
      <div className="text-center">
        <p className="uppercase tracking-[0.3em] text-blue-400">
          Certificates
        </p>

        <h2 className="mt-5 text-5xl font-bold text-white">
          Certifications & Achievements
        </h2>

        <p className="mt-6 mx-auto max-w-2xl text-slate-400">
          Professional certifications, banking training and career achievements.
        </p>
      </div>

      <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {certificates.map((item) => (
          <div
            key={item.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500"
          >
            <div className="text-5xl">🏆</div>

            <h3 className="mt-6 text-2xl font-bold text-white">
              {item.title}
            </h3>

            <p className="mt-4 text-blue-400">
              {item.issuer}
            </p>

            <p className="mt-2 text-slate-400">
              {item.year}
            </p>

            <button className="mt-8 rounded-xl border border-blue-500 px-5 py-2 text-blue-400 transition hover:bg-blue-500 hover:text-white">
              View Certificate
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}