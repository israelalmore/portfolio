export interface NavItem {
  readonly id: string;
  readonly label: string;
  readonly index: string;
}

export const navItems: readonly NavItem[] = [
  { id: "about", label: "sobre mí", index: "01" },
  { id: "stack", label: "stack", index: "02" },
  { id: "projects", label: "proyectos", index: "03" },
  { id: "contact", label: "contacto", index: "04" },
] as const;
