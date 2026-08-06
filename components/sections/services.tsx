"use client";

import FadeIn from "../ui/fade-in";

const services = [
  {
    icon: "🏦",
    title: "Banking Solutions",
    description:
      "Oracle FLEXCUBE, Digital Banking, UAT Testing, Banking Operations and Financial Technology.",
  },
  {
    icon: "💰",
    title: "Income Tax Consultancy",
    description:
      "Income Tax Return, e-TIN Registration, Tax Planning and Tax Compliance.",
  },
  {
    icon: "📺",
    title: "Financial Education",
    description:
      "Creating Banking, Loan and Finance related educational videos through Smart Banking BD.",
  },
];

export default function Services() {
  return (
    <FadeIn>
      <section
        id="services"
        className="mx-auto max-w-7xl px-6 py-28"
      >
        <div className="text-center">
          <p className="uppercase tracking-[0.3em] text-blue-400">
            Services
          </p>

          <h2 className="mt-5 text-5xl font-bold text-white">
            What I Do
          </h2>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500"
            >
              <div className="text-5xl">
                {service.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-white">
                {service.title}
              </h3>

              <p className="mt-4 leading-8 text-slate-400">
                {service.description}
              </p>

              <button className="mt-8 text-blue-400 hover:text-blue-300">
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </section>
    </FadeIn>
  );
}