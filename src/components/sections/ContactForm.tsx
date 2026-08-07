"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactFormData } from "@/schemas/forms";
import { submitContactToSheet } from "@/app/actions/submit-contact-to-sheet";
import { Send, CheckCircle2, Mail, User, BookOpen } from "lucide-react";

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsLoading(true);
    setSubmitError(null);
    try {
      const response = await submitContactToSheet(data);
      if (response.success) {
        setIsSubmitted(true);
        reset();
      } else {
        setSubmitError(response.error || "Ocurrió un error inesperado al enviar el mensaje.");
      }
    } catch (err) {
      console.error("Error en envío de contacto:", err);
      setSubmitError("No se pudo conectar con el servidor de base de datos. Intente más tarde.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-[#0B1329] text-white p-8 sm:p-10 border border-[#ad6e4f]/25 shadow-2xl relative overflow-hidden group">
      {/* Decorative inner border */}
      <div className="absolute inset-2 border border-brand-gold/10 pointer-events-none z-0 group-hover:border-brand-gold/20 transition-colors duration-500" />
      
      <div className="relative z-10 font-sans">
        <h3 className="font-serif text-sm sm:text-base font-bold tracking-[0.2em] uppercase text-white mb-2">
          ENVÍANOS UN MENSAJE
        </h3>
        <p className="text-xs text-gray-400 font-light mb-8">
          ¿Tienes alguna consulta artística, técnica o corporativa? Escríbenos directamente.
        </p>

        {isSubmitted ? (
          <div className="py-12 text-center">
            <CheckCircle2 className="h-16 w-16 text-brand-gold mx-auto mb-4 animate-bounce" />
            <h4 className="font-serif text-xl text-white mb-2">¡Mensaje Enviado con Éxito!</h4>
            <p className="text-xs text-gray-400 mb-6">Hemos registrado tu consulta en nuestra base de datos. Te responderemos a la brevedad.</p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="text-xs uppercase font-bold text-brand-gold border-b border-brand-gold/50 hover:border-brand-gold pb-1 transition-all"
            >
              Enviar otro mensaje
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 text-xs">
            {/* Name Input */}
            <div className="relative">
              <span className="absolute left-4 top-3.5 text-gray-500 pointer-events-none">
                <User className="h-4 w-4" />
              </span>
              <input
                type="text"
                {...register("name")}
                placeholder="Nombre Completo"
                className="w-full bg-[#050914] border border-brand-gold/20 focus:border-brand-gold pl-12 pr-4 py-3 text-white placeholder-gray-600 focus:outline-none transition-colors rounded-none"
              />
              {errors.name && (
                <p className="text-[10px] text-red-400 mt-1">{errors.name.message}</p>
              )}
            </div>

            {/* Email Input */}
            <div className="relative">
              <span className="absolute left-4 top-3.5 text-gray-500 pointer-events-none">
                <Mail className="h-4 w-4" />
              </span>
              <input
                type="email"
                {...register("email")}
                placeholder="Correo Electrónico"
                className="w-full bg-[#050914] border border-brand-gold/20 focus:border-brand-gold pl-12 pr-4 py-3 text-white placeholder-gray-600 focus:outline-none transition-colors rounded-none"
              />
              {errors.email && (
                <p className="text-[10px] text-red-400 mt-1">{errors.email.message}</p>
              )}
            </div>

            {/* Subject Input */}
            <div className="relative">
              <span className="absolute left-4 top-3.5 text-gray-500 pointer-events-none">
                <BookOpen className="h-4 w-4" />
              </span>
              <input
                type="text"
                {...register("subject")}
                placeholder="Asunto o Motivo de Consulta"
                className="w-full bg-[#050914] border border-brand-gold/20 focus:border-brand-gold pl-12 pr-4 py-3 text-white placeholder-gray-600 focus:outline-none transition-colors rounded-none"
              />
              {errors.subject && (
                <p className="text-[10px] text-red-400 mt-1">{errors.subject.message}</p>
              )}
            </div>

            {/* Message Textarea */}
            <div>
              <textarea
                rows={5}
                {...register("message")}
                placeholder="Escribe tu mensaje o consulta detallada aquí..."
                className="w-full bg-[#050914] border border-brand-gold/20 focus:border-brand-gold px-4 py-3 text-white placeholder-gray-600 focus:outline-none transition-colors resize-none rounded-none"
              />
              {errors.message && (
                <p className="text-[10px] text-red-400 mt-1">{errors.message.message}</p>
              )}
            </div>

            {/* Error Message Panel */}
            {submitError && (
              <div className="p-4 border border-red-500/35 bg-red-500/5 text-red-400 text-xs font-semibold rounded-none">
                {submitError}
              </div>
            )}

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-brand-gold hover:bg-brand-gold-light disabled:bg-gray-700 text-brand-bg font-bold tracking-[0.2em] uppercase py-4 px-6 transition-all duration-300 shadow-gold-glow flex items-center justify-center space-x-2 cursor-pointer disabled:cursor-not-allowed"
              >
                <span>{isLoading ? "ENVIANDO..." : "ENVIAR CONSULTA"}</span>
                {!isLoading && <Send className="h-3.5 w-3.5" />}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
