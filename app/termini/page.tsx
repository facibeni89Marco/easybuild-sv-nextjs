import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal/LegalLayout";

export const metadata: Metadata = {
  title: "Termini e Condizioni — EasyBuild SV",
  description:
    "Termini e condizioni di utilizzo del sito EasyBuild SV e delle richieste di preventivo o sopralluogo.",
};

export default function TerminiPage() {
  return (
    <LegalLayout title="Termini e Condizioni" updatedAt="20 aprile 2026">
      <p>
        I presenti Termini e Condizioni regolano l'utilizzo del sito{" "}
        <strong>easybuildsv.it</strong> e le richieste di preventivo o sopralluogo
        inoltrate a Easy Build S.R.L.
      </p>

      <h2>1. Titolare del sito</h2>
      <p>
        <strong>Easy Build S.R.L.</strong> — Sede legale: Via Paolo Gerolamo Brusco 1/4,
        17100 Savona (SV)
        <br />
        P.IVA / C.F. 01893670099 — REA SV-238468 — Albo Imprese Artigiane SV-62950
        <br />
        Capitale sociale € 10.000,00 i.v. — Amministratori: Matteo Magliano e Amedeo Carlone
        <br />
        PEC: <a href="mailto:easy.buildsrl@pec.it">easy.buildsrl@pec.it</a> — Email:{" "}
        <a href="mailto:easybuild.savona@gmail.com">easybuild.savona@gmail.com</a>
      </p>

      <h2>2. Oggetto del sito</h2>
      <p>
        Il sito ha finalità informativa e promozionale dei servizi di esecuzione lavori
        di edilizia pubblica e privata, ristrutturazione e manutenzione offerti da
        Easy Build S.R.L. nella provincia di Savona. Le informazioni pubblicate non
        costituiscono offerta contrattuale ai sensi dell'art. 1336 c.c.
      </p>

      <h2>3. Richiesta di sopralluogo e preventivo</h2>
      <p>
        L'invio del modulo di richiesta è gratuito e non vincolante. Easy Build S.R.L. si
        impegna a contattare l'utente entro 24 ore lavorative. Il preventivo viene
        rilasciato in forma scritta e diventa vincolante solo a seguito di accettazione
        formale da entrambe le parti.
      </p>

      <h2>4. Proprietà intellettuale</h2>
      <p>
        Tutti i contenuti del sito (testi, immagini, logo, grafica) sono di proprietà di
        Easy Build S.R.L. o utilizzati su licenza. È vietata la riproduzione totale o
        parziale senza autorizzazione scritta.
      </p>

      <h2>5. Limitazione di responsabilità</h2>
      <p>
        Easy Build S.R.L. non risponde di eventuali interruzioni del servizio o errori
        dei contenuti pubblicati. Gli utenti sono tenuti a verificare le informazioni
        tecniche con il personale dell'impresa prima di prendere decisioni.
      </p>

      <h2>6. Legge applicabile e foro competente</h2>
      <p>
        Per qualsiasi controversia si applica la legge italiana. Il foro competente è
        quello di Savona, salvo diversa norma inderogabile a tutela del consumatore.
      </p>

      <h2>7. Modifiche</h2>
      <p>
        Easy Build S.R.L. si riserva il diritto di modificare in qualsiasi momento i
        presenti Termini. Le modifiche saranno efficaci dalla pubblicazione sul sito.
      </p>
    </LegalLayout>
  );
}
