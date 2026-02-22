import Section from "./Section";

const pillars = [
  {
    title: "Atenta a los detalles",
    description:
      "Cada nombre pasa por filtros semánticos, fonéticos y de posicionamiento. Nada queda al azar porque tu marca lo merece.",
  },
  {
    title: "Cercana a tus necesidades",
    description:
      "Sin tecnicismos ni lenguaje de agencia. Te acompañamos en cada decisión con claridad total. Tú eres el experto en tu negocio; nosotros somos el experto en tu marca.",
  },
  {
    title: "Formal en el cumplimiento",
    description:
      "Cada promesa que hacemos, la cumplimos. Plazos, registros, entregas. Detrás de la plataforma hay personas que responden con su nombre.",
  },
  {
    title: "Ágil sin sacrificar calidad",
    description:
      "Reducimos semanas a días. La IA nos da velocidad; la experiencia de Probrands nos da precisión. Tú obtienes lo mejor de ambos mundos.",
  },
];

export default function About() {
  return (
    <section id="nosotros">
      {/* Header on dark bg */}
      <div className="bg-dark-blue py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="font-mono text-[10px] text-bright-blue uppercase tracking-[0.3em] mb-8">
            Quiénes somos
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Expertos en marcas que conectan, aliados de tu crecimiento.
          </h2>
        </div>
      </div>

      {/* Body copy */}
      <Section className="bg-light" maxWidth="max-w-4xl">
        <div className="space-y-6 text-base md:text-lg text-dark-blue/70 leading-relaxed mb-8">
          <p>
            Brandia no es una plataforma de nombres automáticos. Es la evolución
            de Probrands, agencia de marketing especializada en branding
            estratégico con 15 años construyendo marcas memorables para el
            mercado peruano y latinoamericano.
          </p>
          <p>
            Vimos de primera mano que las herramientas de branding profesional
            —naming estratégico, identidad visual, posicionamiento— eran
            territorio exclusivo de grandes empresas. Las MYPES y startups
            quedaban fuera del juego, obligadas a improvisar. Brandia cambia
            eso: democratizamos el acceso al branding de alto nivel, sin
            sacrificar calidad ni rigor.
          </p>
        </div>

        <blockquote className="border-l-2 border-bright-blue pl-6 md:pl-8 mb-20">
          <p className="font-display text-xl md:text-2xl text-dark-blue/50 italic leading-relaxed">
            Porque detrás de cada marca que creamos hay años de entender qué
            hace que un nombre se quede grabado en la mente de las personas.
          </p>
        </blockquote>

        {/* Personalidad de marca - 4 pilares */}
        <p className="font-mono text-[10px] text-bright-blue uppercase tracking-[0.3em] text-center mb-10">
          Personalidad de marca
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="bg-white rounded-2xl p-8 border border-gray-light hover:border-bright-blue transition-all group"
            >
              <div className="flex items-start gap-5">
                <div className="w-10 h-10 bg-bright-blue/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-bright-blue/20 transition-colors">
                  <div className="w-2 h-2 bg-bright-blue rounded-full" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-dark-blue mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-dark-blue/55 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </section>
  );
}
