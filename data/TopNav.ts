export interface NavItem {
  name: string;
  sectionId: string;
  icon?: string;
}

export const navItems: NavItem[] = [
  { name: "Home", sectionId: "hero", icon: "Home" },
  { name: "Leistungen", sectionId: "leistungen" },
  { name: "Projekte", sectionId: "projekte" },
  { name: "Team", sectionId: "team" },
];
