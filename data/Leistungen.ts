import { Shield, Leaf, Ruler, FileCheck, Clock, Users } from "lucide-react";

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
}

export const services: Service[] = [
  {
    id: 1,
    title: "Baumschutz auf Baustellen",
    description: "Professioneller Schutz von Bäumen während Bauarbeiten gemäß aktuellen Standards und Vorschriften.",
    icon: Shield,
    color: "#8AEA7C",
  },
  {
    id: 2,
    title: "Ökologische Baubegleitung",
    description: "Umweltfreundliche Begleitung Ihres Bauprojekts mit Fokus auf Nachhaltigkeit und Naturschutz.",
    icon: Leaf,
    color: "#8AEA7C",
  },
  {
    id: 3,
    title: "Baumgutachten",
    description: "Fachkundige Beurteilung des Zustands und der Vitalität von Bäumen für Planungs- und Genehmigungsverfahren.",
    icon: Ruler,
    color: "#8AEA7C",
  },
  {
    id: 4,
    title: "Dokumentation",
    description: "Umfassende Dokumentation aller Maßnahmen für Behörden und Qualitätssicherung.",
    icon: FileCheck,
    color: "#8AEA7C",
  },
  {
    id: 5,
    title: "Langzeitbetreuung",
    description: "Kontinuierliche Betreuung und Überwachung während der gesamten Projektlaufzeit.",
    icon: Clock,
    color: "#8AEA7C",
  },
  {
    id: 6,
    title: "Beratung & Schulung",
    description: "Fachliche Beratung und Schulung für Ihr Team zu allen Aspekten des Baumschutzes.",
    icon: Users,
    color: "#8AEA7C",
  },
];
