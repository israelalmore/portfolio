import { prefersReducedMotion } from "./prefers-motion";

/**
 * Spotlight en tarjetas.
 *
 * Delegación de eventos: UN listener en document en vez de N listeners
 * (uno por tarjeta). Escribimos custom properties y dejamos que el
 * compositor haga el resto — cero reflow.
 */
export function initSpotlight(): void {
  if (prefersReducedMotion()) return;
  if (!window.matchMedia("(pointer: fine)").matches) return;

  let frame = 0;
  let pending: { el: HTMLElement; x: number; y: number } | null = null;

  const flush = () => {
    frame = 0;
    if (!pending) return;
    const { el, x, y } = pending;
    el.style.setProperty("--mx", `${x}%`);
    el.style.setProperty("--my", `${y}%`);
    pending = null;
  };

  document.addEventListener(
    "pointermove",
    (event) => {
      const target = (event.target as HTMLElement | null)?.closest<HTMLElement>(
        ".spotlight",
      );
      if (!target) return;

      const rect = target.getBoundingClientRect();
      pending = {
        el: target,
        x: ((event.clientX - rect.left) / rect.width) * 100,
        y: ((event.clientY - rect.top) / rect.height) * 100,
      };
      // Coalescemos a un único write por frame.
      if (frame === 0) frame = requestAnimationFrame(flush);
    },
    { passive: true },
  );
}

/**
 * Botones magnéticos: el elemento se inclina hacia el cursor.
 * Sutil a propósito — 8px de desplazamiento máximo. Si se nota,
 * está mal calibrado.
 */
export function initMagnetic(): void {
  if (prefersReducedMotion()) return;
  if (!window.matchMedia("(pointer: fine)").matches) return;

  document.querySelectorAll<HTMLElement>("[data-magnetic]").forEach((el) => {
    const strength = Number(el.dataset.magnetic || 8);
    let frame = 0;

    const move = (event: PointerEvent) => {
      if (frame) cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const dx = (event.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
        const dy = (event.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
        el.style.transform = `translate3d(${dx * strength}px, ${dy * strength}px, 0)`;
      });
    };

    const reset = () => {
      if (frame) cancelAnimationFrame(frame);
      el.style.transform = "translate3d(0, 0, 0)";
    };

    el.addEventListener("pointermove", move, { passive: true });
    el.addEventListener("pointerleave", reset, { passive: true });
    el.addEventListener("blur", reset);
  });
}
