import React from "react";

export default function Impressum() {
  // Custom styles for reuse across the page
  const styles = {
    container: "container mx-auto max-w-6xl py-8 mt-[65px] bg-white",
    heading: "text-3xl font-bold mb-6 text-[#F65009] font-satoshibold",
    subheading: "text-xl font-semibold mt-6 mb-3 text-[#F65009] font-satoshibold",
    paragraph: "mb-3 text-black",
    link: "text-blue-600 hover:underline",
    source: "text-sm text-[#F65009] mt-8 mb-8",
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Impressum</h1>

      <h2 className={styles.subheading}>Angaben gemäß § 5 TMG:</h2>
      <p className={styles.paragraph}>Antoine Klotz IT Dienstleistungen</p>
      <p className={styles.paragraph}>Adresse: Eimsbütteler Str. 25, 22769 Hamburg</p>
      <p className={styles.paragraph}>Telefon: +49 176 76517 5363</p>
      <p className={styles.paragraph}>Email: doubleaa@gmail.com</p>

      <h2 className={styles.subheading}>Streitschlichtung</h2>
      <p className={styles.paragraph}>
        Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
        <a href="https://ec.europa.eu/consumers/odr" className={styles.link}>
          https://ec.europa.eu/consumers/odr
        </a>
      </p>
      <p className={styles.paragraph}>
        Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
        Verbraucherschlichtungsstelle teilzunehmen.
      </p>

      <h2 className={styles.subheading}>Haftung für Inhalte</h2>
      <p className={styles.paragraph}>
        Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8
        bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach
        Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
        Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
        Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend
        entfernen.
      </p>

      <h2 className={styles.subheading}>Haftung für Links</h2>
      <p className={styles.paragraph}>
        Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden
        Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten
        verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren
        zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
        Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
      </p>

      <h2 className={styles.subheading}>Urheberrecht</h2>
      <p className={styles.paragraph}>
        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
        Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
        jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit
        die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte
        Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden
        Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
      </p>

      <p className={styles.source}>Quelle: e-recht24.de</p>
    </div>
  );
}
