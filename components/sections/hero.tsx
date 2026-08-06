"use client";

import FadeIn from "../ui/fade-in";
import Button from "../ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <FadeIn>
      <section
        id="home"
        className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

          {/* Left Content */}
          <div>

            <p className="uppercase tracking-[0.35em] text-blue-400">
              Welcome to My Portfolio
            </p>

            <h1 className="mt-6 text-5xl font-extrabold leading-tight text-white md:text-7xl">
              Ekhtiar{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Chowdhury
              </span>
            </h1>

            <h2 className="mt-6 text-2xl text-slate-300 md:text-3xl">
              Banker • Income Tax Consultant • YouTube Creator
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">
              Passionate about Digital Banking, Oracle FLEXCUBE,
              Income Tax Consultancy and Financial Education.
              I build banking solutions and simplify finance
              through technology and educational content.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">
              <Button>View Portfolio</Button>

              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline">
                  Download CV
                </Button>
              </a>
            </div>

          </div>

          {/* Right Image */}
          <div className="flex justify-center">

            <div className="relative">

              <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-3xl" />

              <Image
                src="/profile.png"
                alt="Ekhtiar Chowdhury"
                width={420}
                height={420}
                priority
                className="relative rounded-full border-4 border-blue-500 object-cover shadow-2xl"
              />

            </div>

          </div>

        </div>
      </section>
    </FadeIn>
  );
}