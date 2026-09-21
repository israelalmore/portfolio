export interface Project {
  readonly name: string;
  readonly tagline: string;
  readonly description: string;
  readonly language: string;
  /** Color oficial del lenguaje (GitHub linguist) — se usa como acento del card. */
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
    languageColor: "#3178c6",
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
    languageColor: "#f0c000",
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
    languageColor: "#8892be",
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
    languageColor: "#f89820",
    tags: ["Java", "POO", "Backend"],
    repo: "https://github.com/israelalmore/alpha-project",
    year: "2024",
  },
];
