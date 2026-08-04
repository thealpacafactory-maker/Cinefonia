"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Building, Sparkles } from "lucide-react";
import CountdownTimer from "@/components/ui/CountdownTimer";

export default function Hero() {
  const mainEventIsoDate = "2026-08-22T19:30:00-05:00";

  return (
    <section className="relative min-h-screen w-full bg-brand-bg overflow-hidden flex items-center">
      
      {/* 2. Capa de Imágenes de Fondo (Efecto Difuminado) */}
      
      {/* Imagen Izquierda (Plaza/Catedral de Arequipa) */}
      <div 
        className="absolute inset-y-0 left-0 w-full md:w-1/2 z-0 opacity-40 md:opacity-50"
        style={{
          maskImage: "linear-gradient(to right, black 20%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, black 20%, transparent 100%)",
        }}
      >
        <Image
          src="/images/hero/catedral-aqp.jpeg"
          alt="Catedral de Arequipa"
          fill
          priority={true}
          style={{ objectFit: "cover", objectPosition: "50% center" }}
        />
      </div>

      {/* Imagen Derecha (Músicos de Cámara) */}
      <div 
        className="absolute inset-y-0 right-0 w-full md:w-2/3 z-0 opacity-40 md:opacity-55"
        style={{
          maskImage: "linear-gradient(to left, black 40%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to left, black 40%, transparent 100%)",
        }}
      >
        <Image
          src="/images/hero/recital.jpg"
          alt="Ensamble de Cámara CINEFONÍA"
          fill
          priority={true}
          style={{ objectFit: "cover", objectPosition: "right center" }}
        />
      </div>

      {/* Oscurecimiento central y general para contraste */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/65 to-brand-bg/30 z-5 pointer-events-none" />

      {/* 3. Capa de Contenido Principal (Texto y Botones - Z-index superior) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20 flex flex-col justify-center min-h-screen">
        <div className="max-w-2xl text-left">
          
          {/* Tagline / Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center space-x-2 px-3 py-1 border border-brand-gold/20 bg-brand-bg/85 backdrop-blur-sm text-[10px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold mb-6 shadow-gold-glow"
          >
            <Sparkles className="h-3 w-3 text-brand-gold animate-pulse" />
            <span>Gran Estreno</span>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-xs sm:text-sm font-semibold tracking-[0.35em] text-brand-gold uppercase mb-3 font-sans"
          >
            LA MÚSICA DEL CINE, VIVIDA EN ESCENA
          </motion.p>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="font-serif text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6 uppercase leading-none text-glow-gold"
          >
            CINEFONÍA <br className="hidden sm:inline" />
            <span className="text-gradient-gold">Nights</span>
          </motion.h1>

          {/* Metadata: Grid interno horizontal */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-row flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-300 font-medium uppercase tracking-widest border-y border-brand-gold/10 py-4 mb-6 bg-brand-bg/40 backdrop-blur-sm max-w-xl"
          >
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4 text-brand-gold flex-shrink-0" />
              <span>22 de agosto de 2026</span>
            </div>
            
            {/* Separador rombo */}
            <span className="text-brand-gold font-bold text-xs">◆</span>
            
            <div className="flex items-center space-x-2">
              <Building className="h-4 w-4 text-brand-gold flex-shrink-0" />
              <span>Teatro Municipal de Arequipa</span>
            </div>
          </motion.div>

          {/* Countdown Timer in Hero */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-8 bg-brand-card/60 border border-brand-gold/20 p-4 backdrop-blur-md max-w-xl shadow-gold-glow"
          >
            <span className="text-[10px] font-bold tracking-[0.25em] text-brand-gold uppercase block mb-3 font-sans">
              TIEMPO RESTANTE PARA EL ESTRENO
            </span>
            <div className="flex justify-start">
              <CountdownTimer targetDate={mainEventIsoDate} variant="dark" />
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.0, delay: 0.6 }}
            className="text-gray-400 text-sm sm:text-base font-light leading-relaxed mb-10 max-w-lg"
          >
            Un recital exclusivo de música de cámara y cine en vivo. 75 minutos sin intermedios, recorriendo las bandas sonoras más emotivas de la historia en un formato inmersivo y de alta fidelidad.
          </motion.p>

          {/* 4. Botones de Acción (CTAs - Jerarquía Visual) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-row flex-wrap gap-4 items-center"
          >
            {/* Botón 1 (Principal): Cobrizo con Joinnus */}
            <a
              href="https://joinnus.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-3 px-6 py-4 bg-brand-copper hover:bg-brand-copper-dark text-white font-bold tracking-widest uppercase text-[10px] sm:text-xs transition-all duration-300 shadow-copper-glow rounded-none group"
            >
              <span>ENTRADAS EN</span>
              <div className="relative w-16 h-4.5 overflow-hidden filter brightness-100 group-hover:brightness-110 transition-all">
                <Image
                  src="/images/brands/joinnus.svg"
                  alt="Joinnus Logo"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </a>

            {/* Botón 2 (Secundario): Gris translúcido */}
            <Link
              href="/eventos"
              className="inline-flex items-center justify-center px-6 py-4 bg-brand-card/85 hover:bg-brand-card border border-white/5 hover:border-brand-gold/25 text-white font-bold tracking-widest uppercase text-[10px] sm:text-xs transition-all duration-300 rounded-none"
            >
              VER RECITAL &rarr;
            </Link>

            {/* Botón 3 (Terciario): Contorno dorado y texto dorado */}
            <Link
              href="/quiero-auspiciar"
              className="inline-flex items-center justify-center px-6 py-4 border border-brand-gold hover:bg-brand-gold hover:text-brand-bg text-brand-gold font-bold tracking-widest uppercase text-[10px] sm:text-xs transition-all duration-300 rounded-none bg-transparent"
            >
              QUIERO AUSPICIAR
            </Link>
          </motion.div>

        </div>
      </div>

    </section>
  );
}
