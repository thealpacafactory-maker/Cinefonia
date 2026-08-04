"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Mail, User, BookOpen, Send, CheckCircle2, ArrowLeft, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { contactSchema, type ContactFormData } from "@/schemas/forms";
import DevBadge from "@/components/ui/DevBadge";

export default function ContactoPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
    // Simulación de envío (será implementado en el backend en el Hito 3/4)
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Datos de contacto enviados:", data);
    setIsLoading(false);
    setIsSubmitted(true);
    reset();
  };

  return (
    <div className="min-h-screen py-16 bg-brand-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-brand-gold hover:text-brand-gold-light transition-colors">
            <ArrowLeft className="h-4 w-4" />
            <span>Volver al Inicio</span>
          </Link>
        </div>

        {/* Section Title */}
        <div className="text-center mb-12">
          <span className="text-xs font-semibold tracking-[0.25em] text-brand-gold uppercase block mb-3">Ponte en Contacto</span>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold uppercase text-white tracking-wide">
            Contacto
          </h1>
          <p className="max-w-xl mx-auto text-sm text-gray-400 mt-4 font-light leading-relaxed">
            ¿Tienes alguna consulta sobre la compra de entradas, el aforo, la accesibilidad o la prensa? Escríbenos directamente.
          </p>
          <div className="mt-4 w-16 h-[1.5px] bg-brand-gold mx-auto" />
        </div>

        {/* Dev Warning Badge */}
        <DevBadge message="Nota de Desarrollo: Los correos de respuesta se simulan en consola durante esta fase de integración frontend." />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12 items-start">
          {/* Left Column: Direct Info */}
          <div className="space-y-8 lg:col-span-1">
            <div className="bg-brand-card/30 border border-brand-gold/10 p-8 space-y-6">
              <h2 className="font-serif text-xl text-white font-bold tracking-wide uppercase border-b border-brand-gold/10 pb-4">
                Información Oficial
              </h2>

              <div className="space-y-4">
                <div className="flex items-start space-x-3.5 text-sm text-gray-400">
                  <MapPin className="h-5 w-5 text-brand-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-200">Teatro Municipal de Arequipa</p>
                    <p className="text-xs leading-relaxed">Calle Mercaderes 239, Cercado de Arequipa, Perú</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3.5 text-sm text-gray-400">
                  <Mail className="h-5 w-5 text-brand-gold flex-shrink-0" />
                  <span>contacto@cinefonia-nights.pe</span>
                </div>

                <div className="flex items-center space-x-3.5 text-sm text-gray-400">
                  <Phone className="h-5 w-5 text-brand-gold flex-shrink-0" />
                  <span>+51 987 654 321</span>
                </div>
              </div>

              <div className="pt-4 border-t border-brand-gold/10 text-xs text-gray-500 space-y-2">
                <p><strong>Horario de Atención:</strong></p>
                <p>Lunes a Viernes: 9:00 - 18:00 hrs</p>
                <p>Sábados: 9:00 - 13:00 hrs</p>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-2">
            <div className="glass-panel p-8 sm:p-12 relative shadow-copper-glow">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 flex flex-col items-center justify-center"
                >
                  <CheckCircle2 className="h-16 w-16 text-brand-gold mb-6" />
                  <h3 className="font-serif text-2xl font-semibold text-white mb-3">
                    ¡Mensaje Enviado!
                  </h3>
                  <p className="text-gray-400 text-sm max-w-md leading-relaxed mb-8">
                    Tu consulta ha sido registrada exitosamente. Un representante del área correspondiente responderá a tu correo electrónico en un lapso no mayor a 24 horas.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-3 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-bg uppercase text-xs tracking-widest font-semibold transition-all duration-300 rounded-none"
                  >
                    Enviar otro mensaje
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2">
                        Nombre Completo
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-gray-500">
                          <User className="h-4 w-4" />
                        </span>
                        <input
                          type="text"
                          id="name"
                          {...register("name")}
                          placeholder="Ej. Carlos Mendoza"
                          className="w-full bg-brand-bg/40 border border-brand-gold/15 focus:border-brand-gold focus:outline-none pl-10 pr-4 py-3 text-sm text-white placeholder-gray-600 transition-all rounded-none"
                        />
                      </div>
                      {errors.name && (
                        <p className="mt-1 text-xs text-brand-copper font-medium">{errors.name.message}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2">
                        Correo Electrónico
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-gray-500">
                          <Mail className="h-4 w-4" />
                        </span>
                        <input
                          type="email"
                          id="email"
                          {...register("email")}
                          placeholder="carlos@correo.com"
                          className="w-full bg-brand-bg/40 border border-brand-gold/15 focus:border-brand-gold focus:outline-none pl-10 pr-4 py-3 text-sm text-white placeholder-gray-600 transition-all rounded-none"
                        />
                      </div>
                      {errors.email && (
                        <p className="mt-1 text-xs text-brand-copper font-medium">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2">
                      Asunto
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-gray-500">
                        <BookOpen className="h-4 w-4" />
                      </span>
                      <input
                        type="text"
                        id="subject"
                        {...register("subject")}
                        placeholder="Ej. Duda sobre aforo VIP o Prensa"
                        className="w-full bg-brand-bg/40 border border-brand-gold/15 focus:border-brand-gold focus:outline-none pl-10 pr-4 py-3 text-sm text-white placeholder-gray-600 transition-all rounded-none"
                      />
                    </div>
                    {errors.subject && (
                      <p className="mt-1 text-xs text-brand-copper font-medium">{errors.subject.message}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2">
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      {...register("message")}
                      placeholder="Escribe tu mensaje aquí..."
                      className="w-full bg-brand-bg/40 border border-brand-gold/15 focus:border-brand-gold focus:outline-none px-4 py-3 text-sm text-white placeholder-gray-600 transition-all rounded-none resize-none"
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-brand-copper font-medium">{errors.message.message}</p>
                    )}
                  </div>

                  {/* Submit */}
                  <div>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full inline-flex items-center justify-center px-8 py-4 bg-brand-gold hover:bg-brand-gold-light disabled:bg-gray-700 text-brand-bg font-bold tracking-widest uppercase text-xs transition-all duration-300 shadow-gold-glow cursor-pointer disabled:cursor-not-allowed"
                    >
                      {isLoading ? (
                        <span>Enviando...</span>
                      ) : (
                        <>
                          <span>Enviar Mensaje</span>
                          <Send className="h-4 w-4 ml-2" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
