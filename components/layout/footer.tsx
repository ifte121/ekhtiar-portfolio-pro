import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#050816]">
      <div className="mx-auto max-w-7xl px-6 py-14">

        <div className="grid gap-10 md:grid-cols-3">

          {/* Left */}

          <div>
            <h3 className="text-2xl font-bold text-white">
              Ekhtiar <span className="text-blue-500">Chowdhury</span>
            </h3>

            <p className="mt-5 leading-8 text-slate-400">
              Banker at United Commercial Bank PLC, Income Tax Consultant,
              Oracle FLEXCUBE Professional and Creator of Smart Banking BD.
            </p>
          </div>

          {/* Quick Links */}

          <div>
            <h4 className="text-xl font-semibold text-white">
              Quick Links
            </h4>

            <ul className="mt-5 space-y-3 text-slate-400">

              <li>
                <Link href="#about" className="hover:text-blue-400">
                  About
                </Link>
              </li>

              <li>
                <Link href="#experience" className="hover:text-blue-400">
                  Experience
                </Link>
              </li>

              <li>
                <Link href="#services" className="hover:text-blue-400">
                  Services
                </Link>
              </li>

              <li>
                <Link href="#projects" className="hover:text-blue-400">
                  Projects
                </Link>
              </li>

              <li>
                <Link href="#contact" className="hover:text-blue-400">
                  Contact
                </Link>
              </li>

            </ul>
          </div>

          {/* Contact */}

          <div>

            <h4 className="text-xl font-semibold text-white">
              Contact
            </h4>

            <div className="mt-5 space-y-3 text-slate-400">

              <p>Email: your@email.com</p>

              <p>Phone: +8801XXXXXXXXX</p>

              <p>Dhaka, Bangladesh</p>

            </div>

          </div>

        </div>

        <div className="mt-12 border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between">

          <p className="text-slate-500">
            © {year} Ekhtiar Chowdhury. All Rights Reserved.
          </p>

          <div className="mt-5 flex gap-6 md:mt-0">

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              className="text-slate-400 hover:text-blue-400"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              className="text-slate-400 hover:text-blue-400"
            >
              GitHub
            </a>

            <a
              href="https://youtube.com/"
              target="_blank"
              className="text-slate-400 hover:text-blue-400"
            >
              YouTube
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
}