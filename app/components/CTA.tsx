import Link from "next/link";
import Image from "next/image";
import Section from "./Section";

export default function CTA() {
  return (
    <>
      {/* CTA Section */}
      <Section className="bg-dark-blue text-white">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            ¿Listo para darle nombre a tu éxito?
          </h2>
          <p className="text-xl text-white/70 mb-3">
            Tu marca registrada en simples pasos. Empieza hoy.
          </p>
          <p className="text-base text-white/40 mb-10 italic max-w-lg mx-auto">
            Miles de ideas quedan sin nombre registrado cada año. La tuya no va
            a ser una de ellas.
          </p>

          <Link
            href="/onboarding"
            className="inline-block bg-bright-blue text-dark-blue px-10 py-4 rounded-full font-bold text-base hover:bg-bright-blue/80 transition-all"
          >
            Quiero registrar mi marca ahora
          </Link>

          {/* Trust signals */}
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-sm text-white/30">
            <p>Respaldado por Probrands · 15 años de branding estratégico</p>
            <p>Validación de disponibilidad ante Indecopi incluida</p>
            <p>Naming con criterio creativo y de posicionamiento real</p>
            <p>Tu marca en simples pasos, con acompañamiento humano</p>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-dark-blue border-t border-white/10 py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
            <Image
              src="/logo.svg"
              alt="Brandia"
              width={80}
              height={80}
              className="brightness-0 invert opacity-70"
            />

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/40">
              <a
                href="#"
                className="hover:text-bright-blue transition-colors"
              >
                Casos de éxito
              </a>
              <a
                href="#"
                className="hover:text-bright-blue transition-colors"
              >
                Blog de Branding
              </a>
              <a
                href="#"
                className="hover:text-bright-blue transition-colors"
              >
                Soporte WhatsApp
              </a>
              <a
                href="#"
                className="hover:text-bright-blue transition-colors"
              >
                Términos legales / Privacidad
              </a>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-xs text-white/25 tracking-wide">
              Brandia · Una plataforma de Probrands · Lima, Perú
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
