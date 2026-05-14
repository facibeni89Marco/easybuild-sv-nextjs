import { CheckCircle2, ClipboardList, CalendarCheck, HardHat } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "Compili il modulo",
    desc: "In 2 minuti ci dici tipo di lavoro, immobile, zona e tempistiche.",
  },
  {
    icon: CalendarCheck,
    title: "Prenoti la chiamata",
    desc: "Scegli tu lo slot di 30 minuti per la consulenza conoscitiva.",
  },
  {
    icon: HardHat,
    title: "Sopralluogo e preventivo",
    desc: "Ti raggiungiamo in cantiere e prepariamo un preventivo chiaro.",
  },
  {
    icon: CheckCircle2,
    title: "Cantiere e consegna",
    desc: "Un unico referente segue tutto il lavoro, dall'inizio alla consegna.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-[hsl(var(--background))] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-[hsl(var(--primary))]">
            Come lavoriamo
          </p>
          <h2 className="font-display mt-3 text-4xl font-semibold text-[hsl(var(--foreground))] sm:text-5xl">
            Quattro passi.{" "}
            <span className="italic">Nessuna sorpresa.</span>
          </h2>
          <p className="mt-5 text-lg text-[hsl(var(--muted-foreground))]">
            Un metodo semplice per arrivare al cantiere senza perdere tempo
            né soldi in chiamate inutili.
          </p>
        </div>

        <ol className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li
              key={s.title}
              className="relative rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-7 shadow-soft transition-shadow hover:shadow-card"
            >
              <span className="font-display absolute right-5 top-5 text-5xl font-semibold text-[hsl(var(--muted-foreground))] opacity-80">
                0{i + 1}
              </span>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))]">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display mt-6 text-xl font-semibold text-[hsl(var(--foreground))]">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[hsl(var(--muted-foreground))]">
                {s.desc}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
