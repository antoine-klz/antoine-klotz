export interface TeamMember {
  name: string;
  role: string;
  description?: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Lukas Wenrich",
    role: "Baumpflege",
    description: "Experte in seinem Bereich mit langjähriger Erfahrung.",
  },
  {
    name: "Arman Najari",
    role: "Projekt- und Vertrieb",
    description: "Experte in seinem Bereich mit langjähriger Erfahrung.",
  },
];
