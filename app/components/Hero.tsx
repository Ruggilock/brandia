'use client';

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const rotatingPhrases = [
  "Nombres que conectan...",
  "Nombres que se registran...",
  "Nombres que son tuyos.",
];

export default function Hero() {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentPhrase((prev) => (prev + 1) % rotatingPhrases.length);
        setIsVisible(true);
      }, 400);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[radial-gradient(ellipse_75%_90%_at_28%_-10%,#00f3ff_0%,#00bdff_18%,#024d68_46%,#03283a_68%)]">

      {/* Main hero content */}
      <div className="relative max-w-5xl mx-auto text-center px-6 pt-24 pb-20 md:pt-32 md:pb-28">

        {/* Slogan tag */}
        <p className="font-mono text-xs text-cyan uppercase tracking-[0.25em] mb-8">
          Tu marca registrada en simples pasos
        </p>

        <h1 className="font-display text-4xl md:text-6xl lg:text-[5.5rem] font-black text-white leading-[1.1] max-w-5xl mx-auto mb-4">
          Tu marca nace aquí.
        </h1>
        <p className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-bright-blue leading-[1.1] max-w-4xl mx-auto mb-10">
          Inteligente, única y registrada.
        </p>

        <p className="text-base md:text-lg text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed font-[400]">
          Deja de postergar lo más importante: que tu marca sea tuya de verdad.
          Con Brandia creamos nombres estratégicos y gestionamos el registro
          ante Indecopi en simples pasos, con el respaldo creativo de Probrands
          y la precisión de la IA.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/onboarding"
            className="bg-bright-blue text-dark-blue px-8 py-4 rounded-full font-bold text-base hover:bg-cyan hover:text-dark-blue transition-all shadow-lg shadow-bright-blue/20"
          >
            Quiero registrar mi marca ahora
          </Link>

          <a
            href="#proceso"
            className="text-white px-8 py-4 rounded-full font-[500] text-base border border-white/20 hover:border-white/50 transition-all"
          >
            Ver cómo funciona
          </a>
        </div>
      </div>

      {/* Divider + rotating text + logo */}
      <div className="py-14 md:py-20">
        <div className="max-w-5xl mx-auto text-center px-6">
          <div
            className="h-10 flex items-center justify-center mb-10"
            aria-live="polite"
          >
            <span
              className={`font-mono text-xl md:text-3xl text-bright-blue/80 transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-4"
              }`}
            >
              {rotatingPhrases[currentPhrase]}
            </span>
          </div>

          <div className="flex flex-col items-center gap-3">
            <Image
              src="/logo.svg"
              alt="Brandia"
              width={100}
              height={34}
              className="brightness-0 invert opacity-60"
            />
            <div className="w-8 h-px bg-bright-blue/30 my-2" />
            <p className="font-mono text-[10px] text-white/30 tracking-widest uppercase">
              Respaldado por 15 años de branding estratégico
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
