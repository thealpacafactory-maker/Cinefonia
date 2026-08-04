# Estructura de Datos por Página - CINEFONÍA Nights

Este documento describe la especificación de datos (TypeScript Interfaces y Esquemas Zod) utilizada en cada una de las páginas interiores y formularios de la plataforma para asegurar la robustez de la aplicación durante la fase de desarrollo.

---

## 1. Homepage (`/`)

### Schema.org Event (JSON-LD)
Para la correcta indexación de motores de búsqueda, se inyecta un marcado de datos estructurados de tipo `Event` con la siguiente estructura:
- **`name`**: Nombre oficial del recital.
- **`startDate`**: Fecha y hora de inicio en formato ISO (`2026-08-22T19:30:00-05:00`).
- **`endDate`**: Fecha y hora de finalización en formato ISO (`2026-08-22T21:00:00-05:00`).
- **`location`**: Objeto de tipo `Place` con dirección física y región de Arequipa.
- **`performer`**: Lista de objetos de tipo `Person` para declarar al ensamble de cámara.

---

## 2. Agenda de Eventos (`/eventos`)

### Interfaz `EventShow`
Representa a cada una de las funciones del recital, permitiendo expandir la cartelera en futuras giras:
```typescript
interface EventShow {
  id: string;          // Identificador único (ej. "aqp-2026")
  title: string;       // Título descriptivo de la función
  date: string;        // Fecha legible por humanos
  time: string;        // Hora de inicio (ej. "19:30")
  location: string;    // Nombre del teatro y dirección
  city: string;        // Ciudad de la presentación
  capacity: string;    // Aforo total disponible (ej. "850 personas")
  duration: string;    // Duración de la función (ej. "75 minutos sin intermedio")
  concept: string;     // Descripción artística específica de la función
  status: "active" | "soon"; // Estado de venta de entradas
}
```

---

## 3. Nuestros Artistas (`/artistas`)

### Interfaz `Artist`
Estructura la información académica, biográfica e instrumental del ensamble:
```typescript
interface Artist {
  name: string;        // Nombre completo del artista
  role: string;        // Cargo artístico en el ensamble (ej. "Dirección Musical / Flauta")
  instrument: string;  // Instrumento principal ejecutado en escena
  bio: string;         // Biografía corta descriptiva
  trajectory: string;  // Detalle académico y trayectoria profesional complementaria
}
```

---

## 4. Patrocinadores (`/patrocinadores`)

### Interfaz `TierInfo`
Estructura los beneficios del programa corporativo de captación de marcas:
```typescript
interface TierInfo {
  name: string;        // Nombre del nivel (Socio Principal, Socio Estratégico, etc.)
  description: string; // Resumen del nivel
  benefits: string[];  // Lista de beneficios específicos
  icon: React.ComponentType<{ className?: string }>; // Icono de Lucide
  color: string;       // Clases CSS específicas de color
}
```

---

## 5. Ecosistema de Contenido (Noticias y Blog)

### Interfaz `NewsPlaceholder`
Especificación para los comunicados de prensa en `/noticias`:
```typescript
interface NewsPlaceholder {
  slug: string;        // URL semántica amigable (ej. "estreno-arequipa-2026")
  title: string;       // Título de la noticia
  category: string;    // Categoría del comunicado
  date: string;        // Fecha de publicación
  readTime: string;    // Estimación del tiempo de lectura
  description: string; // Resumen del cuerpo de la noticia
}
```

### Interfaz `BlogPlaceholder`
Especificación para los artículos analíticos y divulgativos en `/blog`:
```typescript
interface BlogPlaceholder {
  slug: string;        // URL amigable
  title: string;       // Título del artículo
  category: string;    // Temática musicológica
  date: string;        // Fecha de publicación
  readTime: string;    // Tiempo de lectura estimado
  excerpt: string;     // Breve fragmento introductorio
}
```

---

## 6. Validación de Formularios (Esquemas Zod)

Definidos en [`src/schemas/forms.ts`](file:///home/fx00/projects/cinefonia-app/src/schemas/forms.ts).

### Contacto (`/contacto`) - `contactSchema`
- **`name`**: Cadena obligatoria (mínimo 3, máximo 100 caracteres).
- **`email`**: Dirección de correo electrónico corporativo o personal válido.
- **`subject`**: Asunto del mensaje (mínimo 5, máximo 150 caracteres).
- **`message`**: Cuerpo del mensaje (mínimo 10, máximo 2000 caracteres).

### Patrocinios (`/quiero-auspiciar` y Homepage) - `sponsorSchema`
- **`companyName`**: Nombre corporativo (mínimo 2, máximo 120 caracteres).
- **`contactName`**: Nombre del representante de la marca (mínimo 3, máximo 100 caracteres).
- **`email`**: Correo electrónico corporativo de contacto válido.
- **`phone`**: Teléfono de contacto (mínimo 6, máximo 20 caracteres).
- **`sponsorLevel`**: Selección estricta dentro de los niveles de patrocinio aceptados.
- **`proposal`**: Propuesta de alianza o interés comercial (mínimo 10, máximo 2000 caracteres).
