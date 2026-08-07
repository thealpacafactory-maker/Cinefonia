/**
 * Helper to combine CSS class names conditionally.
 */
export function cn(...classes: (string | undefined | null | boolean)[]) {
  return classes.filter(Boolean).join(" ");
}

/**
 * Formats a ISO date string to a human-readable date.
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("es-PE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

/**
 * Parses a Spanish formatted date string (e.g. "9 DIC 2024", "06 NOV 2024") safely
 * into an ISO date string format. Falls back to current date instead of throwing.
 */
export function parseSpanishDate(dateStr: string): string {
  try {
    if (!dateStr) return new Date().toISOString();

    const parsed = new Date(dateStr);
    if (!isNaN(parsed.getTime())) {
      return parsed.toISOString();
    }

    // Procesa cadenas como "9 DIC 2024" o "06 NOV 2024"
    const parts = dateStr.trim().split(/\s+/);
    if (parts.length === 3) {
      const day = parseInt(parts[0], 10);
      const year = parseInt(parts[2], 10);
      const months: { [key: string]: number } = {
        ENE: 0, ENERO: 0,
        FEB: 1, FEBRERO: 1,
        MAR: 2, MARZO: 2,
        ABR: 3, ABRIL: 3,
        MAY: 4, MAYO: 4,
        JUN: 5, JUNIO: 5,
        JUL: 6, JULIO: 6,
        AGO: 7, AGOSTO: 7,
        SET: 8, SEP: 8, SEPTIEMBRE: 8,
        OCT: 9, OCTUBRE: 9,
        NOV: 10, NOVIEMBRE: 10,
        DIC: 11, DICIEMBRE: 11
      };
      
      const monthStr = parts[1].toUpperCase().replace(/\./g, "");
      const month = months[monthStr];

      if (month !== undefined && !isNaN(day) && !isNaN(year)) {
        return new Date(year, month, day).toISOString();
      }
    }
  } catch (error) {
    console.error("Excepción al parsear fecha en español:", dateStr, error);
  }

  // Fallback seguro a la fecha actual para evitar errores del tipo Invalid time value
  return new Date().toISOString();
}
