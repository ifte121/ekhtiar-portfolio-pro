"use client";

import {
  Award,
  Briefcase,
  Building2,
  PlayCircle,
} from "lucide-react";

const stats = [
  {
    icon: Building2,
    number: "5+",
    title: "Years Banking Experience",
    color: "from-blue-600 to-cyan-400",
  },
  {
    icon: Briefcase,
    number: "100+",
    title: "Banking Projects",
    color: "from-purple-600 to-pink-500",
  },
  {
    icon: PlayCircle,
    number: "500+",
    title: "Educational Videos",
    color: "from-red-500 to-orange-500",
  },
  {
    icon: Award,
    number: "20+",
    title: "Professional Certificates",
    color: "from-green-500 to-emerald-400",
  },
];

export default function Stats() {
  return (
    <section
      id="stats"
      className="relative py-28 px-6 bg-[#050816]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-[8px] text-blue-400">
            ACHIEVEMENTS
          </p>

          <h2 className="mt-4 text-5xl font-bold text-white">
            My Professional Journey
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-gray-400">
            My journey in Banking, Oracle FLEXCUBE,
            Income Tax Consultancy and Financial
            Education.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-blue-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.35)]"
              >
                <div
                  className={`mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r ${item.color}`}
                >
                  <Icon
                    size={36}
                    className="text-white"
                  />
                </div>

                <h3 className="text-5xl font-bold text-white">
                  {item.number}
                </h3>

                <p className="mt-4 text-gray-400">
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}