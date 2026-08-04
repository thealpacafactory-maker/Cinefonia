# Arquitectura y Estrategia - CINEFONÍA Nights MVP

Este documento detalla las decisiones técnicas, estructurales y metodológicas para el desarrollo de la plataforma digital **CINEFONÍA Nights**, optimizada para alta concurrencia, posicionamiento SEO avanzado e inmersión visual.

---

## 1. Decisiones del Stack Técnico

### Next.js 15 (App Router) + React 19 + TypeScript
- **App Router:** Aprovecha la división automática de código (*Code Splitting*), componentes de servidor por defecto (*React Server Components - RSC*), optimización nativa de metadatos y estrategias avanzadas de renderizado como ISR/SSG.
- **React 19:** Incluye mejoras de rendimiento para el cliente y mejor manejo de estados asíncronos y transiciones.
- **TypeScript Estricto:** Asegura la robustez del código y reduce fallas en tiempo de ejecución.

### Tailwind CSS v4
- **Optimización de Estilos:** Se configura directamente en CSS mediante `@theme`, eliminando la necesidad de archivos javascript/typescript adicionales para la compilación de estilos. Aporta mayor velocidad de construcción y reduce el tamaño de los bundles.
- **Diseño Inmersivo y Oscuro:** La paleta está construida sobre azules profundos y negros mate con acentos en dorados metálicos y cobre para un aspecto elegante y teatral.

### Rendimiento y Caching (ISR / SSG)
- El contenido estático (páginas como Términos, Política de Privacidad, Artistas) se generará como **SSG (Static Site Generation)**.
- Las páginas de contenido dinámico (Noticias, Blog y el Concierto) usarán **ISR (Incremental Static Regeneration)** con un tiempo de revalidación corto para picos de tráfico. De este modo, la carga del servidor es prácticamente nula ante picos altos de tráfico, entregando HTML estático desde la CDN (Vercel Edge Network).

---

## 2. Estructura de Directorios

El código de la aplicación se distribuye en `src/` bajo los siguientes lineamientos:

```
src/
├── app/                   # Capa de presentación y ruteo (App Router)
│   ├── api/               # Endpoint APIs (contacto, rate limiting)
│   ├── (legales)/         # Páginas estáticas secundarias
│   ├── noticias/          # Blog / Noticias dinámicas
│   └── page.tsx           # Homepage cinematográfica principal
├── components/            # Componentes de UI modulares y reutilizables
│   ├── ui/                # Componentes atómicos (botones, tarjetas, animaciones)
│   ├── layout/            # Layouts globales (Header, Footer, Navbar)
│   └── sections/          # Secciones principales de la Homepage
├── lib/                   # Configuración de librerías, utilidades (Zod, MDX)
├── schemas/               # Esquemas de validación (Zod)
└── types/                 # Interfaces y definiciones de TypeScript
```

---

## 3. Estrategia de SEO Técnico

El sitio web está diseñado para competir en los primeros puestos de motores de búsqueda:

1. **Metadata Dinámica y SEO Semántico:**
   - Estructuración de etiquetas `title` y `meta description` para cada página.
   - Configuración de etiquetas **Open Graph** (OG) y **Twitter Cards** para una visualización premium en redes sociales.
   - Marcado de **URLs Canonical** estricto para evitar contenido duplicado.

2. **Marcado de Datos Estructurados (Schema.org JSON-LD):**
   - **`Event` Schema:** Implementado en la página del concierto (22 de agosto de 2026), permitiendo a Google indexar el evento directamente en su buscador y calendar.
   - **`MusicGroup` y `Organization` Schemas:** Para declarar a los artistas del recital y al organizador de CINEFONÍA Nights.
   - **`Article` Schema:** Para noticias y publicaciones de blog.

3. **Core Web Vitals:**
   - **CLS (Cumulative Layout Shift) = 0:** Garantizado cargando fuentes locales a través de `next/font/google` y estableciendo dimensiones obligatorias a las imágenes con `next/image`.
   - **LCP (Largest Contentful Paint) < 1.2s:** Uso del formato de imagen optimizado (AVIF/WebP) y precarga prioritaria del Hero principal.

---

## 4. Seguridad Mínima

- **Validación en Formularios:** Validación de datos mediante esquemas estrictos de Zod en el cliente y servidor para garantizar la consistencia e integridad de los datos en los formularios de contacto y alianzas.
