"use server";

import { Resend } from "resend";
import { sponsorSchema, type SponsorFormData, contactSchema, type ContactFormData } from "@/schemas/forms";

// Inicializa Resend con la API Key guardada en el entorno
const resend = new Resend(process.env.RESEND_API_KEY || "re_default_key");

export async function sendSponsorshipEmail(data: SponsorFormData) {
  // 1. Validar de nuevo en el servidor por seguridad (evitar inyecciones o bypass)
  const validationResult = sponsorSchema.safeParse(data);
  
  if (!validationResult.success) {
    // Formatea los errores de validación de Zod
    const errorMessages = validationResult.error.issues.map(err => err.message).join(", ");
    return {
      success: false,
      error: `Datos no válidos: ${errorMessages}`,
    };
  }

  const { companyName, contactName, email, phone, sponsorLevel, proposal } = validationResult.data;
  
  // 2. Definir destinatario del correo
  const contactEmail = process.env.CONTACT_EMAIL || "hola@cinefonianights.com";
  const apiKeyPresent = Boolean(process.env.RESEND_API_KEY);

  // 3. Simulación para desarrollo local en caso no haya una API Key configurada
  if (!apiKeyPresent) {
    console.log("----- [SIMULACIÓN CORREO SPONSOR] -----");
    console.log(`Para: ${contactEmail}`);
    console.log(`Asunto: Solicitud de Auspicio [${sponsorLevel}] - ${companyName}`);
    console.log(`Datos:`, { companyName, contactName, email, phone, sponsorLevel, proposal });
    console.log("---------------------------------------");
    
    // Retorna éxito simulado con indicación de desarrollo
    return {
      success: true,
      simulated: true,
      message: "Envío simulado con éxito (modo desarrollo, sin API Key de Resend)."
    };
  }

  try {
    // 4. Crear estructura HTML premium para el correo corporativo
    const htmlContent = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 30px; border: 1px solid #c5a880; background-color: #030712; color: #f3f4f6;">
        <div style="text-align: center; margin-bottom: 25px;">
          <h2 style="font-family: serif; color: #c5a880; border-bottom: 1px solid rgba(197,168,128,0.25); padding-bottom: 15px; margin: 0; text-transform: uppercase; letter-spacing: 0.15em;">
            CINEFONÍA Nights
          </h2>
          <p style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: #a1a1aa; margin: 8px 0 0 0;">
            Nueva propuesta de alianza estratégica
          </p>
        </div>
        
        <p style="font-size: 14px; line-height: 1.6; color: #d1d5db; margin-bottom: 25px;">
          Se ha recibido una nueva solicitud a través del formulario de patrocinio de la plataforma digital:
        </p>
        
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 25px;">
          <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
            <td style="padding: 10px 0; font-weight: bold; color: #c5a880; font-size: 13px; text-transform: uppercase; width: 180px;">Empresa / Entidad:</td>
            <td style="padding: 10px 0; color: #ffffff; font-size: 14px;">${companyName}</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
            <td style="padding: 10px 0; font-weight: bold; color: #c5a880; font-size: 13px; text-transform: uppercase;">Nombre de Contacto:</td>
            <td style="padding: 10px 0; color: #ffffff; font-size: 14px;">${contactName}</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
            <td style="padding: 10px 0; font-weight: bold; color: #c5a880; font-size: 13px; text-transform: uppercase;">Correo Electrónico:</td>
            <td style="padding: 10px 0; color: #ffffff; font-size: 14px;">
              <a href="mailto:${email}" style="color: #c37d53; text-decoration: none;">${email}</a>
            </td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
            <td style="padding: 10px 0; font-weight: bold; color: #c5a880; font-size: 13px; text-transform: uppercase;">Teléfono de Contacto:</td>
            <td style="padding: 10px 0; color: #ffffff; font-size: 14px;">${phone}</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
            <td style="padding: 10px 0; font-weight: bold; color: #c5a880; font-size: 13px; text-transform: uppercase;">Nivel de Auspicio:</td>
            <td style="padding: 10px 0; color: #c5a880; font-size: 14px; font-weight: bold;">${sponsorLevel}</td>
          </tr>
        </table>
        
        <div style="padding: 20px; background-color: #0b1329; border-left: 3px solid #c37d53; margin-top: 15px;">
          <p style="margin: 0 0 10px 0; font-weight: bold; color: #c5a880; font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em;">
            Mensaje / Propuesta de Alianza:
          </p>
          <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #e4e4e7; white-space: pre-line;">
            ${proposal}
          </p>
        </div>
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid rgba(197,168,128,0.15); text-align: center;">
          <p style="font-size: 11px; color: #71717a; margin: 0;">
            Este correo electrónico se generó automáticamente a partir del portal oficial de CINEFONÍA Nights.
          </p>
        </div>
      </div>
    `;

    // 5. Enviar el correo usando la API de Resend
    const response = await resend.emails.send({
      from: "Cinefonia Nights <onboarding@resend.dev>", // En producción, cambiar por un dominio verificado (ej. contacto@cinefonia-nights.pe)
      to: contactEmail,
      subject: `Solicitud de Auspicio [${sponsorLevel}] - ${companyName}`,
      html: htmlContent,
      replyTo: email,
    });

    if (response.error) {
      console.error("Error en API de Resend:", response.error);
      return {
        success: false,
        error: `Error al enviar correo: ${response.error.message}`,
      };
    }

    return {
      success: true,
    };

  } catch (error) {
    console.error("Excepción en sendSponsorshipEmail:", error);
    const errorMessage = error instanceof Error ? error.message : "Ocurrió un error inesperado al procesar tu solicitud.";
    return {
      success: false,
      error: errorMessage,
    };
  }
}

export async function sendContactEmail(data: ContactFormData) {
  // 1. Validar de nuevo en el servidor
  const validationResult = contactSchema.safeParse(data);
  
  if (!validationResult.success) {
    const errorMessages = validationResult.error.issues.map(err => err.message).join(", ");
    return {
      success: false,
      error: `Datos no válidos: ${errorMessages}`,
    };
  }

  const { name, email, subject, message } = validationResult.data;
  
  const contactEmail = process.env.CONTACT_EMAIL || "hola@cinefonianights.com";
  const apiKeyPresent = Boolean(process.env.RESEND_API_KEY);

  // Simulación para desarrollo
  if (!apiKeyPresent) {
    console.log("----- [SIMULACIÓN CORREO CONTACTO] -----");
    console.log(`Para: ${contactEmail}`);
    console.log(`Asunto: Contacto: ${subject}`);
    console.log(`Datos:`, { name, email, subject, message });
    console.log("----------------------------------------");
    
    return {
      success: true,
      simulated: true,
      message: "Contacto simulado con éxito (modo desarrollo, sin API Key de Resend)."
    };
  }

  try {
    const htmlContent = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 30px; border: 1px solid #c5a880; background-color: #030712; color: #f3f4f6;">
        <div style="text-align: center; margin-bottom: 25px;">
          <h2 style="font-family: serif; color: #c5a880; border-bottom: 1px solid rgba(197,168,128,0.25); padding-bottom: 15px; margin: 0; text-transform: uppercase; letter-spacing: 0.15em;">
            CINEFONÍA Nights
          </h2>
          <p style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: #a1a1aa; margin: 8px 0 0 0;">
            Nuevo Mensaje de Contacto
          </p>
        </div>
        
        <p style="font-size: 14px; line-height: 1.6; color: #d1d5db; margin-bottom: 25px;">
          Se ha recibido un nuevo mensaje a través del formulario de contacto general:
        </p>
        
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 25px;">
          <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
            <td style="padding: 10px 0; font-weight: bold; color: #c5a880; font-size: 13px; text-transform: uppercase; width: 150px;">Nombre:</td>
            <td style="padding: 10px 0; color: #ffffff; font-size: 14px;">${name}</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
            <td style="padding: 10px 0; font-weight: bold; color: #c5a880; font-size: 13px; text-transform: uppercase;">Email:</td>
            <td style="padding: 10px 0; color: #ffffff; font-size: 14px;">
              <a href="mailto:${email}" style="color: #c37d53; text-decoration: none;">${email}</a>
            </td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
            <td style="padding: 10px 0; font-weight: bold; color: #c5a880; font-size: 13px; text-transform: uppercase;">Asunto:</td>
            <td style="padding: 10px 0; color: #ffffff; font-size: 14px; font-weight: bold;">${subject}</td>
          </tr>
        </table>
        
        <div style="padding: 20px; background-color: #0b1329; border-left: 3px solid #c37d53; margin-top: 15px;">
          <p style="margin: 0 0 10px 0; font-weight: bold; color: #c5a880; font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em;">
            Mensaje:
          </p>
          <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #e4e4e7; white-space: pre-line;">
            ${message}
          </p>
        </div>
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid rgba(197,168,128,0.15); text-align: center;">
          <p style="font-size: 11px; color: #71717a; margin: 0;">
            Este correo electrónico se generó automáticamente a partir del portal oficial de CINEFONÍA Nights.
          </p>
        </div>
      </div>
    `;

    const response = await resend.emails.send({
      from: "Cinefonia Nights <onboarding@resend.dev>",
      to: contactEmail,
      subject: `Contacto: ${subject} - ${name}`,
      html: htmlContent,
      replyTo: email,
    });

    if (response.error) {
      console.error("Error en API de Resend:", response.error);
      return {
        success: false,
        error: `Error al enviar correo: ${response.error.message}`,
      };
    }

    return {
      success: true,
    };

  } catch (error) {
    console.error("Excepción en sendContactEmail:", error);
    const errorMessage = error instanceof Error ? error.message : "Ocurrió un error inesperado al procesar tu solicitud.";
    return {
      success: false,
      error: errorMessage,
    };
  }
}
