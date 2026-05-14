# EasyBuild SV — Next.js

Sito web di EasyBuild SV, migrato da Lovable (TanStack Start) a **Next.js 15** con App Router.

## Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS 3
- shadcn/ui (Accordion, DropdownMenu — Radix UI)
- React Hook Form + Zod
- Lucide React
- Google Fonts: Playfair Display + DM Sans

## Avvio rapido

```bash
npm install
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000).

## Struttura

```
app/
  layout.tsx          # Root layout con font e metadata
  page.tsx            # Landing page
  privacy/page.tsx
  cookie/page.tsx
  termini/page.tsx
  api/send-request/route.ts  # Webhook Make.com

components/
  landing/            # Hero, Navbar, Gallery, HowItWorks, About, Faq, RequestForm, Footer
  legal/              # LegalLayout
  ui/                 # accordion, dropdown-menu
  CookieBanner.tsx

public/assets/        # Immagini (hero, founders, work-1..8, logo)
```

## Differenze rispetto al progetto Lovable

| Lovable (TanStack Start) | Next.js |
|---|---|
| `@tanstack/react-router` `Link` | `next/link` `Link` |
| `createFileRoute` | App Router file-system |
| Immagini via `import` da `@/assets/` | `next/image` da `/public/assets/` |
| Google Fonts via `@import` CSS | `next/font/google` |
| API route TanStack server handler | Next.js Route Handler (`route.ts`) |
| Tailwind v4 (CSS-first) | Tailwind v3 (`tailwind.config.ts`) |

## Deploy

Funziona su **Vercel** out of the box:
```bash
npm run build
```

Per altri provider (Netlify, Cloudflare Pages) aggiungi l'adapter appropriato.

## Variabili d'ambiente

Nessuna richiesta. Il webhook Make.com è hardcodato in `app/api/send-request/route.ts`.
Per ambienti di produzione sposta l'URL in `.env.local`:
```
MAKE_WEBHOOK_URL=https://hook.eu1.make.com/...
```
 

