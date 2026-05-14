import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { CookieBanner } from "@/components/CookieBanner";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "EasyBuild SV — Ristrutturazioni a Savona senza pensieri",
  description:
    "Impresa edile a Savona. Un unico referente per la tua ristrutturazione, dalla prima idea alla consegna. Richiedi un sopralluogo gratuito.",
  openGraph: {
    title: "EasyBuild SV — Ristrutturare casa senza impazzire",
    description:
      "Un unico referente. Dalla tua idea alla casa finita. Ristrutturazioni residenziali e commerciali nella provincia di Savona.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className={`${dmSans.variable} ${playfairDisplay.variable} font-sans`}>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
