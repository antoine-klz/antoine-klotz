import ServiceHighlights from "@/components/ideas/ServiceHighlights";

export default function Leistungen() {
  return (
    <section id="leistungen" className="w-full h-[calc(100vh-70px)] flex flex-col justify-center items-center relative bg-green">
      <div className="container px-4 md:px-6 w-full max-w-8xl flex flex-col justify-between relative z-10 py-16 md:py-0 h-full">
        <div className="flex flex-col items-center justify-center h-full">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 text-center font-satoshibold">Unsere Leistungen</h2>

          {/* Service Highlights Component */}
          <ServiceHighlights className="mb-16" />
        </div>
      </div>
    </section>
  );
}
