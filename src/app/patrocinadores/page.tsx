"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, Check, Crown, Award } from "lucide-react";
import Link from "next/link";
import patrocinadoresData from "@/data/patrocinadores.json";

export default function PatrocinadoresPage() {
  const tiers = patrocinadoresData.tiers || [];
  const palcoFeatures = patrocinadoresData.palcoVipFeatures || [];
  const sponsors = patrocinadoresData.sponsorsList || [];

  return (
    <div className="min-h-screen py-16 bg-[#070D1D] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-8 pt-10">
          <Link href="/" className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-widest text-brand-gold hover:text-brand-gold-light transition-colors">
            <ArrowLeft className="h-4 w-4" />
            <span>Volver al Inicio</span>
          </Link>
        </div>

        {/* Header Title */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.3em] text-brand-gold uppercase block mb-3"></span>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal uppercase text-white tracking-wider">
            Alianzas Culturales
          </h1>
          <div className="flex items-center justify-center space-x-3 my-4">
            <div className="w-12 h-[1px] bg-brand-gold/30" />
            <span className="text-brand-gold text-xs font-serif">✦</span>
            <div className="w-12 h-[1px] bg-brand-gold/30" />
          </div>
          <p className="max-w-2xl mx-auto text-sm text-gray-400 font-light leading-relaxed">
            No todas las marcas necesitan la misma presencia. Cinco niveles de participación para integrar su marca a una experiencia cultural memorable.
          </p>
        </div>

        {/* Official Sponsors Showcase Section */}
        <div className="mb-20 bg-[#0B1329] border border-brand-gold/30 p-8 sm:p-12 shadow-2xl">
          <div className="text-center mb-10">
            <span className="text-[10px] font-bold tracking-[0.25em] text-brand-gold uppercase block mb-2 flex items-center justify-center">
              <Award className="h-4 w-4 mr-2" /> NUESTROS ALIANZAS Y PATROCINADORES ACTUALES
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-white">
              Marcas e Instituciones Comprometidas con la Cultura
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sponsors.map((sponsor, idx) => (
              <motion.div
                key={sponsor.id || idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-[#050914] border border-brand-gold/20 p-6 flex flex-col items-center justify-between text-center rounded-none group hover:border-brand-gold transition-colors"
              >
                <div className="relative w-full h-24 mb-4 flex items-center justify-center bg-white/5 p-4 border border-white/5">
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    fill
                    sizes="240px"
                    className="object-contain p-2 filter brightness-105 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-sm font-bold text-white uppercase mb-1">
                    {sponsor.name}
                  </h3>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-brand-gold">
                    {sponsor.tag}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 5 Tiers Matrix Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {tiers.map((tier) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`bg-[#0B1329] border p-6 flex flex-col justify-between relative ${
                tier.recommended ? "border-brand-gold shadow-gold-glow" : "border-brand-gold/20"
              }`}
            >
              {tier.recommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-gold text-brand-bg text-[9px] font-bold uppercase tracking-widest px-3 py-1">
                  RECOMENDADO
                </div>
              )}

              <div>
                <h3 className="font-serif text-base font-bold text-white mb-2 text-center">
                  {tier.name}
                </h3>
                <div className="text-center my-4 py-2 border-y border-brand-gold/15">
                  <span className="font-serif text-xl font-bold text-brand-gold block">{tier.price}</span>
                </div>
                <p className="text-[11px] text-gray-400 leading-relaxed font-light mb-6">
                  {tier.description}
                </p>

                <ul className="space-y-2 text-[11px] text-gray-300 border-t border-brand-gold/10 pt-4">
                  <li className="flex justify-between">
                    <span className="text-gray-400">Invitaciones:</span>
                    <span className="font-semibold text-white">{tier.totalInvitations}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-400">Accesos Palco VIP:</span>
                    <span className="font-semibold text-white">{tier.palcoAccess}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-400">Exclusividad:</span>
                    <span className="font-semibold text-white">{tier.exclusivity}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-400">Hospitality:</span>
                    <span className="font-semibold text-white">{tier.hospitality}</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-brand-gold/10">
                <Link
                  href="/quiero-auspiciar"
                  className="w-full text-center block py-2.5 border border-brand-gold/50 text-[10px] font-bold tracking-widest uppercase text-brand-gold hover:bg-brand-gold hover:text-brand-bg transition-colors"
                >
                  SOLICITAR
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Palco VIP / Palco Cinefonía Section */}
        <div className="bg-[#0B1329] border border-brand-gold/30 p-8 sm:p-12 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[10px] font-bold tracking-[0.25em] text-brand-gold uppercase block mb-2">HOSPITALIDAD Y VALOR</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-normal text-white mb-4">
                El mejor lugar del evento no es solo una butaca.
              </h2>
              <h3 className="font-serif italic text-base text-brand-gold mb-6">
                PALCO CINEFONÍA / PALCO VIP
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed mb-6">
                Un espacio de hospitalidad cultural concebido para sponsors, clientes, directivos, instituciones y aliados seleccionados.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-200">
                {palcoFeatures.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-brand-gold flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#050914] p-8 border border-brand-gold/20 text-center">
              <Crown className="h-12 w-12 text-brand-gold mx-auto mb-4 stroke-[1]" />
              <h4 className="font-serif text-lg font-bold text-white mb-2 uppercase">EXPERIENCIA EXCLUSIVA</h4>
              <p className="text-xs text-gray-400 font-light leading-relaxed mb-6">
                &ldquo;La empresa no solo entrega entradas. Invita a sus relaciones estratégicas a compartir una experiencia con contenido.&rdquo;
              </p>
              <Link
                href="/quiero-auspiciar"
                className="inline-block px-8 py-3 bg-[#B87A4B] text-white text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#a3683a] transition-colors"
              >
                RESERVAR ALIANZA
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
