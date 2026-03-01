import Section from "./Section";

export default function Features() {
  return (
    <section id="diferenciador">


      {/* Content on light */}
      <Section className="bg-light">
        {/* Metáfora creativa */}
        <div className="max-w-3xl mx-auto mb-20">
          <div className="border-l-2 border-bright-blue pl-8 md:pl-10">
            <p className="font-mono text-xs text-bright-blue uppercase tracking-[0.2em] mb-5">
              Como un compositor con un estudio de producción de última
              generación.
            </p>
            <p className="text-base md:text-lg text-dark-blue/70 leading-relaxed">
              El mejor compositor del mundo puede tener la melodía perfecta en
              la cabeza, pero sin el estudio adecuado, ese sonido nunca llega al
              público. La IA es nuestro estudio de producción: procesa miles de
              combinaciones, detecta tendencias, anticipa conflictos de
              registro. El equipo creativo de Probrands es el compositor: aporta
              criterio, sensibilidad de marca y 15 años entendiendo qué nombres
              funcionan en el mercado real.
            </p>
            <p className="font-display text-xl md:text-2xl text-dark-blue font-bold mt-6">
              Juntos, el resultado no solo suena bien{" "}
              <span className="text-bright-blue">—resuena.</span>
            </p>
          </div>
        </div>

        {/* Bloques de valor (3 atributos) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Simple y Eficaz */}
          <div className="bg-white rounded-2xl p-8 md:p-10 border border-gray-light hover:border-bright-blue hover:shadow-xl transition-all group">
            <div className="w-12 h-12 bg-bright-blue/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-bright-blue/20 transition-colors">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="text-bright-blue"
              >
                <path
                  d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h3 className="font-display text-xl font-bold text-dark-blue mb-4">
              Tu marca lista, sin vueltas
            </h3>
            <p className="text-dark-blue/55 leading-relaxed text-[15px]">
              Olvídate de la burocracia y las esperas eternas. Pasas de la idea al registro en simples pasos, ahorrando tiempo para lo que realmente importa: hacer crecer tu negocio.
            </p>
          </div>

          {/* Respaldo Creativo Real */}
          <div className="bg-white rounded-2xl p-8 md:p-10 border border-gray-light hover:border-bright-blue hover:shadow-xl transition-all group">
            <div className="w-12 h-12 bg-bright-blue/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-bright-blue/20 transition-colors">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="text-bright-blue"
              >
                <path
                  d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h3 className="font-display text-xl font-bold text-dark-blue mb-4">
              Estrategia de agencia a tu alcance
            </h3>
            <p className="text-dark-blue/55 leading-relaxed text-[15px]">
              Accede a la creatividad y los 15 años de experiencia estratégica de Probrands de forma económica, fácil y segura. Obtén un resultado profesional sin los altos costos de una agencia tradicional.
            </p>
          </div>

          {/* Seguridad en cada paso */}
          <div className="bg-white rounded-2xl p-8 md:p-10 border border-gray-light hover:border-bright-blue hover:shadow-xl transition-all group">
            <div className="w-12 h-12 bg-bright-blue/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-bright-blue/20 transition-colors">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="text-bright-blue"
              >
                <path
                  d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h3 className="font-display text-xl font-bold text-dark-blue mb-4">
              Dueño real desde el primer día
            </h3>
            <p className="text-dark-blue/55 leading-relaxed text-[15px]">
              Protegemos tu inversión validando la disponibilidad del nombre ante Indecopi antes de que lo elijas. Asegura tu propiedad y camina tranquilo con una marca que legalmente te pertenece.
            </p>
          </div>
        </div>
      </Section>
    </section>
  );
}
