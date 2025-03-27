"use client";
import { services } from "@/data/Leistungen";

export default function Services() {
  return (
    <section id="services" className="w-full min-h-[calc(100vh-65px)] py-16 px-4">
      <h2 className="text-4xl md:text-5xl text-white text-center font-satoshibold mb-4">What I offer</h2>
      {/* Accent line */}
      <div className="flex justify-center mb-16">
        <div className="w-24 h-1 bg-[#ff3647]"></div>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 auto-rows-fr">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/20 shadow-lg transition-all duration-300 hover:bg-white/15 hover:shadow-xl hover:ring-2 hover:ring-[#ff3647]/50 flex flex-col justify-between h-full"
            >
              <div>
                <div className="w-14 h-14 flex items-center justify-center rounded-xl mb-5" style={{ backgroundColor: `${service.color}20` }}>
                  <service.icon size={28} style={{ color: service.color }} />
                </div>
                <h3 className="text-xl text-white mb-3 font-satoshibold">{service.title}</h3>
                <p className="text-white text-md leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
