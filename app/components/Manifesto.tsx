import Section from "./Section";

export default function Manifesto() {
  return (
    <Section className="bg-dark-blue" maxWidth="max-w-4xl">
      <div className="mx-auto text-center">
        <p className="font-mono text-[10px] text-bright-blue uppercase tracking-[0.3em] mb-12">
          Manifiesto de marca
        </p>

        <div className="space-y-10 font-display text-xl md:text-2xl text-white/80 leading-relaxed">
          <p>
            Cada negocio comienza con una chispa: esa idea que te quita el
            sueño, que resuelve un problema real, que tú ves con una claridad
            que nadie más tiene. Pero una idea sin nombre no tiene identidad. Y
            un nombre sin registro no tiene dueño.
          </p>

          <p>
            Durante años, tener una marca profesional fue sinónimo de
            presupuestos grandes y procesos complicados. Agencias inalcanzables,
            trámites opacos y semanas de espera. Las grandes empresas accedían a
            equipos creativos y estratégicos de primer nivel. Las MYPES y
            startups, no.
          </p>

          <p>
            Brandia nació para cambiar esa ecuación. Somos la plataforma que une
            la inteligencia artificial con la visión creativa y estratégica de
            Probrands —agencia de marketing con 15 años construyendo marcas que
            conectan, posicionan y perduran— para que cada emprendedor tenga
            acceso a un proceso profesional, ágil y completamente transparente.
            Sin rodeos. Sin letra pequeña.{" "}
            <span className="text-bright-blue">
              Tu marca registrada en simples pasos.
            </span>
          </p>
        </div>
      </div>
    </Section>
  );
}
