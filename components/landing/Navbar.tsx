import Image from "next/image";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-[hsl(var(--border))]/60 bg-[hsl(var(--background))]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#" className="flex items-center gap-2">
          <Image
            src="/assets/easybuild-logo.png"
            alt="EasyBuild SV"
            width={120}
            height={36}
            className="h-9 w-auto"
          />
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-[hsl(var(--muted-foreground))] md:flex">
          <a href="#lavori" className="transition-colors hover:text-[hsl(var(--foreground))]">
            I nostri lavori
          </a>
          <a href="#richiesta" className="transition-colors hover:text-[hsl(var(--foreground))]">
            Come funziona
          </a>
          <a href="#richiesta" className="transition-colors hover:text-[hsl(var(--foreground))]">
            Contatti
          </a>
        </nav>
        <a
          href="#richiesta"
          className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--primary))] px-4 py-2 text-sm font-semibold text-[hsl(var(--primary-foreground))] transition-colors hover:bg-[hsl(var(--primary))]/90"
        >
          Richiedi sopralluogo
        </a>
      </div>
    </header>
  );
}
