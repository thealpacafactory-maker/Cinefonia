
# Checklist de Despliegue - CINEFONÍA Nights MVP

Este documento registra el progreso del desarrollo por hitos del MVP público profesional.

- [x] **Hito 1: Fundación y Arquitectura Base**
  - [x] Inicialización del repositorio y confirmación del stack (Next.js 15, React 19).
  - [x] Instalación de dependencias críticas (`lucide-react`, `framer-motion`, `zod`, `react-hook-form`, `@hookform/resolvers`).
  - [x] Configuración del sistema de estilos de Tailwind CSS v4 (`globals.css`) con la paleta de colores oscuros/dorados/cobrizos y tipografía cinematográfica (`Cinzel` y `Geist`).
  - [x] Creación del Layout base (`layout.tsx`) integrando el Header y Footer premium.
  - [x] Implementación inicial de metadatos SEO y componente JSON-LD estructurado.
  - [x] Configuración de variables de entorno con `.env.example` y `.env`.
  - [x] Creación de `CHECKLIST.md`, `README.md` y `docs/arquitectura.md`.
  - [x] Verificación de errores de TypeScript y compilación (`npm run build`).

- [x] **Hito 2: Construcción Visual de la Homepage**
  - [x] Diseño Pixel-Perfect de la Homepage cinematográfica.
  - [x] Hero Section con los botones CTA funcionales y elementos interactivos.
  - [x] Sección de "Próximos Recitales" (Tarjetas de fechas y locaciones).
  - [x] Grid interactivo de "La Experiencia" (4 pilares con micro-animaciones).
  - [x] Grid de "Artistas Destacados" con imágenes estilizadas.
  - [x] Grid jerárquico de "Patrocinadores" (Socio Principal, Socio Estratégico, etc.).
  - [x] Integración del formulario de captación de alianzas.
  - [x] Sección de carrusel para "Noticias y Blog".

- [x] **Hito 3: Ecosistema de Páginas Interiores y Formularios**
  - [x] Rutas mínimas completas (`/eventos`, `/artistas`, `/patrocinadores`, `/noticias`, `/blog`, `/contacto`, `/quiero-auspiciar`).
  - [x] Desarrollo de formularios de contacto y auspicio integrando React Hook Form + Zod.
  - [x] Implementación de APIs seguras de envío con validación en servidor.

- [ ] **Hito 4: Motor de Contenido y SEO Técnico**
  - [ ] Configuración del sistema de renderizado Markdown/MDX para `/blog/[slug]` y `/noticias/[slug]`.
  - [ ] Generación automática de `sitemap.xml` y `robots.txt`.
  - [ ] Schema.org estructurado detallado en todas las páginas clave (Eventos, Artistas, Blog).

- [ ] **Hito 5: Optimización Extrema y Paso a Producción**
  - [ ] Auditoría extrema de Lighthouse móvil (Performance >=95, Accessibility/Best Practices/SEO = 100).
  - [ ] Optimización de fuentes, carga diferida e imágenes en formato AVIF/WebP.
  - [ ] Verificación de accesibilidad WCAG 2.2 AA.
  - [ ] Pruebas finales de estrés de red para tráfico elevado.
  - [ ] Despliegue final en producción y documentación de entrega.
