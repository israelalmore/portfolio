/**
 * Barra de progreso de scroll.
 * Animamos scaleX (propiedad de compositor) en vez de width, que
 * dispararía layout en cada frame. Misma imagen, coste distinto.
 */
export function initScrollProgress(bar: HTMLElement | null): void {
  if (!bar) return;

  let frame = 0;

  const update = () => {
    frame = 0;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = max > 0 ? window.scrollY / max : 0;
    bar.style.transform = `scaleX(${Math.min(Math.max(ratio, 0), 1)})`;
  };

  window.addEventListener(
    "scroll",
    () => {
      if (frame === 0) frame = requestAnimationFrame(update);
    },
    { passive: true },
  );

  update();
}

/**
 * Header que se condensa al hacer scroll.
 * Usamos un sentinel + IntersectionObserver: no hay listener de scroll,
 * el navegador nos avisa a nosotros.
 */
export function initHeaderState(header: HTMLElement | null): void {
  if (!header) return;

  const sentinel = document.createElement("div");
  sentinel.setAttribute("aria-hidden", "true");
  sentinel.style.cssText = "position:absolute;top:0;height:60px;width:1px;";
  document.body.prepend(sentinel);

  new IntersectionObserver(
    ([entry]) => {
      header.dataset.scrolled = String(!entry?.isIntersecting);
    },
    { threshold: 0 },
  ).observe(sentinel);
}

/**
 * Scrollspy: marca el enlace de la sección visible.
 * aria-current no es decoración — es lo que hace que un lector de
 * pantalla sepa dónde está el usuario.
 */
export function initScrollSpy(): void {
  const sections = document.querySelectorAll<HTMLElement>("section[id]");
  const links = new Map<string, HTMLAnchorElement>();

  document
    .querySelectorAll<HTMLAnchorElement>("[data-nav-link]")
    .forEach((link) => {
      const id = link.getAttribute("href")?.replace("#", "");
      if (id) links.set(id, link);
    });

  if (sections.length === 0 || links.size === 0) return;

  const visible = new Set<string>();

  const paint = () => {
    // De todas las secciones visibles gana la primera en orden de documento.
    let active: string | null = null;
    for (const section of sections) {
      if (visible.has(section.id)) {
        active = section.id;
        break;
      }
    }
    links.forEach((link, id) => {
      if (id === active) link.setAttribute("aria-current", "true");
      else link.removeAttribute("aria-current");
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        const id = (entry.target as HTMLElement).id;
        if (entry.isIntersecting) visible.add(id);
        else visible.delete(id);
      }
      paint();
    },
    { rootMargin: "-45% 0px -45% 0px" },
  );

  sections.forEach((section) => observer.observe(section));
}

/** Menú móvil: abrir, cerrar con Escape y cerrar al navegar. */
export function initMobileMenu(
  toggle: HTMLElement | null,
  panel: HTMLElement | null,
): void {
  if (!toggle || !panel) return;

  const setOpen = (open: boolean) => {
    toggle.setAttribute("aria-expanded", String(open));
    panel.dataset.open = String(open);
    document.body.style.overflow = open ? "hidden" : "";
  };

  toggle.addEventListener("click", () => {
    setOpen(toggle.getAttribute("aria-expanded") !== "true");
  });

  panel.addEventListener("click", (event) => {
    if ((event.target as HTMLElement).closest("a")) setOpen(false);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setOpen(false);
  });
}
