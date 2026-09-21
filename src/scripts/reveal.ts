import { prefersReducedMotion } from "./prefers-motion";

/**
 * Scroll reveal.
 *
 * UN solo IntersectionObserver para toda la página. El patrón alternativo
 * —un listener de scroll que recalcula getBoundingClientRect()— fuerza
 * layout en cada frame y tira los FPS. Esto no toca el hilo principal.
 */
export function initReveal(): void {
  const targets = document.querySelectorAll<HTMLElement>("[data-reveal]");
  if (targets.length === 0) return;

  // Sin movimiento: mostramos todo de inmediato y no observamos nada.
  if (prefersReducedMotion()) {
    targets.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("is-visible");
        // Una vez revelado, deja de observarse: no repetimos la animación.
        observer.unobserve(entry.target);
      }
    },
    { rootMargin: "0px 0px -12% 0px", threshold: 0.12 },
  );

  targets.forEach((el) => observer.observe(el));
}

/**
 * Parte el texto en palabras envueltas en máscaras para el revelado
 * escalonado de titulares. Se hace en cliente para no romper el SEO:
 * el HTML servido lleva el titular completo en texto plano.
 */
export function splitHeadings(): void {
  if (prefersReducedMotion()) return;

  document.querySelectorAll<HTMLElement>("[data-split]").forEach((el) => {
    if (el.dataset.splitDone === "true") return;

    const stagger = Number(el.dataset.splitStagger ?? 55);
    const fragment = document.createDocumentFragment();
    let wordIndex = 0;

    el.childNodes.forEach((node) => {
      if (node.nodeType === Node.ELEMENT_NODE && (node as Element).tagName === "BR") {
        fragment.appendChild(node.cloneNode());
        return;
      }

      const source = node.textContent ?? "";
      const host =
        node.nodeType === Node.ELEMENT_NODE ? (node.cloneNode(false) as HTMLElement) : null;
      const sink: Node = host ?? fragment;

      source.split(/(\s+)/).forEach((chunk) => {
        if (chunk.trim() === "") {
          sink.appendChild(document.createTextNode(chunk));
          return;
        }
        const mask = document.createElement("span");
        mask.className = "split-word";
        const inner = document.createElement("span");
        inner.textContent = chunk;
        inner.style.setProperty("--word-delay", `${wordIndex * stagger}ms`);
        wordIndex += 1;
        mask.appendChild(inner);
        sink.appendChild(mask);
      });

      if (host) fragment.appendChild(host);
    });

    el.replaceChildren(fragment);
    el.dataset.splitDone = "true";
  });
}
