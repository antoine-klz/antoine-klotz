import Hero from "@/components/sections/02_Hero";
import Leistungen from "@/components/sections/03_Leistungen";
import Team from "@/components/sections/04_Team";
import Kontakt from "@/components/sections/05_Kontakt";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Leistungen Section */}
      <Leistungen />

      {/* Team Section */}
      <Team />

      {/* Kontakt Section */}
      <Kontakt />
    </>
  );
}
