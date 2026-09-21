# Portfolio — Israel Alcántara

Portfolio personal construido con **Astro 7**, **Tailwind CSS v4** y **pnpm**.
Cero JavaScript de framework en cliente: todo el movimiento es CSS + un puñado
de módulos de TypeScript vanilla.

🔗 https://israelalmore.github.io/portfolio

---

## Arranque

```bash
pnpm install
pnpm dev        # http://localhost:4321
pnpm build      # astro check + astro build → dist/
pnpm preview    # sirve dist/ localmente
```

## Arquitectura

```
src/
├── data/          Contenido como datos tipados — la única fuente de verdad
├── components/
│   ├── ui/        Piezas reutilizables (Button, Reveal, ProjectCard…)
│   ├── layout/    Header, Footer
│   └── sections/  Secciones de la página (Hero, About, Stack…)
├── layouts/       BaseLayout: head, metadatos, SEO, JSON-LD
├── scripts/       Módulos de animación en TS vanilla
├── styles/        global.css — tokens de diseño en @theme
└── pages/         index.astro
```

**La regla:** para cambiar un proyecto, una tecnología o un dato de contacto
se edita un archivo de `src/data/`. Nunca el markup.

## Sistema de diseño

Todos los tokens viven en el bloque `@theme` de `src/styles/global.css`:
color, escala tipográfica fluida, ritmo vertical, radios y curvas de easing.
Si un valor no está ahí, no se usa en un componente. Cero magic numbers.

## Animaciones

| Efecto | Implementación |
|---|---|
| Scroll reveal escalonado | Un `IntersectionObserver` global + custom properties |
| Titulares palabra a palabra | Split en cliente con máscaras CSS (HTML servido sin tocar → SEO intacto) |
| Spotlight en tarjetas | Delegación de eventos + `requestAnimationFrame` |
| Botones magnéticos | `transform` sobre el compositor, 6px máximo |
| Marquee infinito | Pista duplicada + `translate3d(-50%)` |
| Contadores | `requestAnimationFrame` con ease-out-expo |
| Progreso de lectura | `scaleX`, nunca `width` |
| Máquina de escribir | `setTimeout` recursivo, pausa con la pestaña oculta |

Todo respeta `prefers-reduced-motion: reduce`. Con esa preferencia activa el
sitio se muestra completo y estático — no se degrada, se adapta.

## Despliegue

Push a `main` → GitHub Actions construye con pnpm y publica en GitHub Pages.
El `base: "/portfolio"` de `astro.config.mjs` debe coincidir con el nombre del
repositorio.
