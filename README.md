# CINEFONÍA Nights MVP

Plataforma digital para la experiencia cultural y musical de alto impacto **CINEFONÍA Nights**. Concierto de estreno de música de cámara y cine en vivo el **22 de agosto de 2026** en el Teatro Municipal de Arequipa (Capacidad: 850 personas). 

Este sitio web está optimizado para soportar un alto volumen de tráfico, lograr un posicionamiento SEO excepcional en buscadores y capturar patrocinadores de alta jerarquía.

---

## 🛠️ Stack Tecnológico y Arquitectura

- **Framework:** [Next.js 15.5](https://nextjs.org/) (App Router) y [React 19](https://react.dev/)
- **Estilos:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Validación de Formularios:** [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Iconografía:** [Lucide React](https://lucide.dev/)
- **SEO & Rendimiento:** Carga optimizada de imágenes (`next/image`), tipografías nativas (`next/font`), SSR/ISR para alta velocidad, Schema JSON-LD y generación dinámica de Sitemaps.
- **Hosting y Despliegue:** [Vercel](https://vercel.com/) (Preview & Production)

---

## 🚀 Cómo Empezar

### 1. Requisitos Previos

Asegúrate de tener instalado [Node.js](https://nodejs.org/) (versión 18 o superior) y npm en tu sistema.

### 2. Configurar Variables de Entorno

Copia el archivo de ejemplo de variables de entorno y define los valores correspondientes:

```bash
cp .env.example .env
```

### 3. Instalar Dependencias

Instala los módulos necesarios del proyecto:

```bash
npm install
```

### 4. Ejecutar Entorno de Desarrollo

Ejecuta el servidor de desarrollo local:

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

### 5. Compilar para Producción

Para compilar y optimizar la aplicación para producción:

```bash
npm run build
```

---

## 📂 Estructura del Proyecto

```
/
├── docs/                      # Documentación del proyecto (Arquitectura, SEO, GTM)
├── src/
│   ├── app/                   # Rutas de Next.js App Router
│   ├── components/            # Componentes visuales y de diseño (Header, Footer, UI, SEO)
│   ├── lib/                   # Funciones utilitarias y configuraciones comunes
│   ├── schemas/               # Esquemas de validación con Zod
│   └── types/                 # Interfaces TypeScript globales
```

---

## 🗺️ Progreso del Desarrollo (Hitos)

El desarrollo del MVP se divide en 5 hitos estructurados:
1. **Hito 1: Fundación y Arquitectura Base** (Completado)
2. **Hito 2: Construcción Visual de la Homepage** (Pendiente)
3. **Hito 3: Ecosistema de Páginas Interiores y Formularios** (Pendiente)
4. **Hito 4: Motor de Contenido, SEO Técnico y Analítica** (Pendiente)
5. **Hito 5: Optimización Extrema y Paso a Producción** (Pendiente)

Consulta los detalles y el estado detallado en [CHECKLIST.md](file:///home/fx00/projects/cinefonia-app/CHECKLIST.md).
Y las decisiones de diseño en [docs/arquitectura.md](file:///home/fx00/projects/cinefonia-app/docs/arquitectura.md).
