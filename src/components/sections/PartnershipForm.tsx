"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Mail, Phone, Building, User, Award, Send, CheckCircle2 } from "lucide-react";
import { sponsorSchema, type SponsorFormData } from "@/schemas/forms";
import { sendSponsorshipEmail } from "@/app/actions/send-email";

export default function PartnershipForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SponsorFormData>({
    resolver: zodResolver(sponsorSchema),
    defaultValues: {
      companyName: "",
      contactName: "",
      email: "",
      phone: "",
      sponsorLevel: "Colaboración personalizada",
      proposal: "",
    },
  });

  const onSubmit = async (data: SponsorFormData) => {
    setIsLoading(true);
    setSubmitError(null);
    try {
      const response = await sendSponsorshipEmail(data);
      if (response.success) {
        setIsSubmitted(true);
        reset();
      } else {
        setSubmitError(response.error || "Ocurrió un error inesperado al procesar la solicitud.");
      }
    } catch (err) {
      console.error("Error en envío:", err);
      setSubmitError("No se pudo conectar con el servidor de correo. Intente más tarde.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-24 bg-[#FAF9F5] relative border-t border-brand-gold/15 overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-brand-gold/5 blur-[120px] pointer-events-none z-0" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-[0.25em] text-brand-gold uppercase block mb-3 font-sans">Únete al Concierto</span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold uppercase text-gray-800 tracking-wide">
            Construyamos Algo Extraordinario
          </h2>
          <p className="max-w-xl mx-auto text-sm text-gray-600 mt-4 font-light leading-relaxed">
            Sé parte de una noche mágica como patrocinador y posiciona tu marca ante un público exclusivo de 850 líderes de opinión y amantes del arte en Arequipa.
          </p>
          <div className="mt-4 w-16 h-[1.5px] bg-brand-gold mx-auto" />
        </div>

        {/* Form Container */}
        <div className="bg-white border border-[#8A1C36]/15 p-8 sm:p-12 relative shadow-md">
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12 flex flex-col items-center justify-center"
            >
              <CheckCircle2 className="h-16 w-16 text-brand-gold mb-6" />
              <h3 className="font-serif text-2xl font-semibold text-gray-800 mb-3">
                ¡Propuesta Recibida!
              </h3>
              <p className="text-gray-600 text-sm max-w-md leading-relaxed mb-8">
                Muchas gracias por tu interés en patrocinar CINEFONÍA Nights. Nuestro equipo de relaciones corporativas evaluará tu propuesta y se comunicará contigo en las próximas 48 horas.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="px-6 py-3 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white uppercase text-xs tracking-widest font-semibold transition-all duration-300 rounded-none cursor-pointer"
              >
                Enviar otro formulario
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Company Name */}
                <div>
                  <label htmlFor="companyName" className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2">
                    Empresa u Organización
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-gray-400">
                      <Building className="h-4 w-4" />
                    </span>
                    <input
                      type="text"
                      id="companyName"
                      {...register("companyName")}
                      placeholder="Ej. Corporación Del Sur S.A."
                      className="w-full bg-[#FAF9F5] border border-gray-200 focus:border-brand-gold focus:outline-none pl-10 pr-4 py-3 text-sm text-gray-800 placeholder-gray-400 transition-all rounded-none"
                    />
                  </div>
                  {errors.companyName && (
                    <p className="mt-1 text-xs text-red-500 font-medium">{errors.companyName.message}</p>
                  )}
                </div>

                {/* Contact Name */}
                <div>
                  <label htmlFor="contactName" className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2">
                    Nombre del Contacto
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-gray-400">
                      <User className="h-4 w-4" />
                    </span>
                    <input
                      type="text"
                      id="contactName"
                      {...register("contactName")}
                      placeholder="Ej. Carlos Mendoza"
                      className="w-full bg-[#FAF9F5] border border-gray-200 focus:border-brand-gold focus:outline-none pl-10 pr-4 py-3 text-sm text-gray-800 placeholder-gray-400 transition-all rounded-none"
                    />
                  </div>
                  {errors.contactName && (
                    <p className="mt-1 text-xs text-red-500 font-medium">{errors.contactName.message}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2">
                    Correo Electrónico Corporativo
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-gray-400">
                      <Mail className="h-4 w-4" />
                    </span>
                    <input
                      type="email"
                      id="email"
                      {...register("email")}
                      placeholder="carlos@empresa.com"
                      className="w-full bg-[#FAF9F5] border border-gray-200 focus:border-brand-gold focus:outline-none pl-10 pr-4 py-3 text-sm text-gray-800 placeholder-gray-400 transition-all rounded-none"
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-500 font-medium">{errors.email.message}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2">
                    Teléfono de Contacto
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-gray-400">
                      <Phone className="h-4 w-4" />
                    </span>
                    <input
                      type="text"
                      id="phone"
                      {...register("phone")}
                      placeholder="Ej. +51 987 654 321"
                      className="w-full bg-[#FAF9F5] border border-gray-200 focus:border-brand-gold focus:outline-none pl-10 pr-4 py-3 text-sm text-gray-800 placeholder-gray-400 transition-all rounded-none"
                    />
                  </div>
                  {errors.phone && (
                    <p className="mt-1 text-xs text-red-500 font-medium">{errors.phone.message}</p>
                  )}
                </div>
              </div>

              {/* Sponsor Level */}
              <div>
                <label htmlFor="sponsorLevel" className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2">
                  Nivel de Patrocinio de Interés
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-gray-400">
                    <Award className="h-4 w-4" />
                  </span>
                  <select
                    id="sponsorLevel"
                    {...register("sponsorLevel")}
                    className="w-full bg-[#FAF9F5] border border-gray-200 focus:border-brand-gold focus:outline-none pl-10 pr-4 py-3 text-sm text-gray-800 transition-all rounded-none appearance-none"
                    style={{ backgroundImage: "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='none'%3E%3Cpath d='M7 9l3 3 3-3' stroke='%23888' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\")", backgroundPosition: "right 0.75rem center", backgroundSize: "1.25rem", backgroundRepeat: "no-repeat" }}
                  >
                    <option value="Socio Principal" className="bg-white text-gray-805">Socio Principal</option>
                    <option value="Socio Estratégico" className="bg-white text-gray-805">Socio Estratégico</option>
                    <option value="Socio Cultural" className="bg-white text-gray-805">Socio Cultural</option>
                    <option value="Aliado Cultural" className="bg-white text-gray-805">Aliado Cultural</option>
                    <option value="Colaboración personalizada" className="bg-white text-gray-805">Colaboración personalizada</option>
                  </select>
                </div>
                {errors.sponsorLevel && (
                  <p className="mt-1 text-xs text-red-500 font-medium">{errors.sponsorLevel.message}</p>
                )}
              </div>

              {/* Proposal text */}
              <div>
                <label htmlFor="proposal" className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2">
                  Mensaje / Propuesta de Alianza
                </label>
                <textarea
                  id="proposal"
                  rows={5}
                  {...register("proposal")}
                  placeholder="Cuéntanos más sobre los objetivos de tu marca y cómo te gustaría colaborar con CINEFONÍA Nights..."
                  className="w-full bg-[#FAF9F5] border border-gray-200 focus:border-brand-gold focus:outline-none px-4 py-3 text-sm text-gray-800 placeholder-gray-400 transition-all rounded-none resize-none"
                />
                {errors.proposal && (
                  <p className="mt-1 text-xs text-red-500 font-medium">{errors.proposal.message}</p>
                )}
              </div>

              {/* Submit Error Message */}
              {submitError && (
                <div className="p-4 border border-red-500/35 bg-red-500/5 text-red-550 text-xs font-semibold rounded-none">
                  {submitError}
                </div>
              )}

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full inline-flex items-center justify-center px-8 py-4 bg-brand-gold hover:bg-[#8A1C36] hover:text-white disabled:bg-gray-400 text-white font-bold tracking-widest uppercase text-xs transition-all duration-300 shadow-sm cursor-pointer disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <span>Enviando...</span>
                  ) : (
                    <>
                      <span>Enviar Propuesta</span>
                      <Send className="h-4 w-4 ml-2" />
                    </>
                  )}
                </button>
              </div>

            </form>
          )}
        </div>
      </div>
    </section>
  );
}
