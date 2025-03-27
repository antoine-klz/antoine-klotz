export interface Projects {
  id: number;
  name: string;
  year: string;
  url: string;
  services: string[];
  description: string;
  logo?: string;
  screenshots?: string[];
  testimonials?: {
    name: string;
    role: string;
    text: string;
  }[];
  tools?: string[];
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
    logo: "/projects/konstantin-beck/logo.svg",
    screenshots: ["/projects/konsti-beck1.png"],
    testimonials: [
      {
        name: "Konstantin Beck",
        role: "Founder",
        text: "Die Zusammenarbeit war hervorragend! Die Website übertrifft meine Erwartungen.",
      },
    ],
    tools: ["React", "Next.js", "Tailwind CSS", "Vercel"],
  },
  {
    id: 2,
    name: "Robin Wood",
    year: "2025",
    url: "https://robin-wood-chi.vercel.app/",
    services: ["Webdesign", "Webentwicklung", "Branding", "Automatisierung"],
    description:
      "Robin Wood ist ein professioneller Webentwickler und Designer mit einem starken Fokus auf die Benutzerfreundlichkeit und die Optimierung von Webseiten.",
    logo: "/projects/robin-wood/logo.svg",
    screenshots: ["/projects/robin-wood/screenshot1.jpg", "/projects/robin-wood/screenshot2.jpg"],
    testimonials: [
      {
        name: "Robin Wood",
        role: "CEO",
        text: "Fantastische Arbeit! Das neue Design hat unsere Conversion Rate erheblich verbessert.",
      },
    ],
    tools: ["React", "Next.js", "Framer Motion", "Supabase"],
  },
  {
    id: 3,
    name: "Mobicare",
    year: "2024",
    url: "https://mobicare-ruby.vercel.app//",
    services: ["Webdesign", "Webentwicklung", "Branding"],
    description:
      "Robin Wood ist ein professioneller Webentwickler und Designer mit einem starken Fokus auf die Benutzerfreundlichkeit und die Optimierung von Webseiten.",
    logo: "/projects/mobicare/logo.svg",
    screenshots: ["/projects/mobicare/screenshot1.jpg", "/projects/mobicare/screenshot2.jpg"],
    testimonials: [
      {
        name: "Sandra Meyer",
        role: "Marketing Director",
        text: "Die neue Website hat uns geholfen, unsere Online-Präsenz deutlich zu verbessern.",
      },
    ],
    tools: ["React", "Next.js", "Tailwind CSS", "Sanity CMS"],
  },
];
