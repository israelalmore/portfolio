/**
 * Fuente única de verdad sobre si el usuario acepta movimiento.
 * Cada módulo de animación pregunta aquí antes de animar nada.
 */
const query = "(prefers-reduced-motion: reduce)";

export const prefersReducedMotion = (): boolean =>
  typeof window !== "undefined" && window.matchMedia(query).matches;

export const onMotionPreferenceChange = (
  handler: (reduced: boolean) => void,
): void => {
  window.matchMedia(query).addEventListener("change", (event) => {
    handler(event.matches);
  });
};
