import Hero from "@/components/sections/02_Hero";
import Leistungen from "@/components/sections/03_Leistungen";
import Projekte from "@/components/sections/04_Projekte";
import Team from "@/components/sections/05_Team";
import Kontakt from "@/components/sections/06_Kontakt";

export default function Home() {
  return (
    <>
      <Hero />
      <Leistungen />
      <Projekte />
      <Team />
      <Kontakt />
    </>
  );
}
