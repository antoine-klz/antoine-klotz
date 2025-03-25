export interface Projects {
  id: number;
  name: string;
  year: string;
  url: string;
  services: string[];
  description: string;
}

export const projectPins: Projects[] = [
  {
    id: 1,
    name: "Konstantin Beck",
    year: "2025",
    url: "konstantinbeck.com",
    services: ["Webdesign", "Webentwicklung", "Branding"],
    description:
      "Konstantin Beck ist ein professioneller Webentwickler und Designer mit einem starken Fokus auf die Benutzerfreundlichkeit und die Optimierung von Webseiten.",
  },
  {
    id: 2,
    name: "Robin Wood",
    year: "2025",
    url: "https://robin-wood-chi.vercel.app/",
    services: ["Webdesign", "Webentwicklung", "Branding", "Automatisierung"],
    description:
      "Robin Wood ist ein professioneller Webentwickler und Designer mit einem starken Fokus auf die Benutzerfreundlichkeit und die Optimierung von Webseiten.",
  },
  {
    id: 3,
    name: "Mobicare",
    year: "2024",
    url: "https://mobicare-ruby.vercel.app//",
    services: ["Webdesign", "Webentwicklung", "Branding"],
    description:
      "Robin Wood ist ein professioneller Webentwickler und Designer mit einem starken Fokus auf die Benutzerfreundlichkeit und die Optimierung von Webseiten.",
  },
];
