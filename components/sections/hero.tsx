import Image from "next/image";
import Button from "../ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050816]">
      {/* Background Glow */}
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-blue-600/20 blur-[150px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-purple-600/20 blur-[150px]" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col-reverse items-center justify-center gap-16 px-6 lg:flex-row">

        {/* Left Side */}
        <div className="max-w-2xl text-center lg:text-left">

          <p className="mb-4 uppercase tracking-[0.35em] text-blue-400">
            Welcome to My Portfolio
          </p>

          <h1 className="text-5xl font-extrabold leading-tight text-white md:text-7xl">
            Ekhtiar{" "}
            <span className="text-blue-500">
              Chowdhury
            </span>
          </h1>

          <h2 className="mt-6 text-2xl text-slate-300">
            Banker • Income Tax Consultant • YouTube Creator
          </h2>

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">
            I help individuals and businesses with Banking,
            Income Tax Consultancy, Oracle FLEXCUBE, Digital Banking
            and Financial Education through professional consulting
            and YouTube content.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">
            <Button>View Portfolio</Button>

            <Button variant="outline">
              Contact Me
            </Button>
          </div>

          {/* Stats */}

          <div className="mt-14 grid grid-cols-3 gap-8">

            <div>
              <h3 className="text-4xl font-bold text-blue-500">
                6+
              </h3>

              <p className="mt-2 text-slate-400">
                Years Experience
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-blue-500">
                100+
              </h3>

              <p className="mt-2 text-slate-400">
                Tax Files
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-blue-500">
                50+
              </h3>

              <p className="mt-2 text-slate-400">
                Banking Projects
              </p>
            </div>

          </div>

        </div>

        {/* Right Side */}

        <div className="relative">

          <div className="absolute inset-0 rounded-[40px] bg-blue-600/30 blur-3xl" />

          <Image
            src="/profile.png"
            alt="Ekhtiar Chowdhury"
            width={420}
            height={520}
            priority
            className="relative rounded-[40px] border border-white/10 object-cover shadow-2xl"
          />

        </div>

      </div>
    </section>
  );
}