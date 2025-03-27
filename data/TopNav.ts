export interface NavItem {
  name: string;
  sectionId: string;
  icon?: string;
}

export const navItems: NavItem[] = [
  { name: "Home", sectionId: "hero", icon: "Home" },
  { name: "Portfolio", sectionId: "portfolio", icon: "Portfolio" },
  { name: "Services", sectionId: "services" },
];
