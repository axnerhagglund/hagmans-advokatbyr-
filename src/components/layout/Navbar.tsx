"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Hem" },
  { href: "/om-oss", label: "Om oss" },
  { href: "/tjanster", label: "Tjänster" },
  { href: "/medarbetare", label: "Medarbetare" },
  { href: "/priser", label: "Priser" },
  { href: "/faq", label: "FAQ" },
  { href: "/blogg", label: "Blogg" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#e5e0d8]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-4 focus:z-[200] focus:bg-[#ffeb3b] focus:text-[#0a0a0a] focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:outline-none"
      >
        Hoppa till innehåll
      </a>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <Link
          href="/"
          className="font-display text-2xl leading-none text-[#0a0a0a] hover:text-[#c9521a] transition-colors"
        >
          HAGMANS
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors pb-0.5 ${
                  active
                    ? "text-[#c9521a] border-b-2 border-[#c9521a]"
                    : "text-[#0a0a0a] hover:text-[#c9521a]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          {pathname === "/" ? (
            <Link
              href="/kontakt"
              className="hidden lg:inline-flex items-center text-sm font-bold text-[#0a0a0a] hover:text-[#c9521a] transition-colors"
            >
              Boka samtal →
            </Link>
          ) : (
            <Link
              href="/kontakt"
              className="hidden lg:inline-flex items-center px-4 py-2 bg-[#c9521a] text-white text-sm font-bold hover:bg-[#b84818] transition-colors"
            >
              Boka samtal →
            </Link>
          )}

          <button
            className="lg:hidden p-2 border border-[#d8d4cc] hover:bg-[#f7f7f5] transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Öppna meny"
          >
            {isOpen ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden border-t border-[#e5e0d8] bg-white">
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-6 py-3.5 text-sm font-medium border-b border-gray-100 transition-colors ${
                  active ? "bg-[#ffeb3b] text-[#0a0a0a]" : "hover:bg-[#f7f7f5]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="p-4">
            <Link
              href="/kontakt"
              onClick={() => setIsOpen(false)}
              className="block text-center px-4 py-3 bg-[#c9521a] text-white text-sm font-bold border-2 border-[#0a0a0a] shadow-[3px_3px_0_#0a0a0a]"
            >
              Boka kostnadsfritt samtal →
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
