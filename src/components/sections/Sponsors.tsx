"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { sponsorSchema, type SponsorFormData } from "@/schemas/forms";
import { Send, CheckCircle2 } from "lucide-react";
import patrocinadoresData from "@/data/patrocinadores.json";

export default function Sponsors() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
    await new Promise((resolve) => setTimeout(resolve, 1200));
    console.log("Formulario de alianza enviado:", data);
    setIsLoading(false);
    setIsSubmitted(true);
    reset();
  };

  const sponsorLogos = patrocinadoresData.sponsorsList || [];

  return (
    <section className="py-20 bg-[#F7F5F0] text-[#111827] relative border-t border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-xs font-bold tracking-[0.3em] uppercase text-[#374151] mb-2">
            PATROCINADORES Y ALIADOS ESTRATÉGICOS
          </h2>
          <div className="flex items-center justify-center space-x-3 my-4">
            <div className="w-8 h-[1px] bg-[#9CA3AF]" />
            <span className="text-[#9CA3AF] text-xs font-serif">✦</span>
            <div className="w-8 h-[1px] bg-[#9CA3AF]" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Logos grid of actual sponsors in full color ALWAYS */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full">
            <div>
              <p className="text-xs text-[#6B7280] font-light mb-6 uppercase tracking-wider font-sans">
                INSTITUCIONES Y EMPRESAS QUE HACEN POSIBLE CINEFONÍA NIGHTS
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                {sponsorLogos.map((sponsor, idx) => (
                  <motion.div
                    key={sponsor.id || idx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="bg-white border border-[#E5E7EB] p-5 flex flex-col items-center justify-between text-center aspect-[4/3] shadow-sm hover:border-[#ad6e4f] transition-all group overflow-hidden"
                  >
                    <div className="relative w-full h-16 sm:h-20 my-auto flex items-center justify-center">
                      <Image
                        src={sponsor.logo}
                        alt={sponsor.name}
                        fill
                        sizes="200px"
                        className="object-contain p-1 opacity-100"
                      />
                    </div>
                    <div className="pt-2 border-t border-[#F3F4F6] w-full">
                      <span className="font-serif text-[11px] font-bold uppercase tracking-wider text-[#111827] block line-clamp-1">
                        {sponsor.name}
                      </span>
                      <span className="text-[8px] text-[#ad6e4f] font-semibold tracking-widest uppercase block mt-0.5">
                        {sponsor.tag}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mt-4 text-center lg:text-left">
              <Link
                href="/patrocinadores"
                className="inline-flex items-center px-6 py-2.5 border border-[#374151] text-xs font-semibold tracking-[0.2em] text-[#374151] uppercase hover:bg-[#374151] hover:text-white transition-colors"
              >
                VER DOSSIER DE PATROCINIO &rarr;
              </Link>
            </div>
          </div>

          {/* Right Column: Dark Navy Form Card matching PDF page 1 */}
          <div className="lg:col-span-6">
            <div className="bg-[#121E36] text-white p-8 sm:p-10 border border-brand-gold/30 shadow-2xl">
              <h3 className="font-serif text-sm sm:text-base font-bold tracking-[0.2em] uppercase text-white mb-1">
                CONSTRUYAMOS ALGO EXTRAORDINARIO
              </h3>
              <p className="text-xs text-gray-400 font-light mb-8">
                Llevemos juntos la música de cine a más personas.
              </p>

              {isSubmitted ? (
                <div className="py-8 text-center">
                  <CheckCircle2 className="h-12 w-12 text-brand-gold mx-auto mb-4" />
                  <h4 className="font-serif text-lg text-white mb-2">¡Solicitud Enviada!</h4>
                  <p className="text-xs text-gray-400 mb-6">Nos pondremos en contacto con tu empresa en breve.</p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-xs uppercase font-bold text-brand-gold border-b border-brand-gold pb-1"
                  >
                    Enviar otra consulta
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-xs">
                  <div>
                    <input
                      type="text"
                      {...register("companyName")}
                      placeholder="Nombre de la empresa"
                      className="w-full bg-[#0A1326] border border-brand-gold/20 focus:border-brand-gold px-4 py-3 text-white placeholder-gray-500 focus:outline-none transition-colors"
                    />
                    {errors.companyName && (
                      <p className="text-[10px] text-red-400 mt-1">{errors.companyName.message}</p>
                    )}
                  </div>

                  <div>
                    <input
                      type="text"
                      {...register("contactName")}
                      placeholder="Nombre de contacto"
                      className="w-full bg-[#0A1326] border border-brand-gold/20 focus:border-brand-gold px-4 py-3 text-white placeholder-gray-500 focus:outline-none transition-colors"
                    />
                    {errors.contactName && (
                      <p className="text-[10px] text-red-400 mt-1">{errors.contactName.message}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="email"
                        {...register("email")}
                        placeholder="Correo electrónico"
                        className="w-full bg-[#0A1326] border border-brand-gold/20 focus:border-brand-gold px-4 py-3 text-white placeholder-gray-500 focus:outline-none transition-colors"
                      />
                      {errors.email && (
                        <p className="text-[10px] text-red-400 mt-1">{errors.email.message}</p>
                      )}
                    </div>
                    <div>
                      <input
                        type="text"
                        {...register("phone")}
                        placeholder="Teléfono"
                        className="w-full bg-[#0A1326] border border-brand-gold/20 focus:border-brand-gold px-4 py-3 text-white placeholder-gray-500 focus:outline-none transition-colors"
                      />
                      {errors.phone && (
                        <p className="text-[10px] text-red-400 mt-1">{errors.phone.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <textarea
                      rows={3}
                      {...register("proposal")}
                      placeholder="Mensaje"
                      className="w-full bg-[#0A1326] border border-brand-gold/20 focus:border-brand-gold px-4 py-3 text-white placeholder-gray-500 focus:outline-none transition-colors resize-none"
                    />
                    {errors.proposal && (
                      <p className="text-[10px] text-red-400 mt-1">{errors.proposal.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-[#ad6e4f] hover:bg-[#8b4e2b] text-white font-bold tracking-[0.2em] uppercase py-3.5 px-6 transition-colors flex items-center justify-center space-x-2"
                  >
                    <span>{isLoading ? "PROCESANDO..." : "SOLICITAR ALIANZA"}</span>
                    {!isLoading && <Send className="h-3.5 w-3.5" />}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
