"use client";

import { useState } from "react";

const steps = [
  {
    number: 1,
    shortTitle: "Cuéntanos tu visión",
    description:
      "Completa nuestro formulario. Cuanto más nos cuentes mejor será el resultado.",
  },
  {
    number: 2,
    shortTitle: "Creamos nombres potenciales",
    description:
      "Identificamos la esencia de tu marca y proponemos opciones de nombres.",
  },
  {
    number: 3,
    shortTitle: "Validamos disponibilidad",
    description:
      "Cruzamos cada nombre con Indecopi para darte opciones con alta probabilidad de ser registradas.",
  },
  {
    number: 4,
    shortTitle: "Tu marca registrada",
    description:
      "Eliges el que más te gusta y nosotros iniciamos el registro. Te acompañamos hasta que la marca sea legalmente tuya.",
  },
];

export default function Process() {
  const [activeSteps, setActiveSteps] = useState<Set<number>>(new Set());

  const toggle = (index: number) => {
    setActiveSteps((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  return (
    <section id="proceso" className="bg-light py-20 md:py-28 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block border border-bright-blue/40 px-6 py-2 mb-8">
            <span className="text-xs text-bright-blue uppercase tracking-[0.3em]">
              El proceso
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-dark-blue leading-tight">
            Cuatro pasos. Una marca para siempre.
          </h2>
        </div>

        {/* Circles grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {steps.map((step, index) => {
            const isActive = activeSteps.has(index);
            return (
              /* Wrapper con padding para el badge */
              <div key={index} className="relative pt-5 pl-5">

                {/* Number badge — top-left overlapping */}
                <div className="absolute top-0 left-0 z-10 w-10 h-10 rounded-full bg-bright-blue flex items-center justify-center font-bold text-dark-blue text-sm select-none">
                  {step.number}
                </div>

                {/* Circle */}
                <button
                  onClick={() => toggle(index)}
                  className={`w-full aspect-square rounded-full flex items-center justify-center text-center px-6 transition-all duration-300 cursor-pointer border-2 ${
                    isActive
                      ? "bg-dark-blue border-dark-blue"
                      : "border-dark-blue/20 hover:border-bright-blue/50"
                  }`}
                >
                  <p
                    className={`text-sm md:text-base leading-relaxed transition-colors ${
                      isActive ? "text-white/90" : "text-dark-blue/65"
                    }`}
                  >
                    {isActive ? step.description : step.shortTitle}
                  </p>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
