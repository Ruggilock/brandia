'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Floating pill navbar */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-5">
        <nav className="flex items-center justify-between w-full max-w-4xl bg-dark-blue/80 backdrop-blur-md rounded-full px-4 py-2.5 border border-white/10 shadow-lg shadow-black/20">

          {/* Logo */}
          <div className="flex items-center pl-1">
            <Image
              src="/logo.svg"
              alt="Brandia"
              width={84}
              height={28}
              priority
              className="brightness-0 invert"
            />
          </div>

          {/* Nav links — desktop */}
          <div className="hidden lg:flex items-center gap-7 text-sm text-white/60">
            <a href="#diferenciador" className="hover:text-white transition-colors">Diferencial</a>
            <a href="#proceso" className="hover:text-white transition-colors">Proceso</a>
            <a href="#planes" className="hover:text-white transition-colors">Planes</a>
            <a href="#nosotros" className="hover:text-white transition-colors">Nosotros</a>
          </div>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/onboarding"
              className="hidden lg:block bg-bright-blue text-dark-blue px-5 py-2 rounded-full text-sm font-bold hover:bg-cyan transition-all"
            >
              Registrar mi marca
            </Link>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 transition-all"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M3 12h18M3 6h18M3 18h18" />
                </svg>
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-dark-blue/97 backdrop-blur-md pt-24">
          <div className="flex flex-col px-8">
            {[
              { href: "#diferenciador", label: "Diferencial" },
              { href: "#proceso", label: "Proceso" },
              { href: "#planes", label: "Planes" },
              { href: "#nosotros", label: "Nosotros" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="py-5 text-2xl font-display font-bold text-white border-b border-white/10 hover:text-bright-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Link
              href="/onboarding"
              className="mt-8 bg-bright-blue text-dark-blue py-4 rounded-full text-center font-bold hover:bg-cyan transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Registrar mi marca
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
