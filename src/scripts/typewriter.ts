import { prefersReducedMotion } from "./prefers-motion";

interface TypewriterOptions {
  readonly typeSpeed?: number;
  readonly deleteSpeed?: number;
  readonly holdTime?: number;
  readonly pauseTime?: number;
}

/**
 * Máquina de escribir.
 *
 * El original usaba 5 piezas de estado de React y un useEffect que se
 * reejecutaba en cada carácter — un re-render por letra. Aquí es un
 * bucle recursivo con setTimeout: cero renders, cero framework.
 */
export function initTypewriter(
  target: HTMLElement | null,
  phrases: readonly string[],
  options: TypewriterOptions = {},
): void {
  if (!target || phrases.length === 0) return;

  const { typeSpeed = 68, deleteSpeed = 34, holdTime = 1900, pauseTime = 420 } = options;

  // Sin movimiento: se muestra la primera frase, fija. Sigue comunicando.
  if (prefersReducedMotion()) {
    target.textContent = phrases[0] ?? "";
    return;
  }

  let phraseIndex = 0;
  let charIndex = 0;
  let deleting = false;
  let timer: number | undefined;

  const tick = () => {
    const phrase = phrases[phraseIndex] ?? "";
    let delay = typeSpeed;

    if (!deleting) {
      charIndex += 1;
      if (charIndex === phrase.length) {
        deleting = true;
        delay = holdTime;
      }
    } else {
      charIndex -= 1;
      delay = deleteSpeed;
      if (charIndex === 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        delay = pauseTime;
      }
    }

    target.textContent = phrase.slice(0, charIndex);
    timer = window.setTimeout(tick, delay);
  };

  // Pausamos cuando la pestaña no está visible: no gastamos batería
  // animando algo que nadie está mirando.
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      window.clearTimeout(timer);
    } else {
      timer = window.setTimeout(tick, typeSpeed);
    }
  });

  tick();
}
