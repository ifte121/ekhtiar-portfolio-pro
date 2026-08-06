import Button from "../ui/button";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#050816] px-6">
      <div className="max-w-5xl text-center">
        <p className="uppercase tracking-[0.35em] text-blue-400 text-sm md:text-base">
          Welcome to My Portfolio
        </p>

        <h1 className="mt-6 text-5xl md:text-7xl font-extrabold">
          Ekhtiar <span className="text-blue-500">Chowdhury</span>
        </h1>

        <h2 className="mt-6 text-xl md:text-2xl text-slate-300">
          Banker • Income Tax Consultant • YouTube Creator
        </h2>

        <p className="mt-8 max-w-3xl mx-auto text-slate-400 leading-8">
          I help individuals and businesses with banking solutions, income tax
          services and financial education through high-quality digital content.
        </p>

        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <Button>View Portfolio</Button>

          <Button variant="outline">Contact Me</Button>
        </div>
      </div>
    </section>
  );
}