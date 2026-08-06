import "./globals.css";
import type { Metadata } from "next";
import Providers from "@/components/providers/theme-provider";

export const metadata: Metadata = {
  title: "Ekhtiar Chowdhury | Portfolio",
  description:
    "Professional Portfolio of Ekhtiar Chowdhury",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}