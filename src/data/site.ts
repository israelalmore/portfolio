export interface SocialLink {
  readonly label: string;
  readonly href: string;
  readonly icon: string;
  readonly handle: string;
}

export const site = {
  name: "Israel Alcántara",
  handle: "israelalmore",
  role: "Web Developer",
  location: "Barcelona, ES",
  email: "israelalmore@gmail.com",
  title: "Israel Alcántara — Web Developer",
  description:
    "Estudiante de DAW en Stucom Barcelona. Construyo interfaces rápidas, accesibles y con carácter. 26 repos y sumando.",
  lang: "es",
  locale: "es_ES",
  year: new Date().getFullYear(),
} as const;

export const socials: readonly SocialLink[] = [
  {
    label: "Email",
    href: `mailto:${site.email}`,
    icon: "lucide:mail",
    handle: site.email,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/israel-alcantara-moreno",
    icon: "lucide:linkedin",
    handle: "/israel-alcantara-moreno",
  },
  {
    label: "GitHub",
    href: "https://github.com/israelalmore",
    icon: "lucide:github",
    handle: "@israelalmore",
  },
] as const;
