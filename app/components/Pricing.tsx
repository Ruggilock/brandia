import Link from "next/link";
import Section from "./Section";

function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`w-4 h-4 mt-0.5 flex-shrink-0 ${className}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}

export default function Pricing() {
  return (
    <Section id="planes" className="bg-white">
      <div className="text-center mb-16">
        <p className="font-mono text-[10px] text-bright-blue uppercase tracking-[0.3em] mb-4">
          Servicios y planes
        </p>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-dark-blue">
          El plan ideal para tu momento.
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-start">
        {/* Blindaje */}
        <div className="bg-light border border-gray-light rounded-2xl p-8 flex flex-col h-full">
          <div className="mb-8">
            <h3 className="font-display text-2xl font-bold text-dark-blue">
              Blindaje
            </h3>
            <p className="text-sm text-dark-blue/40 mt-1">Registro y protección</p>
          </div>

          <div className="mb-6">
            <div className="flex items-baseline gap-1">
              <span className="font-display text-3xl font-bold text-dark-blue">
                PEN 990
              </span>
            </div>
            <p className="text-xs text-dark-blue/35 mt-1">+ tasa Indecopi</p>
          </div>

          <p className="text-sm text-dark-blue/60 mb-8 leading-relaxed">
            Para el emprendedor que ya tiene su nombre y solo necesita el paso
            final: convertirlo en un activo registrado y protegido. Nos
            encargamos de toda la gestión ante Indecopi, con supervisión de
            nuestro equipo en cada etapa.
          </p>

          <ul className="space-y-3 mb-10 flex-1">
            <li className="flex items-start gap-3">
              <CheckIcon className="text-bright-blue" />
              <span className="text-sm text-dark-blue/70">
                Gestión completa ante Indecopi
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckIcon className="text-bright-blue" />
              <span className="text-sm text-dark-blue/70">
                Supervisión del equipo en cada etapa
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckIcon className="text-bright-blue" />
              <span className="text-sm text-dark-blue/70">
                Acompañamiento hasta el certificado
              </span>
            </li>
          </ul>

          <Link
            href="/onboarding"
            className="w-full bg-dark-blue text-white py-3.5 rounded-full text-sm font-semibold hover:bg-bright-blue hover:text-dark-blue transition-all text-center block"
          >
            Proteger mi nombre hoy
          </Link>
        </div>

        {/* Génesis - Destacado */}
        <div className="bg-dark-blue rounded-2xl p-8 flex flex-col h-full border-2 border-bright-blue relative md:-mt-4 md:pb-12 shadow-2xl shadow-dark-blue/20">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-bright-blue text-dark-blue px-5 py-1 text-[10px] font-bold rounded-full uppercase tracking-widest">
            Popular
          </div>

          <div className="mb-8 mt-2">
            <span className="text-4xl block mb-4">✨</span>
            <h3 className="font-display text-2xl font-bold text-white">
              NUEVO NAMING:
            </h3>
            <p className="text-sm text-white/40 mt-1">De la idea al registro</p>
          </div>

          <div className="mb-6">
            <div className="flex items-baseline gap-3">
              <span className="font-display text-3xl font-bold text-bright-blue">
                PEN 1590
              </span>
            </div>
            <p className="text-xs text-white/30 mt-1">Todo incluido</p>
          </div>

          <p className="text-sm text-white/60 mb-8 leading-relaxed">
            El plan completo para quien parte de cero. Nuestra IA genera
            opciones estratégicas; el equipo de Probrands las evalúa con
            criterio creativo y de posicionamiento; y nosotros gestionamos el
            registro completo. De la idea al certificado, sin complicaciones.
          </p>

          <ul className="space-y-3 mb-10 flex-1">
            <li className="flex items-start gap-3">
              <CheckIcon className="text-bright-blue" />
              <span className="text-sm text-white/70">
                Naming IA + revisión experta Probrands
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckIcon className="text-bright-blue" />
              <span className="text-sm text-white/70">
                Validación de disponibilidad ante Indecopi
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckIcon className="text-bright-blue" />
              <span className="text-sm text-white/70">
                Registro completo de marca
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckIcon className="text-bright-blue" />
              <span className="text-sm text-white/70">
                Acompañamiento hasta el certificado
              </span>
            </li>
          </ul>

          <Link
            href="/onboarding"
            className="w-full bg-bright-blue text-dark-blue py-3.5 rounded-full text-sm font-bold hover:bg-bright-blue/80 transition-all text-center block"
          >
            Crear mi marca desde cero
          </Link>
        </div>

        {/* Cosmos */}
        <div className="bg-light border border-gray-light rounded-2xl p-8 flex flex-col h-full">
          <div className="mb-8">
            <h3 className="font-display text-2xl font-bold text-dark-blue">
              Cosmos
            </h3>
            <p className="text-sm text-dark-blue/40 mt-1">Branding 360°</p>
          </div>

          <div className="mb-6">
            <div className="flex items-baseline gap-1">
              <span className="font-display text-3xl font-bold text-dark-blue">Hablemos de tu proyecto
              </span>
            </div>
          </div>

          <p className="text-sm text-dark-blue/60 mb-8 leading-relaxed">
            Para quienes entienden que una marca es un ecosistema, no solo un
            nombre. Identidad visual, manual de marca, estrategia de
            posicionamiento y la visión completa del equipo Probrands. Tu
            negocio, convertido en una marca que escala.
          </p>

          <ul className="space-y-3 mb-10 flex-1">
            <li className="flex items-start gap-3">
              <CheckIcon className="text-bright-blue" />
              <span className="text-sm text-dark-blue/70">
                Todo lo del plan Génesis
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckIcon className="text-bright-blue" />
              <span className="text-sm text-dark-blue/70">
                Identidad visual completa
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckIcon className="text-bright-blue" />
              <span className="text-sm text-dark-blue/70">Manual de marca</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckIcon className="text-bright-blue" />
              <span className="text-sm text-dark-blue/70">
                Estrategia de posicionamiento
              </span>
            </li>
          </ul>

          <Link
            href="/onboarding"
            className="w-full bg-dark-blue text-white py-3.5 rounded-full text-sm font-semibold hover:bg-bright-blue hover:text-dark-blue transition-all text-center block"
          >
            Hablar con el equipo
          </Link>
        </div>
      </div>

      {/* Micro-copy de apoyo */}
      <div className="mt-16 flex flex-col sm:flex-row flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-dark-blue/30 font-mono">
        <span>Sin permanencias. Sin letra pequeña.</span>
        <span className="hidden sm:inline">·</span>
        <span>Proceso 100% acompañado por nuestro equipo.</span>
        <span className="hidden sm:inline">·</span>
        <span>Propuestas de nombre en 72 horas.</span>
        <span className="hidden sm:inline">·</span>
        <span>Más de 500 marcas construidas con Probrands.</span>
      </div>
    </Section>
  );
}
