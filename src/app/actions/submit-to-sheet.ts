"use server";

import { google } from "googleapis";
import { sponsorSchema, type SponsorFormData } from "@/schemas/forms";

export async function submitToSheet(data: SponsorFormData) {
  // 1. Validar de nuevo en el servidor por seguridad
  const validationResult = sponsorSchema.safeParse(data);
  
  if (!validationResult.success) {
    const errorMessages = validationResult.error.issues.map(err => err.message).join(", ");
    return {
      success: false,
      error: `Datos no válidos: ${errorMessages}`,
    };
  }

  const { companyName, contactName, email, phone, sponsorLevel, proposal } = validationResult.data;

  // 2. Extraer variables de entorno para autenticación
  const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
  const privateKey = process.env.GOOGLE_PRIVATE_KEY;
  const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID;

  // 3. Simulación para desarrollo local si faltan credenciales
  if (!clientEmail || !privateKey || !spreadsheetId) {
    console.log("----- [SIMULACIÓN GOOGLE SHEETS] -----");
    console.log(`Spreadsheet ID: ${spreadsheetId || "NO CONFIGURADO"}`);
    console.log(`Fila a insertar:`, [
      new Date().toLocaleString("es-PE", { timeZone: "America/Lima" }),
      companyName,
      contactName,
      email,
      phone,
      sponsorLevel,
      proposal
    ]);
    console.log("--------------------------------------");

    return {
      success: true,
      simulated: true,
      message: "Registro simulado con éxito (modo desarrollo, sin credenciales de Google Sheets)."
    };
  }

  try {
    // 4. Formatear la clave privada para soportar saltos de línea (\n)
    //const formattedPrivateKey = privateKey.replace(/\\n/g, "\n");
    const formattedPrivateKey = privateKey.replace(/\\n/g, "\n");
    // 5. Inicializar la autenticación con JWT (Service Account)
    const auth = new google.auth.JWT({
      email: clientEmail,
      key: formattedPrivateKey,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    // 6. Preparar datos de la fila
    // Zona horaria de Perú
    const timestamp = new Date().toLocaleString("es-PE", { timeZone: "America/Lima" });
    const rowValues = [
      timestamp,
      companyName,
      contactName,
      email,
      phone,
      sponsorLevel,
      proposal
    ];

    // 7. Enviar petición append a Google Sheets
    // Rango A:G para registrar todas las columnas
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "A:G",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [rowValues],
      },
    });

    return {
      success: true,
    };

  } catch (error) {
    console.error("Excepción al conectar con Google Sheets:", error);
    const errorMessage = error instanceof Error ? error.message : "Ocurrió un error inesperado al procesar el registro.";
    return {
      success: false,
      error: errorMessage,
    };
  }
}
