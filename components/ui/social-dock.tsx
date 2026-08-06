"use client";

import {
  IconBrandYoutube,
  IconBrandLinkedin,
  IconBrandGithub,
  IconBrandFacebook,
  IconMail,
} from "@tabler/icons-react";

const socials = [
  {
    icon: IconBrandYoutube,
    href: "https://youtube.com/@SmartBankingBD",
    color: "hover:text-red-500",
  },
  {
    icon: IconBrandLinkedin,
    href: "https://linkedin.com",
    color: "hover:text-blue-500",
  },
  {
    icon: IconBrandGithub,
    href: "https://github.com/ifte121",
    color: "hover:text-white",
  },
  {
    icon: IconBrandFacebook,
    href: "https://facebook.com",
    color: "hover:text-blue-600",
  },
  {
    icon: IconMail,
    href: "mailto:your@email.com",
    color: "hover:text-green-400",
  },
];

export default function SocialDock() {
  return (
    <div className="fixed bottom-8 left-1/2 z-50 -translate-x-1/2">
      <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-xl shadow-2xl">
        {socials.map((item, index) => {
          const Icon = item.icon;

          return (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-xl p-3 text-slate-300 transition-all duration-300 hover:-translate-y-2 hover:scale-125 ${item.color}`}
            >
              <Icon size={24} />
            </a>
          );
        })}
      </div>
    </div>
  );
}