import { Code, Palette, Cog, Layout } from "lucide-react";

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
    title: "Webdesign",
    description: "Maßgeschneiderte, ansprechende Webauftritte, die perfekt auf die Bedürfnisse von Handwerks- und Bauunternehmen zugeschnitten sind.",
    icon: Layout,
    color: "#F65009",
  },
  {
    id: 2,
    title: "Web Entwicklung",
    description: "Technisch ausgereifte Webseiten und Anwendungen mit optimaler Performance, die Ihre Dienstleistungen perfekt präsentieren.",
    icon: Code,
    color: "#F65009",
  },
  {
    id: 3,
    title: "Branding",
    description: "Entwicklung einer starken Markenidentität, die Ihr Handwerksunternehmen klar positioniert und vom Wettbewerb abhebt.",
    icon: Palette,
    color: "#F65009",
  },
  {
    id: 4,
    title: "Prozessautomatisierung",
    description: "Digitalisierung und Automatisierung Ihrer Arbeitsabläufe für mehr Effizienz und Kundenzufriedenheit.",
    icon: Cog,
    color: "#F65009",
  },
];
