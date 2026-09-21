export interface Stat {
  /** Valor numérico para el contador animado. `null` = valor no numérico (∞). */
  readonly value: number | null;
  readonly display: string;
  readonly suffix?: string;
  readonly label: string;
}

export const stats: readonly Stat[] = [
  { value: 26, display: "26", label: "repos públicos" },
  { value: 1, display: "1", label: "hackathon" },
  { value: null, display: "∞", label: "cafés" },
  { value: 2, display: "2", suffix: "º", label: "año de DAW" },
];

export interface TypedPhrase {
  readonly text: string;
}

export const heroPhrases: readonly string[] = [
  "Web Developer",
  "Estudiante de DAW",
  "Superviviente de hackathon",
  "Resuelvo problemas",
];
