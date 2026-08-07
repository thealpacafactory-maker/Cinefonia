"use server";

import { google } from "googleapis";
import { contactSchema, type ContactFormData } from "@/schemas/forms";

export async function submitContactToSheet(data: ContactFormData) {
  // 1. Validar de nuevo en el servidor por seguridad
  const validationResult = contactSchema.safeParse(data);
  
  if (!validationResult.success) {
    const errorMessages = validationResult.error.issues.map(err => err.message).join(", ");
    return {
      success: false,
      error: `Datos no válidos: ${errorMessages}`,
    };
  }

  const { name, email, subject, message } = validationResult.data;

  // 2. Extraer variables de entorno
  const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
  const privateKey = process.env.GOOGLE_PRIVATE_KEY;
  const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID;

  // 3. Simulación para desarrollo local si no hay credenciales configuradas
  if (!clientEmail || !privateKey || !spreadsheetId) {
    console.log("----- [SIMULACIÓN GOOGLE SHEETS CONTACTO] -----");
    console.log(`Spreadsheet ID: ${spreadsheetId || "NO CONFIGURADO"}`);
    console.log(`Fila a insertar:`, [
      new Date().toLocaleString("es-PE", { timeZone: "America/Lima" }),
      name,
      email,
      subject,
      message
    ]);
    console.log("-----------------------------------------------");

    return {
      success: true,
      simulated: true,
      message: "Mensaje de contacto simulado con éxito (modo desarrollo, sin credenciales de Sheets)."
    };
  }

  try {
    // 4. Formatear la clave privada
    let formattedPrivateKey = privateKey.replace(/\\n/g, "\n");
    if (formattedPrivateKey.startsWith('"') && formattedPrivateKey.endsWith('"')) {
      formattedPrivateKey = formattedPrivateKey.slice(1, -1);
    }

    // 5. Inicializar autenticación JWT
    const auth = new google.auth.JWT({
      email: clientEmail,
      key: formattedPrivateKey,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    // 6. Preparar fila con zona horaria de Perú
    const timestamp = new Date().toLocaleString("es-PE", { timeZone: "America/Lima" });
    const rowValues = [
      timestamp,
      name,
      email,
      subject,
      message
    ];

    // 7. Enviar petición append
    // Rango A:E por defecto para escribir en la primera pestaña y evitar fallos por nombre de hoja
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "A:E",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [rowValues],
      },
    });

    return {
      success: true,
    };

  } catch (error) {
    console.error("Excepción al conectar con Google Sheets (Contacto):", error);
    const errorMessage = error instanceof Error ? error.message : "Ocurrió un error inesperado al enviar tu mensaje.";
    return {
      success: false,
      error: errorMessage,
    };
  }
}
