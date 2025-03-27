export interface NavItem {
  name: string;
  sectionId: string;
  icon?: string;
}

export const navItems: NavItem[] = [
  { name: "Home", sectionId: "hero", icon: "Home" },
  { name: "Projects", sectionId: "projects", icon: "Projects" },
  { name: "Services", sectionId: "services" },
];
