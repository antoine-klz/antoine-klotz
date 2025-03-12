import ContactButton from "@/components/ContactButton";

export default function TeamPage() {
  return (
    <>
      <div className="relative">
        {/* Contact Button */}
        <ContactButton />

        <main className="flex-1 py-12 px-4 md:px-6 lg:px-8 pt-20">
          <div className="mx-auto max-w-7xl">
            <h1 className="text-4xl font-bold text-[#144723] mb-6">Unser Team</h1>
            <p className="text-lg mb-4">
              Robin Wood setzt sich für nachhaltige Forstwirtschaft und Umweltschutz ein. Unsere Mission ist es, natürliche Ressourcen zu schützen und
              zu erhalten und gleichzeitig hochwertige Holzprodukte und Dienstleistungen anzubieten.
            </p>
            <p className="text-lg mb-4">
              Gegründet im Jahr 2010 haben wir uns zu einem führenden Unternehmen im Bereich umweltfreundlicher Forstwirtschaft entwickelt und
              kombinieren traditionelles Wissen mit innovativen Techniken, um die Gesundheit und Langlebigkeit unserer Wälder zu gewährleisten.
            </p>
          </div>
        </main>
      </div>
    </>
  );
}
