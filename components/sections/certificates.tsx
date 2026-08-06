"use client";

import FadeIn from "../ui/fade-in";

const certificates = [
  {
    title: "Oracle FLEXCUBE Training",
    issuer: "Oracle Banking",
    year: "2026",
    icon: "🏆",
  },
  {
    title: "Core Banking Operations",
    issuer: "United Commercial Bank PLC",
    year: "2026",
    icon: "🏦",
  },
  {
    title: "Income Tax Consultancy",
    issuer: "Professional Practice",
    year: "2025",
    icon: "💰",
  },
  {
    title: "Digital Banking",
    issuer: "Banking Technology",
    year: "2026",
    icon: "💳",
  },
  {
    title: "Financial Technology",
    issuer: "Professional Development",
    year: "2025",
    icon: "📊",
  },
  {
    title: "YouTube Creator",
    issuer: "Smart Banking BD",
    year: "2026",
    icon: "▶️",
  },
];

export default function Certificates() {
  return (
    <FadeIn>
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
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {certificates.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500"
            >
              <div className="text-6xl">{item.icon}</div>

              <h3 className="mt-6 text-xl font-bold text-white">
                {item.title}
              </h3>

              <p className="mt-3 text-blue-400">
                {item.issuer}
              </p>

              <p className="mt-2 text-slate-400">
                {item.year}
              </p>

              <button className="mt-6 rounded-xl border border-blue-500 px-5 py-2 text-blue-400 transition hover:bg-blue-500 hover:text-white">
                View Certificate
              </button>
            </div>
          ))}
        </div>
      </section>
    </FadeIn>
  );
}