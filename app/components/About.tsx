export default function About() {
  return (
    <section id="nosotros">
      {/* Dark header block */}
      <div className="bg-dark-blue py-20 md:py-28 px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Bordered label tag */}
          <div className="inline-block border  px-6 py-2 mb-10">
            <span className="font-mono text-xs text-bright-blue uppercase tracking-[0.3em]">
              ¿Quiénes somos?
            </span>
          </div>

          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-black text-white uppercase leading-[1.05]">
            Expertos en crear<br />marcas de valor
          </h2>
        </div>
      </div>

      {/* Light body block */}
      <div className="bg-light py-16 md:py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-base md:text-lg text-dark-blue/70 leading-relaxed text-justify">
            Brandia nace como la plataforma que une la inteligencia artificial con la visión creativa y
            estratégica de Probrands —agencia de marketing con más de 15 años construyendo marcas que
            conectan, posicionan y perduran— para que cada emprendedor tenga acceso a un proceso
            profesional, ágil y completamente transparente.{" "}
            <span className="text-bright-blue font-bold">
              Sin rodeos. Sin letra pequeña. Tu marca registrada en simples pasos.
            </span>
          </p>

          <p className="mt-6 text-base md:text-lg text-dark-blue/70">
            Conoce más de Probrands{" "}
            <a
              href="https://probrands.pe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-bright-blue hover:text-cyan transition-colors"
            >
              aquí.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
