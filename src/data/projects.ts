export interface Project {
  readonly name: string;
  readonly tagline: string;
  readonly description: string;
  readonly language: string;
  /**
   * Color del lenguaje, aclarado desde el oficial de GitHub linguist para
   * fondo oscuro. El chip pinta el texto con este color sobre ese mismo
   * color al 14%, así que cada uno está resuelto para dar >=4.5:1 CONTRA
   * SU PROPIO CHIP, no contra la tarjeta. Los de GitHub tal cual fallan:
   * el azul de TypeScript se quedaba en 3.87:1.
   */
  readonly languageColor: string;
  readonly tags: readonly string[];
  readonly repo: string;
  readonly demo?: string;
  readonly featured?: boolean;
  readonly year: string;
}

export const projects: readonly Project[] = [
  {
    name: "rest-app",
    tagline: "API REST sobre arquitectura limpia",
    description:
      "API REST en TypeScript aplicando separación por capas, inversión de dependencias y validación en los bordes. El proyecto donde dejé de escribir endpoints y empecé a diseñar contratos.",
    language: "TypeScript",
    languageColor: "#75a5d7", // TypeScript · 4.58:1
    tags: ["Clean Architecture", "Node", "REST"],
    repo: "https://github.com/israelalmore/rest-app",
    featured: true,
    year: "2025",
  },
  {
    name: "FocusHub",
    tagline: "Hecho en 48h de hackathon",
    description:
      "Hub de concentración por estudiantes, para estudiantes. Construido bajo presión real en un hackathon: alcance recortado, decisiones rápidas y un producto en pie al final.",
    language: "JavaScript",
    languageColor: "#c09d2d", // JavaScript · 4.61:1
    tags: ["Hackathon", "Equipo", "Producto"],
    repo: "https://github.com/JorgeCordova9/FocusHub",
    featured: true,
    year: "2025",
  },
  {
    name: "Forever Events",
    tagline: "UI/UX llevado a producción",
    description:
      "Proyecto de diseño UI/UX explorando layouts modernos con HTML, CSS y PHP. El foco estuvo en jerarquía visual, ritmo tipográfico y respuesta en móvil.",
    language: "PHP",
    languageColor: "#98a1c6", // PHP · 4.61:1
    tags: ["UI/UX", "PHP", "Responsive"],
    repo: "https://github.com/israelalmore/Forever-Events",
    year: "2024",
  },
  {
    name: "Alpha Project",
    tagline: "POO y arquitectura backend",
    description:
      "Proyecto Java en equipo experimentando con arquitectura backend y patrones de orientación a objetos. Mi primer contacto serio con diseño de clases que no se rompe al crecer.",
    language: "Java",
    languageColor: "#dd8e46", // Java · 4.61:1
    tags: ["Java", "POO", "Backend"],
    repo: "https://github.com/israelalmore/alpha-project",
    year: "2024",
  },
];
