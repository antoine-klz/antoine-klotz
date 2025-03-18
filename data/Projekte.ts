export interface ProjectPin {
  id: number;
  top: string;
  left: string;
  name: string;
  address: string;
  year: string;
}

export const projectPins: ProjectPin[] = [
  {
    id: 1,
    top: "73%",
    left: "50%",
    name: "Elbphilharmonie Baumschutz",
    address: "Platz der Deutschen Einheit 1, 20457 Hamburg",
    year: "2022",
  },
  {
    id: 2,
    top: "38%",
    left: "58%",
    name: "Stadtpark Revitalisierung",
    address: "Stadtpark 1, 22303 Hamburg",
    year: "2023",
  },
  {
    id: 3,
    top: "55%",
    left: "42%",
    name: "Kreuzkirche Baumschutz",
    address: "Kreuzkirche 1, 20357 Hamburg",
    year: "2024",
  },
];
