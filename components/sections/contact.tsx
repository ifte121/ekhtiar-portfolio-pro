export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-5xl px-6 py-28"
    >
      <div className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl">

        <div className="text-center">
          <p className="uppercase tracking-[0.3em] text-blue-400">
            Contact
          </p>

          <h2 className="mt-5 text-5xl font-bold text-white">
            Let's Work Together
          </h2>

          <p className="mt-6 text-slate-400">
            Feel free to contact me for Banking, Income Tax or Digital Banking consultation.
          </p>
        </div>

        <form className="mt-12 space-y-6">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full rounded-xl border border-white/10 bg-[#0b1120] p-4 text-white outline-none focus:border-blue-500"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full rounded-xl border border-white/10 bg-[#0b1120] p-4 text-white outline-none focus:border-blue-500"
          />

          <textarea
            rows={6}
            placeholder="Your Message"
            className="w-full rounded-xl border border-white/10 bg-[#0b1120] p-4 text-white outline-none focus:border-blue-500"
          />

          <button
            className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
          >
            Send Message
          </button>

        </form>

      </div>
    </section>
  );
}