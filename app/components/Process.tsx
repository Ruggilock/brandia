"use client";

import { useState } from "react";
import Section from "./Section";

const processSteps = [
  {
    id: "vision",
    number: "01",
    title: "Cuéntanos tu visión",
    description:
      "Completa nuestro formulario estratégico: rubro, público objetivo, personalidad de marca y referencias. Cuanto más nos cuentes, mejor será el resultado.",
  },
  {
    id: "trabajo",
    number: "02",
    title: "La IA + Probrands trabajan",
    description:
      "Nuestra IA genera candidatos de nombre con análisis semántico y fonético. El equipo creativo de Probrands los revisa, afina y selecciona los más potentes con criterio de branding real.",
  },
  {
    id: "validacion",
    number: "03",
    title: "Validamos la disponibilidad",
    description:
      "Antes de presentarte las propuestas, cruzamos cada nombre con la base de datos de Indecopi. Solo te mostramos nombres que puedes registrar. Sin sorpresas.",
  },
  {
    id: "registro",
    number: "04",
    title: "Tú te conviertes en dueño",
    description:
      "Eliges tu nombre favorito y nosotros iniciamos el registro oficial ante Indecopi. Te acompañamos en todo el proceso hasta que la marca sea legalmente tuya.",
  },
];

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <Section id="proceso" className="bg-light">
      <div className="text-center mb-14">
        <p className="font-mono text-[10px] text-bright-blue uppercase tracking-[0.3em] mb-4">
          El proceso
        </p>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-dark-blue">
          Cuatro pasos. Una marca para siempre.
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10 items-start">
        {/* Left Side - Steps (3 columns) */}
        <div className="lg:col-span-3 space-y-3">
          {processSteps.map((step, index) => (
            <button
              key={step.id}
              onClick={() => setActiveStep(index)}
              className={`w-full text-left p-5 md:p-6 rounded-2xl transition-all cursor-pointer ${
                activeStep === index
                  ? "bg-dark-blue shadow-lg shadow-dark-blue/10"
                  : "bg-white border border-gray-light hover:border-bright-blue"
              }`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-colors ${
                    activeStep === index
                      ? "bg-bright-blue text-dark-blue"
                      : "bg-gray-light text-dark-blue/35"
                  }`}
                >
                  {step.number}
                </div>
                <div className="flex-1 min-w-0">
                  <h3
                    className={`font-display text-base md:text-lg font-bold mb-1 transition-colors ${
                      activeStep === index ? "text-white" : "text-dark-blue"
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed transition-colors ${
                      activeStep === index ? "text-white/50" : "text-dark-blue/45"
                    }`}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Right Side - Visual (2 columns) */}
        <div className="lg:col-span-2 relative h-[400px] lg:h-full lg:min-h-[520px] rounded-2xl overflow-hidden bg-dark-blue flex items-center justify-center lg:sticky lg:top-28">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at 50% 40%, rgba(0,189,255,0.08) 0%, transparent 60%)",
            }}
          />

          <div className="relative text-center px-6">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-bright-blue/10 flex items-center justify-center border border-bright-blue/20">
              <span className="font-mono text-lg font-bold text-bright-blue">
                {processSteps[activeStep].number}
              </span>
            </div>
            <h3 className="font-display text-xl md:text-2xl font-bold text-white mb-3">
              {processSteps[activeStep].title}
            </h3>
            <div className="w-6 h-px bg-bright-blue/30 mx-auto my-4" />
            <p className="text-white/35 text-xs max-w-[200px] mx-auto leading-relaxed">
              Paso {activeStep + 1} de {processSteps.length}
            </p>
            <div className="mt-8 flex justify-center gap-1.5">
              {processSteps.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveStep(i)}
                  className={`h-1 rounded-full transition-all cursor-pointer ${
                    i === activeStep
                      ? "w-6 bg-bright-blue"
                      : "w-1.5 bg-white/10 hover:bg-white/20"
                  }`}
                  aria-label={`Paso ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
