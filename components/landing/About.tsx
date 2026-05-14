import Image from "next/image";
import { Quote, Star } from "lucide-react";

const founders = [
  {
    name: "Matteo Magliano",
    role: "Co-fondatore & Amministratore · Cantieri",
    img: "/assets/founder-matteo.jpg",
    bio: "Savonese doc, cresciuto tra i cantieri di famiglia. Segue ogni lavoro in prima persona ed è il tuo referente quando si parla di tempi, materiali e squadre.",
  },
  {
    name: "Amedeo Carlone",
    role: "Co-fondatore & Amministratore · Progetti",
    img: "/assets/founder-amedeo.jpg",
    bio: "Si occupa di progettazione, preventivi e rapporto con il cliente. Trasforma le tue idee in un piano chiaro e dettagliato, prima ancora di iniziare i lavori.",
  },
];

const testimonials = [
  {
    quote:
      "Avevamo paura di iniziare la ristrutturazione del bagno. Matteo ci ha seguiti dall'inizio alla fine: tempi rispettati, preventivo invariato, zero sorprese.",
    name: "Laura M.",
    place: "Savona",
  },
  {
    quote:
      "Hanno rifatto tutto l'appartamento mentre lavoravo. Una sola persona di riferimento per ogni cosa: una pace. Consigliatissimi.",
    name: "Davide R.",
    place: "Savona",
  },
  {
    quote:
      "Serietà rara nel settore edile. Amedeo ha capito subito cosa volevamo, il preventivo era chiaro e la consegna puntuale.",
    name: "Sara e Luca P.",
    place: "Albisola",
  },
];

export function About() {
  return (
    <section id="chi-siamo" className="bg-[hsl(var(--muted))]/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-[hsl(var(--primary))]">
            Chi siamo
          </p>
          <h2 className="font-display mt-3 text-4xl font-semibold text-[hsl(var(--foreground))] sm:text-5xl">
            Due amici, <span className="italic">una promessa.</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[hsl(var(--muted-foreground))]">
            Easy Build S.R.L. nasce a Savona nel gennaio 2024 dall&apos;esperienza di
            Matteo Magliano e Amedeo Carlone, due amici cresciuti in cantiere fin da
            ragazzi. Dopo anni a lavorare in altre imprese, hanno deciso di metterci
            la faccia: impresa artigiana iscritta all&apos;Albo (SV-62950), un unico
            referente che ti segue, preventivi chiari e nessuna sorpresa a fine lavori.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
          {founders.map((f) => (
            <article
              key={f.name}
              className="group overflow-hidden rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] shadow-soft transition-shadow hover:shadow-card"
            >
              <div className="aspect-[4/5] relative overflow-hidden bg-[hsl(var(--muted))]">
                <Image
                  src={f.img}
                  alt={`${f.name}, ${f.role}`}
                  fill
                  loading="lazy"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-6">
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-[hsl(var(--primary))]">
                  {f.role}
                </p>
                <h3 className="font-display mt-2 text-2xl font-semibold text-[hsl(var(--foreground))]">
                  {f.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[hsl(var(--muted-foreground))]">
                  {f.bio}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-24">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[hsl(var(--primary))]">
              Cosa dicono di noi
            </p>
            <h3 className="font-display mt-3 text-3xl font-semibold text-[hsl(var(--foreground))] sm:text-4xl">
              La fiducia di chi ha scelto EasyBuild
            </h3>
          </div>

          <ul className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <li
                key={t.name}
                className="relative flex flex-col rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-7 shadow-soft"
              >
                <Quote
                  aria-hidden
                  className="absolute right-5 top-5 h-8 w-8 text-[hsl(var(--primary))]/15"
                />
                <div className="flex gap-1 text-[hsl(var(--primary))]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-4 flex-1 text-base leading-relaxed text-[hsl(var(--foreground))]">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 border-t border-[hsl(var(--border))] pt-4">
                  <p className="font-display text-base font-semibold text-[hsl(var(--foreground))]">
                    {t.name}
                  </p>
                  <p className="text-sm text-[hsl(var(--muted-foreground))]">{t.place}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
