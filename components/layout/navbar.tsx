const menus = [
  { name: "Home", link: "#" },
  { name: "About", link: "#about" },
  { name: "Experience", link: "#experience" },
  { name: "Projects", link: "#projects" },
  { name: "Skills", link: "#skills" },
  { name: "Contact", link: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-6 pt-5">
        <nav className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-8 py-4 backdrop-blur-2xl shadow-2xl">

          <a
            href="#"
            className="text-2xl font-bold tracking-wide text-white"
          >
            Ekhtiar
            <span className="text-blue-500">.</span>
          </a>

          <ul className="hidden lg:flex items-center gap-8">
            {menus.map((item) => (
              <li key={item.name}>
                <a
                  href={item.link}
                  className="relative text-slate-300 transition hover:text-white after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all hover:after:w-full"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="/cv.pdf"
            target="_blank"
            className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:scale-105 hover:bg-blue-700"
          >
            Download CV
          </a>

        </nav>
      </div>
    </header>
  );
}