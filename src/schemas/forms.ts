import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(3, { message: "El nombre debe tener al menos 3 caracteres." })
    .max(100, { message: "El nombre no puede exceder los 100 caracteres." }),
  email: z
    .string()
    .email({ message: "Por favor, introduce un correo electrónico válido." }),
  subject: z
    .string()
    .min(5, { message: "El asunto debe tener al menos 5 caracteres." })
    .max(150, { message: "El asunto no puede exceder los 150 caracteres." }),
  message: z
    .string()
    .min(10, { message: "El mensaje debe tener al menos 10 caracteres." })
    .max(2000, { message: "El mensaje no puede exceder los 2000 caracteres." }),
});

export const sponsorSchema = z.object({
  companyName: z
    .string()
    .min(2, { message: "El nombre de la empresa u organización es requerido." })
    .max(120, { message: "El nombre de la empresa no puede exceder los 120 caracteres." }),
  contactName: z
    .string()
    .min(3, { message: "El nombre del contacto es requerido (mínimo 3 caracteres)." })
    .max(100, { message: "El nombre del contacto no puede exceder los 100 caracteres." }),
  email: z
    .string()
    .email({ message: "Por favor, introduce un correo electrónico de contacto válido." }),
  phone: z
    .string()
    .min(6, { message: "El teléfono debe tener al menos 6 dígitos." })
    .max(20, { message: "El teléfono no puede exceder los 20 caracteres." }),
  sponsorLevel: z.enum([
    "Socio Principal",
    "Socio Estratégico",
    "Socio Cultural",
    "Aliado Cultural",
    "Colaboración personalizada",
  ], {
    error: "Por favor, selecciona un nivel de patrocinio válido.",
  }),
  proposal: z
    .string()
    .min(10, { message: "Por favor, detalla tu propuesta o interés en la alianza (mínimo 10 caracteres)." })
    .max(2000, { message: "La propuesta no puede exceder los 2000 caracteres." }),
});

export type ContactFormData = z.infer<typeof contactSchema>;
export type SponsorFormData = z.infer<typeof sponsorSchema>;
