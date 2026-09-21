import { prefersReducedMotion } from "./prefers-motion";

const easeOutExpo = (t: number): number => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

/**
 * Contadores que cuentan al entrar en viewport.
 * Se anima con requestAnimationFrame y un ease real, no lineal:
 * el arranque rápido con frenada larga es lo que lo hace sentir vivo.
 */
export function initCounters(): void {
  const nodes = document.querySelectorAll<HTMLElement>("[data-counter]");
  if (nodes.length === 0) return;

  if (prefersReducedMotion()) {
    nodes.forEach((el) => {
      el.textContent = el.dataset.counter ?? el.textContent;
    });
    return;
  }

  const run = (el: HTMLElement) => {
    const target = Number(el.dataset.counter);
    if (!Number.isFinite(target)) return;

    const duration = Number(el.dataset.counterDuration ?? 1500);
    const start = performance.now();

    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      el.textContent = String(Math.round(easeOutExpo(progress) * target));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  };

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        run(entry.target as HTMLElement);
        observer.unobserve(entry.target);
      }
    },
    { threshold: 0.6 },
  );

  nodes.forEach((el) => {
    el.textContent = "0";
    observer.observe(el);
  });
}
