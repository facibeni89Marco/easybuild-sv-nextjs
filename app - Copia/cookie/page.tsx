import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal/LegalLayout";

export const metadata: Metadata = {
  title: "Cookie Policy — EasyBuild SV",
  description:
    "Cookie policy di Easy Build S.R.L.: tipologie di cookie utilizzati e modalità di gestione del consenso.",
};

export default function CookiePage() {
  return (
    <LegalLayout title="Cookie Policy" updatedAt="20 aprile 2026">
      <p>
        Questa Cookie Policy descrive le tipologie di cookie e tecnologie similari
        utilizzate dal sito di Easy Build S.R.L. (P.IVA 01893670099).
      </p>

      <h2>1. Cosa sono i cookie</h2>
      <p>
        I cookie sono piccoli file di testo che i siti visitati inviano al terminale
        dell'utente, dove vengono memorizzati per essere ritrasmessi agli stessi siti
        alla visita successiva.
      </p>

      <h2>2. Tipologie di cookie utilizzati</h2>
      <h3>Cookie tecnici (necessari)</h3>
      <p>
        Servono al corretto funzionamento del sito. Non richiedono il consenso preventivo
        dell'utente ai sensi dell'art. 122 del Codice Privacy.
      </p>

      <h3>Cookie analitici</h3>
      <p>
        Utilizziamo strumenti di misurazione anonimi e aggregati per comprendere come
        viene utilizzato il sito. Installati solo previo consenso.
      </p>

      <h3>Cookie di terze parti</h3>
      <p>
        Quando l'utente clicca su "Scrivici su WhatsApp" viene reindirizzato al servizio
        WhatsApp, che applica la propria informativa privacy disponibile su{" "}
        <a
          href="https://www.whatsapp.com/legal/privacy-policy"
          target="_blank"
          rel="noopener noreferrer"
        >
          whatsapp.com/legal/privacy-policy
        </a>
        .
      </p>

      <h2>3. Gestione delle preferenze</h2>
      <p>
        L'utente può modificare in ogni momento le proprie preferenze tramite le
        impostazioni del browser. La disabilitazione dei cookie tecnici può compromettere
        il corretto funzionamento del sito.
      </p>

      <h2>4. Contatti</h2>
      <p>
        Per domande relative alla Cookie Policy scrivi a{" "}
        <a href="mailto:easybuild.savona@gmail.com">easybuild.savona@gmail.com</a> oppure
        via PEC a{" "}
        <a href="mailto:easy.buildsrl@pec.it">easy.buildsrl@pec.it</a>.
      </p>
    </LegalLayout>
  );
}
