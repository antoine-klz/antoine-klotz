import React from "react";

export default function Datenschutz() {
  // Custom styles for reuse across the page
  const styles = {
    container: "container mx-auto max-w-6xl py-8 mt-[65px] bg-white",
    heading: "text-3xl font-bold mb-6 text-[#F65009] font-satoshibold",
    h2: "text-xl font-semibold mt-6 mb-3 text-[#F65009] font-satoshibold",
    h3: "text-lg font-semibold mt-6 mb-3 text-[#F65009]",
    paragraph: "mb-3 text-black",
    link: "text-blue-600 hover:underline",
    source: "text-sm text-[#F65009] mt-8 mb-8",
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Datenschutzerklärung</h1>

      <h2 className={styles.h2}>1. Datenschutz auf einen Blick</h2>
      <h3 className={styles.h3}>Allgemeine Hinweise</h3>
      <p className={styles.paragraph}>
        Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website
        besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema
        Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
      </p>

      <h2 className={styles.h2}>2. Hosting und Datenerfassung</h2>
      <h3 className={styles.h3}>Vercel</h3>
      <p className={styles.paragraph}>
        Wir hosten unsere Website bei Vercel. Anbieter ist die Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA (nachfolgend Vercel).
      </p>
      <p className={styles.paragraph}>
        Wenn Sie unsere Website besuchen, werden Ihre personenbezogenen Daten auf den Servern von Vercel verarbeitet. Hierbei können auch
        personenbezogene Daten an die USA übermittelt werden. Die Datenübertragung in die USA wird auf die EU-Standardvertragsklauseln gestützt.
      </p>
      <p className={styles.paragraph}>
        Weitere Informationen entnehmen Sie der Datenschutzerklärung von Vercel:{" "}
        <a href="https://vercel.com/legal/privacy-policy" className={styles.link}>
          https://vercel.com/legal/privacy-policy
        </a>
      </p>
      <p className={styles.paragraph}>
        Die Verwendung von Vercel erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer möglichst
        zuverlässigen Darstellung unserer Website.
      </p>

      <h2 className={styles.h2}>3. Allgemeine Hinweise und Pflichtinformationen</h2>
      <h3 className={styles.h3}>Datenschutz</h3>
      <p className={styles.paragraph}>
        Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und
        entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
      </p>

      <h3 className={styles.h3}>Hinweis zur verantwortlichen Stelle</h3>
      <p className={styles.paragraph}>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
      <p className={styles.paragraph}>[Konstantin Becks contact details to be added]</p>

      <h3 className={styles.h3}>Datenerfassung auf dieser Website</h3>
      <p className={styles.paragraph}>
        <strong>Automatisch erfasste Daten</strong>
      </p>
      <p className={styles.paragraph}>Wenn Sie unsere Website besuchen, werden verschiedene Daten automatisch durch unsere Systeme erfasst:</p>
      <ul className="list-disc ml-6 mb-3 text-black">
        <li>Technische Informationen (Browser, Betriebssystem, Bildschirmauflösung)</li>
        <li>Ihre IP-Adresse</li>
        <li>Datum und Uhrzeit des Zugriffs</li>
        <li>Besuchte Seiten</li>
        <li>Bei Videowiedergabe: Wiedergabeinformationen durch MUX Analytics</li>
      </ul>

      <h3 className={styles.h3}>Cookies und Tracking</h3>
      <p className={styles.paragraph}>
        Unsere Website verwendet nur technisch notwendige Cookies. Diese sind für den Betrieb der Website erforderlich und können nicht deaktiviert
        werden. Darüber hinaus setzen wir MUX für Videoanalysen ein, welches Performance-Daten zur Videowiedergabe sammelt.
      </p>

      <h3 className={styles.h3}>Analyse-Tools und Werbe-Tools</h3>
      <p className={styles.paragraph}>Wir nutzen folgende Analyse-Tools:</p>
      <ul className="list-disc ml-6 mb-3 text-black">
        <li>MUX Video Analytics zur Analyse der Videonutzung und Performance-Optimierung</li>
      </ul>
      <p className={styles.paragraph}>
        Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO aus unserem berechtigten Interesse an der Analyse und Verbesserung
        unseres Angebots.
      </p>

      <h3 className={styles.h3}>Datensicherheit</h3>
      <p className={styles.paragraph}>
        Diese Website nutzt aus Sicherheitsgründen und zum Schutz der Übertragung aller Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine
        verschlüsselte Verbindung erkennen Sie an der Adresszeile https:// und dem Schloss-Symbol in Ihrem Browser.
      </p>

      <h3 className={styles.h3}>Ihre Rechte</h3>
      <p className={styles.paragraph}>Sie haben folgende Rechte bezüglich Ihrer personenbezogenen Daten:</p>
      <ul className="list-disc ml-6 mb-3 text-black">
        <li>Recht auf Auskunft</li>
        <li>Recht auf Berichtigung</li>
        <li>Recht auf Löschung</li>
        <li>Recht auf Einschränkung der Verarbeitung</li>
        <li>Recht auf Datenübertragbarkeit</li>
        <li>Widerspruchsrecht</li>
        <li>Recht auf Widerruf einer datenschutzrechtlichen Einwilligung</li>
      </ul>
      <p className={styles.paragraph}>Um diese Rechte auszuüben, kontaktieren Sie uns bitte unter den oben angegebenen Kontaktdaten.</p>

      <h3 className={styles.h3}>Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
      <p className={styles.paragraph}>
        Im Falle datenschutzrechtlicher Verstöße steht dem Betroffenen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
      </p>

      <h3 className={styles.h3}>Änderungen der Datenschutzerklärung</h3>
      <p className={styles.paragraph}>
        Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um
        Änderungen unserer Leistungen zu berücksichtigen.
      </p>
      <p className={styles.source}>Quelle: e-recht24.de</p>
    </div>
  );
}
