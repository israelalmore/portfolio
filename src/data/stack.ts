export type StackCategory = "lenguajes" | "frameworks" | "datos" | "herramientas";

export interface Tech {
  readonly label: string;
  /** Iconify id — inlined at build time by astro-icon (zero runtime cost). */
  readonly icon: string;
  readonly category: StackCategory;
}

export const categoryLabels: Record<StackCategory, string> = {
  lenguajes: "Lenguajes",
  frameworks: "Frameworks",
  datos: "Datos",
  herramientas: "Herramientas",
};

export const stack: readonly Tech[] = [
  { label: "HTML5", icon: "devicon:html5", category: "lenguajes" },
  { label: "CSS", icon: "devicon:css3", category: "lenguajes" },
  { label: "JavaScript", icon: "devicon:javascript", category: "lenguajes" },
  { label: "TypeScript", icon: "devicon:typescript", category: "lenguajes" },
  { label: "PHP", icon: "devicon:php", category: "lenguajes" },
  { label: "Java", icon: "devicon:java", category: "lenguajes" },

  { label: "React", icon: "devicon:react", category: "frameworks" },
  { label: "Next.js", icon: "devicon:nextjs", category: "frameworks" },
  { label: "Astro", icon: "devicon:astro", category: "frameworks" },
  { label: "Angular", icon: "devicon:angular", category: "frameworks" },
  { label: "Laravel", icon: "devicon:laravel", category: "frameworks" },
  { label: "Tailwind", icon: "devicon:tailwindcss", category: "frameworks" },

  { label: "MySQL", icon: "devicon:mysql", category: "datos" },
  { label: "PostgreSQL", icon: "devicon:postgresql", category: "datos" },
  { label: "MongoDB", icon: "devicon:mongodb", category: "datos" },
  { label: "Supabase", icon: "devicon:supabase", category: "datos" },

  { label: "Git", icon: "devicon:git", category: "herramientas" },
  { label: "GitHub", icon: "devicon:github", category: "herramientas" },
  { label: "Docker", icon: "devicon:docker", category: "herramientas" },
  { label: "VS Code", icon: "devicon:vscode", category: "herramientas" },
  { label: "Jira", icon: "devicon:jira", category: "herramientas" },
];

export const stackByCategory = (Object.keys(categoryLabels) as StackCategory[]).map(
  (category) => ({
    category,
    label: categoryLabels[category],
    items: stack.filter((tech) => tech.category === category),
  }),
);
