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
    <section className="relative overflow-hidden bg-dark-blue">
      {/* Main hero area */}
      <div className="relative bg-light">
        {/* Subtle decorative element */}
        <div
          className="absolute top-0 right-0 w-1/2 h-full opacity-[0.04] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 70% 30%, #00BDFF 0%, transparent 70%)",
          }}
        />

        <div className="relative max-w-5xl mx-auto text-center px-6 pt-20 pb-24 md:pt-28 md:pb-32">
          {/* Slogan tag */}
          <p className="font-mono text-xs text-bright-blue uppercase tracking-[0.25em] mb-8">
            Tu marca registrada en simples pasos
          </p>

          <h1 className="font-display text-4xl md:text-6xl lg:text-[5.5rem] font-bold text-dark-blue leading-[1.1] max-w-5xl mx-auto mb-4">
            Tu marca nace aquí.
          </h1>
          <p className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-bright-blue leading-[1.1] max-w-4xl mx-auto mb-10">
            Inteligente, única y registrada.
          </p>

          <p className="text-base md:text-lg text-dark-blue/60 max-w-2xl mx-auto mb-12 leading-relaxed">
            Deja de postergar lo más importante: que tu marca sea tuya de verdad.
            Con Brandia creamos nombres estratégicos y gestionamos el registro
            ante Indecopi en simples pasos, con el respaldo creativo de Probrands
            y la precisión de la IA.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/onboarding"
              className="bg-dark-blue text-white px-8 py-4 rounded-full font-bold text-base hover:bg-bright-blue hover:text-dark-blue transition-all shadow-lg"
            >
              Quiero registrar mi marca ahora
            </Link>

            <a
              href="#proceso"
              className="text-dark-blue px-8 py-4 rounded-full font-medium text-base border border-dark-blue/20 hover:border-dark-blue transition-all"
            >
              Ver cómo funciona
            </a>
          </div>
        </div>
      </div>

      {/* Dark strip - animated rotating text */}
      <div className="bg-dark-blue py-14 md:py-20">
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

          {/* Cierre visual: logotipo + sello Probrands */}
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
