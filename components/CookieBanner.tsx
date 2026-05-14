"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Cookie, X } from "lucide-react";

const STORAGE_KEY = "easybuild-cookie-consent-v1";

type Consent = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
};

function readConsent(): Consent | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Consent) : null;
  } catch {
    return null;
  }
}

function saveConsent(consent: Consent) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
  } catch {
    /* ignore */
  }
}

export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const existing = readConsent();
    if (!existing) setVisible(true);
  }, []);

  const persist = (consent: Consent) => {
    saveConsent(consent);
    setVisible(false);
    setShowPreferences(false);
  };

  const handleAcceptAll = () => {
    persist({ necessary: true, analytics: true, marketing: true, timestamp: new Date().toISOString() });
  };

  const handleRejectAll = () => {
    persist({ necessary: true, analytics: false, marketing: false, timestamp: new Date().toISOString() });
  };

  const handleSavePreferences = () => {
    persist({ necessary: true, analytics, marketing, timestamp: new Date().toISOString() });
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Informativa sui cookie"
      className="fixed inset-x-0 bottom-0 z-[100] px-4 pb-4 sm:px-6 sm:pb-6"
    >
      <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] shadow-2xl">
        {!showPreferences ? (
          <div className="p-5 sm:p-6">
            <div className="flex items-start gap-4">
              <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] sm:flex">
                <Cookie className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <h2 className="font-display text-lg font-semibold text-[hsl(var(--foreground))]">
                  Rispettiamo la tua privacy
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-[hsl(var(--muted-foreground))]">
                  Utilizziamo cookie tecnici necessari al funzionamento del sito e, previo tuo
                  consenso, cookie analitici per migliorare l&apos;esperienza. Consulta la{" "}
                  <Link href="/cookie" className="text-[hsl(var(--primary))] underline">
                    Cookie policy
                  </Link>
                  .
                </p>
              </div>
            </div>
            <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:justify-end">
              <button
                type="button"
                onClick={handleRejectAll}
                className="inline-flex items-center justify-center rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--background))] px-5 py-2.5 text-sm font-semibold text-[hsl(var(--foreground))] transition-colors hover:bg-[hsl(var(--muted))]"
              >
                Rifiuta
              </button>
              <button
                type="button"
                onClick={() => setShowPreferences(true)}
                className="inline-flex items-center justify-center rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--background))] px-5 py-2.5 text-sm font-semibold text-[hsl(var(--foreground))] transition-colors hover:bg-[hsl(var(--muted))]"
              >
                Personalizza
              </button>
              <button
                type="button"
                onClick={handleAcceptAll}
                className="inline-flex items-center justify-center rounded-full bg-[hsl(var(--primary))] px-5 py-2.5 text-sm font-semibold text-[hsl(var(--primary-foreground))] transition-colors hover:bg-[hsl(var(--primary))]/90"
              >
                Accetta
              </button>
            </div>
          </div>
        ) : (
          <div className="p-5 sm:p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="font-display text-lg font-semibold text-[hsl(var(--foreground))]">
                  Preferenze cookie
                </h2>
                <p className="mt-1 text-sm text-[hsl(var(--muted-foreground))]">
                  Scegli quali categorie di cookie autorizzare.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowPreferences(false)}
                aria-label="Chiudi preferenze"
                className="rounded-full p-1 text-[hsl(var(--muted-foreground))] transition-colors hover:bg-[hsl(var(--muted))] hover:text-[hsl(var(--foreground))]"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="mt-5 space-y-3">
              <div className="flex items-start justify-between gap-4 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--background))] p-4">
                <div>
                  <p className="text-sm font-semibold text-[hsl(var(--foreground))]">Cookie tecnici (necessari)</p>
                  <p className="mt-1 text-xs leading-relaxed text-[hsl(var(--muted-foreground))]">
                    Indispensabili al funzionamento del sito. Non richiedono consenso.
                  </p>
                </div>
                <span className="shrink-0 rounded-full bg-[hsl(var(--muted))] px-3 py-1 text-xs font-medium text-[hsl(var(--muted-foreground))]">
                  Sempre attivi
                </span>
              </div>
              <label className="flex cursor-pointer items-start justify-between gap-4 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--background))] p-4 transition-colors hover:border-[hsl(var(--foreground))]/20">
                <div>
                  <p className="text-sm font-semibold text-[hsl(var(--foreground))]">Cookie analitici</p>
                  <p className="mt-1 text-xs leading-relaxed text-[hsl(var(--muted-foreground))]">
                    Statistiche aggregate e anonime sull&apos;uso del sito.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={analytics}
                  onChange={(e) => setAnalytics(e.target.checked)}
                  className="mt-1 h-5 w-5 shrink-0 cursor-pointer accent-[hsl(var(--primary))]"
                />
              </label>
              <label className="flex cursor-pointer items-start justify-between gap-4 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--background))] p-4 transition-colors hover:border-[hsl(var(--foreground))]/20">
                <div>
                  <p className="text-sm font-semibold text-[hsl(var(--foreground))]">Cookie di marketing</p>
                  <p className="mt-1 text-xs leading-relaxed text-[hsl(var(--muted-foreground))]">
                    Profilazione per messaggi promozionali personalizzati.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={marketing}
                  onChange={(e) => setMarketing(e.target.checked)}
                  className="mt-1 h-5 w-5 shrink-0 cursor-pointer accent-[hsl(var(--primary))]"
                />
              </label>
            </div>
            <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={handleRejectAll}
                className="inline-flex items-center justify-center rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--background))] px-5 py-2.5 text-sm font-semibold text-[hsl(var(--foreground))] transition-colors hover:bg-[hsl(var(--muted))]"
              >
                Rifiuta tutti
              </button>
              <button
                type="button"
                onClick={handleSavePreferences}
                className="inline-flex items-center justify-center rounded-full bg-[hsl(var(--primary))] px-5 py-2.5 text-sm font-semibold text-[hsl(var(--primary-foreground))] transition-colors hover:bg-[hsl(var(--primary))]/90"
              >
                Salva preferenze
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
