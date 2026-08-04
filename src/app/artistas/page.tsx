"use client";

import React from "react";
import { motion } from "framer-motion";
import { User, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import artistasData from "@/data/artistas.json";

export default function ArtistasPage() {
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
          <span className="text-xs font-bold tracking-[0.3em] text-brand-gold uppercase block mb-3">MEMORIA DESCRIPTIVA</span>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal uppercase text-white tracking-wider">
            Dirección y Elenco
          </h1>
          <div className="flex items-center justify-center space-x-3 my-4">
            <div className="w-12 h-[1px] bg-brand-gold/30" />
            <span className="text-brand-gold text-xs font-serif">✦</span>
            <div className="w-12 h-[1px] bg-brand-gold/30" />
          </div>
          <p className="max-w-xl mx-auto text-sm text-gray-400 font-light leading-relaxed">
            Seis instrumentistas. Una narración. Una sola experiencia.
          </p>
        </div>

        {/* Carta de la Dirección Artística from Memoria Descriptiva page 3 */}
        <div className="bg-[#0B1329] border border-brand-gold/30 p-8 sm:p-12 mb-16 relative">
          <span className="text-[10px] font-bold tracking-[0.25em] text-brand-gold uppercase block mb-2">MENSAJE EDITORIAL</span>
          <h2 className="font-serif text-xl sm:text-3xl font-normal text-white mb-6">
            Carta de la Dirección Artística
          </h2>
          <div className="space-y-4 text-xs sm:text-sm text-gray-300 font-light leading-relaxed italic border-l-2 border-brand-gold/40 pl-6 my-6">
            <p>
              &ldquo;CINEFONÍA NIGHTS nace de una inquietud que fui construyendo a lo largo de varios años de trabajo como pianista: la certeza de que el repertorio de cámara, pese a su riqueza, no siempre logra tender un puente emocional inmediato con públicos ajenos a la formación clásica. Descubrí, en cambio, que las bandas sonoras de cine despiertan de manera casi inmediata recuerdos y emociones compartidas.&rdquo;
            </p>
            <p>
              &ldquo;De esa observación surgió la idea de utilizar la música cinematográfica no como un fin en sí mismo, sino como una puerta de entrada a la escucha activa. Más íntimo. Más cercano. Más camerístico.&rdquo;
            </p>
            <p>
              &ldquo;Elegí Arequipa como ciudad de estreno por ser mi ciudad natal y por el deseo de aportar a su programación cultural una propuesta artística distinta, construida junto a músicos profesionales de la ciudad.&rdquo;
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-brand-gold/15 flex items-center justify-between text-xs">
            <span className="font-serif font-bold text-white tracking-widest">María Lucía Roca Gamarra</span>
            <span className="text-brand-gold uppercase tracking-wider text-[11px]">DIRECCIÓN ARTÍSTICA</span>
          </div>
        </div>

        {/* Artists List */}
        <div className="space-y-12">
          {artistasData.map((artist, idx) => (
            <motion.div
              key={artist.slug}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#0B1329] border border-brand-gold/20 p-6 sm:p-8 flex flex-col md:flex-row gap-8 items-start hover:border-brand-gold/40 transition-colors group"
            >
              {/* Photo Box */}
              <div className="w-full md:w-48 aspect-[4/5] bg-[#050914] border border-brand-gold/15 flex items-center justify-center flex-shrink-0 relative overflow-hidden">
                {artist.image ? (
                  <Image
                    src={artist.image}
                    alt={artist.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 200px"
                    style={{ objectFit: "cover" }}
                    className="grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
                  />
                ) : (
                  <User className="h-20 w-20 text-gray-600 stroke-[0.8]" />
                )}
                <span className="absolute bottom-3 left-3 bg-[#070D1D] px-2 py-1 text-[9px] font-bold text-brand-gold uppercase tracking-widest border border-brand-gold/20 z-10">
                  {artist.instrument}
                </span>
              </div>

              {/* Bio & Trajectory */}
              <div className="flex-1 space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-gold block">
                  {artist.role}
                </span>
                <h3 className="font-serif text-2xl font-semibold text-white tracking-wide">
                  {artist.name}
                </h3>
                <p className="text-xs text-gray-300 font-light leading-relaxed">
                  {artist.bio}
                </p>
                <div className="pt-3 border-t border-brand-gold/10">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-1">
                    Trayectoria Académica y Profesional:
                  </span>
                  <p className="text-xs text-gray-400 font-light leading-relaxed">
                    {artist.trajectory}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
