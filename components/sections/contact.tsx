export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-28 px-6 bg-[#050816]"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Title */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-[8px] text-blue-400">
            CONTACT
          </p>

          <h2 className="text-5xl font-bold text-white mt-4">
            Let's Work Together
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Have a banking project, tax consultation, or business inquiry?
            Feel free to contact me anytime.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left Side */}
          <div className="space-y-6">

            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:border-blue-500 transition">
              <h3 className="text-white text-xl font-semibold">
                📧 Email
              </h3>

              <p className="text-gray-400 mt-3">
                ekhtiar@example.com
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:border-blue-500 transition">
              <h3 className="text-white text-xl font-semibold">
                📱 Phone
              </h3>

              <p className="text-gray-400 mt-3">
                +880 1XXXXXXXXX
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:border-blue-500 transition">
              <h3 className="text-white text-xl font-semibold">
                📍 Location
              </h3>

              <p className="text-gray-400 mt-3">
                Dhaka, Bangladesh
              </p>
            </div>

          </div>

          {/* Right Side */}
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">

            <form className="space-y-6">

              <div>
                <label className="block text-gray-300 mb-2">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full rounded-xl bg-[#0d1324] border border-white/10 px-5 py-4 text-white outline-none focus:border-blue-500 transition"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-xl bg-[#0d1324] border border-white/10 px-5 py-4 text-white outline-none focus:border-blue-500 transition"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="Project Subject"
                  className="w-full rounded-xl bg-[#0d1324] border border-white/10 px-5 py-4 text-white outline-none focus:border-blue-500 transition"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">
                  Message
                </label>

                <textarea
                  rows={6}
                  placeholder="Write your message..."
                  className="w-full rounded-xl bg-[#0d1324] border border-white/10 px-5 py-4 text-white outline-none resize-none focus:border-blue-500 transition"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 py-4 text-white font-semibold text-lg hover:scale-[1.02] transition duration-300"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}