import Image from "next/image";

const works = [
  { src: "/assets/work-1.jpg", title: "Cucina su misura", tag: "Ristrutturazione completa", span: "lg:col-span-2 lg:row-span-2" },
  { src: "/assets/work-2.jpg", title: "Bagno in pietra naturale", tag: "Ristrutturazione parziale", span: "" },
  { src: "/assets/work-4.jpg", title: "Restauro facciata", tag: "Lavori esterni", span: "" },
  { src: "/assets/work-5.jpg", title: "Open space", tag: "Ristrutturazione completa", span: "lg:col-span-2" },
  { src: "/assets/work-3.jpg", title: "Cantiere in corso", tag: "Demolizioni e murature", span: "" },
  { src: "/assets/work-6.jpg", title: "Terrazza panoramica", tag: "Lavori esterni", span: "" },
  { src: "/assets/work-7.jpg", title: "Impianti e cartongessi", tag: "Lavori tecnici", span: "" },
  { src: "/assets/work-8.jpg", title: "Locale commerciale", tag: "Ristrutturazione commerciale", span: "lg:col-span-2" },
];

export function Gallery() {
  return (
    <section id="lavori" style={{ backgroundColor: "hsl(var(--surface-dark))", color: "hsl(var(--surface-dark-foreground))" }}>
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[hsl(var(--primary))]">
              Portfolio
            </p>
            <h2 className="font-display mt-3 text-4xl font-semibold leading-tight sm:text-5xl">
              I nostri lavori
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed" style={{ color: "hsl(var(--surface-dark-foreground) / 0.7)" }}>
            Una selezione dei cantieri realizzati nella provincia di Savona.
            Ogni progetto è seguito da un unico referente, dalla prima visita alla consegna.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[220px]">
          {works.map((w, i) => (
            <figure
              key={i}
              className={`group relative overflow-hidden rounded-xl bg-black/40 ring-1 ring-white/5 ${w.span}`}
            >
              <Image
                src={w.src}
                alt={w.title}
                fill
                loading="lazy"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-90" />
              <figcaption className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-xs font-medium uppercase tracking-wider text-[hsl(var(--primary))]">
                  {w.tag}
                </p>
                <p className="font-display mt-1 text-lg font-medium text-white">
                  {w.title}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
