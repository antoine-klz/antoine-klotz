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
    title: "Web Design",
    description: "Customized, appealing web presences perfectly tailored to the needs of craft and construction companies.",
    icon: Layout,
    color: "#ff3647",
  },
  {
    id: 2,
    title: "Web Development",
    description: "Technically sophisticated websites and applications with optimal performance that perfectly present your services.",
    icon: Code,
    color: "#ff3647",
  },
  {
    id: 3,
    title: "Branding",
    description: "Development of a strong brand identity that clearly positions your craft business and sets it apart from the competition.",
    icon: Palette,
    color: "#ff3647",
  },
  {
    id: 4,
    title: "Process Automation",
    description: "Digitization and automation of your workflows for greater efficiency and customer satisfaction.",
    icon: Cog,
    color: "#ff3647",
  },
];
