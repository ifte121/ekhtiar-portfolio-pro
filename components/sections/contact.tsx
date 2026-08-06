"use client";

import FadeIn from "../ui/fade-in";

export default function Contact() {
  return (
    <FadeIn>
      <section
        id="contact"
        className="mx-auto max-w-7xl px-6 py-28"
      >
        <div className="text-center">
          <p className="uppercase tracking-[0.3em] text-blue-400">
            Contact
          </p>

          <h2 className="mt-5 text-5xl font-bold text-white">
            Let's Work Together
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-slate-400">
            Feel free to contact me for Banking Solutions, Oracle FLEXCUBE,
            Income Tax Consultancy or Business Collaboration.
          </p>
        </div>

        <div className="mt-20 grid gap-10 lg:grid-cols-2">

          {/* Left */}

          <div className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl">

            <h3 className="text-3xl font-bold text-white">
              Contact Information
            </h3>

            <div className="mt-8 space-y-6">

              <div>
                <p className="text-blue-400">📧 Email</p>
                <p className="text-slate-300">
                  your@email.com
                </p>
              </div>

              <div>
                <p className="text-blue-400">📱 Phone</p>
                <p className="text-slate-300">
                  +8801XXXXXXXXX
                </p>
              </div>

              <div>
                <p className="text-blue-400">📍 Location</p>
                <p className="text-slate-300">
                  Dhaka, Bangladesh
                </p>
              </div>

            </div>
          </div>

          {/* Right */}

          <form className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl">

            <input
              type="text"
              placeholder="Your Name"
              className="mb-5 w-full rounded-xl border border-white/10 bg-black/20 p-4 text-white outline-none"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="mb-5 w-full rounded-xl border border-white/10 bg-black/20 p-4 text-white outline-none"
            />

            <textarea
              rows={6}
              placeholder="Your Message"
              className="w-full rounded-xl border border-white/10 bg-black/20 p-4 text-white outline-none"
            />

            <button
              className="mt-6 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
            >
              Send Message
            </button>

          </form>

        </div>
      </section>
    </FadeIn>
  );
}