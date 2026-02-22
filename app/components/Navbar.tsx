'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-8 py-5 bg-white/90 backdrop-blur-md border-b border-gray-light/50">
        <div className="flex items-center gap-2">
          <Image
            src="/logo.svg"
            alt="Brandia logo"
            width={90}
            height={90}
            priority
          />
        </div>

        <div className="hidden lg:flex items-center gap-8 text-sm text-dark-blue/60">
          <a href="#diferenciador" className="hover:text-dark-blue transition-colors">
            Diferencial
          </a>
          <a href="#proceso" className="hover:text-dark-blue transition-colors">
            Proceso
          </a>
          <a href="#planes" className="hover:text-dark-blue transition-colors">
            Planes
          </a>
          <a href="#nosotros" className="hover:text-dark-blue transition-colors">
            Nosotros
          </a>
        </div>

        <Link
          href="/onboarding"
          className="hidden lg:block bg-dark-blue text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-bright-blue hover:text-dark-blue transition-all"
        >
          Registrar mi marca
        </Link>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden flex flex-col gap-1.5 w-10 h-10 items-center justify-center rounded-full bg-dark-blue transition-all"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <>
              <span className="w-4.5 h-0.5 bg-white rounded-full"></span>
              <span className="w-4.5 h-0.5 bg-white rounded-full"></span>
              <span className="w-4.5 h-0.5 bg-white rounded-full"></span>
            </>
          )}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-white/98 backdrop-blur-md pt-24">
          <div className="flex flex-col px-6">
            {[
              { href: "#diferenciador", label: "Diferencial" },
              { href: "#proceso", label: "Proceso" },
              { href: "#planes", label: "Planes" },
              { href: "#nosotros", label: "Nosotros" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="py-5 text-2xl font-display font-bold text-dark-blue border-b border-gray-light hover:text-bright-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Link
              href="/onboarding"
              className="mt-8 bg-dark-blue text-white py-4 rounded-full text-center font-bold hover:bg-bright-blue hover:text-dark-blue transition-all"
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
