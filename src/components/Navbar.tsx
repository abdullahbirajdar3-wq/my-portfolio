"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks, profile } from "@/data/portfolio";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-white/10 transition-[background-color,box-shadow] duration-500 ${
        scrolled || menuOpen
          ? "bg-ink-scrim-strong backdrop-blur-xl backdrop-saturate-150 shadow-[0_8px_30px_rgb(255,255,255,0.04)]"
          : "bg-ink-scrim backdrop-blur-md backdrop-saturate-150"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-6 sm:px-8"
      >
        {/* Wordmark */}
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="group flex items-center gap-3"
        >
          <span
            aria-hidden="true"
            className="grid h-7 w-7 place-items-center rounded-md border border-white/15 bg-white/[0.03] font-display text-xs font-medium text-paper transition-colors duration-300 group-hover:border-white/30"
          >
            {profile.name.charAt(0)}
          </span>
          <span className="font-display text-sm font-medium tracking-[-0.01em] text-paper">
            {profile.name}
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-10 md:flex">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[13px] tracking-[-0.01em] text-paper/60 transition-colors duration-300 hover:text-paper"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="#contact"
            className="rounded-full border border-white/15 bg-white/[0.03] px-5 py-2 text-[13px] tracking-[-0.01em] text-paper transition-colors duration-300 hover:border-white/30 hover:bg-white/[0.06]"
          >
            Get in touch
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
          className="grid h-10 w-10 place-items-center rounded-md border border-white/10 md:hidden"
        >
          <span aria-hidden="true" className="flex flex-col gap-[5px]">
            <span
              className={`block h-px w-4 bg-paper transition-transform duration-300 ${
                menuOpen ? "translate-y-[6px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-4 bg-paper transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-px w-4 bg-paper transition-transform duration-300 ${
                menuOpen ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      {/* Mobile panel */}
      <div
        id="mobile-menu"
        hidden={!menuOpen}
        className="border-t border-white/10 bg-ink-scrim-strong backdrop-blur-2xl md:hidden"
      >
        <ul className="mx-auto flex max-w-[1400px] flex-col px-6 py-10 sm:px-8">
          {navLinks.map((link) => (
            <li key={link.href} className="border-b border-white/10 last:border-b-0">
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-5 font-display text-3xl tracking-[-0.03em] text-paper"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
