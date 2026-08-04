
# PROMPT MAESTRO: CINEFONÍA Nights MVP

Actúa como Arquitecto de Software Senior, Desarrollador Experto en React y Next.js 15, Especialista en SEO Técnico de alto tráfico, Experto en UI/UX Web y Seguridad.

Debes construir la estructura base y desplegar por hitos el MVP público profesional de **CINEFONÍA Nights**, una plataforma digital para una experiencia cultural y musical de alto impacto. El evento central es un concierto de música de cámara y cine que se estrenará el 22 de agosto de 2026 en el Teatro Municipal de Arequipa, para 850 personas. La plataforma debe estar preparada para un alto volumen de tráfico, posicionar primero en motores de búsqueda (SEO) y captar patrocinios.

**REGLAS DE EJECUCIÓN**
1. Trabaja directamente en el repositorio actual. Antes de modificar código, inspecciona todos los archivos.
2. Crea y mantén `README.md` y la carpeta `docs/` con la arquitectura, estrategia SEO, despliegue y analítica.
3. Prioriza una URL Preview funcional en el primer hito. Primero publicar, luego perfeccionar.
4. No pidas confirmación para decisiones reversibles. Elige soluciones modernas, seguras, de alto rendimiento y documenta la decisión.
5. El diseño debe ser **elegante, cinematográfico, inmersivo y premium** (inspirado en la imagen de referencia provista): paleta de colores oscuros (Dark Mode por defecto, azules marinos/negros) con acentos dorados/cobrizos y tipografías serif clásicas combinadas con sans-serif modernas y legibles. Evita animaciones pesadas que afecten el rendimiento, pero incluye micro-interacciones suaves (Framer Motion ligero) para una sensación de lujo.
6. No inventes datos. Utiliza estrictamente la información proporcionada.
7. Oculta todos los secretos usando variables de entorno y crea un `.env.example`.
8. Cada bloque de trabajo debe terminar con build, pruebas estrictas de TypeScript, commit y despliegue.

**STACK BASE Y ARQUITECTURA**
- **Framework:** Next.js 15+ (App Router), React 19, TypeScript estricto.
- **Estilos:** Tailwind CSS v4, componentes accesibles (Radix UI o shadcn/ui adaptado al diseño cinematográfico).
- **Optimización:** `next/image` (formatos AVIF/WebP), `next/font` (fuentes optimizadas para CLS cero).
- **Validación y Formularios:** React Hook Form + Zod.
- **Rendimiento:** Estrategias avanzadas de caching de Next.js (ISR/SSG) para soportar altos picos de tráfico sin caerse.
- **Hosting:** Vercel para Preview y Production.

**RUTAS MÍNIMAS**
`/` (Inicio), `/eventos`, `/artistas`, `/patrocinadores`, `/noticias`, `/noticias/[slug]`, `/blog`, `/blog/[slug]`, `/contacto`, `/quiero-auspiciar`, `/politica-privacidad`, `/terminos`.

**ESTRUCTURA DE LA HOMEPAGE (Obligatorio seguir el diseño visual)**
1. **Hero Section:** Título "CINEFONÍA Nights - La música del cine, vivida en escena". Fecha: 22 de agosto de 2026, Lugar: Teatro Municipal de Arequipa. Botones CTA: "Ver Recital" y "Quiero Auspiciar".
2. **Próximos Recitales:** Tarjetas visuales con fechas y locaciones.
3. **La Experiencia:** Cuadrícula con 4 pilares: Música en vivo, Narración, Proyección, Emoción.
4. **Artistas Destacados:** Tarjetas con fotos en blanco y negro (María Lucía Roca, Julián Enríquez, etc.).
5. **Patrocinadores:** Grid de logos clasificados por jerarquía.
6. **Formulario "Construyamos algo extraordinario":** Formulario oscuro integrado para captación de alianzas.
7. **Noticias y Blog:** Carruseles o grids con los últimos artículos.
8. **Footer:** Logotipo, navegación, información legal, contacto (Arequipa, Perú) y redes sociales.

**CONTENIDO MÍNIMO INTEGRADO (Hardcoded inicial)**
- **Concepto:** Concierto de 75 minutos (58 minutos de música) sin intermedio.
- **Artistas:** María Lucía Roca Gamarra (Dirección Artística/Piano), Julián Enríquez (Dirección Musical/Flauta), Lucho Vera (Violín I), Mijael Jesús Cuarite Cáceres (Viola), Ederson Maquito Velarde (Violonchelo).
- **Niveles de Patrocinio:** Socio Principal, Socio Estratégico, Socio Cultural, Aliado Cultural, Colaboración personalizada.

**SEO TÉCNICO Y RENDIMIENTO (Prioridad Máxima)**
- Generación dinámica de `sitemap.xml` y `robots.txt`.
- Implementación exhaustiva de **Schema.org** (JSON-LD): `Event` (crucial para el concierto del 22 de agosto), `MusicGroup`, `Organization`, `WebSite`, `Article` para noticias.
- Metadata dinámica perfecta (Títulos, Descripciones, Open Graph 1200x630, Twitter Cards).
- URLs semánticas, etiquetas canonicals estrictas y breadcrumbs.
- Core Web Vitals objetivo: Performance >=95, Accessibility =100, Best Practices =100, SEO =100 en Lighthouse móvil.

**SEGURIDAD MÍNIMA**
- Validación estricta con Zod en cliente y servidor para los formularios de contacto y alianzas.
