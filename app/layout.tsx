import type { Metadata } from "next";
import "./globals.css";
import { CookieBanner } from "@/components/CookieBanner";

export const metadata: Metadata = {
  title: "EasyBuild SV — Ristrutturazioni a Savona senza pensieri",
  description:
    "Impresa edile a Savona. Un unico referente per la tua ristrutturazione, dalla prima idea alla consegna. Richiedi un sopralluogo gratuito.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=DM+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
