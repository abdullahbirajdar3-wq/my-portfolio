import type { Metadata } from "next";
import { Albert_Sans, Inter } from "next/font/google";
import FloatingShapes from "@/components/FloatingShapes";
import { profile } from "@/data/portfolio";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const albertSans = Albert_Sans({
  variable: "--font-albert",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.role}`,
  description: profile.tagline,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${albertSans.variable} h-full antialiased`}
    >
      {/* `isolate` gives the body its own stacking context, so the decorative
          layer at -z-10 still paints above the page background. */}
      <body className="relative isolate min-h-full bg-ink font-sans text-paper">
        <FloatingShapes />
        {children}
      </body>
    </html>
  );
}
