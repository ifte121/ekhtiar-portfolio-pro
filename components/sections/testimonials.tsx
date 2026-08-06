"use client";

import FadeIn from "../ui/fade-in";

const testimonials = [
  {
    name: "Corporate Client",
    role: "Business Owner",
    review:
      "Excellent banking consultation and tax advisory services with outstanding professionalism.",
  },
  {
    name: "Banking Colleague",
    role: "UCB PLC",
    review:
      "Highly experienced in Oracle FLEXCUBE, UAT Testing and Banking Technology.",
  },
  {
    name: "YouTube Subscriber",
    role: "Smart Banking BD",
    review:
      "The financial education videos are practical, easy to understand and very informative.",
  },
];

export default function Testimonials() {
  return (
    <FadeIn>
      <section
        id="testimonials"
        className="mx-auto max-w-7xl px-6 py-28"
      >
        <div className="text-center">
          <p className="uppercase tracking-[0.3em] text-blue-400">
            Testimonials
          </p>

          <h2 className="mt-5 text-5xl font-bold text-white">
            What People Say
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-slate-400">
            Feedback from clients, colleagues and the Smart Banking BD
            community.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500"
            >
              <div className="text-3xl text-yellow-400">★★★★★</div>

              <p className="mt-6 leading-8 text-slate-400">
                "{item.review}"
              </p>

              <div className="mt-8">
                <h3 className="text-xl font-bold text-white">
                  {item.name}
                </h3>

                <p className="text-blue-400">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </FadeIn>
  );
}