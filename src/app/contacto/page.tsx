"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactFormData } from "@/schemas/forms";
import { ArrowLeft, Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { sendContactEmail } from "@/app/actions/send-email";

export default function ContactoPage() {
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
      const response = await sendContactEmail(data);
      if (response.success) {
        setIsSubmitted(true);
        reset();
      } else {
        setSubmitError(response.error || "Ocurrió un error inesperado al enviar el mensaje.");
      }
    } catch (err) {
      console.error("Error en envío:", err);
      setSubmitError("No se pudo conectar con el servidor de correo. Intente más tarde.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen py-16 bg-[#070D1D] text-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-8 pt-10">
          <Link href="/" className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-widest text-brand-gold hover:text-brand-gold-light transition-colors">
            <ArrowLeft className="h-4 w-4" />
            <span>Volver al Inicio</span>
          </Link>
        </div>

        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.3em] text-brand-gold uppercase block mb-3">INFORMACIÓN Y COMUNICACIÓN</span>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal uppercase text-white tracking-wider">
            Datos de Contacto
          </h1>
          <div className="flex items-center justify-center space-x-3 my-4">
            <div className="w-12 h-[1px] bg-brand-gold/30" />
            <span className="text-brand-gold text-xs font-serif">✦</span>
            <div className="w-12 h-[1px] bg-brand-gold/30" />
          </div>
          <p className="max-w-xl mx-auto text-sm text-gray-400 font-light leading-relaxed">
            Canales directos de consulta con el equipo de producción, dirección artística y prensa.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Leadership Contact Details */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="bg-[#0B1329] border border-brand-gold/20 p-8 space-y-6">
              <h3 className="font-serif text-xs font-bold tracking-[0.25em] text-brand-gold uppercase border-b border-brand-gold/15 pb-3">
                DIRECCIÓN ARTÍSTICA
              </h3>
              <div>
                <p className="font-serif text-lg font-bold text-white">María Lucía Roca Gamarra</p>
                <p className="text-xs text-gray-400 font-light mt-1">Dirección Artística · Piano</p>
              </div>

              <h3 className="font-serif text-xs font-bold tracking-[0.25em] text-brand-gold uppercase border-b border-brand-gold/15 pb-3 pt-4">
                DIRECCIÓN MUSICAL
              </h3>
              <div>
                <p className="font-serif text-lg font-bold text-white">Julián Enríquez</p>
                <p className="text-xs text-gray-400 font-light mt-1">Dirección Musical · Flauta · Adaptación de Arreglos</p>
              </div>
            </div>

            <div className="bg-[#0B1329] border border-brand-gold/20 p-8 space-y-4 text-xs text-gray-300">
              <h3 className="font-serif font-bold tracking-[0.25em] text-white uppercase mb-4">
                UBICACIÓN Y ATENCIÓN
              </h3>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-brand-gold flex-shrink-0 mt-0.5" />
                <span>Teatro Municipal de Arequipa (Calle Mercaderes 239, Arequipa, Perú)</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-brand-gold flex-shrink-0" />
                <a href="mailto:hola@cinefoniashow.com" className="hover:text-brand-gold transition-colors">
                  hola@cinefoniashow.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-brand-gold flex-shrink-0" />
                <span>+51 987 654 321</span>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#0B1329] border border-brand-gold/20 p-8 sm:p-10">
              <h3 className="font-serif text-sm font-bold tracking-[0.2em] uppercase text-white mb-6">
                ENVÍANOS UN MENSAJE
              </h3>

              {isSubmitted ? (
                <div className="py-12 text-center">
                  <CheckCircle2 className="h-12 w-12 text-brand-gold mx-auto mb-4" />
                  <h4 className="font-serif text-lg text-white mb-2">¡Mensaje Recibido!</h4>
                  <p className="text-xs text-gray-400 mb-6">Gracias por contactarte con CINEFONÍA Nights. Te responderemos a la brevedad.</p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-xs uppercase font-bold text-brand-gold border-b border-brand-gold pb-1"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-xs">
                  <div>
                    <label className="block text-[10px] uppercase font-bold text-gray-400 mb-1">Nombre Completo</label>
                    <input
                      type="text"
                      {...register("name")}
                      placeholder="Tu nombre"
                      className="w-full bg-[#050914] border border-brand-gold/20 focus:border-brand-gold px-4 py-3 text-white placeholder-gray-500 focus:outline-none transition-colors"
                    />
                    {errors.name && <p className="text-[10px] text-red-400 mt-1">{errors.name.message}</p>}
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase font-bold text-gray-400 mb-1">Correo Electrónico</label>
                    <input
                      type="email"
                      {...register("email")}
                      placeholder="tu@correo.com"
                      className="w-full bg-[#050914] border border-brand-gold/20 focus:border-brand-gold px-4 py-3 text-white placeholder-gray-500 focus:outline-none transition-colors"
                    />
                    {errors.email && <p className="text-[10px] text-red-400 mt-1">{errors.email.message}</p>}
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase font-bold text-gray-400 mb-1">Asunto</label>
                    <input
                      type="text"
                      {...register("subject")}
                      placeholder="Motivo de consulta"
                      className="w-full bg-[#050914] border border-brand-gold/20 focus:border-brand-gold px-4 py-3 text-white placeholder-gray-500 focus:outline-none transition-colors"
                    />
                    {errors.subject && <p className="text-[10px] text-red-400 mt-1">{errors.subject.message}</p>}
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase font-bold text-gray-400 mb-1">Mensaje</label>
                    <textarea
                      rows={5}
                      {...register("message")}
                      placeholder="Escribe tu mensaje aquí..."
                      className="w-full bg-[#050914] border border-brand-gold/20 focus:border-brand-gold px-4 py-3 text-white placeholder-gray-500 focus:outline-none transition-colors resize-none"
                    />
                    {errors.message && <p className="text-[10px] text-red-400 mt-1">{errors.message.message}</p>}
                  </div>

                  {submitError && (
                    <div className="p-3 border border-red-500/30 bg-red-500/5 text-red-400 text-xs font-medium rounded-none">
                      {submitError}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-[#B87A4B] hover:bg-[#a3683a] text-white font-bold tracking-[0.2em] uppercase py-3.5 px-6 transition-colors flex items-center justify-center space-x-2"
                  >
                    <span>{isLoading ? "ENVIANDO..." : "ENVIAR MENSAJE"}</span>
                    {!isLoading && <Send className="h-3.5 w-3.5" />}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
